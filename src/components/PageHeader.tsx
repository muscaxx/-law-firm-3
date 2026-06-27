import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-16 text-white">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="container-x relative">
        {crumbs && (
          <nav className="mb-3 flex flex-wrap items-center gap-1 text-sm text-navy-200">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-navy-300" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold">{c.label}</Link>
                ) : (
                  <span className="text-gold-light">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="wave-accent mb-3 [filter:brightness(0)_invert(1)] opacity-80" />
        <h1 className="font-serif text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-navy-100">{subtitle}</p>}
      </div>
    </section>
  );
}
