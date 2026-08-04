import { MessageCircle } from "lucide-react";
import TrackedWhatsAppLink from "./TrackedWhatsAppLink";

export default function WhatsAppButton() {
  return (
    <TrackedWhatsAppLink
      ctaLabel="Chat via WhatsApp"
      ctaLocation="floating_button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-amber-500 text-slate-900 rounded-full shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all duration-200 cursor-pointer"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} />
    </TrackedWhatsAppLink>
  );
}
