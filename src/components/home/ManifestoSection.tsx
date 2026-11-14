"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Lock, ShieldCheck, Zap } from "lucide-react";

const PRINCIPLES = [
  {
    num: "01 / Free access",
    desc: "Every lesson, quiz, and learning playbook is 100% free and open to everyone.",
    icon: Zap,
  },
  {
    num: "02 / No account required",
    desc: "Start learning immediately without forced forms, email walls, or spam funnels.",
    icon: Lock,
  },
  {
    num: "03 / Vendor-neutral",
    desc: "Objective, tool-agnostic strategy without undisclosed affiliate promotions.",
    icon: ShieldCheck,
  },
  {
    num: "04 / Multilingual dedication",
    desc: "Curated Indian language resources in Hindi, Tamil, and Telugu for universal accessibility.",
    icon: Globe,
  },
];

export default function ManifestoSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#eeedff] border border-[#e4e1ff] shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Manifesto Headline */}
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#4f46e5]">
                An academy without barriers
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-serif text-[var(--foreground)]">
                Marketing education should be{" "}
                <em className="text-[var(--accent)] font-normal italic">
                  open to everyone.
                </em>
              </h2>
              <p className="text-sm sm:text-base text-[#696982] leading-relaxed font-ui-sans max-w-lg">
                No paywalls. No forced sign-ups. No commercial vendor agendas. Just rigorous
                knowledge, hands-on experimentation sandboxes, and frameworks engineered to help anyone
                build sustainable products.
              </p>
              <div className="pt-2">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all"
                >
                  <span>Explore the full open curriculum</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Core Principles 2x2 Grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3.5">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.num}
                    className="p-5 rounded-2xl bg-white/80 backdrop-blur-xs border border-white shadow-xs hover:bg-white transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                      <Icon size={15} />
                      <b className="text-xs font-bold font-mono tracking-tight text-[var(--foreground)]">
                        {p.num}
                      </b>
                    </div>
                    <p className="text-xs text-[#77768b] leading-relaxed font-ui-sans">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
