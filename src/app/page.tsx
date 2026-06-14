import Link from "next/link";
import { CATEGORIES, flatLessons } from "@/lib/curriculum";
import { TRACKS } from "@/lib/tracks";
import TrackCard from "@/components/TrackCard";
import {
  ArrowRight,
  BookOpen,
  Layers,
  Zap,
  Sparkles,
  Compass,
  Briefcase,
  Rocket,
} from "lucide-react";

const FEATURED = [
  { category: "fundamentals", slug: "what-is-marketing", emoji: "🎯", reason: "Start here" },
  { category: "fundamentals", slug: "marketing-math", emoji: "🧮", reason: "Most useful" },
  { category: "seo", slug: "keyword-research", emoji: "🔎", reason: "Quick win" },
  { category: "ai-marketing", slug: "ai-marketing-101", emoji: "🤖", reason: "New & hot" },
];

const PATHS = [
  {
    title: "For B2B marketers",
    icon: <Briefcase size={18} />,
    desc: "Pipeline, ABM, demand gen, LinkedIn ads, attribution.",
    topics: ["fundamentals", "paid-ads", "analytics", "content"],
  },
  {
    title: "For solo founders",
    icon: <Rocket size={18} />,
    desc: "Learn just enough to ship growth with no team.",
    topics: ["fundamentals", "seo", "growth", "ai-marketing"],
  },
  {
    title: "For agencies & freelancers",
    icon: <Compass size={18} />,
    desc: "Master every channel you'll be asked to deliver.",
    topics: ["seo", "paid-ads", "social", "email"],
  },
];

export default function HomePage() {
  const totalLessons = flatLessons().length;

  const featuredLessons = FEATURED.map((f) => {
    const cat = CATEGORIES.find((c) => c.slug === f.category)!;
    const lesson = cat.lessons.find((l) => l.slug === f.slug)!;
    return { ...f, cat, lesson };
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(168,85,247,0.10),transparent)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted-foreground)] mb-6 shadow-sm">
            <Zap size={14} className="text-[var(--accent)]" />
            {totalLessons} lessons · {CATEGORIES.length} categories · 100% free
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Learn marketing
            <span className="block bg-gradient-to-r from-[var(--accent)] via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              the way it&apos;s actually done.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto leading-relaxed">
            SEO, paid ads, growth, social, email, analytics, AI — every discipline
            explained in plain English with real examples, diagrams, and the
            current 2025 playbook.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/20"
            >
              <BookOpen size={16} />
              Start from the basics
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/learn"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors font-medium"
            >
              <Layers size={16} />
              Browse all topics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]/50">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 divide-x divide-[var(--border)] text-center">
          <div className="px-4">
            <p className="text-2xl sm:text-3xl font-bold">{totalLessons}+</p>
            <p className="text-sm text-[var(--muted-foreground)]">Lessons</p>
          </div>
          <div className="px-4">
            <p className="text-2xl sm:text-3xl font-bold">{CATEGORIES.length}</p>
            <p className="text-sm text-[var(--muted-foreground)]">Categories</p>
          </div>
          <div className="px-4">
            <p className="text-2xl sm:text-3xl font-bold">Free</p>
            <p className="text-sm text-[var(--muted-foreground)]">Always</p>
          </div>
        </div>
      </section>

      {/* Featured / Start Here */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[var(--accent)] text-sm font-medium">
              <Sparkles size={14} />
              Start here
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured lessons</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredLessons.map((f) => (
            <Link
              key={f.slug}
              href={`/learn/${f.category}/${f.slug}`}
              className="group flex flex-col p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{f.emoji}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                  {f.reason}
                </span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mb-1">
                {f.cat.title}
              </p>
              <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {f.lesson.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 flex-1">
                {f.lesson.summary}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm text-[var(--accent)] font-medium">
                Read lesson
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">What you&apos;ll learn</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
            Each category goes Beginner → Intermediate → Advanced. Start anywhere,
            or follow the full path.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="group relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 hover:border-[var(--accent)] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              />
              <div className="relative">
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-5 line-clamp-2">
                  {cat.tagline}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--muted-foreground)] font-medium">
                    {cat.lessons.length} lessons
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Structured Learning Tracks</h2>
              <p className="text-[var(--muted-foreground)]">
                Follow a curated path built for your role.
              </p>
            </div>
            <Link
              href="/tracks"
              className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              All 7 tracks <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRACKS.slice(0, 4).map((track) => (
              <TrackCard key={track.slug} track={track} />
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <Link href="/tracks" className="text-sm text-[var(--accent)] font-medium">
              See all 7 tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Learning paths */}
      <section className="bg-[var(--muted)]/40 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3">Learning paths</h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              Not sure where to start? Pick the path that matches your role.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {PATHS.map((p) => (
              <Link
                key={p.title}
                href="/learn"
                className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3 text-[var(--accent)]">
                  {p.icon}
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    Path
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.topics.map((slug) => {
                    const cat = CATEGORIES.find((c) => c.slug === slug);
                    if (!cat) return null;
                    return (
                      <span
                        key={slug}
                        className="text-xs px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]"
                      >
                        {cat.emoji} {cat.title.split(" ")[0]}
                      </span>
                    );
                  })}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">How to use this site</h2>
          <p className="text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
            No account. No paywall. No dark patterns. Just solid marketing
            knowledge.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                step: "1",
                title: "Pick a category",
                desc: "Start with Fundamentals if you're new, or jump to the channel you work on today.",
              },
              {
                step: "2",
                title: "Follow the path",
                desc: "Each category runs Beginner → Intermediate → Advanced. Complete in order, or browse freely.",
              },
              {
                step: "3",
                title: "Use the resources",
                desc: "Every lesson links to free blogs, official docs, and videos so you can go deeper.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] flex items-center justify-center text-sm font-bold">
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
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 via-fuchsia-500/5 to-transparent p-10">
          <h2 className="text-3xl font-bold mb-4">Ready to become a marketer?</h2>
          <p className="text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
            Start with the basics and go at your own pace.
          </p>
          <Link
            href="/learn/fundamentals/what-is-marketing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/20"
          >
            Lesson 1: What Marketing Actually Is
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
