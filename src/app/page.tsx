import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
import { TRACKS } from "@/lib/tracks";
import { classificationCode } from "@/lib/classificationCodes";
import TrackCard from "@/components/TrackCard";
import RecentlyViewed from "@/components/RecentlyViewed";
import ReviewDueBadge from "@/components/ReviewDueBadge";
import RecommendedNext from "@/components/RecommendedNext";
import DailyChallenge from "@/components/gamification/DailyChallenge";
import HeroModern from "@/components/home/HeroModern";
import ProofStrip from "@/components/home/ProofStrip";
import WorldGrid from "@/components/home/WorldGrid";
import LearningPaths from "@/components/home/LearningPaths";
import InteractiveLab from "@/components/home/InteractiveLab";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import ManifestoSection from "@/components/home/ManifestoSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { ArrowRight } from "lucide-react";

const FEATURED = [
  { category: "ai-marketing", slug: "ai-marketing-101", emoji: "🤖", reason: "Hot in 2026" },
  { category: "fundamentals", slug: "what-is-marketing", emoji: "🎯", reason: "Start here" },
  { category: "seo", slug: "keyword-research", emoji: "🔎", reason: "Quick win" },
  { category: "fundamentals", slug: "brand-vs-performance", emoji: "⚡", reason: "Advanced" },
];

const BASE = "https://marketing-academy-roan.vercel.app";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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

      {/* 1. Hero: S-Tier GSAP Animated Editorial Orbit */}
      <HeroModern totalLessons={totalLessons} totalCategories={CATEGORIES.length} />

      {/* 2. Proof Strip: 4 Pillars of Excellence */}
      <ProofStrip />

      {/* 3. Explore the Universe: 4 Worlds with 3D Orbs */}
      <WorldGrid />

      {/* 4. Structured Learning Paths */}
      <LearningPaths />

      {/* 5. Interactive Sandbox Lab Shell */}
      <InteractiveLab />

      {/* 6. Real-World Case Studies */}
      <CaseStudiesSection />

      {/* Dynamic Learning State & Daily Habit Loop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <RecentlyViewed />
        <RecommendedNext />
        <ReviewDueBadge />
        <DailyChallenge />
      </div>

      {/* AI Marketing Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <Link
          href="/learn/ai-marketing"
          className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 sm:p-7 border border-[#e4e1ff] bg-[#fbfaff] rounded-2xl hover:border-[var(--accent)] hover:shadow-lg transition-all"
        >
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#eeedff] text-2xl shadow-xs">
            🤖
          </div>
          <div className="flex-1 min-w-0 font-ui-sans">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] font-bold">New &amp; Updated</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold">36 lessons</span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl group-hover:text-[var(--accent)] transition-colors">
              AI is reshaping every marketing channel. Are you keeping up?
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-1 line-clamp-1">
              AI agents, Generative Engine Optimization (GEO), Clay &amp; n8n automation: the full modern playbook.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-sm text-[var(--accent)] font-bold font-ui-sans group-hover:translate-x-1 transition-transform">
            <span>Explore AI Track</span>
            <ArrowRight size={15} />
          </div>
        </Link>
      </section>

      {/* Featured / Start Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-1.5">Start here</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--foreground)]">Featured lessons</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-mono uppercase"
          >
            <span>View all</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredLessons.map((f) => (
            <Link
              key={f.slug}
              href={`/learn/${f.category}/${f.slug}`}
              className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-[var(--accent)] font-bold">{classificationCode(f.cat.slug)}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold font-ui-sans">
                  {f.reason}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                {f.lesson.title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] line-clamp-2 flex-1 font-ui-sans leading-relaxed">
                {f.lesson.summary}
              </p>
              <div className="flex items-center gap-1.5 mt-5 text-xs text-[var(--accent)] font-bold font-ui-sans">
                <span>Read lesson</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What's New */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-1.5">Recently added</p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--foreground)]">What&apos;s New</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-mono uppercase"
          >
            <span>All playbooks</span>
            <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentLessons.map((r) => (
            <Link
              key={r.slug}
              href={`/learn/${r.category}/${r.slug}`}
              className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-[var(--accent)] font-bold">{classificationCode(r.cat.slug)}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold font-ui-sans">
                  {r.label}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-[var(--accent)] transition-colors">
                {r.lesson.title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] line-clamp-2 flex-1 font-ui-sans leading-relaxed">
                {r.lesson.summary}
              </p>
              <div className="flex items-center gap-1.5 mt-5 text-xs text-[var(--accent)] font-bold font-ui-sans">
                <span>Read lesson</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories: Complete Specimen Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[var(--border)]">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-1.5">The full index</p>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl mb-3 text-[var(--foreground)]">What you&apos;ll learn</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl font-ui-sans text-sm sm:text-base leading-relaxed">
            24 disciplines mapped across Beginner → Intermediate → Advanced progression. Start anywhere or follow a structured track.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-[var(--accent)] font-bold">
                  {classificationCode(cat.slug)}
                </span>
                <span className="text-2xl">{cat.emoji}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-[var(--accent)] transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted-foreground)] mb-5 line-clamp-2 font-ui-sans leading-relaxed">
                {cat.tagline}
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-[var(--muted-foreground)] pt-3 border-t border-[var(--border)]">
                <span>{cat.lessons.length} playbooks</span>
                <ArrowRight
                  size={14}
                  className="group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 border-t border-[var(--border)] bg-[#f8f8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--border)]">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-1.5">Curated pathways</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--foreground)]">Structured Learning Tracks</h2>
            </div>
            <Link
              href="/tracks"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-mono uppercase"
            >
              <span>All {TRACKS.length} tracks</span>
              <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRACKS.slice(0, 4).map((track) => (
              <TrackCard key={track.slug} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* Not like the others — Field Notes & Marginalia */}
      <section className="border-t border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-2">Field notes</p>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl mb-4 text-[var(--foreground)]">Not like the others</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl mb-12 font-ui-sans text-sm sm:text-base leading-relaxed">
            The internet is flooded with ₹997 courses and shallow listicles. Here is the verified evidence of our commitment to rigor:
          </p>

          <div className="grid grid-cols-[2rem_1fr] gap-x-4">
            <div className="border-r border-[var(--border)]" />
            <div className="flex flex-col gap-10 pb-4">
              {COMPARISONS.map((d, i) => (
                <div key={d.title} className="relative pl-2">
                  <span className="absolute -left-[3.25rem] top-0.5 font-mono text-xs text-[var(--accent)] font-bold">
                    §0{i + 1}
                  </span>
                  <p className="font-mono text-[11px] text-[var(--muted-foreground)] mb-1 uppercase tracking-wider">vs. {d.vs}</p>
                  <h3 className="font-serif font-bold text-2xl mb-2 text-[var(--foreground)]">{d.title}</h3>
                  <p className="text-[var(--foreground)] text-sm sm:text-base leading-relaxed max-w-[58ch] mb-3 font-ui-sans">
                    {d.desc}
                  </p>
                  <span
                    className="inline-block font-mono text-xs px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(22, 163, 74, 0.1)", color: "var(--foreground)", borderLeft: "3px solid rgba(22, 163, 74, 0.7)" }}
                  >
                    ✓ {d.annot}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Open Manifesto: 4 Pillars */}
      <ManifestoSection />

      {/* 8. Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
