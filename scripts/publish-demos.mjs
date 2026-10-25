// Salin screenshot demo UMKM ke public/demos/ (WebP) dan tulis src/data/demos.json.
// Sumber daftar demo: _studio/DEMOS.md; fitur diambil dari bagian "Video tur fitur" di docs/DEMO_SCRIPT.md.
// Jalankan ulang kapan saja, hasilnya selalu ditulis ulang.
//   node scripts/publish-demos.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const STUDIO = "/Users/frieskaangelia/freelance/2026";
const web = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_IMG = join(web, "public/demos");
const OUT_JSON = join(web, "src/data/demos.json");
const SHOWN = new Set(["existing", "ready", "recorded", "posted"]);
const MAX = { desktop: 8, flow: 10, mobile: 3, android: 10, frames: 12 };
const MIN_SHOTS = 10; // kurang dari ini -> tambah frame dari rekaman video tur fitur

const rows = readFileSync(join(STUDIO, "_studio/DEMOS.md"), "utf8")
  .split("\n")
  .filter((l) => l.startsWith("|") && l.includes("`demo/"))
  .map((l) => {
    const c = l.split("|").slice(1, -1).map((s) => s.trim());
    return { niche: c[0], platform: c[2], status: c[3], note: c.slice(4, -2).join("|"), folder: c.at(-2).replaceAll("`", "") };
  })
  .filter((r) => SHOWN.has(r.status));

const first = (files) => [...files].sort((a, b) => (/^(ringkasan|home)/.test(b) - /^(ringkasan|home)/.test(a)) || a.localeCompare(b));
const spread = (files, n) => (files.length <= n ? files : Array.from({ length: n }, (_, i) => files[Math.round((i * (files.length - 1)) / (n - 1))]));
const lowerFirst = (t) => t.charAt(0).toLowerCase() + t.slice(1);
const upperFirst = (t) => t.charAt(0).toUpperCase() + t.slice(1);
// Nama & tagline untuk demo lama yang belum punya catatan di DEMOS.md (diisi manual).
const overrides = existsSync(join(web, "scripts/demo-overrides.json")) ? JSON.parse(readFileSync(join(web, "scripts/demo-overrides.json"), "utf8")) : {};

// Fitur = baris bertanda **Judul** di tabel "Video tur fitur"; teksnya diambil dari kolom voice-over.
function features(file) {
  if (!existsSync(file)) return [];
  const sec = readFileSync(file, "utf8").split(/^## /m).find((x) => x.startsWith("Video tur fitur"));
  const rows = (sec ?? "").split("\n").filter((l) => l.startsWith("|")).map((l) => l.split("|").slice(1, -1).map((c) => c.trim()));
  const head = rows[0]?.map((c) => c.toLowerCase()) ?? [];
  const f = head.findIndex((c) => c.includes("fitur")), v = head.findIndex((c) => c.includes("voice"));
  if (f < 0 || v < 0) return [];
  return rows.slice(2).flatMap((c) => {
    const title = c[f]?.match(/\*\*(.+?)\*\*/)?.[1].replace(/:$/, "");
    const text = c[v]?.replace(/^["“]|["”]$/g, "");
    return title && text ? [{ title, text }] : [];
  });
}

// Demo lama cuma punya sedikit screenshot, tapi rekaman tur fiturnya menyimpan frame mentah tiap layar.
// Frame dikecilkan ke 48x30 abu-abu; layar baru = selisih besar dari frame sebelumnya, dan yang dipakai
// frame terakhir sebelum layar berganti (sudah selesai animasi). Layar yang mirip yang sudah terpilih dibuang.
function videoFrames(dir, n) {
  const ev = join(dir, "events.json");
  if (!existsSync(ev)) return [];
  const list = JSON.parse(readFileSync(ev, "utf8")).frames.filter((f) => f[2] === 1440);
  if (list.length < 2) return [];
  const [w, h] = [48, 30];
  const list2 = list.map((f) => join(dir, "frames", f[1]));
  // satu jalankan ffmpeg per frame murah (<= 650 frame), tanpa dependensi baru
  const px = list2.map((f) => execFileSync("ffmpeg", ["-v", "error", "-i", f, "-vf", `scale=${w}:${h},format=gray`, "-f", "rawvideo", "-"], { maxBuffer: 1 << 20 }));
  const diff = (a, b) => a.reduce((t, v, i) => t + Math.abs(v - b[i]), 0) / a.length;
  const scenes = [];
  for (let i = 0, start = 0; i < px.length; i++) {
    if (i === px.length - 1 || diff(px[i], px[i + 1]) > 2) {
      if (i - start >= 2) scenes.push(i);
      start = i + 1;
    }
  }
  const kept = [];
  for (const i of scenes) if (kept.every((k) => diff(px[i], px[k]) > 4)) kept.push(i);
  return spread(kept, n).map((i) => list2[i]);
}

// Lebar PNG dibaca dari header, supaya gambar kecil gak di-upscale.
const pngWidth = (file) => readFileSync(file).readUInt32BE(16);

rmSync(OUT_IMG, { recursive: true, force: true });
const demos = [];
for (const r of rows) {
  const slug = r.folder.split("/").pop().replace(/^sistem-/, "").replace(/-umkm$/, "");
  const src = join(STUDIO, r.folder, "docs/screenshots");
  if (!existsSync(src)) continue;
  const all = readdirSync(src).filter((f) => f.endsWith(".png") && !f.includes("-1309"));
  const pick = (suffix, n) => first(all.filter((f) => f.endsWith(`-${suffix}.png`))).slice(0, n);
  const android = r.platform.includes("android");
  // flow-* = langkah demi langkah; yang versi HP/tablet/layar ulang dibuang, sisanya dipilih merata.
  const flows = all.filter((f) => /^flow-/.test(f) && !/hp|tablet|layar|mobile|android/.test(f)).sort();
  const names = android
    ? pick("android", MAX.android)
    : [...pick("desktop", MAX.desktop), ...spread(flows, MAX.flow), ...pick("mobile", MAX.mobile)];
  const files = names.map((f) => ({ path: join(src, f), label: f.replace(/\.png$/, ""), width: Math.min(pngWidth(join(src, f)), android ? 540 : 1200) }));
  if (!android && files.length < MIN_SHOTS) {
    const frames = videoFrames(join(STUDIO, r.folder, "video/fitur/raw"), MAX.frames - files.length);
    // urutan: screenshot desktop, frame video, lalu screenshot HP di akhir
    const at = files.findIndex((f) => f.label.endsWith("-mobile"));
    files.splice(at < 0 ? files.length : at, 0, ...frames.map((p, i) => ({ path: p, label: `layar-${i + 1}`, width: 1200 })));
  }
  if (!files.length) { console.warn(`skip ${slug}: tidak ada screenshot -desktop/-mobile/-android`); continue; }

  mkdirSync(join(OUT_IMG, slug), { recursive: true });
  // Gambar penuh buat modal, cover 640px buat kartu, thumbnail 160px buat strip di modal.
  const webp = (path, width, q, out) => execFileSync("cwebp", ["-quiet", "-q", String(q), "-resize", String(width), "0", path, "-o", out]);
  mkdirSync(join(OUT_IMG, slug, "t"), { recursive: true });
  const images = [], thumbs = [];
  files.forEach(({ path, label, width }, i) => {
    const name = `${String(i + 1).padStart(2, "0")}-${label}.webp`;
    webp(path, width, 80, join(OUT_IMG, slug, name));
    webp(path, 160, 60, join(OUT_IMG, slug, "t", name));
    images.push(`/demos/${slug}/${name}`);
    thumbs.push(`/demos/${slug}/t/${name}`);
  });
  webp(files[0].path, Math.min(files[0].width, 640), 75, join(OUT_IMG, slug, "cover.webp"));

  const [kind, ...desc] = r.niche.split(" — ");
  const name = overrides[slug]?.name ?? r.note.match(/^([^(:]+?)\s*[(:]/)?.[1] ?? kind;
  const tagline = upperFirst(overrides[slug]?.tagline ?? desc.join(" — "));
  const about = `${android ? "Aplikasi HP" : "Aplikasi web"} manajemen ${lowerFirst(kind)} untuk ${name}${tagline ? `, mencakup ${lowerFirst(tagline)}` : ""}.`;
  demos.push({ slug, name, niche: kind, tagline, about, features: features(join(STUDIO, r.folder, "docs/DEMO_SCRIPT.md")), platform: android ? "android" : "web", cover: `/demos/${slug}/cover.webp`, images, thumbs });
}

mkdirSync(dirname(OUT_JSON), { recursive: true });
writeFileSync(OUT_JSON, JSON.stringify(demos, null, 2) + "\n");
console.log(`${demos.length} demo, ${demos.reduce((n, d) => n + d.images.length, 0)} gambar`);
