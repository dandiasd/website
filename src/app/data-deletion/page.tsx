import type { Metadata } from "next";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

export const metadata: Metadata = {
  title: "Data Deletion | Dandi Bit",
  description: "How to delete data held by the dandi-bit Threads app.",
};

const h2 = "font-heading text-xl font-semibold text-slate-900 mt-10";
const p = "mt-3 text-slate-600 leading-relaxed";

export default function DataDeletion() {
  return (
    <section className="py-20 md:py-28">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">Data Deletion Instructions</h1>
        <p className="mt-3 text-sm text-slate-400">For the &ldquo;dandi-bit&rdquo; Threads app by Dandi Bit Studio</p>

        <p className={p}>
          The dandi-bit app stores data only on its owner&apos;s laptop. See our{" "}
          <a href="/privacy" className="text-amber-600 underline hover:text-amber-500">privacy policy</a> for what is stored.
        </p>

        <h2 className={h2}>If one of your public posts was saved</h2>
        <ol className={`${p} list-decimal pl-6 space-y-2`}>
          <li>
            Message us on{" "}
            <TrackedWhatsAppLink
              ctaLabel="WhatsApp"
              ctaLocation="data_deletion"
              message="Hi, I would like my Threads data deleted from the dandi-bit app."
              className="text-amber-600 underline hover:text-amber-500"
            >
              WhatsApp (+62 813-1620-3008)
            </TrackedWhatsAppLink>{" "}
            saying &ldquo;Data deletion&rdquo; and your Threads username.
          </li>
          <li>We delete every saved post and record linked to that username from our local files.</li>
          <li>We confirm the deletion to you within 7 days of your request.</li>
        </ol>

        <h2 className={h2}>If you connected your Threads account (app owner)</h2>
        <ol className={`${p} list-decimal pl-6 space-y-2`}>
          <li>
            In Threads, go to <strong>Settings → Account → Website permissions</strong> and remove
            &ldquo;dandi-bit&rdquo;. This revokes the app&apos;s access immediately.
          </li>
          <li>
            The access token in the macOS Keychain and the local JSON files with saved posts are then deleted
            from the laptop.
          </li>
        </ol>
      </article>
    </section>
  );
}
