import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/curriculum";

const BASE = "https://marketing-academy.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE}/learn`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/search`, priority: 0.5, changeFrequency: "monthly" },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/learn/${cat.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  // Only include lesson pages that actually have an MDX file.
  const lessonRoutes: MetadataRoute.Sitemap = [];
  for (const cat of CATEGORIES) {
    for (const lesson of cat.lessons) {
      try {
        await import(`@/content/${cat.slug}/${lesson.slug}.mdx`);
        lessonRoutes.push({
          url: `${BASE}/learn/${cat.slug}/${lesson.slug}`,
          priority: 0.7,
          changeFrequency: "monthly" as const,
        });
      } catch {
        // MDX not written yet — skip from sitemap
      }
    }
  }

  return [...staticRoutes, ...categoryRoutes, ...lessonRoutes];
}
