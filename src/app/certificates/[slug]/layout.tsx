import type { Metadata } from "next";

// The certificate page is a "use client" component (per-user data, blank until
// the learner completes the track), so it can't export metadata itself. This
// server layout marks the route noindex — it's personal, thin, and not a search
// landing. `follow: true` keeps its internal links crawlable.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function CertificateSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
