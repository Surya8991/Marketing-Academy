import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategory, getLessonNav } from "@/lib/curriculum";
import LevelBadge from "@/components/LevelBadge";
import MarkComplete from "@/components/MarkComplete";
import ReadingProgress from "@/components/ReadingProgress";
import { TableOfContentsDesktop, TableOfContentsMobile } from "@/components/TableOfContents";
import Quiz from "@/components/Quiz";
import { QUIZZES } from "@/lib/quizzes";
import ShareButtons from "@/components/ShareButtons";
import BookmarkButton from "@/components/BookmarkButton";
import RelatedLessons from "@/components/RelatedLessons";
import LessonViewTracker from "@/components/LessonViewTracker";
import { ChevronLeft, ChevronRight, ArrowLeft, Clock } from "lucide-react";
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
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    const cat = getCategory(category);
    const title = mod.lessonMeta?.title ?? lesson;
    const description = mod.lessonMeta?.summary;
    const level = mod.lessonMeta?.level ?? "";
    const ogUrl = `${BASE}/api/og?title=${encodeURIComponent(title)}&category=${encodeURIComponent(cat?.title ?? "")}&level=${encodeURIComponent(level)}`;
    return {
      title,
      description,
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

  let LessonContent!: React.ComponentType;
  let lessonMeta: { title: string; level: string; summary: string } | undefined;
  try {
    const mod = await import(`@/content/${category}/${lesson}.mdx`);
    LessonContent = mod.default;
    lessonMeta = mod.lessonMeta;
  } catch {
    notFound();
  }

  // Estimate reading time from raw MDX source
  let readTime = 5;
  try {
    const raw = fs.readFileSync(
      path.join(process.cwd(), "src", "content", category, `${lesson}.mdx`),
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

  return (
    <>
      <ReadingProgress />
      <LessonViewTracker
        categorySlug={category}
        slug={lesson}
        title={lessonMeta?.title ?? lesson}
        categoryTitle={cat.title}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-12">
          {/* Desktop ToC (LEFT) */}
          <TableOfContentsDesktop />

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

            {/* Title block */}
            <header className="mb-8 pb-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {lessonMeta?.level && (
                  <LevelBadge
                    level={lessonMeta.level as "Beginner" | "Intermediate" | "Advanced"}
                  />
                )}
                <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                  <Clock size={12} />
                  {readTime} min read
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">{cat.title}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
                {lessonMeta?.title}
              </h1>
              {lessonMeta?.summary && (
                <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                  {lessonMeta.summary}
                </p>
              )}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <MarkComplete category={category} slug={lesson} />
                <BookmarkButton category={category} slug={lesson} title={lessonMeta?.title ?? lesson} />
              </div>
              <div className="mt-4">
                <ShareButtons title={lessonMeta?.title ?? lesson} url={`${BASE}/learn/${category}/${lesson}`} />
              </div>
            </header>

            {/* Mobile ToC */}
            <TableOfContentsMobile />

            {/* MDX content */}
            <article className="prose prose-slate max-w-none">
              <LessonContent />
            </article>

            {/* Quiz */}
            {(() => {
              const questions = QUIZZES[`${category}/${lesson}`];
              if (!questions || questions.length === 0) return null;
              return (
                <div className="mt-12 pt-8 border-t border-[var(--border)]">
                  <h2 className="text-xl font-bold mb-4">Test Your Knowledge</h2>
                  <Quiz questions={questions} />
                </div>
              );
            })()}

            {/* Related Lessons */}
            <RelatedLessons currentCategory={category} currentSlug={lesson} level={lessonMeta?.level ?? "Beginner"} />

            {/* Prev / Next nav */}
            <nav className="mt-16 pt-8 border-t border-[var(--border)] grid grid-cols-2 gap-3">
              {prev ? (
                <Link
                  href={`/learn/${prev.categorySlug}/${prev.slug}`}
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

            <div className="mt-10">
              <Link
                href={`/learn/${category}`}
                className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <ArrowLeft size={14} />
                Back to {cat.title}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
