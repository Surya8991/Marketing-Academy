import Link from "next/link";
import { CATEGORIES, flatLessons } from "@/lib/curriculum";
import { TRACKS } from "@/lib/tracks";
import TrackCard from "@/components/TrackCard";
import RecentlyViewed from "@/components/RecentlyViewed";
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
  { category: "ai-marketing", slug: "ai-marketing-101", emoji: "🤖", reason: "🔥 Hot in 2026" },
  { category: "fundamentals", slug: "what-is-marketing", emoji: "🎯", reason: "Start here" },
  { category: "seo", slug: "keyword-research", emoji: "🔎", reason: "Quick win" },
  { category: "fundamentals", slug: "brand-vs-performance", emoji: "⚡", reason: "Advanced" },
];

const PATHS = [
  {
    title: "For B2B marketers",
    href: "/tracks/b2b-marketer",
    icon: <Briefcase size={18} />,
    desc: "Pipeline, ABM, demand gen, LinkedIn ads, attribution.",
    topics: ["fundamentals", "paid-ads", "analytics", "content"],
  },
  {
    title: "For solo founders",
    href: "/tracks/solo-founder",
    icon: <Rocket size={18} />,
    desc: "Learn just enough to ship growth with no team.",
    topics: ["fundamentals", "seo", "growth", "ai-marketing"],
  },
  {
    title: "For agencies & freelancers",
    href: "/tracks/freelancer-agency",
    icon: <Compass size={18} />,
    desc: "Master every channel you'll be asked to deliver.",
    topics: ["seo", "paid-ads", "social", "email"],
  },
  {
    title: "For content creators",
    href: "/tracks/content-creator",
    icon: <Sparkles size={18} />,
    desc: "Build an audience with SEO, social, email, and great copy.",
    topics: ["content", "social", "copywriting", "seo"],
  },
];

const BASE = "https://marketing-academy-roan.vercel.app";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Marketing Academy",
  url: BASE,
  logo: `${BASE}/favicon.ico`,
  description: "Free marketing education: SEO, paid ads, growth, social, email, analytics, and AI in plain English.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Marketing Academy",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const RECENT_LESSONS = [
  { category: "fundamentals", slug: "plg-fundamentals", emoji: "🚀", label: "New" },
  { category: "social", slug: "short-form-video-algorithms", emoji: "🎬", label: "New" },
  { category: "analytics", slug: "product-vs-marketing-analytics", emoji: "📊", label: "New" },
  { category: "email", slug: "abm-email-sequences", emoji: "📧", label: "New" },
];

export default function HomePage() {
  const totalLessons = flatLessons().length;

  const featuredLessons = FEATURED.flatMap((f) => {
    const cat = CATEGORIES.find((c) => c.slug === f.category);
    const lesson = cat?.lessons.find((l) => l.slug === f.slug);
    if (!cat || !lesson) return [];
    return [{ ...f, cat, lesson }];
  });

  const recentLessons = RECENT_LESSONS.flatMap((r) => {
    const cat = CATEGORIES.find((c) => c.slug === r.category);
    const lesson = cat?.lessons.find((l) => l.slug === r.slug);
    if (!cat || !lesson) return [];
    return [{ ...r, cat, lesson }];
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
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
            Every marketing discipline, from SEO and paid ads to AI agents and growth loops,
            explained in plain English with real research, Mermaid diagrams, and the 2026 playbook.
            Free forever.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/20 text-base"
            >
              <BookOpen size={18} />
              Start from the basics
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/learn"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors font-medium text-sm"
            >
              <Layers size={15} />
              Browse all topics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[var(--border)] bg-[var(--muted)]/50">
        <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--border)] text-center">
          <div className="px-4">
            <p className="text-2xl sm:text-3xl font-bold">{totalLessons}+</p>
            <p className="text-sm text-[var(--muted-foreground)]">Lessons</p>
          </div>
          <div className="px-4">
            <p className="text-2xl sm:text-3xl font-bold">{CATEGORIES.length}</p>
            <p className="text-sm text-[var(--muted-foreground)]">Disciplines</p>
          </div>
          <div className="px-4 col-span-1 max-sm:border-t max-sm:border-[var(--border)] max-sm:pt-4 max-sm:mt-4">
            <p className="text-2xl sm:text-3xl font-bold">{TRACKS.length}</p>
            <p className="text-sm text-[var(--muted-foreground)]">Learning Tracks</p>
          </div>
          <div className="px-4 max-sm:border-t max-sm:border-[var(--border)] max-sm:pt-4 max-sm:mt-4">
            <p className="text-2xl sm:text-3xl font-bold">0</p>
            <p className="text-sm text-[var(--muted-foreground)]">Paywalls</p>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "📚", title: "Real research", desc: "Every lesson cites actual stats and company examples." },
            { icon: "📅", title: "Updated 2026", desc: "Current playbooks, not outdated theory." },
            { icon: "🌏", title: "Multilingual", desc: "English, Hindi, Tamil & Telugu video resources." },
            { icon: "🔓", title: "No account needed", desc: "Progress, bookmarks, quizzes: all work instantly." },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-1 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <span className="text-xl mb-1">{item.icon}</span>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-[var(--muted-foreground)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Marketing spotlight */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/learn/ai-marketing"
          className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6 rounded-2xl border border-[var(--accent)]/40 bg-gradient-to-r from-[var(--accent)]/8 via-fuchsia-500/5 to-transparent hover:border-[var(--accent)]/70 hover:shadow-lg transition-all"
        >
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-2xl">
            🤖
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">New & Updated</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-medium">36 lessons</span>
            </div>
            <h3 className="font-bold text-base sm:text-lg group-hover:text-[var(--accent)] transition-colors">
              AI is reshaping every marketing channel. Are you keeping up?
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-0.5 line-clamp-1">
              AI agents, LLM optimization, agentic workflows, Clay & n8n: the full 2026 playbook.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1 text-sm text-[var(--accent)] font-semibold">
            Explore AI Marketing
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      <RecentlyViewed />

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

      {/* What's New */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1 text-[var(--accent)] text-sm font-medium">
              <Zap size={14} />
              Recently added
            </div>
            <h2 className="text-2xl font-bold">What&apos;s New</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            All lessons <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentLessons.map((r) => (
            <Link
              key={r.slug}
              href={`/learn/${r.category}/${r.slug}`}
              className="group flex flex-col p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{r.emoji}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                  {r.label}
                </span>
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mb-1">{r.cat.title}</p>
              <h3 className="font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {r.lesson.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 flex-1">
                {r.lesson.summary}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm text-[var(--accent)] font-medium">
                Read lesson
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
              All {TRACKS.length} tracks <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRACKS.slice(0, 4).map((track) => (
              <TrackCard key={track.slug} track={track} />
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <Link href="/tracks" className="text-sm text-[var(--accent)] font-medium">
              See all {TRACKS.length} tracks
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATHS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
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

      {/* Not like the others */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Not like the others</h2>
            <p className="text-[var(--muted-foreground)] max-w-xl mx-auto">
              The internet already has $997 courses and shallow listicles. This is neither.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "🔓",
                vs: "vs. HubSpot Academy",
                title: "No forms, no sign-up",
                desc: "Lessons, quizzes, progress tracking: all work instantly without an account or email verification.",
              },
              {
                icon: "📊",
                vs: "vs. YouTube tutorials",
                title: "Real research, cited stats",
                desc: "Every lesson uses actual numbers from HubSpot, McKinsey, Statista. Not opinion dressed as fact.",
              },
              {
                icon: "📈",
                vs: "vs. random blog posts",
                title: "Beginner → Advanced sequence",
                desc: "Each category is ordered. You build on what you learned in the last lesson instead of jumping randomly.",
              },
              {
                icon: "⚖️",
                vs: "vs. vendor courses",
                title: "Tool-agnostic playbooks",
                desc: "Strategies that work regardless of which tool you use, not a sales pitch disguised as education.",
              },
              {
                icon: "🗓️",
                vs: "vs. Coursera 2019 courses",
                title: "Updated for 2026",
                desc: "AI overviews, agentic workflows, zero-click search, privacy sandbox: the current playbook, not a relic.",
              },
              {
                icon: "🌏",
                vs: "vs. English-only platforms",
                title: "Hindi, Tamil & Telugu resources",
                desc: "Every lesson ends with curated video resources in Hindi, Tamil, and Telugu for Indian learners.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{d.icon}</span>
                  <span className="text-xs text-[var(--muted-foreground)] font-medium">{d.vs}</span>
                </div>
                <h3 className="font-semibold mb-1.5">{d.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/10 via-fuchsia-500/5 to-transparent p-10">
          <h2 className="text-3xl font-bold mb-3">Start building your marketing stack.</h2>
          <p className="text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
            New to marketing? Start at Lesson 1. Know your role? Jump straight to a track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--accent)]/20"
            >
              <BookOpen size={16} />
              Lesson 1: What Marketing Actually Is
            </Link>
            <Link
              href="/tracks"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] font-medium hover:border-[var(--accent)] transition-colors text-sm"
            >
              Pick a learning track
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
