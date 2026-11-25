import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/curriculum";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { TRACKS } from "@/lib/tracks";
import { INTERVIEW_SECTIONS } from "@/lib/interview-questions";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import { LESSON_DATES } from "@/lib/lesson-dates";
import fs from "fs";
import path from "path";
import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;
// Only lessons carry a real lastmod (from git history, see scripts/lesson-dates.mjs).
// Other pages omit it: a build-date lastmod that changes every deploy teaches
// crawlers to ignore the field.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE}/learn`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/about`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/tools`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/tracks`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/glossary`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/cheat-sheets`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/interview-prep`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/interview-questions`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/digital-marketing-cheat-sheet`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/compare`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/quizzes`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/resources`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/projects`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/tools/geo-audit`, priority: 0.6, changeFrequency: "monthly" },
  ];

  // Every practice project has its own statically-generated, indexable page.
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_INDEX.map((p) => ({
    url: `${BASE}/projects/${p.category}/${p.id}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/learn/${cat.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const trackRoutes: MetadataRoute.Sitemap = TRACKS.map((t) => ({
    url: `${BASE}/tracks/${t.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const cheatSheetRoutes: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE}/cheat-sheets/${cat.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));


  const glossaryTermRoutes: MetadataRoute.Sitemap = GLOSSARY_TERMS.map((t) => ({
    url: `${BASE}/glossary/${t.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const interviewCategoryRoutes: MetadataRoute.Sitemap = INTERVIEW_SECTIONS.map((sec) => ({
    url: `${BASE}/interview-questions/${sec.id}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  // Only include lesson pages that actually have an MDX file.
  // Cross-listed lessons (sourceCategory set) are skipped here so we only emit the canonical URL.
  const lessonRoutes: MetadataRoute.Sitemap = [];
  for (const cat of CATEGORIES) {
    for (const lesson of cat.lessons) {
      if (lesson.sourceCategory) continue;
      const filePath = path.join(process.cwd(), "src", "content", cat.slug, `${lesson.slug}.mdx`);
      if (fs.existsSync(filePath)) {
        lessonRoutes.push({
          url: `${BASE}/learn/${cat.slug}/${lesson.slug}`,
          priority: 0.7,
          changeFrequency: "monthly" as const,
          lastModified: LESSON_DATES[`${cat.slug}/${lesson.slug}`]?.[1],
        });
      }
    }
  }

  const comparisonRoutes: MetadataRoute.Sitemap = [
    "semrush-vs-ahrefs",
    "mailchimp-vs-klaviyo",
    "google-analytics-4-vs-mixpanel",
    "chatgpt-vs-claude",
    "buffer-vs-hootsuite",
    "optimizely-vs-vwo",
    "wordpress-vs-ghost",
  ].map((slug) => ({
    url: `${BASE}/compare/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...trackRoutes,
    ...cheatSheetRoutes,
    ...glossaryTermRoutes,
    ...interviewCategoryRoutes,
    ...lessonRoutes,
    ...comparisonRoutes,
    ...projectRoutes,
  ];
}
