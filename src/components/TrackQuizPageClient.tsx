"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";
import { markComplete, lessonId } from "@/lib/progress";
import type { Quiz } from "@/lib/quizzes";

type Lesson = { category: string; slug: string; title: string };

type Props = {
  trackSlug: string;
  trackTitle: string;
  lessons: Lesson[];
  questions: Quiz[];
};

const PASS_THRESHOLD = 0.8;

export default function TrackQuizPageClient({ trackSlug, trackTitle, lessons, questions }: Props) {
  const router = useRouter();
  const [shuffled, setShuffled] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [marking, setMarking] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
  }, [questions]);

  const total = shuffled.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = total > 0 && answeredCount === total;
  const passed = submitted && score / total >= PASS_THRESHOLD;
  const failed = submitted && !passed;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  function pick(idx: number, opt: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [idx]: opt }));
  }

  function submit() {
    const correct = shuffled.filter((q, i) => answers[i] === q.correct).length;
    setScore(correct);
    setSubmitted(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function retry() {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function markAll() {
    setMarking(true);
    lessons.forEach((l) => markComplete(lessonId(l.category, l.slug)));
    setTimeout(() => router.push(`/tracks/${trackSlug}`), 800);
  }

  if (shuffled.length === 0) {
    return (
      <div className="text-center py-20 text-[var(--muted-foreground)]">Loading questions…</div>
    );
  }

  return (
    <div>
      {/* Sticky progress bar */}
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

      {/* Questions */}
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

      {/* Submit */}
      {!submitted && (
        <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-[var(--border)]" style={{ background: "var(--card)" }}>
          <p className="text-sm text-[var(--muted-foreground)]">
            {allAnswered
              ? "All questions answered — ready to submit."
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

      {/* Results */}
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
                {score}/{total} — {pct}%
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
              <div className="text-3xl font-bold mb-1">{score}/{total} — {pct}%</div>
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
