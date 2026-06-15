import Link from "next/link";
import type { Track } from "@/lib/tracks";

export default function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      href={`/tracks/${track.slug}`}
      className="group flex flex-col p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200"
    >
      <div className="text-3xl mb-3">{track.emoji}</div>
      <h3 className="font-semibold text-base mb-1 group-hover:text-[var(--accent)] transition-colors">
        {track.title}
      </h3>
      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium mb-3 w-fit">
        {track.audience}
      </span>
      <p className="text-sm text-[var(--muted-foreground)] flex-1 line-clamp-2 mb-4">
        {track.description}
      </p>
      <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
        <span>{track.lessons.length} lessons · {track.duration}</span>
        <span className="text-[var(--accent)] font-medium group-hover:underline">
          View Track
        </span>
      </div>
    </Link>
  );
}
