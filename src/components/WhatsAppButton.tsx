"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Sabit (floating) WhatsApp butonu.
 * Tıklanınca wa.me üzerinden hazır mesajla sohbet açar.
 */
export function WhatsAppButton({ locale }: { locale: string }) {
  const text =
    locale === "en"
      ? "Hello, I would like to get information about legal counsel."
      : "Merhaba, hukuki danışmanlık hakkında bilgi almak istiyorum.";
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-105"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <MessageCircle className="h-7 w-7" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
