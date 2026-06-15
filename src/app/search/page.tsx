import type { Metadata } from "next";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "Search Lessons | Marketing Academy",
  description:
    "Search across 315 marketing lessons. Filter by category and level — SEO, paid ads, growth, social, email, analytics, AI, and more.",
};

export default function SearchPage() {
  return <SearchClient />;
}
