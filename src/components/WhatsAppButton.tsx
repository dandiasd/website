import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/6281316203008?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-amber-500 text-slate-900 rounded-full shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all duration-200 cursor-pointer"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
