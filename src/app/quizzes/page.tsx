import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";
import { QUIZZES } from "@/lib/quizzes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Quizzes | Test Your Knowledge | Marketing Academy",
  description:
    "Test your marketing knowledge with 200+ quiz questions across SEO, Paid Ads, Growth, Email, Analytics, and more. Free interactive quizzes for every skill level.",
  alternates: {
    canonical: "https://marketing-academy-roan.vercel.app/quizzes",
  },
};

const hoverCSS = `.quiz-card:hover { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 5%, var(--card)); transform: translateY(-2px); }
.quiz-cat-link:hover { color: var(--accent); }`;

export default function QuizzesPage() {
  // Build a map: category -> list of {slug, title, count}
  const quizKeys = Object.keys(QUIZZES);

  const categoryData = CATEGORIES.map((cat) => {
    const lessons = cat.lessons
      .map((lesson) => {
        const key = `${cat.slug}/${lesson.slug}`;
        const qs = QUIZZES[key];
        if (!qs || qs.length === 0) return null;
        return {
          slug: lesson.slug,
          title: lesson.title,
          count: qs.length,
          href: `/learn/${cat.slug}/${lesson.slug}`,
        };
      })
      .filter(Boolean) as { slug: string; title: string; count: number; href: string }[];

    return {
      ...cat,
      quizLessons: lessons,
      totalQuestions: lessons.reduce((s, l) => s + l.count, 0),
    };
  }).filter((c) => c.quizLessons.length > 0);

  const totalQuestions = quizKeys.reduce(
    (sum, k) => sum + (QUIZZES[k]?.length ?? 0),
    0
  );
  const totalLessons = quizKeys.length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{
              background: "rgba(99,102,241,0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(99,102,241,0.25)",
            }}>
            🧠 Test Your Knowledge
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Marketing Quizzes
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8">
            Reinforce what you learn. Every quiz is tied directly to a lesson — finish reading, then test yourself immediately.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "Total Questions", value: totalQuestions.toLocaleString() },
              { label: "Lessons with Quizzes", value: totalLessons },
              { label: "Categories Covered", value: categoryData.length },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center px-6 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] min-w-[140px]">
                <span className="text-3xl font-bold text-[var(--accent)]">{s.value}</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-14 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <h2 className="text-lg font-semibold mb-4">How quizzes work</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { emoji: "📖", step: "1. Open any lesson", desc: "Click any lesson link below to navigate to that lesson." },
              { emoji: "📜", step: "2. Read the lesson", desc: "Work through the content at your own pace." },
              { emoji: "✅", step: "3. Take the quiz", desc: "Scroll to the bottom — the quiz appears automatically below the lesson content." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <span className="text-2xl shrink-0">{s.emoji}</span>
                <div>
                  <div className="font-medium text-sm">{s.step}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories grid */}
        <div className="space-y-10">
          {categoryData.map((cat) => (
            <div key={cat.slug}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold">{cat.title}</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {cat.quizLessons.length} lesson{cat.quizLessons.length !== 1 ? "s" : ""} &middot; {cat.totalQuestions} questions
                  </p>
                </div>
                <Link
                  href={`/learn/${cat.slug}`}
                  className="quiz-cat-link ml-auto text-xs text-[var(--muted-foreground)] transition-colors"
                >
                  Browse all {cat.title} lessons &rarr;
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.quizLessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={lesson.href}
                    className="quiz-card group flex items-start justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200"
                  >
                    <div className="min-w-0">
                      <div className="text-sm font-medium line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                        {lesson.title}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)] mt-1">
                        {lesson.count} question{lesson.count !== 1 ? "s" : ""}
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        color: "var(--accent)",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    >
                      Quiz
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center py-12 rounded-2xl border border-[var(--accent)]/30"
          style={{ background: "rgba(99,102,241,0.05)" }}>
          <h2 className="text-2xl font-bold mb-2">Start learning</h2>
          <p className="text-[var(--muted-foreground)] mb-6 max-w-md mx-auto">
            Pick any topic to begin. Quizzes unlock at the bottom of every lesson.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
          >
            Browse All Topics
          </Link>
        </div>
      </div>
    </>
  );
}
