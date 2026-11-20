import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { TRACKS } from "@/lib/tracks";

const PATHS = [
  {
    slug: "solo-founder",
    desc: "Doing your own marketing? Learn your value proposition, the basic math, SEO, email and copy, in that order.",
    level: "Beginner",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[var(--lav)]", rotate: "rotate-0" },
      { w: "w-14", h: "h-14", bg: "bg-[var(--blue)]", rotate: "rotate-6" },
      { w: "w-8", h: "h-8", bg: "bg-[var(--amber)]", rotate: "-rotate-12" },
      { w: "w-6", h: "h-6", bg: "bg-[var(--mint)]", rotate: "rotate-3" },
    ],
  },
  {
    slug: "growth-marketing-mastery",
    desc: "Activation, retention cohorts, referrals and A/B testing: how to find out what actually moves growth.",
    level: "Intermediate",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[var(--mint)]", rotate: "rotate-6" },
      { w: "w-14", h: "h-14", bg: "bg-[var(--blue)]", rotate: "-rotate-6" },
      { w: "w-8", h: "h-8", bg: "bg-[var(--lav)]", rotate: "rotate-12" },
      { w: "w-6", h: "h-6", bg: "bg-[var(--amber)]", rotate: "rotate-0" },
    ],
  },
  {
    slug: "ai-first-marketer",
    desc: "Prompting, AI for content and analytics, AI agents, and how to show up in AI search answers.",
    level: "Advanced",
    shapes: [
      { w: "w-10", h: "h-10", bg: "bg-[var(--amber)]", rotate: "-rotate-6" },
      { w: "w-14", h: "h-14", bg: "bg-[var(--lav)]", rotate: "rotate-12" },
      { w: "w-8", h: "h-8", bg: "bg-[var(--blue)]", rotate: "-rotate-3" },
      { w: "w-6", h: "h-6", bg: "bg-[var(--mint)]", rotate: "rotate-6" },
    ],
  },
];

export default function LearningPaths() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--muted)] border-t border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] font-serif max-w-xl">
            Not sure where to start? Follow a track.
          </h2>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="max-w-md text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans leading-relaxed">
              A track is an ordered list of lessons. Finish them, pass the track quiz, and you get a
              certificate.
            </p>
            <Link
              href="/tracks"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <span>See all {TRACKS.length} tracks</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Path Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PATHS.map((path) => {
            const track = TRACKS.find((t) => t.slug === path.slug)!;
            return (
            <Link
              key={path.slug}
              href={`/tracks/${path.slug}`}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-[var(--paper)] border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 min-h-[340px]"
            >
              <div>
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
                  {track.title.replace(/ Track$/, "")}
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
                <span>{track.lessons.length} lessons · {track.duration}</span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
