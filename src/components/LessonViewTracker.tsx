"use client";
import { useEffect } from "react";
import { trackLesson } from "@/lib/recentlyViewed";

type Props = {
  categorySlug: string;
  slug: string;
  title: string;
  categoryTitle: string;
};

export default function LessonViewTracker({ categorySlug, slug, title, categoryTitle }: Props) {
  useEffect(() => {
    trackLesson({ categorySlug, slug, title, categoryTitle });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
