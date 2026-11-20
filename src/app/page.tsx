import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, uniqueLessonCount } from "@/lib/curriculum";
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

export default function HomePage() {
  const totalLessons = uniqueLessonCount();
  const aiLessonCount = CATEGORIES.find((c) => c.slug === "ai-marketing")?.lessons.length ?? 0;

  const featuredLessons = FEATURED.flatMap((f) => {
    const cat = CATEGORIES.find((c) => c.slug === f.category);
    const lesson = cat?.lessons.find((l) => l.slug === f.slug);
    if (!cat || !lesson) return [];
    return [{ ...f, cat, lesson }];
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
          className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 sm:p-7 border border-[var(--border)] bg-[var(--lav)] rounded-2xl hover:border-[var(--accent)] hover:shadow-lg transition-all"
        >
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--lav)] text-2xl shadow-xs">
            🤖
          </div>
          <div className="flex-1 min-w-0 font-ui-sans">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-bold">{aiLessonCount} lessons</span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl group-hover:text-[var(--accent)] transition-colors">
              Using AI in your marketing? Start here.
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-1 line-clamp-1">
              How to use AI agents, get cited in AI search answers (GEO), and automate outreach with Clay and n8n.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-sm text-[var(--accent)] font-bold font-ui-sans group-hover:translate-x-1 transition-transform">
            <span>See the lessons</span>
            <ArrowRight size={15} />
          </div>
        </Link>
      </section>

      {/* Featured / Start Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--border)]">
          <div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[var(--foreground)]">Good places to start</h2>
          </div>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors font-mono uppercase"
          >
            <span>View all</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Phones: swipeable row with the next card peeking; sm+: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0">
          {featuredLessons.map((f) => (
            <Link
              key={f.slug}
              href={`/learn/${f.category}/${f.slug}`}
              className="group flex flex-col shrink-0 w-[80%] snap-start sm:w-auto p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-3">
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

      {/* Categories: Complete Specimen Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[var(--border)]">
        <div className="mb-10">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl mb-3 text-[var(--foreground)]">All topics</h2>
          <p className="text-[var(--muted-foreground)] max-w-xl font-ui-sans text-sm sm:text-base leading-relaxed">
            {CATEGORIES.length} topics, each ordered from beginner to advanced. Start anywhere.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 border-t border-[var(--border)]">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              title={cat.tagline}
              className="group flex items-center gap-3 py-3.5 border-b border-[var(--border)] transition-colors"
            >
              <span className="text-xl shrink-0" aria-hidden="true">{cat.emoji}</span>
              <span className="font-display font-bold text-base flex-1 min-w-0 truncate group-hover:text-[var(--accent)] transition-colors">
                {cat.title}
              </span>
              <span className="font-mono text-xs text-[var(--muted-foreground)] tabular-nums shrink-0">
                {cat.lessons.length}
              </span>
              <ArrowRight
                size={14}
                className="shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
