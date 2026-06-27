"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, type Locale } from "@/config/site";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  // Mevcut yolun dil önekini değiştirerek karşı dile geçir
  const swap = (target: Locale) => {
    const parts = pathname.split("/");
    parts[1] = target; // /tr/... -> /en/...
    return parts.join("/") || `/${target}`;
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <Globe className="mr-1 h-4 w-4 text-gold" />
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-gray-300">|</span>}
          <Link
            href={swap(l)}
            className={`uppercase transition-colors ${
              l === locale
                ? "font-bold text-navy"
                : "text-gray-400 hover:text-navy"
            }`}
            aria-current={l === locale ? "true" : undefined}
          >
            {l}
          </Link>
        </span>
      ))}
    </div>
  );
}
