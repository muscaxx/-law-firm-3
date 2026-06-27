import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, User, ArrowLeft } from "lucide-react";
import { locales, type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { blogPosts, getBlogPost } from "@/data/blog";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title[locale as Locale], description: post.excerpt[locale as Locale] };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const post = getBlogPost(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={post.title[locale]}
        crumbs={[
          { label: dict.nav.home, href: `/${locale}` },
          { label: dict.nav.blog, href: `/${locale}/blog` },
          { label: post.category[locale] },
        ]}
      />

      <article className="container-x max-w-3xl py-16">
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="rounded-full bg-gold/10 px-3 py-1 font-semibold text-gold-dark">{post.category[locale]}</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {date}</span>
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
        </div>

        <div className="relative mb-8 h-[320px] overflow-hidden rounded-2xl">
          <Image src={post.cover} alt={post.title[locale]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-gray-700">
          {post.content[locale].map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <Link href={`/${locale}/blog`} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:underline">
          <ArrowLeft className="h-4 w-4" /> {dict.nav.blog}
        </Link>
      </article>

      <section className="bg-navy-50 py-16">
        <div className="container-x">
          <h2 className="section-title mb-8 text-center">
            {locale === "tr" ? "İlgili Yazılar" : "Related Articles"}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} locale={locale} cta={dict.sections.readMore} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
