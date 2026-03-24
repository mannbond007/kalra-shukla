import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999900000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
