import type { Metadata } from "next";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import PortfolioClient from "@/components/PortfolioClient";
import PageMasthead from "@/components/PageMasthead";

export const metadata: Metadata = {
  title: "My Portfolio | Marketing Academy",
  description:
    "Your completed practice projects, turned into portfolio-ready evidence for interviews: real deliverables, real companies, real concepts applied.",
  openGraph: {
    title: "My Portfolio | Marketing Academy",
    description:
      "Your completed practice projects, turned into portfolio-ready evidence for interviews: real deliverables, real companies, real concepts applied.",
    type: "website",
  },
  robots: { index: false, follow: true }, // personal, per-browser data — nothing to index
};

export default function PortfolioPage() {
  return (
    <>
      <PageMasthead left="Marketing Academy · Field Work" right="Your completed work, as evidence" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">
          Not a certificate — proof
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">My Portfolio</h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-8 font-ui-sans leading-relaxed">
          Every practice project you complete lands here, a running record of what you actually built and diagnosed,
          not just what you read.{" "}
          <span className="text-[var(--foreground)] font-medium">
            Export it, or turn it straight into interview stories.
          </span>
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <PortfolioClient projects={PROJECTS_INDEX} />
      </section>
    </>
  );
}
