import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import type { Locale } from "@/config/site";
import type { BlogPost } from "@/data/blog";

export function BlogCard({
  post,
  locale,
  cta,
}: {
  post: BlogPost;
  locale: Locale;
  cta: string;
}) {
  const date = new Date(post.date).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/${locale}/blog/${post.slug}`} className="relative block h-48 overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title[locale]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
          {post.category[locale]}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
          <CalendarDays className="h-3.5 w-3.5" />
          {date}
        </div>
        <h3 className="font-serif text-lg font-bold leading-snug text-navy">
          <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-gold-dark">
            {post.title[locale]}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt[locale]}</p>
        <Link
          href={`/${locale}/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
