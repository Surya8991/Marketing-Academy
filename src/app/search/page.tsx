import type { Metadata } from "next";
import SearchClient from "./SearchClient";
import { uniqueLessonCount } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Search Lessons | Marketing Academy",
  description:
    // uniqueLessonCount() (642), not flatLessons().length (655), per Rule 43.
    `Search across ${uniqueLessonCount()} marketing lessons. Filter by category and level, SEO, paid ads, growth, social, email, analytics, AI, and more.`,
};

export default function SearchPage() {
  return <SearchClient />;
}
