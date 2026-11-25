import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--foreground)] font-serif text-balance">
            Three problems most marketers hit
          </h2>
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            Each one links to a lesson that walks you through the fix.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Feature Story */}
          <article className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between sm:min-h-[336px] group hover:border-[var(--accent)] transition-colors">
            <div>
              <span className="inline-block font-data text-xs text-[var(--accent)] mb-5 tabular-nums">
                01 · Positioning
              </span>
              <h3 className="text-2xl sm:text-4xl font-medium text-[var(--foreground)] tracking-tight leading-tight max-w-lg mb-4">
                Your product is good. So why don&apos;t people get it?
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed max-w-md font-ui-sans">
                Usually it&apos;s positioning: who it&apos;s for, and what it beats. April Dunford&apos;s
                five-part method shows you how to work that out.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/learn/fundamentals/positioning"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                <span>Read the positioning lesson</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </article>

          {/* Side Mini Stories */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <article className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between flex-1 group hover:border-[var(--accent)] transition-colors">
              <div>
                <span className="font-data text-xs text-[var(--accent)] tabular-nums">
                  02 · Conversion
                </span>
                <h3 className="text-xl font-medium text-[var(--foreground)] tracking-tight my-2 group-hover:text-[var(--accent)] transition-colors">
                  What makes a landing page easier to say yes to?
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  Small snags lose sign-ups: a vague headline, one form field too many, a button that feels risky. Learn how to find them on your own page.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/learn/cro/friction-audit"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  <span>Run a friction audit</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </article>

            <article className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)] flex flex-col justify-between flex-1 group hover:border-[var(--accent)] transition-colors">
              <div>
                <span className="font-data text-xs text-[var(--accent)] tabular-nums">
                  03 · Retention
                </span>
                <h3 className="text-xl font-medium text-[var(--foreground)] tracking-tight my-2 group-hover:text-[var(--accent)] transition-colors">
                  Getting the first sale is the easy part
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  A retention curve tells you whether customers come back. Learn to read one and spot where people drop off.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/learn/growth/retention-cohorts"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  <span>Read the retention lesson</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
