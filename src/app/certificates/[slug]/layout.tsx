import type { Metadata } from "next";
import { TRACKS } from "@/lib/tracks";

// The certificate page is a "use client" component (per-user data, blank until
// the learner completes the track), so it can't export metadata itself. This
// server layout marks the route noindex, it's personal, thin, and not a search
// landing. `follow: true` keeps its internal links crawlable.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const track = TRACKS.find((t) => t.slug === slug);
  return {
    title: track ? `${track.title} Certificate` : "Certificate",
    robots: { index: false, follow: true },
  };
}

export default function CertificateSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
