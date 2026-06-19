import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctatext?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
  ctatext = "Pilih Paket",
}: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 border transition-all duration-300 ${
        highlighted
          ? "bg-slate-900 text-white border-slate-900 shadow-lg"
          : "bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-md"
      }`}
    >
      <h3 className="font-heading text-lg font-semibold mb-1">{name}</h3>
      <p className={`text-sm mb-4 ${highlighted ? "text-slate-400" : "text-slate-500"}`}>{description}</p>
      <p className="font-heading text-3xl font-bold mb-6">
        {price}
        <span className={`text-sm font-normal ${highlighted ? "text-slate-400" : "text-slate-500"}`}> /project</span>
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check size={16} className={`mt-0.5 shrink-0 ${highlighted ? "text-amber-500" : "text-amber-500"}`} />
            <span className={highlighted ? "text-slate-300" : "text-slate-600"}>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/6281316203008?text=Halo%20saya%20tertarik%20dengan%20paket%20layanan%20Anda"
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
          highlighted
            ? "bg-amber-500 text-slate-900 hover:bg-amber-400"
            : "bg-slate-100 text-slate-900 hover:bg-slate-200"
        }`}
      >
        {ctatext}
      </a>
    </div>
  );
}
