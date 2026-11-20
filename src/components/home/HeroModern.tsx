"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  totalLessons: number;
  totalCategories: number;
};

export default function HeroModern({ totalLessons, totalCategories }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const orbit1Ref = useRef<HTMLDivElement>(null);
  const orbit2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Staggered entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(kickerRef.current, { y: -20, opacity: 0, duration: 0.6 })
        .from(titleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(descRef.current, { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(btnsRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(statsRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(artRef.current, { scale: 0.85, opacity: 0, duration: 1.1, ease: "back.out(1.4)" }, "-=0.8")
        .from(".hero-orbit-label", { scale: 0.7, opacity: 0, stagger: 0.12, duration: 0.5, ease: "back.out(2)" }, "-=0.5");

      // Continuous rotation of the central gradient blob
      gsap.to(coreRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      // Smooth floating counter-rotations on orbital rings
      gsap.to(orbit1Ref.current, {
        rotation: "+=360",
        duration: 45,
        repeat: -1,
        ease: "none",
      });
      gsap.to(orbit2Ref.current, {
        rotation: "-=360",
        duration: 55,
        repeat: -1,
        ease: "none",
      });

      // Floating gentle physics on discipline pills
      gsap.to(".hero-orbit-label", {
        y: "-=8",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.7,
          from: "random",
        },
      });
    }, heroRef);

    // Interactive 3D cursor parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!artRef.current) return;
      const rect = artRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(coreRef.current, {
        x: x * 35,
        y: y * 35,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(orbit1Ref.current, {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(".hero-orbit-label", {
        x: x * 15,
        y: y * 15,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    const artElement = artRef.current;
    if (artElement) {
      artElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (artElement) {
        artElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker */}
            <div
              ref={kickerRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--lav)] text-[var(--accent)] text-xs font-mono uppercase tracking-wider"
            >
              <span className="h-2 w-2 rounded-full bg-[#36a66c] shadow-[0_0_0_4px_rgba(54,166,108,0.2)] animate-pulse" />
              <span>Free, no sign-up</span>
            </div>

            {/* Headline with Instrument Serif Italic */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.02] text-[var(--foreground)]"
            >
              Understand marketing.<br />
              <em className="font-serif italic font-normal text-[var(--accent)] tracking-normal">
                Build what works.
              </em>
            </h1>

            {/* Subtext */}
            <p
              ref={descRef}
              className="font-ui-sans text-base sm:text-lg text-[var(--muted-foreground)] max-w-[52ch] leading-relaxed"
            >
              {totalLessons} lessons on SEO, ads, email, analytics and more. Written in plain English,
              with real numbers and the sources they came from.
            </p>

            {/* Action Buttons */}
            <div ref={btnsRef} className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/learn"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold text-sm shadow-md shadow-[var(--accent)]/20 hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                <span>Browse lessons</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#interactive-lab"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium text-sm hover:border-[var(--accent)] hover:bg-[var(--lav)] transition-all"
              >
                <span>Try the tools</span>
                <span className="text-xs">↓</span>
              </a>
            </div>

            {/* 3-Part Metric Counters */}
            <div ref={statsRef} className="flex items-center gap-6 sm:gap-8 pt-4 text-xs text-[var(--muted-foreground)]">
              <div>
                <strong className="block text-xl font-bold text-[var(--foreground)] font-display">
                  {totalLessons}
                </strong>
                <span>Lessons</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div>
                <strong className="block text-xl font-bold text-[var(--foreground)] font-display">
                  {totalCategories}
                </strong>
                <span>Topics</span>
              </div>
              <div className="h-8 w-px bg-[var(--border)]" />
              <div>
                <strong className="block text-xl font-bold text-[var(--foreground)] font-display">
                  100%
                </strong>
                <span>Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Animated Orbital Sphere Art */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={artRef}
              className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center select-none"
              aria-label="Abstract interactive illustration representing interconnected marketing disciplines"
            >
              {/* Radial background aura */}
              <div
                className="absolute inset-0 rounded-full blur-xl pointer-events-none opacity-80"
                style={{
                  background: "radial-gradient(circle, #dcd9ff 0%, #efedff 42%, #fafaf8 75%)",
                }}
              />

              {/* Orbiting Ring 1 */}
              <div
                ref={orbit1Ref}
                className="absolute w-[340px] sm:w-[410px] h-[180px] sm:h-[220px] rounded-full border border-[#bcb8f0] pointer-events-none"
                style={{ transform: "rotate(-25deg)" }}
              />

              {/* Orbiting Ring 2 */}
              <div
                ref={orbit2Ref}
                className="absolute w-[380px] sm:w-[450px] h-[220px] sm:h-[270px] rounded-full border border-[#d0cafa] pointer-events-none"
                style={{ transform: "rotate(35deg)" }}
              />

              {/* Central Morphing Gradient Core */}
              <div
                ref={coreRef}
                className="relative z-10 w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] rounded-[34%_66%_58%_42%/43%_38%_62%_57%] shadow-2xl transition-transform"
                style={{
                  background: "linear-gradient(140deg, #837cff, #4f46e5 55%, #3327ba)",
                  boxShadow: "inset -18px -22px 38px rgba(36,26,155,0.35), inset 12px 10px 22px rgba(255,255,255,0.4), 0 30px 60px rgba(79,70,229,0.35)",
                }}
              >
                {/* Secondary highlight droplet */}
                <div
                  className="absolute top-5 left-6 w-20 h-20 rounded-full opacity-90 shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #ffffff, #d9d6ff)",
                    boxShadow: "0 12px 28px rgba(47,39,168,0.3)",
                  }}
                />
                {/* Accent amber droplet */}
                <div
                  className="absolute bottom-5 right-5 w-10 h-10 rounded-full shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #ffc86e, #f49b37)",
                    boxShadow: "0 10px 20px rgba(173,93,48,0.3)",
                  }}
                />
              </div>

              {/* Floating Discipline Badge 1: Psychology */}
              <div
                className="hero-orbit-label absolute top-4 left-0 sm:left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg text-xs font-bold text-[var(--foreground)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[var(--amber)] text-amber-700 font-normal">
                  ✳
                </span>
                <span>Psychology</span>
              </div>

              {/* Floating Discipline Badge 2: Growth */}
              <div
                className="hero-orbit-label absolute top-24 right-0 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg text-xs font-bold text-[var(--foreground)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[var(--blue)] text-blue-700 font-normal">
                  ↗
                </span>
                <span>Growth</span>
              </div>

              {/* Floating Discipline Badge 3: Strategy */}
              <div
                className="hero-orbit-label absolute bottom-16 left-2 sm:left-6 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg text-xs font-bold text-[var(--foreground)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[var(--mint)] text-emerald-700 font-normal">
                  ◎
                </span>
                <span>Strategy</span>
              </div>

              {/* Floating Discipline Badge 4: AI & automation */}
              <div
                className="hero-orbit-label absolute bottom-3 right-4 sm:right-8 z-20 flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--card)]/90 backdrop-blur-md border border-[var(--border)] shadow-lg text-xs font-bold text-[var(--foreground)]"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[var(--lav)] text-indigo-700 font-normal">
                  ⌘
                </span>
                <span>AI &amp; automation</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
