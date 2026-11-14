"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Compass, Flame, ShieldCheck } from "lucide-react";

type HeroProps = {
  totalLessons: number;
  totalCategories: number;
};

export default function HeroWarm({ totalLessons, totalCategories }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[var(--border)]">
      {/* Ambient background glow — soft, human, organic warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 dark:opacity-20"
      >
        <div className="h-[380px] w-[620px] rounded-full bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-amber-400/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Human Storytelling & Headline */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-xs text-xs font-medium text-[var(--foreground)] animate-in fade-in slide-in-from-top-1 duration-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Free · No sign-up wall · {totalLessons} Playbooks</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] text-balance">
              The marketing education you wish you had from{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Day One.
              </span>
            </h1>

            {/* Human-Centered Subtext */}
            <p className="font-ui-sans text-base sm:text-lg text-[var(--muted-foreground)] max-w-[52ch] leading-relaxed">
              Real company case studies, interactive CAC simulators, and proven playbooks from SEO
              to AI automation. Built like a thoughtful conversation with a smart friend, not a dry
              academic textbook.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/learn/fundamentals/what-is-marketing"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold hover:opacity-95 shadow-md shadow-[var(--accent)]/15 transition-all text-sm"
              >
                <BookOpen size={17} />
                <span>Start Learning (3-Min Read)</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tracks"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] text-[var(--foreground)] font-medium text-sm transition-colors shadow-xs"
              >
                <Compass size={16} className="text-[var(--accent)]" />
                <span>Explore 24 Learning Tracks</span>
              </Link>
            </div>

            {/* Community Proof & Reassurance */}
            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[var(--muted-foreground)] font-ui-sans">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500">★★★★★</span>
                <span className="font-medium text-[var(--foreground)]">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>No paywalls or upsells</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame size={14} className="text-orange-500" />
                <span>Daily streak habit tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile "Choose Your Journey" Interactive Showcase */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md shadow-lg shadow-black/5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] flex items-center gap-1.5">
                  <Sparkles size={13} />
                  <span>Choose Your Focus</span>
                </div>
                <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                  Pick a path
                </span>
              </div>

              {/* Persona Cards */}
              <div className="space-y-2.5">
                {[
                  {
                    emoji: "🚀",
                    role: "Solo Founder & Builder",
                    goal: "Get your first 100 paying customers without burning ad budget.",
                    href: "/tracks/solo-founder",
                    tag: "18 lessons",
                  },
                  {
                    emoji: "📈",
                    role: "Growth & Performance Lead",
                    goal: "Master unit economics, CAC/LTV, and high-ROAS paid acquisition.",
                    href: "/tracks/growth-marketing-mastery",
                    tag: "14 lessons",
                  },
                  {
                    emoji: "✍️",
                    role: "Copywriter & Creator",
                    goal: "Write landing page hooks and cold emails that actually convert.",
                    href: "/tracks/copywriting-mastery",
                    tag: "15 lessons",
                  },
                  {
                    emoji: "🤖",
                    role: "AI-First Marketer",
                    goal: "Automate outbound with Clay & n8n and optimize for Generative Search.",
                    href: "/tracks/ai-first-marketer",
                    tag: "36 lessons",
                  },
                ].map((item) => (
                  <Link
                    key={item.role}
                    href={item.href}
                    className="group block p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.emoji}</span>
                        <span className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors">
                          {item.role}
                        </span>
                      </div>
                      <span className="text-[0.68rem] px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)] line-clamp-1 pl-7">
                      {item.goal}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Bottom Quick Link */}
              <div className="pt-2 text-center">
                <Link
                  href="/learn"
                  className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Or browse the full {totalCategories} disciplines</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
