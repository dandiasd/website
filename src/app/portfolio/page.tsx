"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import DemoCard, { type Demo } from "@/components/DemoCard";
import DemoGallery from "@/components/DemoGallery";
import demos from "@/data/demos.json";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";
import { captureAnalyticsEvent } from "@/lib/analytics";

const projects = [
  {
    title: "Sistem Manajemen Stok & Pesanan",
    description: "Dashboard lengkap untuk kelola stok barang, proses pesanan otomatis dari marketplace, cetak resi pengiriman, dan pantau keuangan — semua dalam satu tempat.",
    tech: ["Go", "React", "PostgreSQL", "Shopee API", "WhatsApp"],
    videoId: "uYM6W36hwIg",
  },
  {
    title: "Sistem Manajemen Rental & Fitting",
    description: "Atur jadwal sewa, kelola stok barang, pantau keuangan, jadwal fitting pelanggan, dan reminder harian otomatis via WhatsApp. Semua terintegrasi dengan AI.",
    tech: ["Go", "React", "PostgreSQL", "OpenAI", "WhatsApp API"],
    videoId: "MxDl9k83eaU",
  },
  {
    title: "Pencatatan Keuangan via WhatsApp",
    description: "Catat pemasukan & pengeluaran bisnis langsung dari chat WhatsApp. AI otomatis mengenali transaksi dan menyimpannya ke Google Sheets — tanpa install aplikasi tambahan.",
    tech: ["Next.js", "PostgreSQL", "Google Sheets API", "Groq AI"],
    videoId: "nbs07M-OsrI",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

  const openProjectDemo = (index: number) => {
    const project = projects[index];

    captureAnalyticsEvent("portfolio demo opened", {
      project_name: project.title,
      project_position: index + 1,
    });
    setSelectedProject(index);
  };

  const openDemo = (demo: Demo, index: number) => {
    captureAnalyticsEvent("portfolio demo opened", {
      project_name: demo.name,
      project_position: index + 1,
      demo_slug: demo.slug,
      section: "demo_sistem",
    });
    setSelectedDemo(demo);
  };

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Portofolio"
            subtitle="Beberapa project yang sudah saya kerjakan. Klik project untuk lihat demo videonya."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <ProjectCard
                key={proj.title}
                {...proj}
                index={i}
                onPlay={() => openProjectDemo(i)}
              />
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading
              title="Demo Sistem"
              subtitle="Contoh sistem untuk berbagai jenis usaha, menggunakan data contoh. Klik untuk lihat tampilannya."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {(demos as Demo[]).map((demo, i) => (
                <DemoCard key={demo.slug} demo={demo} onOpen={() => openDemo(demo, i)} />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-500 mb-4">
              Tertarik bikin project serupa?
            </p>
            <TrackedWhatsAppLink
              ctaLabel="Diskusi Project Anda"
              ctaLocation="portfolio_final_cta"
              message="Halo saya tertarik dengan jasa Anda dan ingin diskusi tentang project"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-xl text-base font-semibold hover:bg-amber-400 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Diskusi Project Anda
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>

      <DemoGallery demo={selectedDemo} onClose={() => setSelectedDemo(null)} />

      <VideoModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject !== null ? projects[selectedProject].title : undefined}
        videoId={selectedProject !== null ? projects[selectedProject].videoId : undefined}
      />
    </>
  );
}
