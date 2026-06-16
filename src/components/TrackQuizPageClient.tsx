"use client";

/**
 * TrackQuizPageClient: full-page quiz gate for learning tracks.
 *
 * Architecture (see AGENTS.md Rule 24):
 *   - This is the client component rendered at /tracks/[slug]/quiz.
 *   - Pools ALL quiz questions from every lesson in the track (shuffled once on mount).
 *   - Requires ≥80% correct (PASS_THRESHOLD) to pass.
 *   - On pass: the "Mark all complete" button calls markAll(), which:
 *       1. Marks every lesson complete in localStorage
 *       2. Loops addXP("complete", id) for each lesson (write lock in engagement.ts handles concurrency)
 *       3. Dispatches ENGAGEMENT_EVENT once with the final accumulated state
 *       4. Navigates back to /tracks/[slug] after 800ms
 *
 * There is NO TrackQuizGate.tsx modal, do NOT create one.
 * The per-lesson Quiz.tsx component is separate and lives at the bottom of each lesson page.
 *
 * Props:
 *   trackSlug: used for the post-pass redirect URL
 *   lessons: ordered list of lessons in this track; passed to markAll()
 *   questions: already-pooled Quiz[] from all lessons (assembled by the server page)
 */

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";
import { markComplete, lessonId } from "@/lib/progress";
import type { Quiz } from "@/lib/quizzes";
import { addXP, ENGAGEMENT_EVENT, type EngagementState } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";

type Lesson = { category: string; slug: string; title: string };

type Props = {
  trackSlug: string;
  lessons: Lesson[];
  questions: Quiz[];
};

/** ≥80% correct required to pass and unlock "Mark all complete" */
const PASS_THRESHOLD = 0.8;

export default function TrackQuizPageClient({ trackSlug, lessons, questions }: Props) {
  const router = useRouter();
  // Shuffle once on mount, array is stable for the lifetime of this page visit
  const [shuffled, setShuffled] = useState<Quiz[]>([]);
  // Map of question index → chosen option index (sparse, only answered Qs present)
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [marking, setMarking] = useState(false); // true while markAll() is running
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
  }, [questions]);

  const total = shuffled.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = total > 0 && answeredCount === total;
  const passed = submitted && score / total >= PASS_THRESHOLD;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  function pick(idx: number, opt: number) {
    if (submitted) return; // prevent changing answers after submit
    setAnswers((prev) => ({ ...prev, [idx]: opt }));
  }

  function submit() {
    const correct = shuffled.filter((q, i) => answers[i] === q.correct).length;
    setScore(correct);
    setSubmitted(true);
    // Small delay so the submit button press is visible before scroll
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function retry() {
    // Re-shuffle on retry so users see different question ordering
    setShuffled([...questions].sort(() => Math.random() - 0.5));
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * Marks every lesson in the track complete and awards XP.
   * XP loop uses the module-level write lock in engagement.ts, all addXP() calls
   * in the same tick accumulate on the same base state, so no XP is lost.
   * Only dispatches ENGAGEMENT_EVENT once (with the final accumulated state) to
   * avoid flooding StreakBadge with N re-renders.
   */
  function markAll() {
    setMarking(true);
    let latestState: EngagementState | null = null;
    for (const l of lessons) {
      const id = lessonId(l.category, l.slug);
      markComplete(id);
      latestState = addXP("complete", id);
    }
    if (latestState) {
      const unlocked = checkAchievements(latestState);
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: latestState, unlocked } }));
    }
    // Brief delay so the user sees the "Marking complete…" button state before redirect
    setTimeout(() => router.push(`/tracks/${trackSlug}`), 800);
  }

  if (shuffled.length === 0) {
    return (
      <div className="text-center py-20 text-[var(--muted-foreground)]">Loading questions…</div>
    );
  }

  return (
    <div>
      {/* Sticky answer-progress bar, shows how many of the total questions have been answered */}
      <div
        className="sticky top-0 z-10 mb-8 px-4 py-3 rounded-xl border border-[var(--border)]"
        style={{ background: "var(--background)" }}
      >
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-[var(--foreground)]">Progress</span>
          <span className="text-[var(--muted-foreground)]">{answeredCount} / {total} answered</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${total > 0 ? (answeredCount / total) * 100 : 0}%`,
              background: "var(--accent)",
            }}
          />
        </div>
      </div>

      {/* All questions rendered at once (no pagination), answers are tracked by index */}
      <ol className="flex flex-col gap-8">
        {shuffled.map((q, qi) => {
          const userAnswer = answers[qi];
          const isAnswered = userAnswer !== undefined;

          return (
            <li
              key={qi}
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              <p className="font-semibold text-base mb-4 leading-snug" style={{ color: "var(--foreground)" }}>
                <span className="text-[var(--muted-foreground)] font-normal mr-2">{qi + 1}.</span>
                {q.question}
              </p>

              <div className="flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  // Colour coding: only applied after the user submits the full quiz
                  let border = "1px solid var(--border)";
                  let bg = "transparent";
                  let color = "var(--foreground)";
                  let opacity = "1";

                  if (submitted) {
                    if (oi === q.correct) {
                      border = "1px solid rgba(22,163,74,0.5)";
                      bg = "rgba(22,163,74,0.08)";
                      color = "rgb(22,163,74)";
                    } else if (oi === userAnswer) {
                      border = "1px solid rgba(239,68,68,0.5)";
                      bg = "rgba(239,68,68,0.07)";
                      color = "rgba(239,68,68,0.9)";
                    } else {
                      opacity = "0.4";
                    }
                  } else if (isAnswered && userAnswer === oi) {
                    // Highlight user's selection before submit
                    border = "1px solid var(--accent)";
                    bg = "color-mix(in srgb, var(--accent) 10%, transparent)";
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => pick(qi, oi)}
                      disabled={submitted}
                      className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all"
                      style={{ border, background: bg, color, opacity, cursor: submitted ? "default" : "pointer" }}
                    >
                      <span className="font-medium mr-2" style={{ color: submitted ? "inherit" : "var(--muted-foreground)" }}>
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      {opt}
                      {submitted && oi === q.correct && (
                        <CheckCircle2 size={14} className="inline ml-2 shrink-0" style={{ color: "rgb(22,163,74)" }} />
                      )}
                      {submitted && oi === userAnswer && oi !== q.correct && (
                        <XCircle size={14} className="inline ml-2 shrink-0" style={{ color: "rgba(239,68,68,0.9)" }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Per-question explanation, only visible after submit */}
              {submitted && (
                <div
                  className="mt-4 px-4 py-3 rounded-lg text-sm leading-relaxed"
                  style={{ background: "var(--muted)", color: "var(--foreground)" }}
                >
                  <span className="font-semibold">
                    {answers[qi] === q.correct ? "Correct. " : "Not quite. "}
                  </span>
                  {q.explanation}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Submit bar, disabled until all questions answered */}
      {!submitted && (
        <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-[var(--border)]" style={{ background: "var(--card)" }}>
          <p className="text-sm text-[var(--muted-foreground)]">
            {allAnswered
              ? "All questions answered, ready to submit."
              : `${total - answeredCount} question${total - answeredCount !== 1 ? "s" : ""} remaining.`}
          </p>
          <button
            onClick={submit}
            disabled={!allAnswered}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0"
            style={{
              background: allAnswered ? "var(--accent)" : "var(--muted)",
              color: allAnswered ? "var(--accent-foreground)" : "var(--muted-foreground)",
              cursor: allAnswered ? "pointer" : "default",
            }}
          >
            Submit {total} answers
            <ChevronRight size={15} />
          </button>
        </div>
      )}

      {/* Results panel, auto-scrolled into view after submit */}
      {submitted && (
        <div ref={resultsRef} className="mt-10">
          {passed ? (
            <div
              className="rounded-2xl border p-8 text-center"
              style={{ borderColor: "rgba(22,163,74,0.4)", background: "rgba(22,163,74,0.06)" }}
            >
              <div className="flex justify-center mb-3">
                <Trophy size={44} style={{ color: "rgb(22,163,74)" }} />
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: "rgb(22,163,74)" }}>
                {score}/{total}: {pct}%
              </div>
              <p className="text-[var(--muted-foreground)] mb-6">
                You passed! {Math.round(PASS_THRESHOLD * 100)}% required · you scored {pct}%.
              </p>
              <button
                onClick={markAll}
                disabled={marking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: marking ? "var(--muted)" : "var(--accent)",
                  color: marking ? "var(--muted-foreground)" : "var(--accent-foreground)",
                  cursor: marking ? "default" : "pointer",
                }}
              >
                <CheckCircle2 size={16} />
                {marking ? "Marking complete…" : `Mark all ${lessons.length} lessons complete`}
              </button>
            </div>
          ) : (
            <div
              className="rounded-2xl border border-[var(--border)] p-8 text-center"
              style={{ background: "var(--card)" }}
            >
              <div className="flex justify-center mb-3">
                <XCircle size={44} style={{ color: "rgba(239,68,68,0.8)" }} />
              </div>
              <div className="text-3xl font-bold mb-1">{score}/{total}: {pct}%</div>
              <p className="text-[var(--muted-foreground)] mb-2">
                Need {Math.round(PASS_THRESHOLD * 100)}% to pass. Review the lessons and try again.
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mb-6">
                Answers and explanations are shown above for every question.
              </p>
              <button
                onClick={retry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{ background: "var(--accent)", color: "var(--accent-foreground)", cursor: "pointer" }}
              >
                <RotateCcw size={15} />
                Try again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
