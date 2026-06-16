"use client";
import { useEffect } from "react";
import { trackLesson } from "@/lib/recentlyViewed";
import posthog from "posthog-js";

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
    posthog.capture("lesson_viewed", { category: categorySlug, slug, title, level: level ?? "Unknown" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
