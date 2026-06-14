"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Quiz } from "@/lib/quizzes";

type Props = {
  questions: Quiz[];
};

function quizStorageKey(path: string) {
  return `ma_quiz_${path.replace(/\//g, "_")}`;
}

export default function Quiz({ questions }: Props) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  // Restore saved score on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(quizStorageKey(pathname));
      if (saved) {
        const { score, total } = JSON.parse(saved) as { score: number; total: number };
        if (total === questions.length) {
          setAnswers(Array(score).fill(true).concat(Array(total - score).fill(false)));
          setFinished(true);
        }
      }
    } catch { /* ignore corrupt storage */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const question = questions[current];
  const totalQuestions = questions.length;
  const answered = selected !== null;

  function handleSelect(index: number) {
    if (answered) return;
    const isCorrect = index === question.correct;
    setSelected(index);
    setAnswers((prev) => [...prev, isCorrect]);
  }

  function handleNext() {
    if (current + 1 >= totalQuestions) {
      const finalAnswers = [...answers, selected === question.correct];
      const finalScore = finalAnswers.filter(Boolean).length;
      try {
        localStorage.setItem(quizStorageKey(pathname), JSON.stringify({ score: finalScore, total: totalQuestions }));
      } catch { /* storage full or unavailable */ }
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRetry() {
    try { localStorage.removeItem(quizStorageKey(pathname)); } catch { /* ignore */ }
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  const score = answers.filter(Boolean).length;

  if (finished) {
    const pct = Math.round((score / totalQuestions) * 100);
    let message = "Keep practicing - you will get there.";
    if (pct >= 80) message = "Great job! You know this material well.";
    else if (pct >= 60) message = "Good effort - review the explanations to fill the gaps.";

    return (
      <div
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-center"
        role="region"
        aria-label="Quiz results"
      >
        <div className="text-4xl font-bold mb-2" aria-live="polite">
          {score}/{totalQuestions}
        </div>
        <p className="text-[var(--muted-foreground)] mb-1">
          {pct}% correct
        </p>
        <p className="font-medium mb-6">{message}</p>
        <button
          onClick={handleRetry}
          className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
      role="region"
      aria-label={`Quiz question ${current + 1} of ${totalQuestions}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--muted-foreground)]">
          Question {current + 1} of {totalQuestions}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-6 rounded-full"
              style={{
                background:
                  i < answers.length
                    ? answers[i]
                      ? "#22c55e"
                      : "#ef4444"
                    : i === current
                    ? "var(--accent)"
                    : "var(--border)",
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <p className="font-semibold text-base mb-5 leading-snug">{question.question}</p>

      <div className="flex flex-col gap-2.5 mb-5">
        {question.options.map((option, i) => {
          let borderClass = "border-[var(--border)] hover:border-[var(--accent)]";
          let bgClass = "bg-transparent";

          if (answered) {
            if (i === question.correct) {
              borderClass = "border-green-500";
              bgClass = "bg-green-500/10";
            } else if (i === selected) {
              borderClass = "border-red-500";
              bgClass = "bg-red-500/10";
            } else {
              borderClass = "border-[var(--border)] opacity-50";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              aria-pressed={selected === i}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${borderClass} ${bgClass} ${
                answered ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span className="font-medium mr-2 text-[var(--muted-foreground)]">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="rounded-lg bg-[var(--muted)] border border-[var(--border)] px-4 py-3 mb-5 text-sm text-[var(--foreground)] leading-relaxed">
          <span className="font-semibold">
            {selected === question.correct ? "Correct. " : "Not quite. "}
          </span>
          {question.explanation}
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {current + 1 >= totalQuestions ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
