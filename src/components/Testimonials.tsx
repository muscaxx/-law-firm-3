import { Star, Quote } from "lucide-react";
import { type Locale } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";
import { testimonials, averageRating } from "@/data/testimonials";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const s = dict.sections;

  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="text-center">
          <div className="wave-accent mx-auto mb-3" />
          <h2 className="section-title">{s.testimonialsTitle}</h2>
          <p className="mt-3 text-gray-500">{s.testimonialsSubtitle}</p>

          {/* Ortalama puan rozeti */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-5 py-2">
            <span className="font-serif text-2xl font-bold text-navy">{averageRating.toFixed(1).replace(".", ",")}</span>
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </span>
            <span className="text-sm text-gray-500">
              {testimonials.length} {s.testimonialsBased}
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-gold/15" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-gold text-gold" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                “{t.text[locale]}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 font-semibold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="block text-xs text-gold-dark">{t.role[locale]}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
