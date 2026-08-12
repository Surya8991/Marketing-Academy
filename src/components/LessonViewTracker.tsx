"use client";
import { useEffect } from "react";
import { trackLesson } from "@/lib/recentlyViewed";

type Props = {
  categorySlug: string;
  slug: string;
  title: string;
  categoryTitle: string;
  level?: string;
};

export default function LessonViewTracker({ categorySlug, slug, title, categoryTitle, level }: Props) {
  useEffect(() => {
    trackLesson({ categorySlug, slug, title, categoryTitle });
    // PostHog loaded via CDN snippet (see layout.tsx) — use global, not npm import.
    // When no key is set (dev), window.posthog is undefined and this is a no-op.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).posthog?.capture("lesson_viewed", { category: categorySlug, slug, title, level: level ?? "Unknown" });
  }, [categorySlug, slug, title, categoryTitle, level]);

  return null;
}
