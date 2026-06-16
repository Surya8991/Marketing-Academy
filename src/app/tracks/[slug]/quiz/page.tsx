import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TRACKS, getTrack } from "@/lib/tracks";
import { QUIZZES } from "@/lib/quizzes";
import TrackQuizPageClient from "@/components/TrackQuizPageClient";
import { ChevronLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TRACKS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) return {};
  return {
    title: `${track.title} Quiz | Marketing Academy`,
    description: `Test your knowledge across all ${track.lessons.length} lessons in the ${track.title}.`,
  };
}

export default async function TrackQuizPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  const questions = track.lessons.flatMap((l) => QUIZZES[`${l.category}/${l.slug}`] ?? []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href={`/tracks/${slug}`}
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ChevronLeft size={14} />
        Back to {track.title}
      </Link>

      <div className="mb-8">
        <div className="text-4xl mb-3">{track.emoji}</div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{track.title}: Knowledge Check</h1>
        <p className="text-[var(--muted-foreground)]">
          {questions.length} questions across {track.lessons.length} lessons · pass 80% to mark all complete
        </p>
      </div>

      <TrackQuizPageClient
        trackSlug={slug}
        lessons={track.lessons}
        questions={questions}
      />
    </div>
  );
}
