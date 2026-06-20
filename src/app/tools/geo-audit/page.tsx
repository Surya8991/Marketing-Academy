import GeoAuditClient from "./GeoAuditClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GEO Auditor - Score Any Page for AI Citability | Marketing Academy",
  description:
    "Paste any URL and get an instant GEO (Generative Engine Optimization) score. See how likely ChatGPT, Claude, Perplexity and Gemini are to cite that page in their answers.",
  openGraph: {
    title: "GEO Auditor | Marketing Academy",
    description:
      "Score any URL for AI citability. Entity coverage, structured data, direct answers, and more - all the signals LLMs look for.",
    type: "website",
  },
};

export default function GeoAuditPage() {
  return <GeoAuditClient />;
}
