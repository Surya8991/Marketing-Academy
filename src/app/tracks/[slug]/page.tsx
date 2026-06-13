import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TRACKS, getTrack } from "@/lib/tracks";
import TrackLessonList from "@/components/TrackLessonList";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TRACKS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) return {};
  return {
    title: `${track.title} | Marketing Academy`,
    description: track.description,
  };
}

export default async function TrackDetailPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="mb-10">
        <div className="text-5xl mb-4">{track.emoji}</div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
            {track.audience}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium">
            {track.lessons.length} lessons
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] font-medium">
            {track.duration}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{track.title}</h1>
        <p className="text-[var(--muted-foreground)] text-base leading-relaxed max-w-xl">
          {track.description}
        </p>
      </div>

      {/* Lesson list with client-side progress */}
      <TrackLessonList track={track} />
    </div>
  );
}
