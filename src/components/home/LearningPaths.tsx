"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

const PATHS = [
  {
    index: "PATH 001 / FOUNDATIONS",
    title: "The Foundations",
    desc: "Build a rock-solid understanding of customer psychology, positioning, pricing power, and clear communication.",
    level: "Beginner friendly",
    badge: "Core concepts",
    href: "/tracks/solo-founder",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[#eeedff]", rotate: "rotate-0" },
      { w: "w-14", h: "h-14", bg: "bg-[#eaf3ff]", rotate: "rotate-6" },
      { w: "w-8", h: "h-8", bg: "bg-[#fff2df]", rotate: "-rotate-12" },
      { w: "w-6", h: "h-6", bg: "bg-[#eaf5ed]", rotate: "rotate-3" },
    ],
  },
  {
    index: "PATH 002 / PRACTICE",
    title: "The Growth Practitioner",
    desc: "Master paid acquisition, conversion rate optimization, CAC/LTV math, and compounding retention loops.",
    level: "Intermediate",
    badge: "Applied skills",
    href: "/tracks/growth-marketing-mastery",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[#eaf5ed]", rotate: "rotate-6" },
      { w: "w-14", h: "h-14", bg: "bg-[#eaf3ff]", rotate: "-rotate-6" },
      { w: "w-8", h: "h-8", bg: "bg-[#eeedff]", rotate: "rotate-12" },
      { w: "w-6", h: "h-6", bg: "bg-[#fff2df]", rotate: "rotate-0" },
    ],
  },
  {
    index: "PATH 003 / FRONTIER",
    title: "The Modern Marketer",
    desc: "Deploy AI agents, automate outbound with Clay & n8n, and dominate Generative Engine Optimization (GEO).",
    level: "Advanced",
    badge: "Emerging frontier",
    href: "/tracks/ai-first-marketer",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[#fff2df]", rotate: "-rotate-6" },
      { w: "w-14", h: "h-14", bg: "bg-[#eeedff]", rotate: "rotate-12" },
      { w: "w-8", h: "h-8", bg: "bg-[#eaf3ff]", rotate: "-rotate-3" },
      { w: "w-6", h: "h-6", bg: "bg-[#eaf5ed]", rotate: "rotate-6" },
    ],
  },
];

export default function LearningPaths() {
  return (
    <section className="py-20 sm:py-28 bg-[#f5f4f0] border-t border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
              Find your starting point
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif">
              A learning path that<br />
              <span className="font-normal italic">moves with you.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
              Whether you&apos;re starting from zero or sharpening an established skill set, choose a
              curated path and systematically build your growth engine.
            </p>
            <Link
              href="/tracks"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <span>View all 24 curated tracks</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Path Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PATHS.map((path) => (
            <Link
              key={path.index}
              href={path.href}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-[var(--paper)] border border-[var(--border)] hover:border-[#c9c6ff] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 min-h-[340px]"
            >
              <div>
                <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
                  {path.index}
                </span>

                {/* Tactile modern graphic */}
                <div className="h-20 flex items-center gap-2 my-4">
                  {path.shapes.map((s, idx) => (
                    <div
                      key={idx}
                      className={`${s.w} ${s.h} ${s.bg} ${s.rotate} rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105`}
                    />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {path.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  {path.desc}
                </p>
              </div>

              {/* Meta info footer */}
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)]">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={12} className="text-[var(--accent)]" />
                  {path.level}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={12} className="text-amber-500" />
                  {path.badge}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
