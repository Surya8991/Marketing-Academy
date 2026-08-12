"use client";

/**
 * Per-lesson quiz component.
 *
 * MUST be rendered inside a <section id="quiz-section">: MarkComplete.tsx
 * calls `document.getElementById("quiz-section")?.scrollIntoView()` when locked.
 * The id="quiz-section" wrapper is present in EVERY render branch below
 * (loading, in-progress, and finished) so that scroll target always resolves,
 * even for a learner who already attempted and failed the quiz once.
 *
 * Pass/fail (PROJECTS_PLAN.md Stage 1.6, decided 75%, see AGENTS.md note):
 *   - Requires 3 of 4 correct (75%) to dispatch QUIZ_PASSED_EVENT.
 *   - The plan's literal "80%" is unreachable on a 4-question quiz (only
 *     0/25/50/75/100% are possible scores), so 75% is the threshold that
 *     actually delivers "one missed question shouldn't force a retry."
 *   - Below 75%, a fail screen shows with a "Try Again" button.
 *
 * Answer reveal timing (PROJECTS_PLAN.md Stage 1.2, decided):
 *   - Correctness and explanations are shown ONLY after the whole quiz is
 *     submitted (the finished screen), never per-question while in progress.
 *   - Previously this revealed the correct answer + explanation immediately
 *     after each question, which let someone read all 4 answers on a first
 *     (intentionally wrong) attempt and then spam the correct positions on
 *     retry in under 30 seconds. Combined with Stage 1.3's shuffle, neither
 *     memorizing positions nor reading ahead works anymore.
 *
 * Shuffling (PROJECTS_PLAN.md Stage 1.3, decided, AGENTS.md Rule 40):
 *   - Question order and each question's option order are freshly shuffled
 *     on mount and on every retry (Fisher-Yates, not sort(() => random()),
 *     the comparator trick is measurably biased on small arrays).
 *   - `correct` is a POSITIONAL INDEX. Shuffling options without recomputing
 *     it silently mis-grades the question with no error of any kind, this is
 *     why prepareQuestions() pairs each option with a wasCorrect flag before
 *     shuffling, then derives the new index from the pairing afterward.
 *   - Shuffling happens inside useEffect (client-only), never during render,
 *     since Math.random() in the render path causes an SSR/client hydration
 *     mismatch.
 *
 * Events dispatched on a passing score:
 *   QUIZ_PASSED_EVENT: unlocks MarkComplete on the same page (no reload needed)
 *   ENGAGEMENT_EVENT: awards 20 XP and triggers achievement checks
 *
 * Progress persistence:
 *   - Only the FINISHED result is persisted (there was never mid-quiz resume,
 *     progress is only saved once all 4 questions are answered), under
 *     quizStorageKey(pathname), so the same result shows after a reload.
 *   - Quiz pass flag is saved under ma_quiz_pass_{category}_{slug}.
 *   - On mount, if the quiz is already passed, the finished screen shows
 *     immediately without needing to reshuffle or re-answer.
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

/** 3 of 4 correct required to pass, see the threshold note in the file docstring. */
const PASS_THRESHOLD = 0.75;

/** Fisher-Yates, NOT sort(() => Math.random() - 0.5): the comparator trick is
 *  measurably biased and, on a small array, leaves the original order far
 *  more often than chance, which defeats the point of a spam-resistance fix. */
function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Shuffles question order, and within each question shuffles option order
 *  while recomputing `correct` (a positional index) so grading stays correct. */
function prepareQuestions(questions: Quiz[]): Quiz[] {
  return shuffle(questions).map((q) => {
    const paired = q.options.map((text, i) => ({ text, wasCorrect: i === q.correct }));
    const shuffledPairs = shuffle(paired);
    return {
      ...q,
      options: shuffledPairs.map((p) => p.text),
      correct: shuffledPairs.findIndex((p) => p.wasCorrect),
    };
  });
}

export default function Quiz({ questions, category, slug }: Props) {
  const pathname = usePathname();
  const [shuffled, setShuffled] = useState<Quiz[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  // selections[i] = the option index the user picked for question i (or -1 if
  // restored from a saved result predating this field, see the restore branch).
  const [selections, setSelections] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  // Shuffle once on mount, client-only (avoids SSR/hydration mismatch).
  useEffect(() => {
    setShuffled(prepareQuestions(questions));
  }, [questions]);

  // Restore saved progress on mount. If quiz was already passed, jump straight
  // to the success screen; a bare pass flag doesn't need the shuffled set.
  useEffect(() => {
    const passed = getQuizPassed(category, slug);
    if (passed) {
      setAlreadyPassed(true);
      setFinished(true);
      return;
    }
    try {
      const saved = localStorage.getItem(quizStorageKey(pathname));
      if (saved) {
        const parsed = JSON.parse(saved) as { selections?: number[]; total: number };
        // Only restore if question count matches AND the newer selections[]
        // shape is present; older boolean[]-shaped saves are discarded rather
        // than misread, since they can't reconstruct a per-question review.
        if (parsed.total === questions.length && Array.isArray(parsed.selections)) {
          setSelections(parsed.selections);
          setFinished(true);
        }
      }
    } catch { /* ignore corrupt storage */ }
  }, [pathname, category, slug, questions.length]);

  const totalQuestions = questions.length;
  const answered = selected !== null; // true after the user picks an option for the current question

  function handleSelect(index: number) {
    if (answered) return; // prevent changing answer after selection
    setSelected(index);
  }

  function handleNext() {
    if (selected === null || shuffled.length === 0) return;
    const newSelections = [...selections, selected];

    if (current + 1 >= totalQuestions) {
      try {
        localStorage.setItem(
          quizStorageKey(pathname),
          JSON.stringify({ selections: newSelections, total: totalQuestions })
        );
      } catch { /* storage full or unavailable */ }

      const finalScore = newSelections.filter((sel, i) => sel === shuffled[i].correct).length;
      const passed = finalScore / totalQuestions >= PASS_THRESHOLD;
      if (passed) {
        setQuizPassed(category, slug);
        window.dispatchEvent(
          new CustomEvent(QUIZ_PASSED_EVENT, { detail: { id: `${category}/${slug}` } })
        );
        const newState = addXP("quiz", `${category}/${slug}`);
        const unlocked = checkAchievements(newState);
        window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
      }
      setSelections(newSelections);
      setFinished(true);
    } else {
      setSelections(newSelections);
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRetry() {
    try { localStorage.removeItem(quizStorageKey(pathname)); } catch { /* ignore */ }
    // Reshuffle both question order and each question's options on retry,
    // never mid-session (saved answers are indexed positionally against the
    // question order they were recorded under).
    setShuffled(prepareQuestions(questions));
    setCurrent(0);
    setSelected(null);
    setSelections([]);
    setFinished(false);
  }

  const score = shuffled.length > 0
    ? selections.filter((sel, i) => shuffled[i] && sel === shuffled[i].correct).length
    : 0;

  // Loading state: shuffle hasn't run yet (first paint) and there's no saved
  // finished result to show. Keeps id="quiz-section" so MarkComplete's scroll
  // target always resolves, even before questions are ready.
  if (shuffled.length === 0 && !finished) {
    return (
      <div
        id="quiz-section"
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-center text-sm text-[var(--muted-foreground)]"
      >
        Loading questions&hellip;
      </div>
    );
  }

  if (finished) {
    const pct = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const passed = alreadyPassed || (totalQuestions > 0 && score / totalQuestions >= PASS_THRESHOLD);

    return (
      <div id="quiz-section">
        {passed ? (
          <div
            id="quiz-results"
            className="rounded-2xl border p-6 text-center"
            style={{
              borderColor: "rgba(22,163,74,0.4)",
              background: "rgba(22,163,74,0.06)",
            }}
            role="region"
            aria-label="Quiz passed"
            aria-live="polite"
          >
            <div className="flex justify-center mb-3">
              <Trophy size={40} style={{ color: "#16a34a" }} />
            </div>
            <div className="text-3xl font-bold mb-1" style={{ color: "#16a34a" }}>
              {alreadyPassed ? "Already Passed!" : "Quiz Passed!"}
            </div>
            {!alreadyPassed && (
              <p className="text-sm text-[var(--muted-foreground)] mb-1">
                {score}/{totalQuestions} correct, {pct}%
              </p>
            )}
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
        ) : (
          <div
            id="quiz-results"
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            role="region"
            aria-label="Quiz results"
            aria-live="polite"
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3 text-[var(--muted-foreground)]">
                <XCircle size={36} style={{ color: "rgba(239,68,68,0.8)" }} />
              </div>
              <div className="text-3xl font-bold mb-1">
                {score}/{totalQuestions}
              </div>
              <p className="text-[var(--muted-foreground)] mb-1">{pct}% correct</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                You need {Math.round(PASS_THRESHOLD * 100)}% to unlock &ldquo;Mark as Complete&rdquo;.
              </p>
            </div>

            {/* Full review, only shown now that the quiz is submitted */}
            <div className="flex flex-col gap-4 mb-6">
              {shuffled.map((q, qi) => {
                const userAnswer = selections[qi];
                return (
                  <div
                    key={`review-${qi}`}
                    className="rounded-lg bg-[var(--muted)] border border-[var(--border)] p-4"
                  >
                    <p className="text-sm font-semibold mb-2 leading-snug">
                      {qi + 1}. {q.question}
                    </p>
                    <div className="flex flex-col gap-1.5 mb-2">
                      {q.options.map((opt, oi) => {
                        const isCorrectOpt = oi === q.correct;
                        const isUserPick = oi === userAnswer;
                        let color = "var(--muted-foreground)";
                        if (isCorrectOpt) color = "#16a34a";
                        else if (isUserPick) color = "#ef4444";
                        return (
                          <div key={oi} className="flex items-center gap-1.5 text-sm" style={{ color }}>
                            <span className="font-medium">{String.fromCharCode(65 + oi)}.</span>
                            {opt}
                            {/* Stage 6.3: icon + text, not colour alone */}
                            {isCorrectOpt && <><CheckCircle2 size={13} className="shrink-0" aria-hidden="true" /> <span className="text-xs font-semibold">(correct)</span></>}
                            {isUserPick && !isCorrectOpt && <><XCircle size={13} className="shrink-0" aria-hidden="true" /> <span className="text-xs font-semibold">(your answer)</span></>}
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-xs text-[var(--foreground)] leading-relaxed">
                      <span className="font-semibold">
                        {userAnswer === q.correct ? "Correct. " : "Not quite. "}
                      </span>
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
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
          </div>
        )}
      </div>
    );
  }

  const question = shuffled[current];

  return (
    <div
      id="quiz-section"
      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
      role="region"
      aria-label={`Quiz question ${current + 1} of ${totalQuestions}`}
    >
      {/* Progress header: pill indicators per question. No correctness colour
          here, only answered/current/upcoming, correctness is revealed only
          on the finished screen (Stage 1.2). */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--muted-foreground)]">
          Question {current + 1} of {totalQuestions}
        </span>
        <div className="flex gap-1.5">
          {shuffled.map((_, i) => (
            <div
              key={i}
              className="h-2.5 w-8 sm:w-7 rounded-full transition-colors"
              style={{
                background:
                  i < selections.length
                    ? "var(--accent)"
                    : i === current
                    ? "var(--accent)"
                    : "var(--border)",
                opacity: i < selections.length ? 0.5 : 1,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <p className="font-semibold text-base mb-5 leading-snug">{question.question}</p>

      <div className="flex flex-col gap-2.5 mb-5">
        {question.options.map((option, i) => {
          // No correctness colour while in progress (Stage 1.2), only a
          // neutral highlight on the user's own selection.
          const isPicked = selected === i;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-disabled={answered}
              aria-pressed={isPicked}
              className="w-full text-left px-4 py-3 rounded-lg border text-sm transition-all"
              style={{
                borderColor: isPicked ? "var(--accent)" : "var(--border)",
                background: isPicked ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
                opacity: answered && !isPicked ? 0.6 : 1,
                cursor: answered ? "default" : "pointer",
              }}
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
