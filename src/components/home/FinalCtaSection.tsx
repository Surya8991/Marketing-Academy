"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-28 bg-[#25224b] text-white">
      {/* Abstract geometric orbital rings in background */}
      <div
        className="pointer-events-none absolute -top-40 -right-20 w-[480px] h-[480px] rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-56 -right-36 w-[620px] h-[620px] rounded-full border border-white/5"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight font-serif leading-tight">
              Start with lesson one.
            </h2>
            <p className="text-sm sm:text-base text-[#c2c0d5] leading-relaxed font-ui-sans max-w-lg">
              It&apos;s called &ldquo;What Marketing Actually Is&rdquo;. No account, no email. Just
              start reading.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#25224b] font-bold text-sm shadow-xl hover:bg-[#fafaf8] hover:-translate-y-0.5 transition-all"
            >
              <BookOpen size={16} />
              <span>Start at Lesson 1</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/tracks"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              <Compass size={16} />
              <span>Browse all tracks</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
