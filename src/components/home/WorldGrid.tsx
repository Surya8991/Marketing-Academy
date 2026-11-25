import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WORLDS = [
  {
    code: "01",
    title: "Psychology & Language",
    desc: "Why people buy, and how to describe what you sell so it lands.",
    disciplines: "Copy · Brand · Behaviour",
    href: "/learn/psychology",
  },
  {
    code: "02",
    title: "Acquisition & Economics",
    desc: "Get in front of buyers through search and ads, and know what each customer costs you.",
    disciplines: "SEO · Paid · CRO",
    href: "/learn/paid-ads",
  },
  {
    code: "03",
    title: "Retention & Flywheels",
    desc: "Keep customers coming back, and turn the happy ones into referrals.",
    disciplines: "Lifecycle · PLG · Referral",
    href: "/learn/growth",
  },
  {
    code: "04",
    title: "AI in Marketing",
    desc: "Use AI for research, writing and automation, and get your brand cited in AI answers.",
    disciplines: "GEO · Data · Agents",
    href: "/learn/ai-marketing",
  },
];

export default function WorldGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--foreground)] font-serif">
            Pick a topic
          </h2>
          <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
            Start with whatever problem is in front of you. Each area is a set of short lessons
            with real examples, ordered from beginner to advanced.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORLDS.map((world) => (
            <Link
              key={world.code}
              href={world.href}
              className="group flex flex-col justify-between p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-data text-xs text-[var(--accent)] tabular-nums">
                    {world.code}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-medium text-[var(--foreground)] tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {world.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                  {world.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-6 border-t border-[var(--border)] text-xs font-data text-[var(--muted-foreground)]">
                <span>{world.disciplines}</span>
                <span className="inline-flex items-center gap-1 font-ui-sans font-medium text-[var(--accent)]">
                  Explore <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
