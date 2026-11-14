"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--background)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
              Ideas in the real world
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif">
              Understand the thinking<br />
              <span className="font-normal italic">behind the growth.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            Move beyond superficial theory. Explore the decisions, experiments, and customer insights
            that turn small startups into market leaders.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Feature Story */}
          <article className="lg:col-span-7 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-[#e9f2ff] border border-[#d6e7ff] flex flex-col justify-between min-h-[380px] group hover:shadow-xl transition-all">
            {/* Giant watermark arrow */}
            <div
              className="pointer-events-none absolute -top-8 -right-4 font-serif text-[180px] font-bold text-[#4f46e5]/10 select-none group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
            >
              ↗
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#4f46b8] font-mono text-[11px] uppercase tracking-wider mb-6 shadow-xs">
                Case Study / Positioning
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight leading-tight max-w-lg mb-4">
                Great marketing starts with a sharper point of view.
              </h3>
              <p className="text-sm sm:text-base text-[#656a7d] leading-relaxed max-w-md font-ui-sans">
                Explore how April Dunford&apos;s positioning framework, differentiated messaging, and acute
                customer segmentation combine to outflank entrenched competitors.
              </p>
            </div>

            <div className="relative z-10 pt-6">
              <Link
                href="/learn/brand-strategy/positioning-statement"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4f46e5] group-hover:gap-3 transition-all"
              >
                <span>Read the positioning breakdown</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>

          {/* Side Mini Stories */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mini 1 */}
            <article className="p-7 rounded-3xl bg-[var(--paper)] border border-[var(--border)] flex flex-col justify-between flex-1 group hover:border-[#c9c6ff] hover:shadow-lg transition-all">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  Experiment / Conversion
                </span>
                <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight my-2 group-hover:text-[var(--accent)] transition-colors">
                  What makes a landing page easier to say yes to?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  Break down the psychological micro-friction and cognitive load factors that cause 97% of visitors to bounce without reading.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/learn/cro/friction-points"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore friction teardown</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>

            {/* Mini 2 */}
            <article className="p-7 rounded-3xl bg-[var(--paper)] border border-[var(--border)] flex flex-col justify-between flex-1 group hover:border-[#c9c6ff] hover:shadow-lg transition-all">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  Field Note / Retention
                </span>
                <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight my-2 group-hover:text-[var(--accent)] transition-colors">
                  Growth doesn&apos;t end at the first conversion.
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  Understand product-led onboarding and cohort retention curves that turn one-time buyers into self-perpetuating acquisition loops.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/learn/growth/retention-flywheels"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore retention flywheels</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
