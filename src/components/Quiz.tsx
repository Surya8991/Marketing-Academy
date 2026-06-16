"use client";

/**
 * Per-lesson quiz component.
 *
 * MUST be rendered inside a <section id="quiz-section">: MarkComplete.tsx
 * calls `document.getElementById("quiz-section")?.scrollIntoView()` when locked.
 *
 * Pass/fail:
 *   - Requires 100% (all questions correct) to dispatch QUIZ_PASSED_EVENT.
 *   - Partial scores show a fail screen with a "Try Again" button.
 *   - There is no partial credit; the threshold can't be configured per-lesson.
 *
 * Events dispatched on perfect score:
 *   QUIZ_PASSED_EVENT: unlocks MarkComplete on the same page (no reload needed)
 *   ENGAGEMENT_EVENT: awards 20 XP and triggers achievement checks
 *
 * Progress persistence:
 *   - In-progress state (current question + previous answers) is saved to
 *     localStorage under quizStorageKey(pathname) so the user can resume after
 *     a page reload mid-quiz.
 *   - Quiz pass flag is saved under ma_quiz_pass_{category}_{slug}.
 *   - On mount, if the quiz is already passed, all answers are pre-filled as
 *     correct so the progress bar shows 100%.
 */

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Quiz } from "@/lib/quizzes";
import { getQuizPassed, setQuizPassed, QUIZ_PASSED_EVENT, quizStorageKey } from "@/lib/quizzes";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import { checkAchievements } from "@/lib/achievements";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

type Props = {
  questions: Quiz[];
  category: string;
  slug: string;
};

export default function Quiz({ questions, category, slug }: Props) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  // answers[i] = true/false for each completed question.
  // NOTE: does NOT include the currently displayed question until handleNext fires.
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  // Restore saved progress on mount. If quiz was already passed, jump straight to
  // the success screen with all answers showing as correct.
  useEffect(() => {
    const passed = getQuizPassed(category, slug);
    if (passed) {
      setAlreadyPassed(true);
      setAnswers(Array(questions.length).fill(true)); // pre-fill so progress bar = 100%
      setFinished(true);
      return;
    }
    try {
      const saved = localStorage.getItem(quizStorageKey(pathname));
      if (saved) {
        const parsed = JSON.parse(saved) as { answers?: boolean[]; score?: number; total: number };
        // Only restore if question count matches, stale state from a different quiz version is discarded
        if (parsed.total === questions.length) {
          const restored = parsed.answers
            ?? Array(parsed.score ?? 0).fill(true).concat(Array(parsed.total - (parsed.score ?? 0)).fill(false));
          setAnswers(restored);
          setFinished(true);
        }
      }
    } catch { /* ignore corrupt storage */ }
  }, [pathname, category, slug, questions.length]);

  const question = questions[current];
  const totalQuestions = questions.length;
  const answered = selected !== null; // true after the user picks an option for the current question

  function handleSelect(index: number) {
    if (answered) return; // prevent changing answer after selection
    setSelected(index);
    // Do NOT push to answers here, handleNext captures it with the correct/incorrect value
  }

  function handleNext() {
    if (selected === null) return;
    const isCorrect = selected === question.correct;
    const newAnswers = [...answers, isCorrect];

    if (current + 1 >= totalQuestions) {
      // All questions answered, evaluate final score using newAnswers (includes this last Q)
      const finalScore = newAnswers.filter(Boolean).length;
      const perfect = finalScore === totalQuestions;
      try {
        // Persist finished state so the correct result screen shows on reload
        localStorage.setItem(quizStorageKey(pathname), JSON.stringify({ answers: newAnswers, total: totalQuestions }));
      } catch { /* storage full or unavailable */ }
      if (perfect) {
        setQuizPassed(category, slug);
        // Unlock MarkComplete without a page reload
        window.dispatchEvent(
          new CustomEvent(QUIZ_PASSED_EVENT, { detail: { id: `${category}/${slug}` } })
        );
        // Award XP and broadcast to StreakBadge + AchievementToast
        const newState = addXP("quiz", `${category}/${slug}`);
        const unlocked = checkAchievements(newState);
        window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
      }
      setAnswers(newAnswers);
      setFinished(true);
    } else {
      setAnswers(newAnswers);
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
    const perfect = pct === 100;

    if (perfect || alreadyPassed) {
      return (
        <div
          id="quiz-results"
          className="rounded-2xl border p-6 text-center"
          style={{
            borderColor: "rgba(22,163,74,0.4)",
            background: "rgba(22,163,74,0.06)",
          }}
          role="region"
          aria-label="Quiz passed"
        >
          <div className="flex justify-center mb-3">
            <Trophy size={40} style={{ color: "rgb(22 163 74)" }} />
          </div>
          <div className="text-3xl font-bold mb-1" style={{ color: "rgb(22 163 74)" }}>
            {alreadyPassed ? "Already Passed!" : "Perfect Score!"}
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mb-1">
            {totalQuestions}/{totalQuestions} correct, 100%
          </p>
          <p className="font-medium mb-5 text-[var(--foreground)]">
            You&apos;ve unlocked &ldquo;Mark as Complete&rdquo; for this lesson.
          </p>
          {!alreadyPassed && (
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <RotateCcw size={14} />
              Retake quiz
            </button>
          )}
        </div>
      );
    }

    // Failed, show score + context-sensitive encourage message
    let message = "Keep practicing, review the lesson and try again.";
    if (pct >= 75) message = "Almost there! Review the explanations and retry.";
    else if (pct >= 50) message = "Good start. Read through the sections you missed.";

    return (
      <div
        id="quiz-results"
        className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center"
        role="region"
        aria-label="Quiz results"
      >
        <div className="flex justify-center mb-3 text-[var(--muted-foreground)]">
          <XCircle size={36} style={{ color: "rgba(239,68,68,0.8)" }} />
        </div>
        <div className="text-3xl font-bold mb-1">
          {score}/{totalQuestions}
        </div>
        <p className="text-[var(--muted-foreground)] mb-1">{pct}% correct</p>
        <p className="font-medium mb-2 text-[var(--foreground)]">{message}</p>
        <p className="text-xs text-[var(--muted-foreground)] mb-5">
          You need 100% to unlock &ldquo;Mark as Complete&rdquo;.
        </p>
        <button
          onClick={handleRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium"
          style={{
            background: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          <RotateCcw size={14} />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      id="quiz-section"
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
      role="region"
      aria-label={`Quiz question ${current + 1} of ${totalQuestions}`}
    >
      {/* Progress header: pill indicators per question: green=correct, red=wrong, accent=current, muted=upcoming */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--muted-foreground)]">
          Question {current + 1} of {totalQuestions}
        </span>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className="h-2.5 w-8 sm:w-7 rounded-full transition-colors"
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
          // Colour logic: only applied AFTER the user has selected an option (answered=true)
          let borderColor = "var(--border)";
          let bgColor = "transparent";
          let opacity = "1";

          if (answered) {
            if (i === question.correct) {
              borderColor = "#22c55e";
              bgColor = "rgba(34,197,94,0.08)";
            } else if (i === selected) {
              borderColor = "#ef4444";
              bgColor = "rgba(239,68,68,0.08)";
            } else {
              opacity = "0.45"; // dim non-selected, non-correct options
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              aria-pressed={selected === i}
              className="w-full text-left px-4 py-3 rounded-lg border text-sm transition-all"
              style={{
                borderColor,
                background: bgColor,
                opacity,
                cursor: answered ? "default" : "pointer",
              }}
            >
              <span className="font-medium mr-2 text-[var(--muted-foreground)]">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
              {answered && i === question.correct && (
                <CheckCircle2
                  size={14}
                  className="inline ml-2 shrink-0"
                  style={{ color: "#22c55e" }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation block: only shown after the user selects an option */}
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
          className="px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          style={{
            background: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          {current + 1 >= totalQuestions ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}
