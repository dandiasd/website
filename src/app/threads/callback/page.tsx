import type { Metadata } from "next";
import CallbackCode from "./CallbackCode";

export const metadata: Metadata = {
  title: "Threads connected | Dandi Bit",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function ThreadsCallback() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <CallbackCode />
      </div>
    </section>
  );
}
