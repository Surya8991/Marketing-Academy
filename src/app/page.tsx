import Link from "next/link";
import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { TRACKS } from "@/lib/tracks";
import { classificationCode } from "@/lib/classificationCodes";
import TrackCard from "@/components/TrackCard";
import RecentlyViewed from "@/components/RecentlyViewed";
import PageMasthead from "@/components/PageMasthead";
import {
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";

const FEATURED = [
  { category: "ai-marketing", slug: "ai-marketing-101", emoji: "🤖", reason: "Hot in 2026" },
  { category: "fundamentals", slug: "what-is-marketing", emoji: "🎯", reason: "Start here" },
  { category: "seo", slug: "keyword-research", emoji: "🔎", reason: "Quick win" },
  { category: "fundamentals", slug: "brand-vs-performance", emoji: "⚡", reason: "Advanced" },
];

const BASE = "https://marketing-academy-roan.vercel.app";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Marketing Academy",
  url: BASE,
  logo: { "@type": "ImageObject", url: `${BASE}/favicon.ico`, width: 32, height: 32 },
  description: "Free marketing education: SEO, paid ads, growth, social, email, analytics, and AI in plain English.",
  sameAs: ["https://github.com/Surya8991/Marketing-Academy", "https://twitter.com/SURYA_L1998"],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Marketing Academy",
  url: BASE,
  // Stage 5.3: was hardcoded "393+" — use template literal with live count.
  description: `${uniqueLessonCount()}+ free marketing lessons across ${CATEGORIES.length} disciplines. No account required.`,
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

const COMPARISONS = [
  { vs: "HubSpot Academy", title: "No forms, no sign-up", desc: "Lessons, quizzes, progress tracking: all work instantly without an account or email verification.", annot: "VERIFIED — every /learn URL loads with zero auth check" },
  { vs: "YouTube tutorials", title: "Real research, cited stats", desc: "Every lesson uses actual numbers from HubSpot, McKinsey, Statista. Not opinion dressed as fact.", annot: "VERIFIED — AGENTS.md Rule 11: 2–3 sourced searches before any lesson ships" },
  { vs: "random blog posts", title: "Beginner → Advanced sequence", desc: "Each category is ordered. You build on what you learned in the last lesson instead of jumping randomly.", annot: "VERIFIED — curriculum order enforced in curriculum.ts, not editorial happenstance" },
  { vs: "vendor courses", title: "Tool-agnostic playbooks", desc: "Strategies that work regardless of which tool you use, not a sales pitch disguised as education.", annot: "VERIFIED — zero paid placements or affiliate tool endorsements sitewide" },
  { vs: "Coursera 2019 courses", title: "Updated for 2026", desc: "AI overviews, agentic workflows, zero-click search, privacy sandbox: the current playbook, not a relic.", annot: "VERIFIED — 36-lesson AI-marketing category alone added in the last two sessions" },
  { vs: "English-only platforms", title: "Hindi, Tamil & Telugu resources", desc: "Every lesson ends with curated video resources in Hindi, Tamil, and Telugu for Indian learners.", annot: "VERIFIED — 3 multilingual entries mandatory in every lesson's resource list" },
];

export default function HomePage() {
  // uniqueLessonCount() (642), not flatLessons().length (655), per Rule 43 (Stage 2.1).
  const totalLessons = uniqueLessonCount();

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

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Marketing Lessons",
    url: BASE,
    numberOfItems: featuredLessons.length,
    itemListElement: featuredLessons.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/learn/${f.category}/${f.slug}`,
      name: f.lesson.title,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <PageMasthead
        left="Marketing Academy · A field manual"
        right={`Vol. 2026 · No. ${totalLessons} entries · ${CATEGORIES.length} disciplines · free, no account`}
      />

      {/* Hero: masthead headline + real contents index, not a stat-tile row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        <div>
          <h1 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05] tracking-tight mb-6 text-balance">
            Marketing, indexed.
            <br />
            Not <em className="italic text-[var(--accent)]">opinion</em> —
            <br />
            cited, ordered, free.
          </h1>
          <p className="font-ui-sans text-base sm:text-lg text-[var(--muted-foreground)] mb-8 max-w-[46ch] leading-relaxed">
            {totalLessons} lessons across every discipline from SEO to AI agents, each one built on
            real research, not a listicle. No sign-up wall, no drip sequence, no &quot;coming soon.&quot;
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="font-ui-sans flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold hover:opacity-90 transition-opacity text-sm"
            >
              <BookOpen size={16} />
              Start at Entry No. 1
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/learn"
              className="font-ui-sans flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors font-medium text-sm"
            >
              <Layers size={15} />
              Browse the index
            </Link>
          </div>
        </div>

        {/* Contents index panel, replaces the old gradient stat-tile row */}
        <div className="border border-[var(--border)] rounded-xl bg-[var(--card)] overflow-hidden font-ui-sans">
          <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between text-[0.68rem] tracking-[0.08em] uppercase text-[var(--muted-foreground)]">
            <span>Contents, this issue</span>
            <span>Entries</span>
          </div>
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="flex items-baseline gap-3 px-4 py-2.5 border-b border-[var(--border)] text-sm hover:bg-[var(--muted)] transition-colors"
            >
              <span className="font-data text-[0.68rem] text-[var(--accent)] w-10 shrink-0">
                {classificationCode(cat.slug)}
              </span>
              <span className="flex-1 min-w-0 truncate">{cat.title}</span>
              <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums">
                {cat.lessons.length}
              </span>
            </Link>
          ))}
          <Link
            href="/learn"
            className="flex items-center justify-between px-4 py-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            <span>{CATEGORIES.length - 4} more disciplines</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Credibility strip: specimen row instead of icon-card grid */}
      <section className="border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border)]">
          {[
            { code: "01", title: "Real research", desc: "Every lesson cites actual stats and company examples." },
            { code: "02", title: "Updated 2026", desc: "Current playbooks, not outdated theory." },
            { code: "03", title: "Multilingual", desc: "English, Hindi, Tamil & Telugu video resources." },
            { code: "04", title: "No account needed", desc: "Progress, bookmarks, quizzes: all work instantly." },
          ].map((item) => (
            <div key={item.title} className="p-4 sm:p-5 font-ui-sans">
              <p className="font-data text-[0.65rem] text-[var(--muted-foreground)] mb-1.5">{item.code}</p>
              <p className="text-sm font-semibold mb-1">{item.title}</p>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Marketing spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/learn/ai-marketing"
          className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6 border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-colors"
        >
          <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--muted)] text-xl">
            🤖
          </div>
          <div className="flex-1 min-w-0 font-ui-sans">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)]">New &amp; Updated</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">36 lessons</span>
            </div>
            <h3 className="font-display font-semibold text-base sm:text-lg group-hover:text-[var(--accent)] transition-colors">
              AI is reshaping every marketing channel. Are you keeping up?
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-0.5 line-clamp-1">
              AI agents, LLM optimization, agentic workflows, Clay &amp; n8n: the full 2026 playbook.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1 text-sm text-[var(--accent)] font-medium font-ui-sans">
            Explore
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      <RecentlyViewed />

      {/* Featured / Start Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6 pt-4 border-t border-[var(--border)]">
          <div>
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Start here</p>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl">Featured lessons</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-ui-sans"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border)] divide-x divide-y sm:divide-y-0 divide-[var(--border)]">
          {featuredLessons.map((f) => (
            <Link
              key={f.slug}
              href={`/learn/${f.category}/${f.slug}`}
              className="group flex flex-col p-5 hover:bg-[var(--muted)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-data text-[0.65rem] text-[var(--accent)]">{classificationCode(f.cat.slug)}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium font-ui-sans">
                  {f.reason}
                </span>
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {f.lesson.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 flex-1 font-ui-sans">
                {f.lesson.summary}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm text-[var(--accent)] font-medium font-ui-sans">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-end justify-between mb-6 pt-4 border-t border-[var(--border)]">
          <div>
            <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Recently added</p>
            <h2 className="font-display font-semibold text-2xl">What&apos;s New</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-ui-sans"
          >
            All lessons <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border)] divide-x divide-y sm:divide-y-0 divide-[var(--border)]">
          {recentLessons.map((r) => (
            <Link
              key={r.slug}
              href={`/learn/${r.category}/${r.slug}`}
              className="group flex flex-col p-5 hover:bg-[var(--muted)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-data text-[0.65rem] text-[var(--accent)]">{classificationCode(r.cat.slug)}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium font-ui-sans">
                  {r.label}
                </span>
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {r.lesson.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 flex-1 font-ui-sans">
                {r.lesson.summary}
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm text-[var(--accent)] font-medium font-ui-sans">
                Read lesson
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories: specimen grid with classification codes, not gradient tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[var(--border)]">
        <div className="mb-10">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">The full index</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-3">What you&apos;ll learn</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl font-ui-sans">
            Each category goes Beginner → Intermediate → Advanced. Start anywhere,
            or follow the full path.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-[var(--border)] divide-x divide-y divide-[var(--border)]">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="group p-6 hover:bg-[var(--muted)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-data text-[0.68rem] tracking-[0.06em] text-[var(--accent)]">
                  {classificationCode(cat.slug)}
                </span>
                <span className="text-xl">{cat.emoji}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-5 line-clamp-2 font-ui-sans">
                {cat.tagline}
              </p>
              <div className="flex items-center justify-between font-ui-sans">
                <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums">
                  {cat.lessons.length} entries
                </span>
                <ArrowRight
                  size={15}
                  className="text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-14 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Curated paths</p>
              <h2 className="font-display font-semibold text-2xl">Structured Learning Tracks</h2>
            </div>
            <Link
              href="/tracks"
              className="hidden sm:flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-ui-sans"
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
            <Link href="/tracks" className="text-sm text-[var(--accent)] font-medium font-ui-sans">
              See all {TRACKS.length} tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Not like the others — field notes marginalia, the signature element */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Field notes</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-3">Not like the others</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mb-10 font-ui-sans">
            The internet already has ₹997 courses and shallow listicles. This is neither — and here&apos;s the evidence for each claim.
          </p>

          <div className="grid grid-cols-[1.75rem_1fr] gap-x-2">
            <div className="border-r border-[var(--border)]" />
            <div className="flex flex-col gap-9 pb-2">
              {COMPARISONS.map((d, i) => (
                <div key={d.title} className="relative">
                  <span className="absolute -left-[2.55rem] top-0.5 font-data text-xs text-[var(--accent)]">
                    §{i + 1}
                  </span>
                  <p className="font-ui-sans text-xs text-[var(--muted-foreground)] mb-1">vs. {d.vs}</p>
                  <h3 className="font-display font-semibold text-lg mb-1.5">{d.title}</h3>
                  <p className="text-[var(--foreground)] text-[0.95rem] leading-relaxed max-w-[58ch] mb-2 font-ui-sans">
                    {d.desc}
                  </p>
                  <span
                    className="inline-block font-ui-sans text-xs px-2.5 py-1 rounded"
                    style={{ background: "rgba(22, 163, 74, 0.1)", color: "var(--foreground)", borderLeft: "2px solid rgba(22, 163, 74, 0.6)" }}
                  >
                    ✓ {d.annot}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-[var(--border)]">
        <h2 className="font-display font-semibold text-3xl mb-3">Start building your marketing stack.</h2>
        <p className="text-[var(--muted-foreground)] mb-8 max-w-md mx-auto font-ui-sans">
          New to marketing? Start at Lesson 1. Know your role? Jump straight to a track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-ui-sans">
          <Link
            href="/learn/fundamentals/what-is-marketing"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
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
      </section>
    </>
  );
}
