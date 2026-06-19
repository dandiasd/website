"use client";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsBar from "@/components/StatsBar";
import WorkflowStep from "@/components/WorkflowStep";
import { MessageCircle, Search, Handshake, FileText, Palette, Rocket } from "lucide-react";

const workflowSteps = [
  {
    icon: <MessageCircle size={24} />,
    title: "Chat WhatsApp",
    description: "Kirim pesan ke saya via WhatsApp. Jelaskan kebutuhan bisnis Anda — bisa berupa ide kasar atau masalah yang sedang dihadapi.",
  },
  {
    icon: <Search size={24} />,
    title: "Analisis Kebutuhan",
    description: "Saya akan menganalisis kebutuhan Anda. Jika informasi dari chat belum cukup jelas, saya akan menjadwalkan meeting singkat (15-30 menit).",
  },
  {
    icon: <Handshake size={24} />,
    title: "Meeting & Diskusi Detail",
    description: "Meeting via Google Meet untuk mendalami kebutuhan bisnis, membahas workflow, menunjukkan demo, dan menyamakan visi sebelum masuk ke tahap development.",
  },
  {
    icon: <FileText size={24} />,
    title: "Proposal & Deal",
    description: "Anda menerima proposal lengkap: scope, timeline, teknologi, dan penawaran harga. Setelah disetujui dan deal di tahap ini, saya mulai design prototype.",
  },
  {
    icon: <Palette size={24} />,
    title: "Design Prototype",
    description: "Setelah proposal disetujui, saya akan membuat design prototype. Anda bisa melihat dan mereview tampilan aplikasi sebelum development dimulai.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Development & Launch",
    description: "Setelah design approved, saya mulai development dengan progress report rutin. Setelah testing selesai, aplikasi Anda siap di-launch!",
  },
];

const services = [
  {
    iconName: "Layout",
    title: "Company Profile Website",
    description: "Website profesional untuk bisnis Anda — responsive, SEO-friendly, dan mudah dikelola.",
  },
  {
    iconName: "Code2",
    title: "Custom Web Application",
    description: "Sistem custom sesuai kebutuhan bisnis: inventory, booking, POS, CRM, dan lainnya.",
  },
  {
    iconName: "BarChart3",
    title: "Business Dashboard",
    description: "Dashboard monitoring real-time untuk laporan penjualan, stok, dan performa bisnis.",
  },
  {
    iconName: "Bot",
    title: "WhatsApp Integration",
    description: "Automasi chat WA untuk notifikasi order, customer service, dan marketing broadcast.",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-20 md:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Buat Operasional Bisnis
              <br />
              Anda Lebih <span className="text-amber-500">Efisien</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Kembangkan aplikasi web custom untuk operasional bisnis kecil Anda —
              mulai dari company profile, sistem stok, booking, sampai dashboard manajemen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/6281316203008?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-xl text-base font-semibold hover:bg-amber-400 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Konsultasi Gratis
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl text-base font-semibold border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
              >
                Lihat Portofolio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Layanan Saya"
            subtitle="Dari website company profile sampai sistem aplikasi kompleks — semua dibangun dengan teknologi modern dan fokus ke kebutuhan bisnis Anda."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Cara Kerja"
            subtitle="Dari pertama kali chat sampai dapat proposal — simpel, transparan, dan tanpa ribet."
          />
          <div className="max-w-3xl mx-auto">
            {workflowSteps.map((step, i) => (
              <WorkflowStep
                key={step.title}
                number={i + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={i === workflowSteps.length - 1}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-900">
              Tertarik? Yuk ngobrol dulu
            </h2>
            <p className="mt-3 text-lg text-slate-500 max-w-xl mx-auto">
              Konsultasi gratis tanpa kewajiban. Ceritain kebutuhan bisnis Anda, saya bantu cari solusi teknisnya.
            </p>
            <a
              href="https://wa.me/6281316203008?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-amber-400 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Chat via WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
