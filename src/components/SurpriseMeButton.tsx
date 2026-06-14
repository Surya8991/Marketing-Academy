"use client";
import { useRouter } from "next/navigation";
import { flatLessons } from "@/lib/curriculum";
import { Shuffle } from "lucide-react";

export default function SurpriseMeButton() {
  const router = useRouter();

  function goRandom() {
    const lessons = flatLessons();
    const pick = lessons[Math.floor(Math.random() * lessons.length)];
    router.push(`/learn/${pick.categorySlug}/${pick.slug}`);
  }

  return (
    <button
      onClick={goRandom}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] hover:border-[var(--accent)] transition-all text-sm font-medium text-[var(--foreground)] cursor-pointer"
    >
      <Shuffle size={15} />
      Surprise me
    </button>
  );
}
