"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WORLDS = [
  {
    icon: "✳",
    title: "Psychology & Language",
    desc: "Why people buy, and how to describe what you sell so it lands.",
    disciplines: "Copy · Brand · Behaviour",
    href: "/learn/psychology",
    theme: {
      bg: "bg-[var(--lav)]",
      border: "border-[var(--border)]",
      hoverBorder: "hover:border-[var(--accent)]",
      orbGradient: "linear-gradient(145deg, #b6afff, #6258e9)",
      accentText: "text-[var(--accent)]",
    },
  },
  {
    icon: "↗",
    title: "Acquisition & Economics",
    desc: "Get in front of buyers through search and ads, and know what each customer costs you.",
    disciplines: "SEO · Paid · CRO",
    href: "/learn/paid-ads",
    theme: {
      bg: "bg-[var(--blue)]",
      border: "border-[var(--border)]",
      hoverBorder: "hover:border-[#b8daff]",
      orbGradient: "linear-gradient(145deg, #b7dcff, #448ee9)",
      accentText: "text-[var(--accent)]",
    },
  },
  {
    icon: "⟲",
    title: "Retention & Flywheels",
    desc: "Keep customers coming back, and turn the happy ones into referrals.",
    disciplines: "Lifecycle · PLG · Referral",
    href: "/learn/growth",
    theme: {
      bg: "bg-[var(--mint)]",
      border: "border-[var(--border)]",
      hoverBorder: "hover:border-[#bee3c9]",
      orbGradient: "linear-gradient(145deg, #b6e9c8, #4aa978)",
      accentText: "text-[var(--success)]",
    },
  },
  {
    icon: "⌘",
    title: "AI in Marketing",
    desc: "Use AI for research, writing and automation, and get your brand cited in AI answers.",
    disciplines: "GEO · Data · Agents",
    href: "/learn/ai-marketing",
    theme: {
      bg: "bg-[var(--amber)]",
      border: "border-[var(--border)]",
      hoverBorder: "hover:border-[#f4d4a3]",
      orbGradient: "linear-gradient(145deg, #ffdb9b, #ee9a3f)",
      accentText: "text-[var(--warning)]",
    },
  },
];

export default function WorldGrid() {
  return (
    <section className="py-14 sm:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif">
            Pick a topic
          </h2>
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            Start with whatever problem is in front of you. Each area is a set of short lessons
            with real examples, ordered from beginner to advanced.
          </p>
        </div>

        {/* 4 Worlds Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORLDS.map((world) => (
            <Link
              key={world.title}
              href={world.href}
              className={`group flex flex-col justify-between p-6 rounded-2xl border ${world.theme.border} ${world.theme.bg} ${world.theme.hoverBorder} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 sm:min-h-[350px]`}
            >
              {/* Card Top */}
              <div className="flex items-center justify-end">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--card)]/70 backdrop-blur-xs text-base shadow-xs">
                  {world.icon}
                </span>
              </div>

              {/* Central Tactile 3D Orb Graphic */}
              <div className="h-32 hidden sm:flex items-center justify-center my-4">
                <div
                  className="w-24 h-24 rounded-3xl shadow-lg relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                  style={{
                    background: world.theme.orbGradient,
                    transform: "rotate(-12deg)",
                    boxShadow: "inset 8px 8px 16px rgba(255,255,255,0.4), 0 16px 28px rgba(31,29,74,0.12)",
                  }}
                >
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/60 blur-[1px]" />
                </div>
              </div>

              {/* Card Copy */}
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {world.title}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed font-ui-sans sm:min-h-[36px]">
                  {world.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/5 text-xs font-mono text-[var(--muted-foreground)]">
                <span>{world.disciplines}</span>
                <span className={`inline-flex items-center gap-1 font-bold ${world.theme.accentText} group-hover:translate-x-1 transition-transform`}>
                  Explore <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
