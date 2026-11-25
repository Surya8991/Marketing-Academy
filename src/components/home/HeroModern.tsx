import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InteractiveLab from "@/components/home/InteractiveLab";

type HeroProps = {
  totalLessons: number;
  totalCategories: number;
};

export default function HeroModern({ totalLessons, totalCategories }: HeroProps) {
  return (
    <section className="pt-10 pb-14 sm:pt-16 sm:pb-20 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Lab-First Copy & Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-data text-xs text-[var(--accent)] tracking-[0.01em] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>Learn marketing by testing it</span>
            </p>

            <h1 className="font-serif font-medium text-4xl sm:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.06] text-[var(--foreground)]">
              Test the math before you spend
            </h1>

            <p className="font-ui-sans text-base text-[var(--muted-foreground)] max-w-[46ch] leading-relaxed">
              {totalLessons} plain-English lessons paired with live calculators, A/B teardowns, and quizzes. Free, no account needed.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <span>Browse {totalLessons} lessons</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="#role-tracks"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium text-sm hover:border-[var(--accent)] transition-colors"
              >
                <span>Pick your role</span>
              </a>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 pt-2 text-xs text-[var(--muted-foreground)]">
              <div>
                <strong className="block text-xl font-medium text-[var(--foreground)] font-display tabular-nums">
                  {totalLessons}
                </strong>
                <span>Lessons</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div>
                <strong className="block text-xl font-medium text-[var(--foreground)] font-display tabular-nums">
                  {totalCategories}
                </strong>
                <span>Topics</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div>
                <strong className="block text-xl font-medium text-[var(--foreground)] font-display tabular-nums">
                  100%
                </strong>
                <span>Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Sandbox Instrument */}
          <div className="lg:col-span-7">
            <InteractiveLab embedded />
          </div>
        </div>
      </div>
    </section>
  );
}
