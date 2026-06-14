"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, Circle } from "lucide-react";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import type { Track } from "@/lib/tracks";

export default function TrackLessonList({ track }: { track: Track }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCompleted(getCompleted());
  }, []);

  const markAll = () => {
    const next = new Set(completed);
    track.lessons.forEach((l) => {
      const id = lessonId(l.category, l.slug);
      markComplete(id);
      next.add(id);
    });
    setCompleted(next);
  };

  const toggle = (category: string, slug: string) => {
    const id = lessonId(category, slug);
    const next = new Set(completed);
    if (next.has(id)) {
      markIncomplete(id);
      next.delete(id);
    } else {
      markComplete(id);
      next.add(id);
    }
    setCompleted(next);
  };

  const completedCount = track.lessons.filter((l) =>
    completed.has(lessonId(l.category, l.slug))
  ).length;
  const total = track.lessons.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8 p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Your progress</span>
          <span className="text-sm text-[var(--muted-foreground)]">
            {mounted ? completedCount : 0} / {total} lessons
          </span>
        </div>
        <div className="h-2 rounded-full bg-[var(--muted)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: mounted ? `${pct}%` : "0%" }}
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          {mounted && pct === 100 ? (
            <p className="text-sm font-medium" style={{ color: "rgb(22 163 74)" }}>
              Track complete. Well done.
            </p>
          ) : (
            <span />
          )}
          {mounted && pct < 100 && (
            <button
              onClick={markAll}
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors cursor-pointer"
            >
              Mark all complete
            </button>
          )}
        </div>
      </div>

      {/* Lesson list */}
      <ol className="space-y-2">
        {track.lessons.map((lesson, i) => {
          const id = lessonId(lesson.category, lesson.slug);
          const done = mounted && completed.has(id);

          return (
            <li
              key={id}
              className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] group hover:border-[var(--accent)] transition-colors"
            >
              {/* Checkbox */}
              <button
                onClick={() => toggle(lesson.category, lesson.slug)}
                aria-label={done ? "Mark incomplete" : "Mark complete"}
                className={`shrink-0 transition-colors ${
                  done
                    ? "text-emerald-500"
                    : "text-[var(--muted-foreground)] hover:text-[var(--accent)]"
                }`}
              >
                {done ? <CheckCircle size={20} /> : <Circle size={20} />}
              </button>

              {/* Step number */}
              <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-semibold flex items-center justify-center">
                {i + 1}
              </span>

              {/* Lesson link */}
              <Link
                href={`/learn/${lesson.category}/${lesson.slug}`}
                className={`flex-1 min-w-0 text-sm font-medium truncate transition-colors ${
                  done
                    ? "line-through text-[var(--muted-foreground)]"
                    : "group-hover:text-[var(--accent)]"
                }`}
              >
                {lesson.title}
              </Link>

              {/* Category label */}
              <span className="shrink-0 text-xs text-[var(--muted-foreground)] hidden sm:block capitalize">
                {lesson.category.replace(/-/g, " ")}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
