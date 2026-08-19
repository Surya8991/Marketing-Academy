"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Sparkles, ArrowRight } from "lucide-react";
import PageMasthead from "@/components/PageMasthead";
import { type ReviewItem, getDueReviews, recordHit, recordMiss } from "@/lib/spaced-review";

export default function ReviewPageClient() {
  const [mounted, setMounted] = useState(false);
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setQueue(getDueReviews());
    setMounted(true);
  }, []);

  const total = queue.length;
  const current = queue[index];
  const done = mounted && (total === 0 || index >= total);

  function pick(optionIndex: number) {
    if (selected !== null || !current) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === current.correct;
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      recordHit(current.id);
    } else {
      // Re-recording keeps the item on the queue (rung 0, due tomorrow) instead
      // of removing it, a second miss during review is still a miss.
      recordMiss({
        id: current.id,
        category: current.category,
        slug: current.slug,
        lessonTitle: current.lessonTitle,
        question: current.question,
        options: current.options,
        correct: current.correct,
        explanation: current.explanation,
      });
    }
  }

  function next() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  function restart() {
    setQueue(getDueReviews());
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
  }

  return (
    <>
      <PageMasthead left="Marketing Academy · Review" right="Spaced repetition" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 font-ui-sans">
        <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">
          Mistakes, revisited
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 max-w-2xl text-balance">
          Review Queue
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          Every quiz question you&apos;ve gotten wrong comes back here on a schedule,
          answer it right a few times and it graduates out for good.
        </p>

        {!mounted && <div className="h-40" />}

        {mounted && total === 0 && (
          <div className="p-8 rounded-xl bg-[var(--muted)] border border-[var(--border)] text-center">
            <Sparkles className="mx-auto mb-3 text-[var(--accent)]" size={28} />
            <p className="font-semibold text-[var(--foreground)] mb-1">
              Nothing due right now
            </p>
            <p className="text-sm text-[var(--muted-foreground)] mb-5">
              Miss a quiz question anywhere and it lands here for review the
              next day. Come back after you&apos;ve taken a few more lesson quizzes.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              Browse lessons
              <ArrowRight size={14} />
            </Link>
          </div>
        )}

        {mounted && total > 0 && !done && current && (
          <div>
            <div className="flex items-center justify-between mb-4 text-sm text-[var(--muted-foreground)]">
              <span>Question {index + 1} of {total}</span>
              <span>{correctCount} correct so far</span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--muted)] overflow-hidden mb-6">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-300"
                style={{ width: `${(index / total) * 100}%` }}
              />
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                  {current.lessonTitle}
                </span>
                {current.lapses > 1 && (
                  <span className="text-xs text-[var(--muted-foreground)]">
                    missed {current.lapses}×
                  </span>
                )}
              </div>

              <p className="font-semibold text-base mb-5 leading-snug">{current.question}</p>

              <div className="flex flex-col gap-2.5 mb-2">
                {current.options.map((option, i) => {
                  const isCorrectOpt = i === current.correct;
                  const isPicked = selected === i;
                  let border = "1px solid var(--border)";
                  let bg = "transparent";
                  let color = "var(--foreground)";
                  if (selected !== null) {
                    if (isCorrectOpt) {
                      border = "1px solid rgba(22,163,74,0.5)";
                      bg = "rgba(22,163,74,0.08)";
                      color = "rgb(22,163,74)";
                    } else if (isPicked) {
                      border = "1px solid rgba(239,68,68,0.5)";
                      bg = "rgba(239,68,68,0.07)";
                      color = "rgba(239,68,68,0.9)";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => pick(i)}
                      aria-disabled={selected !== null}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm transition-all"
                      style={{ border, background: bg, color, cursor: selected === null ? "pointer" : "default" }}
                    >
                      <span className="font-medium mr-2 text-[var(--muted-foreground)]">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {option}
                      {selected !== null && isCorrectOpt && (
                        <CheckCircle2 size={14} className="inline ml-2" style={{ color: "rgb(22,163,74)" }} />
                      )}
                      {selected !== null && isPicked && !isCorrectOpt && (
                        <XCircle size={14} className="inline ml-2" style={{ color: "rgba(239,68,68,0.9)" }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <>
                  <div
                    className="mt-4 px-4 py-3 rounded-lg text-sm leading-relaxed"
                    style={{ background: "var(--muted)", color: "var(--foreground)" }}
                  >
                    <span className="font-semibold">
                      {selected === current.correct ? "Correct. " : "Not quite. "}
                    </span>
                    {current.explanation}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={`/learn/${current.category}/${current.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      Re-read this lesson
                    </Link>
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      {index + 1 >= total ? "Finish" : "Next question"}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {done && total > 0 && (
          <div className="p-8 rounded-xl border border-[var(--border)] bg-[var(--card)] text-center">
            <Sparkles className="mx-auto mb-3 text-[var(--accent)]" size={28} />
            <p className="font-semibold text-[var(--foreground)] mb-1">
              Reviewed {total}/{total}, {correctCount} correct
            </p>
            <p className="text-sm text-[var(--muted-foreground)] mb-5">
              Questions you got right just moved further out on the schedule.
              Anything missed again is back tomorrow.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                <RotateCcw size={14} />
                Check for more
              </button>
              <Link
                href="/skill-map"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
              >
                Back to Skill Map
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
