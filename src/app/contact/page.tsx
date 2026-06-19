import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { MessageCircle, Globe, Music, GitBranch, Clock, Shield, Mail, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama proses pembuatan aplikasi?",
    answer: "Tergantung kompleksitas. Website company profile biasanya 1-2 minggu. Custom web app 3-8 minggu. Saya selalu kasi timeline realistik di awal.",
  },
  {
    question: "Saya gak ngerti teknologi — apa saya bisa tetap terlibat?",
    answer: "Tentu! Saya akan jelasin semuanya pakai bahasa manusia. Anda tetap pegang kendali penuh dan saya cuma perlu tahu kebutuhan bisnis Anda.",
  },
  {
    question: "Apakah ada garansi setelah launching?",
    answer: "Ya. Semua project termasuk garansi maintenance 1-6 bulan tergantung paket. Kalau ada bug atau perubahan minor, saya tangani gratis.",
  },
  {
    question: "Saya cuma butuh perubahan kecil di website yang udah ada, bisa?",
    answer: "Bisa. Saya juga nerima project maintenance dan pengembangan fitur untuk aplikasi yang sudah ada. Hubungi saya untuk diskusi.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Hubungi Saya"
            subtitle="Konsultasi gratis, tanpa kewajiban. Ceritain aja kebutuhan bisnis Anda."
          />

          <ScrollReveal>
            <a
              href="https://wa.me/6281316203008?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-amber-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <MessageCircle size={24} />
              Chat via WhatsApp
            </a>
            <p className="mt-4 text-sm text-slate-400">
              Respon dalam 1-24 jam
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <Globe size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <Music size={20} />
              <span className="text-sm font-medium">TikTok</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <GitBranch size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pertanyaan Umum"
            subtitle="Beberapa hal yang sering ditanyakan."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.question}>
                <details className="bg-white rounded-2xl border border-slate-100 p-5 group cursor-pointer">
                  <summary className="font-heading font-semibold text-slate-900 list-none flex items-center justify-between">
                    {faq.question}
                    <HelpCircle size={18} className="text-slate-400 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock size={20} className="text-amber-500" />
              <span className="text-sm font-medium text-slate-900">Respon Cepat</span>
              <span className="text-sm text-slate-500">1-24 jam</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={20} className="text-amber-500" />
              <span className="text-sm font-medium text-slate-900">Garansi Maintenance</span>
              <span className="text-sm text-slate-500">1-6 bulan</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={20} className="text-amber-500" />
              <span className="text-sm font-medium text-slate-900">Konsultasi Gratis</span>
              <span className="text-sm text-slate-500">Lewat WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
