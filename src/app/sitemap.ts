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
  // Use Promise.allSettled to check all lessons in parallel (not sequentially).
  const allLessons = CATEGORIES.flatMap((cat) =>
    cat.lessons.map((lesson) => ({ cat, lesson }))
  );

  const results = await Promise.allSettled(
    allLessons.map(({ cat, lesson }) =>
      import(`@/content/${cat.slug}/${lesson.slug}.mdx`).then(() => ({
        url: `${BASE}/learn/${cat.slug}/${lesson.slug}`,
        priority: 0.7 as const,
        changeFrequency: "monthly" as const,
      }))
    )
  );

  const lessonRoutes: MetadataRoute.Sitemap = results
    .filter((r): r is PromiseFulfilledResult<MetadataRoute.Sitemap[number]> => r.status === "fulfilled")
    .map((r) => r.value);

  return [...staticRoutes, ...categoryRoutes, ...lessonRoutes];
}
