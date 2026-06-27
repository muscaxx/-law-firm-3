import type { MetadataRoute } from "next";
import { locales } from "@/config/site";
import { practiceAreas } from "@/data/practice-areas";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ornekhukuk.com";

  const staticPaths = ["", "/kurumsal", "/calisma-alanlari", "/hizmet-bolgelerimiz", "/blog", "/randevu", "/iletisim", "/kvkk"];

  const urls: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const p of staticPaths) {
      urls.push({ url: `${base}/${locale}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 });
    }
    for (const a of practiceAreas) {
      urls.push({ url: `${base}/${locale}/calisma-alanlari/${a.slug}`, changeFrequency: "monthly", priority: 0.6 });
    }
    for (const b of blogPosts) {
      urls.push({ url: `${base}/${locale}/blog/${b.slug}`, lastModified: new Date(b.date), changeFrequency: "yearly", priority: 0.5 });
    }
  }
  return urls;
}
