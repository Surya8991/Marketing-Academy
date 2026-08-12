"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle, Circle, ClipboardList, Lock, X } from "lucide-react";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import { getQuizPassed } from "@/lib/quizzes";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";
import { GATE_NOTICE_KEY } from "@/lib/events";
import type { Track } from "@/lib/tracks";

/**
 * PROJECTS_PLAN.md Stage 1.1 / AGENTS.md Rule 36: any component calling
 * markComplete() must check getQuizPassed() first. This is the second of
 * three such call sites (MarkComplete.tsx, here, TrackQuizPageClient.tsx);
 * a fourth site would reopen the completion-integrity hole.
 */
export default function TrackLessonList({ track }: { track: Track }) {
  const router = useRouter();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setMounted(true);
    const done = getCompleted();
    setCompleted(done);
    // Grandfather notice (PROJECTS_PLAN.md 16.3, decided option C): existing
    // completions are left untouched (the locked check below only blocks NEW
    // completions via !done), we just tell returning learners with existing
    // progress that the rule changed, once.
    try {
      const seen = localStorage.getItem(GATE_NOTICE_KEY);
      if (!seen && done.size > 0) setShowNotice(true);
    } catch {
      /* localStorage blocked, skip the notice rather than crash */
    }
  }, []);

  function dismissNotice() {
    setShowNotice(false);
    try {
      localStorage.setItem(GATE_NOTICE_KEY, "1");
    } catch {
      /* localStorage blocked, notice will just reappear next visit */
    }
  }

  const toggle = (category: string, slug: string) => {
    const id = lessonId(category, slug);
    const next = new Set(completed);
    if (next.has(id)) {
      markIncomplete(id);
      next.delete(id);
    } else {
      // Gate: a lesson can only be freshly marked complete here if its quiz
      // has been passed. Already-completed lessons (grandfathered) can still
      // be un-toggled above; this branch only guards NEW completions.
      if (!getQuizPassed(category, slug)) {
        router.push(`/learn/${category}/${slug}#quiz-section`);
        return;
      }
      markComplete(id);
      next.add(id);
      const newState = addXP("complete", id);
      const unlocked = checkAchievements(newState);
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
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
      {/* One-time notice: rule change, existing progress is untouched (grandfathered) */}
      {mounted && showNotice && (
        <div
          className="mb-6 p-4 rounded-xl border flex items-start gap-3"
          style={{ borderColor: "var(--accent)", background: "color-mix(in srgb, var(--accent) 8%, transparent)" }}
          role="status"
        >
          <ClipboardList size={18} className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
          <p className="text-sm flex-1" style={{ color: "var(--foreground)" }}>
            Marking a lesson complete here now requires passing that lesson&apos;s quiz first,
            same as on the lesson page. This applies going forward only, nothing you&apos;ve
            already completed has changed.
          </p>
          <button
            onClick={dismissNotice}
            aria-label="Dismiss notice"
            className="shrink-0 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

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
            <Link
              href={`/tracks/${track.slug}/quiz`}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                background: "color-mix(in srgb, var(--accent) 8%, transparent)",
              }}
            >
              <ClipboardList size={12} />
              Take track quiz to mark all complete
            </Link>
          )}
        </div>
      </div>

      {/* Lesson list */}
      <ol className="space-y-2">
        {track.lessons.map((lesson, i) => {
          const id = lessonId(lesson.category, lesson.slug);
          const done = mounted && completed.has(id);
          const locked = mounted && !done && !getQuizPassed(lesson.category, lesson.slug);

          return (
            <li
              key={id}
              className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] group hover:border-[var(--accent)] transition-colors"
            >
              {/* Checkbox / lock */}
              <button
                onClick={() => toggle(lesson.category, lesson.slug)}
                aria-label={done ? "Mark incomplete" : locked ? "Take quiz to unlock" : "Mark complete"}
                title={locked ? "Take this lesson's quiz to unlock" : undefined}
                className={`shrink-0 transition-colors ${
                  done
                    ? "text-emerald-500"
                    : "text-[var(--muted-foreground)] hover:text-[var(--accent)]"
                }`}
              >
                {done ? <CheckCircle size={20} /> : locked ? <Lock size={17} /> : <Circle size={20} />}
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
