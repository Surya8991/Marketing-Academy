import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategory, getLessonNav } from "@/lib/curriculum";
import MarkComplete from "@/components/MarkComplete";
import ReadingProgress from "@/components/ReadingProgress";
import { TableOfContentsDesktop, TableOfContentsMobile } from "@/components/TableOfContents";
import Quiz from "@/components/Quiz";
import { QUIZZES } from "@/lib/quizzes";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects/types";
import ShareButtons from "@/components/ShareButtons";
import BookmarkButton from "@/components/BookmarkButton";
import RelatedLessons from "@/components/RelatedLessons";
import RelatedConcepts from "@/components/RelatedConcepts";
import LessonNotes from "@/components/LessonNotes";
import LessonResources from "@/components/LessonResources";
import LessonViewTracker from "@/components/LessonViewTracker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

type Props = { params: Promise<{ category: string; lesson: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return CATEGORIES.flatMap((cat) =>
    cat.lessons.map((l) => ({ category: cat.slug, lesson: l.slug }))
  );
}

const BASE = "https://marketing-academy-roan.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, lesson } = await params;
  try {
    const cat = getCategory(category);
    const lessonRef = cat?.lessons.find((l) => l.slug === lesson);
    const sourceCat = lessonRef?.sourceCategory ?? category;
    const mod = await import(`@/content/${sourceCat}/${lesson}.mdx`);
    const title = mod.lessonMeta?.title ?? lesson;
    const description = mod.lessonMeta?.summary;
    const level = mod.lessonMeta?.level ?? "";
    const ogUrl = `${BASE}/api/og?title=${encodeURIComponent(title)}&category=${encodeURIComponent(cat?.title ?? "")}&level=${encodeURIComponent(level)}`;
    return {
      title,
      description,
      alternates: {
        // Cross-listed lessons canonicalize to their source category to avoid duplicate content
        canonical: `${BASE}/learn/${sourceCat}/${lesson}`,
      },
      openGraph: {
        title,
        description,
        images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogUrl],
      },
    };
  } catch {
    return {};
  }
}

export default async function LessonPage({ params }: Props) {
  const { category, lesson } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  // Cross-listed lessons: MDX file lives in sourceCategory but appears in this category's URL
  const lessonRef = cat.lessons.find((l) => l.slug === lesson);
  const sourceCat = lessonRef?.sourceCategory ?? category;

  let LessonContent!: React.ComponentType;
  let lessonMeta: { title: string; level: string; summary: string; relatedConcepts?: string[] } | undefined;
  try {
    const mod = await import(`@/content/${sourceCat}/${lesson}.mdx`);
    LessonContent = mod.default;
    lessonMeta = mod.lessonMeta;
  } catch {
    notFound();
  }

  // Estimate reading time from raw MDX source
  let readTime = 5;
  try {
    const raw = fs.readFileSync(
      path.join(process.cwd(), "src", "content", sourceCat, `${lesson}.mdx`),
      "utf-8"
    );
    const text = raw
      .replace(/```[\s\S]*?```/g, "")
      .replace(/export const \w+ = \{[\s\S]*?\};/g, "")
      .replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    readTime = Math.max(1, Math.ceil(words / 200));
  } catch {
    // fallback to default
  }

  const { prev, next } = getLessonNav(category, lesson);

  // Determine if this lesson has a quiz (cross-listed lessons share the quiz under sourceCategory key)
  const quizQuestions = QUIZZES[`${sourceCat}/${lesson}`];
  const hasQuiz = !!(quizQuestions && quizQuestions.length > 0);

  // Practice projects (PROJECTS_PLAN.md Stage 8): per-category modules under
  // src/lib/projects/ are dynamically imported here, one at a time, so a
  // category with no project module yet (most of them, in this Phase 1
  // pilot) never breaks the build (AGENTS.md Rule 37: never statically
  // import all category modules at once). Export name follows the
  // <SLUG_AS_UPPER_SNAKE>_PROJECTS convention (see scripts/build-projects-index.mjs).
  let lessonProjects: Project[] = [];
  try {
    const projectsMod = await import(`@/lib/projects/${sourceCat}`);
    const exportName = `${sourceCat.toUpperCase().replace(/-/g, "_")}_PROJECTS`;
    const projectsBySlug = projectsMod[exportName] as Record<string, Project[]> | undefined;
    lessonProjects = projectsBySlug?.[lesson] ?? [];
  } catch {
    // No project module exists yet for this category, lessonProjects stays empty.
  }
  const hasProjects = lessonProjects.length > 0;

  // JSON-LD URLs always point to the canonical (sourceCat) location so schema
  // signals do not contradict the canonical link when the lesson is viewed via
  // a cross-listed URL. The visible HTML breadcrumb still reflects the user's
  // actual navigation path (current category).
  const sourceCatTitle = getCategory(sourceCat)?.title ?? cat.title;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "LearningResource"],
    headline: lessonMeta?.title ?? lesson,
    name: lessonMeta?.title ?? lesson,
    description: lessonMeta?.summary ?? "",
    url: `${BASE}/learn/${sourceCat}/${lesson}`,
    author: { "@type": "Organization", name: "Marketing Academy", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Marketing Academy",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico` },
    },
    educationalLevel: lessonMeta?.level ?? "Beginner",
    learningResourceType: "lesson",
    teaches: lessonMeta?.title ?? lesson,
    about: { "@type": "Thing", name: sourceCatTitle },
    inLanguage: "en",
    timeRequired: `PT${readTime}M`,
    isPartOf: { "@type": "Course", name: sourceCatTitle, url: `${BASE}/learn/${sourceCat}` },
    image: `${BASE}/api/og?title=${encodeURIComponent(lessonMeta?.title ?? lesson)}&category=${encodeURIComponent(sourceCatTitle)}&level=${encodeURIComponent(lessonMeta?.level ?? "")}`,
    dateModified: "2026-07-04",
    isAccessibleForFree: true,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "All Lessons", item: `${BASE}/learn` },
      { "@type": "ListItem", position: 3, name: sourceCatTitle, item: `${BASE}/learn/${sourceCat}` },
      { "@type": "ListItem", position: 4, name: lessonMeta?.title ?? lesson, item: `${BASE}/learn/${sourceCat}/${lesson}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <ReadingProgress />
      <LessonViewTracker
        categorySlug={category}
        slug={lesson}
        title={lessonMeta?.title ?? lesson}
        categoryTitle={cat.title}
        level={lessonMeta?.level}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-12">
          {/* Desktop ToC (LEFT) */}
          <TableOfContentsDesktop
            extraSections={[
              ...(hasQuiz ? [{ id: "quiz-section", text: "Test Your Knowledge" }] : []),
              ...(hasProjects ? [{ id: "projects-section", text: "Practice Projects" }] : []),
            ]}
          />

          {/* Main column */}
          <div className="flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-6 flex-wrap">
              <Link href="/learn" className="hover:text-[var(--foreground)] transition-colors">
                All Topics
              </Link>
              <ChevronRight size={14} />
              <Link
                href={`/learn/${category}`}
                className="hover:text-[var(--foreground)] transition-colors"
              >
                <span className="mr-1">{cat.emoji}</span>
                {cat.title}
              </Link>
              <ChevronRight size={14} />
              <span className="text-[var(--foreground)] truncate">{lessonMeta?.title}</span>
            </nav>

            {/* Title block — docs-style single meta line instead of scattered
                badges/pills. Mark Complete/Bookmark/Share moved back into the
                header, right under the meta line (user feedback, Session 75
                follow-up). */}
            <header className="mb-8">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
                {lessonMeta?.title}
              </h1>
              {lessonMeta?.summary && (
                <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {lessonMeta.summary}
                </p>
              )}
              <div className="flex items-center gap-2 flex-wrap font-data text-xs tracking-wide text-[var(--muted-foreground)]">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>{lessonMeta?.level?.toUpperCase()}</span>
                <span>&middot;</span>
                <span>{readTime} MIN READ</span>
                {hasProjects && (
                  <>
                    <span>&middot;</span>
                    <span>{lessonProjects.length} PROJECT{lessonProjects.length === 1 ? "" : "S"}</span>
                  </>
                )}
                <span>&middot;</span>
                <span>{cat.title.toUpperCase()}</span>
                <span>&middot;</span>
                <span>UPDATED JUN 2026</span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <MarkComplete
                  category={sourceCat}
                  slug={lesson}
                  nextHref={next ? `/learn/${next.categorySlug}/${next.slug}` : undefined}
                  nextTitle={next?.title}
                />
                <BookmarkButton category={sourceCat} slug={lesson} title={lessonMeta?.title ?? lesson} />
                <ShareButtons title={lessonMeta?.title ?? lesson} url={`${BASE}/learn/${category}/${lesson}`} />
              </div>
            </header>

            {/* Mobile ToC */}
            <TableOfContentsMobile
              extraSections={[
                ...(hasQuiz ? [{ id: "quiz-section", text: "Test Your Knowledge" }] : []),
                ...(hasProjects ? [{ id: "projects-section", text: "Practice Projects" }] : []),
              ]}
            />

            {/* MDX content */}
            <article className="prose prose-slate max-w-none">
              <LessonContent />
            </article>

            <LessonResources slug={lesson} />

            {/* Practice: Quiz / Projects / Notes as a matched set of
                accordion cards (docs-style redesign, Session 75). Quiz has no
                self-collapse of its own, so it gets a native <details> shell;
                ProjectList and LessonNotes already own their open/close state
                and are styled to match. Quiz defaults open since it gates
                MarkComplete (see MarkComplete's locked-click handler, which
                force-opens #quiz-accordion before scrolling to it). */}
            <div className="mt-10 flex flex-col gap-3">
              {hasQuiz && (
                <details
                  id="quiz-accordion"
                  open
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-semibold text-sm">
                    <span>Test Your Knowledge</span>
                    <ChevronRight
                      size={16}
                      className="details-chevron shrink-0 text-[var(--muted-foreground)] transition-transform"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-[var(--border)]">
                    <Quiz questions={quizQuestions!} category={sourceCat} slug={lesson} lessonTitle={lessonMeta?.title ?? lesson} />
                  </div>
                </details>
              )}

              {hasProjects && <ProjectList projects={lessonProjects} category={sourceCat} />}

              <LessonNotes category={sourceCat} slug={lesson} />
            </div>

            {/* Related Concepts (curated, when the lesson has them) sits above
                the broader "You Might Also Like" pick, as its own cards
                rather than folded into an accordion — it's where the reader
                goes next, not a practice action. */}
            <RelatedConcepts category={sourceCat} slugs={lessonMeta?.relatedConcepts} />

            {category === "tools" && (
              <div className="mt-10 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-2">
                  <span>⚖️</span> Comparing platforms for your stack?
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mb-2">
                  Compare features, pricing, and pros/cons side-by-side.
                </p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  Compare Tools <ChevronRight size={14} />
                </Link>
              </div>
            )}

            <RelatedLessons currentCategory={category} currentSlug={lesson} level={lessonMeta?.level ?? "Beginner"} />

            <nav className="grid grid-cols-2 gap-3 mt-10">
              {prev ? (
                <Link
                  href={`/learn/${prev.categorySlug}/${prev.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lesson-nav-card group flex flex-col p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)]/50 transition-all col-span-1"
                >
                  <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] mb-1">
                    <ChevronLeft size={12} /> Previous
                  </span>
                  <span className="font-medium text-sm group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/learn/${next.categorySlug}/${next.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lesson-nav-card group flex flex-col p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)]/50 transition-all col-span-1 text-right"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-[var(--muted-foreground)] mb-1">
                    Next <ChevronRight size={12} />
                  </span>
                  <span className="font-medium text-sm group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>

        </div>
      </div>
    </>
  );
}
