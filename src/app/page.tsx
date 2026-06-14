import Link from "next/link";
import { CATEGORIES, flatLessons } from "@/lib/curriculum";
import { ArrowRight, BookOpen, Layers, Zap } from "lucide-react";

export default function HomePage() {
  const totalLessons = flatLessons().length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] text-sm text-[var(--muted-foreground)] mb-6">
            <Zap size={14} className="text-[var(--accent)]" />
            {totalLessons} lessons · {CATEGORIES.length} categories · 100% free
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Learn Marketing
            <span className="block text-[var(--accent)]">from Scratch to Advanced</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto leading-relaxed">
            SEO, paid ads, growth, social, email, analytics, AI tools — every discipline explained in plain English with real examples, diagrams, and free resources.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/learn/fundamentals"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
            >
              <BookOpen size={16} />
              Start from the Basics
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/learn"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors font-medium"
            >
              <Layers size={16} />
              Browse All Topics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]/50">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-[var(--border)] text-center">
          <div className="px-4">
            <p className="text-2xl font-bold">{totalLessons}+</p>
            <p className="text-sm text-[var(--muted-foreground)]">Lessons</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-bold">{CATEGORIES.length}</p>
            <p className="text-sm text-[var(--muted-foreground)]">Categories</p>
          </div>
          <div className="px-4">
            <p className="text-2xl font-bold">Free</p>
            <p className="text-sm text-[var(--muted-foreground)]">Always</p>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3">What You&apos;ll Learn</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
            Each category goes Beginner → Intermediate → Advanced. Start anywhere, or follow the full path.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
              <div className="relative">
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="font-semibold mb-1">{cat.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-3 line-clamp-2">
                  {cat.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {cat.lessons.length} lessons
                  </span>
                  <ArrowRight size={14} className="text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--muted)]/50 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">How to Use This Site</h2>
          <p className="text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
            No account. No paywall. No dark patterns. Just solid marketing knowledge.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { step: "1", title: "Pick a Category", desc: "Start with Marketing Fundamentals if you're new, or jump to the channel you work on today." },
              { step: "2", title: "Follow the Path", desc: "Each category runs Beginner → Intermediate → Advanced. Complete in order, or browse freely." },
              { step: "3", title: "Use the Resources", desc: "Every lesson links to free blogs, official docs, and YouTube videos so you can go deeper." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] flex items-center justify-center text-sm font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to become a marketer?</h2>
        <p className="text-[var(--muted-foreground)] mb-8">Start with the basics and go at your own pace.</p>
        <Link
          href="/learn/fundamentals/what-is-marketing"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
        >
          Lesson 1: What Marketing Actually Is
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
