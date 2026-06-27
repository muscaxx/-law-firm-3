import type { Metadata } from "next";
import { type Locale } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { blogPosts } from "@/data/blog";
import { PageHeader } from "@/components/PageHeader";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = { title: "Blog" };

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader
        title={dict.sections.blogTitle}
        subtitle={dict.sections.blogSubtitle}
        crumbs={[{ label: dict.nav.home, href: `/${locale}` }, { label: dict.nav.blog }]}
      />
      <section className="container-x py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} locale={locale} cta={dict.sections.readMore} />
          ))}
        </div>
      </section>
    </>
  );
}
