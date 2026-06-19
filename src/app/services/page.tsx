import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";

const services = [
  {
    iconName: "Layout",
    title: "Company Profile Website",
    description: "Website profesional 3-7 halaman untuk bisnis Anda. Responsive, SEO-friendly, loading cepat. Cocok buat UMKM yang pengen punya identitas online. Termasuk domain + hosting gratis 1 tahun.",
  },
  {
    iconName: "Code2",
    title: "Custom Web Application",
    description: "Aplikasi web custom sesuai kebutuhan spesifik bisnis Anda. Inventory system, booking management, CRM simpel, atau apapun yang bisnis Anda butuhkan. Dibangun dari nol — bukan template.",
  },
  {
    iconName: "BarChart3",
    title: "Business Dashboard",
    description: "Dashboard monitoring real-time untuk laporan penjualan, stok barang, performa tim, atau KPI bisnis lainnya. Akses dari mana aja via browser.",
  },
  {
    iconName: "Bot",
    title: "WhatsApp Business Automation",
    description: "Automasi chat WhatsApp untuk: notifikasi order otomatis, booking confirmation, marketing broadcast, dan customer service chatbot simpel.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "Mulai Rp 800rb",
    description: "Cocok buat company profile website atau landing page",
    features: [
      "3-7 halaman responsive",
      "Form kontak & integrasi WA",
      "SEO dasar",
      "Domain + hosting include 1 tahun",
      "Maintenance mulai Rp 100rb/bln",
    ],
  },
  {
    name: "Pro",
    price: "Mulai Rp 5jt",
    description: "Cocok buat aplikasi manajemen bisnis",
    features: [
      "Custom web application",
      "Database & admin panel",
      "User management",
      "Mobile responsive",
      "Backup rutin + monitoring",
      "Garansi 3 bulan",
    ],
    highlighted: true,
    ctatext: "Paling Populer",
  },
  {
    name: "Enterprise",
    price: "Mulai Rp 10jt",
    description: "Cocok buat sistem kompleks berskala besar",
    features: [
      "Full-stack custom system",
      "Integrasi payment gateway & API",
      "Multi-role & permission",
      "Dashboard laporan real-time",
      "Garansi 6 bulan + training tim",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Layanan"
            subtitle="Dari yang simpel sampai kompleks — semua dibangun dengan standar kualitas tinggi."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Estimasi Harga"
            subtitle="Harga ini patokan aja — finalnya tergantung kompleksitas dan kebutuhan spesifik Anda. Konsultasi gratis untuk tau angka pastinya."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
