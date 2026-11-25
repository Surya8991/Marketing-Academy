"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight font-serif leading-tight text-[var(--foreground)]">
              Start with lesson one
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-foreground)] leading-relaxed font-ui-sans max-w-lg">
              It&apos;s called &ldquo;What Marketing Actually Is&rdquo;. No account, no email. Just
              start reading.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <BookOpen size={16} strokeWidth={1.5} />
              <span>Start at Lesson 1</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link
              href="/tracks"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium text-sm hover:border-[var(--accent)] transition-colors"
            >
              <Compass size={16} strokeWidth={1.5} />
              <span>Browse all tracks</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
