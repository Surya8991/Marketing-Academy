import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { classificationCode } from "@/lib/classificationCodes";
import { TOPIC_GROUPS } from "@/lib/topic-groups";
import SurpriseMeButton from "@/components/SurpriseMeButton";
import PageMasthead from "@/components/PageMasthead";
import LearnCatalogClient, { type CatalogCategory } from "./LearnCatalogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Marketing Lessons",
  alternates: { canonical: "/learn" },
  description:
    `Browse all ${uniqueLessonCount()}+ marketing lessons across ${CATEGORIES.length} topics: SEO, paid ads, growth, email, analytics, AI marketing, copywriting, CRO, and more. Free, structured Beginner to Advanced.`,
};

const PREVIEW_COUNT = 3;

export default function LearnPage() {
  const totalLessons = uniqueLessonCount();
  const groupBySlug = new Map<string, string>();
  for (const g of TOPIC_GROUPS) {
    for (const s of g.slugs) groupBySlug.set(s, g.label);
  }

  const catalogCategories: CatalogCategory[] = CATEGORIES.map((cat) => ({
    slug: cat.slug,
    code: classificationCode(cat.slug),
    title: cat.title,
    tagline: cat.tagline,
    group: groupBySlug.get(cat.slug) ?? TOPIC_GROUPS[0].label,
    totalCount: cat.lessons.length,
    preview: cat.lessons.slice(0, PREVIEW_COUNT).map((l) => ({
      slug: l.slug,
      title: l.title,
      level: l.level,
    })),
  }));

  return (
    <>
      <PageMasthead
        left="Marketing Academy · Full Index"
        right={`${CATEGORIES.length} topics · ${totalLessons} lessons`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-serif font-medium text-4xl mb-3">All Marketing Lessons</h1>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl font-ui-sans">
              {CATEGORIES.length} topics, each ordered from beginner to advanced. Filter by area or open any topic to see every lesson.
            </p>
          </div>
          <SurpriseMeButton />
        </div>

        <LearnCatalogClient
          categories={catalogCategories}
          groups={TOPIC_GROUPS.map((g) => g.label)}
        />
      </div>
    </>
  );
}
