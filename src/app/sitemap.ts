import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/curriculum";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { TRACKS } from "@/lib/tracks";
import { INTERVIEW_SECTIONS } from "@/lib/interview-questions";
import fs from "fs";
import path from "path";

const BASE = "https://marketing-academy-roan.vercel.app";
const BUILD_DATE = new Date("2026-06-16");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1, changeFrequency: "weekly", lastModified: BUILD_DATE },
    { url: `${BASE}/learn`, priority: 0.9, changeFrequency: "weekly", lastModified: BUILD_DATE },
    { url: `${BASE}/search`, priority: 0.6, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/about`, priority: 0.5, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/tools`, priority: 0.8, changeFrequency: "weekly", lastModified: BUILD_DATE },
    { url: `${BASE}/tracks`, priority: 0.8, changeFrequency: "weekly", lastModified: BUILD_DATE },
    { url: `${BASE}/glossary`, priority: 0.8, changeFrequency: "weekly", lastModified: BUILD_DATE },
    { url: `${BASE}/cheat-sheets`, priority: 0.7, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/interview-prep`, priority: 0.8, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/interview-questions`, priority: 0.9, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/digital-marketing-cheat-sheet`, priority: 0.9, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/certificates`, priority: 0.5, changeFrequency: "monthly", lastModified: BUILD_DATE },
    { url: `${BASE}/compare`, priority: 0.8, changeFrequency: "weekly", lastModified: BUILD_DATE },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/learn/${cat.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
    lastModified: BUILD_DATE,
  }));

  const trackRoutes: MetadataRoute.Sitemap = TRACKS.map((t) => ({
    url: `${BASE}/tracks/${t.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  const cheatSheetRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/cheat-sheets/${cat.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  const certificateRoutes: MetadataRoute.Sitemap = TRACKS.map((t) => ({
    url: `${BASE}/certificates/${t.slug}`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  const glossaryTermRoutes: MetadataRoute.Sitemap = GLOSSARY_TERMS.map((t) => ({
    url: `${BASE}/glossary/${t.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  const interviewCategoryRoutes: MetadataRoute.Sitemap = INTERVIEW_SECTIONS.map((sec) => ({
    url: `${BASE}/interview-questions/${sec.id}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  // Only include lesson pages that actually have an MDX file.
  const lessonRoutes: MetadataRoute.Sitemap = [];
  for (const cat of CATEGORIES) {
    for (const lesson of cat.lessons) {
      const filePath = path.join(process.cwd(), "src", "content", cat.slug, `${lesson.slug}.mdx`);
      if (fs.existsSync(filePath)) {
        lessonRoutes.push({
          url: `${BASE}/learn/${cat.slug}/${lesson.slug}`,
          priority: 0.7,
          changeFrequency: "monthly" as const,
          lastModified: BUILD_DATE,
        });
      }
    }
  }

  const comparisonRoutes: MetadataRoute.Sitemap = [
    "semrush-vs-ahrefs",
    "mailchimp-vs-klaviyo",
    "google-analytics-4-vs-mixpanel",
    "ga4-vs-mixpanel",
    "chatgpt-vs-claude",
    "buffer-vs-hootsuite",
    "optimizely-vs-vwo",
    "wordpress-vs-ghost",
  ].map((slug) => ({
    url: `${BASE}/compare/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: BUILD_DATE,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...trackRoutes,
    ...cheatSheetRoutes,
    ...certificateRoutes,
    ...glossaryTermRoutes,
    ...interviewCategoryRoutes,
    ...lessonRoutes,
    ...comparisonRoutes,
  ];
}
