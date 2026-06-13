import Link from "next/link";
import { TRACKS } from "@/lib/tracks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Tracks | Marketing Academy",
  description:
    "Curated lesson paths built for your role. B2B marketer, e-commerce, solo founder, or AI-first - follow a structured track and learn exactly what you need.",
};

export default function TracksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">Learning Tracks</h1>
        <p className="text-[var(--muted-foreground)] text-lg max-w-2xl">
          Follow a curated path built for your role. Each track selects the most
          relevant lessons from across the curriculum and sequences them to
          match how you actually work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {TRACKS.map((track) => (
          <Link
            key={track.slug}
            href={`/tracks/${track.slug}`}
            className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="text-4xl">{track.emoji}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium shrink-0">
                {track.audience}
              </span>
            </div>

            <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {track.title}
            </h2>

            <p className="text-sm text-[var(--muted-foreground)] mb-6 flex-1 leading-relaxed">
              {track.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                <span className="font-medium">{track.lessons.length} lessons</span>
                <span>{track.duration}</span>
              </div>
              <span className="text-sm font-medium text-[var(--accent)] group-hover:underline">
                Start Track
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
