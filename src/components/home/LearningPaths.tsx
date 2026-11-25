"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { TRACKS } from "@/lib/tracks";

const ROLE_OPTIONS = [
  { label: "Solo Founder", slug: "solo-founder", level: "Beginner" },
  { label: "Growth Marketer", slug: "growth-marketing-mastery", level: "Intermediate" },
  { label: "SEO & Content", slug: "content-creator", level: "Beginner" },
  { label: "Paid Ads & CRO", slug: "paid-ads-mastery", level: "Intermediate" },
  { label: "AI-First Marketer", slug: "ai-first-marketer", level: "Advanced" },
];

export default function LearningPaths() {
  const [selectedSlug, setSelectedSlug] = useState(ROLE_OPTIONS[0].slug);
  const activeOption = ROLE_OPTIONS.find((r) => r.slug === selectedSlug) ?? ROLE_OPTIONS[0];
  const track = TRACKS.find((t) => t.slug === activeOption.slug) ?? TRACKS[0];
  const firstFour = track.lessons.slice(0, 4);

  return (
    <section id="role-tracks" className="py-16 sm:py-24 bg-[var(--muted)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="font-data text-xs text-[var(--accent)] mb-2 tabular-nums">
              Self-paced tracks · {TRACKS.length} paths
            </p>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--foreground)] font-serif max-w-xl">
              Not sure where to start? Pick your role
            </h2>
          </div>
          <Link
            href="/tracks"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline shrink-0"
          >
            <span>See all {TRACKS.length} tracks</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Role Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Choose your marketing role">
          {ROLE_OPTIONS.map((opt) => {
            const active = opt.slug === activeOption.slug;
            return (
              <button
                key={opt.slug}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedSlug(opt.slug)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[var(--accent-foreground)]"
                    : "bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Active Track Summary + 4-Step Syllabus */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-3 font-data text-xs text-[var(--muted-foreground)] tabular-nums">
              <span className="text-[var(--accent)]">{activeOption.level}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} strokeWidth={1.5} />
                {track.duration}
              </span>
              <span>·</span>
              <span>{track.lessons.length} lessons</span>
            </div>
            <h3 className="text-xl font-medium text-[var(--foreground)]">
              {track.title.replace(/ Track$/, "")}
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
              {track.description}
            </p>
          </div>
          <Link
            href={`/tracks/${track.slug}`}
            className="shrink-0 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <span>Start {activeOption.label} Track</span>
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstFour.map((lesson, idx) => (
            <Link
              key={`${lesson.category}-${lesson.slug}`}
              href={`/learn/${lesson.category}/${lesson.slug}`}
              className="group flex flex-col justify-between p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <span className="font-data text-xs text-[var(--accent)] tabular-nums block mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h4 className="text-base font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug mb-2">
                  {lesson.title}
                </h4>
              </div>
              <span className="font-data text-xs text-[var(--muted-foreground)] mt-3 block">
                {lesson.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
