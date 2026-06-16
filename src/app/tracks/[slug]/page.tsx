import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TRACKS, getTrack } from "@/lib/tracks";
import TrackLessonList from "@/components/TrackLessonList";
import TrackShareButton from "@/components/TrackShareButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TRACKS.map((t) => ({ slug: t.slug }));
}

const BASE = "https://marketing-academy-roan.vercel.app";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) return {};
  return {
    title: `${track.title} | Marketing Academy`,
    description: track.description,
    alternates: { canonical: `${BASE}/tracks/${slug}` },
    openGraph: {
      title: `${track.title} | Marketing Academy`,
      description: track.description,
      url: `${BASE}/tracks/${slug}`,
      type: "website",
    },
  };
}

export default async function TrackDetailPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: track.title,
    description: track.description,
    url: `${BASE}/tracks/${slug}`,
    provider: { "@type": "Organization", name: "Marketing Academy", url: BASE },
    educationalLevel: "Beginner to Advanced",
    numberOfCredits: track.lessons.length,
    isAccessibleForFree: true,
    inLanguage: "en",
    audience: { "@type": "Audience", audienceType: track.audience },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: { "@type": "Organization", name: "Marketing Academy" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Learning Tracks", item: `${BASE}/tracks` },
      { "@type": "ListItem", position: 3, name: track.title, item: `${BASE}/tracks/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
            <TrackShareButton title={track.title} url={`${BASE}/tracks/${slug}`} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{track.title}</h1>
          <p className="text-[var(--muted-foreground)] text-base leading-relaxed max-w-xl">
            {track.description}
          </p>
        </div>

        {/* Lesson list with client-side progress */}
        <TrackLessonList track={track} />
      </div>
    </>
  );
}
