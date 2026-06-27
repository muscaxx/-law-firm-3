import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Locale } from "@/config/site";
import type { PracticeArea } from "@/data/practice-areas";

export function PracticeAreaCard({
  area,
  locale,
  cta,
}: {
  area: PracticeArea;
  locale: Locale;
  cta: string;
}) {
  return (
    <Link
      href={`/${locale}/calisma-alanlari/${area.slug}`}
      className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
    >
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon name={area.icon} className="h-7 w-7" strokeWidth={1.6} />
      </span>
      <h3 className="font-serif text-lg font-bold text-navy">{area.title[locale]}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{area.summary[locale]}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
