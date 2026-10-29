import type { Metadata } from "next";
import TrackedWhatsAppLink from "@/components/TrackedWhatsAppLink";

export const metadata: Metadata = {
  title: "Privacy Policy | Dandi Bit",
  description: "Privacy policy for the dandi-bit Threads app.",
};

const h2 = "font-heading text-xl font-semibold text-slate-900 mt-10";
const p = "mt-3 text-slate-600 leading-relaxed";

export default function Privacy() {
  return (
    <section className="py-20 md:py-28">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Effective date: October 29, 2026</p>

        <p className={p}>
          This policy covers &ldquo;dandi-bit&rdquo;, a Meta app operated by Dandi Bit Studio. It is an internal
          tool used only by the owner of Dandi Bit Studio to find potential clients from public posts on Threads.
          It is not offered to the public and nobody else can sign in to it.
        </p>

        <h2 className={h2}>Data we access</h2>
        <ul className={`${p} list-disc pl-6 space-y-2`}>
          <li>
            <strong>Connected account (threads_basic):</strong>{" "}the Threads user ID and username of the
            owner&apos;s own account that is connected to the app.
          </li>
          <li>
            <strong>Public posts (threads_keyword_search):</strong>{" "}public Threads posts returned by keyword
            searches, such as the post text, link, timestamp and the author&apos;s public username.
          </li>
        </ul>
        <p className={p}>We do not access private messages, private profiles, passwords or any other data.</p>

        <h2 className={h2}>How data is stored</h2>
        <p className={p}>
          All data stays on the owner&apos;s own laptop. The Threads access token is kept in the macOS Keychain.
          Search results are saved in local JSON files. Nothing is uploaded to a server or database run by us.
        </p>

        <h2 className={h2}>How data is used</h2>
        <p className={p}>
          Data is used only to review public posts and decide whether to reach out to someone about our
          software services. We do not sell or share it with third parties, and we do not use it for
          advertising or to build advertising profiles.
        </p>

        <h2 className={h2}>Retention</h2>
        <p className={p}>
          Data is kept until the owner deletes it, or until someone asks us to delete their data (see below).
        </p>

        <h2 className={h2}>Your rights and data deletion</h2>
        <p className={p}>
          If a post of yours was saved by this tool and you want it removed, contact us on{" "}
          <TrackedWhatsAppLink
            ctaLabel="WhatsApp"
            ctaLocation="privacy"
            message="Hi, I would like my Threads data deleted from the dandi-bit app."
            className="text-amber-600 underline hover:text-amber-500"
          >
            WhatsApp (+62 813-1620-3008)
          </TrackedWhatsAppLink>
          . Full instructions are on our <a href="/data-deletion" className="text-amber-600 underline hover:text-amber-500">data deletion page</a>.
        </p>

        <h2 className={h2}>Changes</h2>
        <p className={p}>If this policy changes, we will update this page and its effective date.</p>
      </article>
    </section>
  );
}
