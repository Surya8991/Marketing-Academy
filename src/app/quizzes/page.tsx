import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";
import { QUIZZES } from "@/lib/quizzes";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Quizzes | Test Your Knowledge | Marketing Academy",
  description:
    "Test your marketing knowledge with 1,000+ quiz questions across 15 categories — SEO, Paid Ads, Growth, Email, Analytics, AI Marketing and more. Free interactive quizzes.",
  alternates: {
    canonical: "https://marketing-academy-roan.vercel.app/quizzes",
  },
};

const hoverCSS = `.quiz-cat-card { transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
.quiz-cat-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
.quiz-cat-card:hover .cat-arrow { transform: translateX(3px); }
.cat-arrow { transition: transform 0.2s; }`;

export default function QuizzesPage() {
  const quizKeys = Object.keys(QUIZZES);

  // Build category-level data
  const categoryData = CATEGORIES.map((cat) => {
    const lessons = cat.lessons.filter((l) => {
      const qs = QUIZZES[`${cat.slug}/${l.slug}`];
      return qs && qs.length > 0;
    });
    const totalQuestions = lessons.reduce((sum, l) => {
      return sum + (QUIZZES[`${cat.slug}/${l.slug}`]?.length ?? 0);
    }, 0);
    // First lesson with a quiz to use as entry point
    const firstLesson = lessons[0];
    return {
      ...cat,
      lessonsWithQuiz: lessons.length,
      totalQuestions,
      firstLessonSlug: firstLesson?.slug ?? null,
    };
  }).filter((c) => c.lessonsWithQuiz > 0);

  const totalQuestions = quizKeys.reduce(
    (sum, k) => sum + (QUIZZES[k]?.length ?? 0),
    0
  );
  const totalLessons = quizKeys.length;
  const totalCategories = categoryData.length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{
              background: "rgba(99,102,241,0.12)",
              color: "var(--accent)",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            🧠 Test Your Knowledge
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Marketing Quizzes
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10">
            Every lesson ends with a quiz. Get 100% to unlock &ldquo;Mark as Complete&rdquo; and prove you know your stuff.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { value: totalQuestions.toLocaleString(), label: "Total Questions" },
              { value: totalLessons, label: "Lessons with Quizzes" },
              { value: totalCategories, label: "Categories" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-6 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] min-w-[140px]"
              >
                <span className="text-3xl font-bold text-[var(--accent)]">{s.value}</span>
                <span className="text-sm text-[var(--muted-foreground)] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works banner */}
        <div className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <h2 className="text-base font-semibold mb-4">How quizzes work</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { emoji: "📖", title: "Open a lesson", body: "Pick any category below and open a lesson." },
              { emoji: "📝", title: "Read the lesson", body: "Work through the content at your own pace." },
              { emoji: "🏆", title: "Pass the quiz", body: "Score 100% on the quiz at the bottom to mark the lesson complete." },
            ].map((s) => (
              <div key={s.title} className="flex gap-3">
                <span className="text-2xl shrink-0">{s.emoji}</span>
                <div>
                  <div className="font-medium text-sm">{s.title}</div>
                  <div className="text-sm text-[var(--muted-foreground)] mt-0.5">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category cards grid */}
        <h2 className="text-xl font-bold mb-6">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="quiz-cat-card flex flex-col p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0"
                    style={{ background: "rgba(99,102,241,0.08)" }}
                  >
                    {cat.emoji}
                  </span>
                  <div>
                    <div className="font-semibold text-sm leading-snug">{cat.title}</div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-0.5">
                      {cat.lessonsWithQuiz} lesson{cat.lessonsWithQuiz !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  className="cat-arrow shrink-0 mt-1 text-[var(--muted-foreground)]"
                />
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-3 mt-auto">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.10)",
                    color: "var(--accent)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  {cat.totalQuestions} questions
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  {cat.totalQuestions > 0
                    ? `~${Math.ceil(cat.totalQuestions * 0.5)} min`
                    : ""}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center py-12 rounded-2xl border border-[var(--accent)]/30"
          style={{ background: "rgba(99,102,241,0.04)" }}
        >
          <p className="text-2xl font-bold mb-2">Ready to start?</p>
          <p className="text-[var(--muted-foreground)] mb-6 max-w-md mx-auto text-sm">
            Pick a category above, open any lesson, read it, then take the quiz at the bottom.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
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
