"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WORLDS = [
  {
    num: "WORLD / 01",
    icon: "✳",
    title: "Psychology & Language",
    desc: "Understand people, sharpen your message, and build brands that mean something.",
    disciplines: "Copy · Brand · Behaviour",
    href: "/learn/psychology",
    theme: {
      bg: "bg-[#eeedff]",
      border: "border-[#e4e2ff]",
      hoverBorder: "hover:border-[#c4bfff]",
      orbGradient: "linear-gradient(145deg, #b6afff, #6258e9)",
      accentText: "text-[#4f46e5]",
    },
  },
  {
    num: "WORLD / 02",
    icon: "↗",
    title: "Acquisition & Economics",
    desc: "Find demand, acquire customers, and master the unit economics behind scale.",
    disciplines: "SEO · Paid · CRO",
    href: "/learn/paid-ads",
    theme: {
      bg: "bg-[#eaf3ff]",
      border: "border-[#e0edff]",
      hoverBorder: "hover:border-[#b8daff]",
      orbGradient: "linear-gradient(145deg, #b7dcff, #448ee9)",
      accentText: "text-[#2563eb]",
    },
  },
  {
    num: "WORLD / 03",
    icon: "⟲",
    title: "Retention & Flywheels",
    desc: "Create sticky customer experiences that compound retention and drive word-of-mouth.",
    disciplines: "Lifecycle · PLG · Referral",
    href: "/learn/growth",
    theme: {
      bg: "bg-[#eaf5ed]",
      border: "border-[#dfefe4]",
      hoverBorder: "hover:border-[#bee3c9]",
      orbGradient: "linear-gradient(145deg, #b6e9c8, #4aa978)",
      accentText: "text-[#16a34a]",
    },
  },
  {
    num: "WORLD / 04",
    icon: "⌘",
    title: "Agentic Intelligence",
    desc: "Explore AI-powered discovery, autonomous workflows, and generative optimization.",
    disciplines: "GEO · Data · Agents",
    href: "/learn/ai-marketing",
    theme: {
      bg: "bg-[#fff2df]",
      border: "border-[#f8e9d0]",
      hoverBorder: "hover:border-[#f4d4a3]",
      orbGradient: "linear-gradient(145deg, #ffdb9b, #ee9a3f)",
      accentText: "text-[#d97706]",
    },
  },
];

export default function WorldGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
              Explore the universe
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif">
              Every part of marketing.<br />
              <span className="font-normal italic text-[var(--foreground)]">One place to explore.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            From understanding cognitive biases to constructing compounding acquisition engines,
            discover the disciplines that shape how leading companies grow.
          </p>
        </div>

        {/* 4 Worlds Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORLDS.map((world) => (
            <Link
              key={world.num}
              href={world.href}
              className={`group flex flex-col justify-between p-6 rounded-2xl border ${world.theme.border} ${world.theme.bg} ${world.theme.hoverBorder} hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 min-h-[350px]`}
            >
              {/* Card Top */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--muted-foreground)] tracking-wider">
                  {world.num}
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/70 backdrop-blur-xs text-base shadow-xs">
                  {world.icon}
                </span>
              </div>

              {/* Central Tactile 3D Orb Graphic */}
              <div className="h-32 flex items-center justify-center my-4">
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
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed font-ui-sans min-h-[36px]">
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
