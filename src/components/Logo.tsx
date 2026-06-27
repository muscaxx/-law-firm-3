import Link from "next/link";
import { Scale } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Logo({ locale, light = false }: { locale: string; light?: boolean }) {
  return (
    <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
          light ? "bg-white/10 text-gold" : "bg-navy text-gold"
        }`}
      >
        <Scale className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="leading-tight">
        <span
          className={`block whitespace-nowrap font-serif text-base font-bold leading-none lg:text-lg ${
            light ? "text-white" : "text-navy"
          }`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`mt-1 block whitespace-nowrap text-[9px] uppercase tracking-[0.18em] lg:text-[10px] ${
            light ? "text-white/60" : "text-gold-dark"
          }`}
        >
          Hukuk &amp; Danışmanlık
        </span>
      </span>
    </Link>
  );
}
