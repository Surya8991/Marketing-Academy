"use client";

/**
 * Per-lesson quiz component.
 *
 * MUST be rendered inside a <section id="quiz-section">: MarkComplete.tsx
 * calls `document.getElementById("quiz-section")?.scrollIntoView()` when locked.
 * The id="quiz-section" wrapper is present in EVERY render branch below
 * (loading, in-progress, review, and finished) so that scroll target always
 * resolves, even for a learner who already attempted and failed the quiz once.
 *
 * Pass/fail (PROJECTS_PLAN.md Stage 1.6 + Stage 10.2, see AGENTS.md note):
 *   - Requires 4 of 5 correct (80%) to dispatch QUIZ_PASSED_EVENT, now that
 *     every lesson has 5 questions (Stage 10.1, completed Session 85).
 *   - Below 80%, a fail screen shows with a "Try Again" button.
 *
 * Revisable answers + review-before-submit (IMPROVEMENT_PLAN.md #23):
 *   - An answer is never locked while the quiz is in progress: clicking a
 *     different option on the current question simply changes the pick.
 *   - `selections` is a FIXED-LENGTH array (one slot per question, -1 =
 *     unanswered), not a push-only list, so any question's pick can be
 *     revised at any point before the final submit without reshaping state.
 *   - After the last question is answered, the learner lands on a "review"
 *     screen listing every question with the option they picked (no
 *     correctness shown) and an "Edit" button per question that jumps back
 *     to it; editing returns to the review screen instead of advancing
 *     linearly. Only "Submit Quiz" from the review screen actually grades
 *     the attempt.
 *   - This does NOT reintroduce mid-quiz correctness reveal (Stage 1.2): the
 *     review screen shows only what was picked, never whether it was right.
 *
 * Retake / review after finishing:
 *   - A "Retake quiz" button is shown on EVERY finished screen (pass, fail, or
 *     the "Already Passed!" screen restored from a stored pass flag), so a
 *     learner can re-attempt any time without resetting their progress.
 *   - handleRetry never clears the persisted pass flag, so a retake can never
 *     re-lock a lesson already earned; it only reshuffles for a fresh attempt.
 *   - The full per-question review (which option was correct + every
 *     explanation) renders on BOTH the pass and fail screens whenever a fresh
 *     attempt just completed, so acing the quiz still shows the answers. It is
 *     omitted only on the mount-restored "Already Passed!" screen, which has
 *     no per-question answers to show.
 *
 * Answer reveal timing (PROJECTS_PLAN.md Stage 1.2, decided):
 *   - Correctness and explanations are shown ONLY after the whole quiz is
 *     submitted (the finished screen), never per-question while in progress
 *     or on the pre-submit review screen.
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
 *   - Only the FINISHED result is persisted (there was never mid-quiz resume;
 *     the review step is still in-memory only), under quizStorageKey(pathname),
 *     so the same result shows after a reload.
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
import { recordHit, recordMiss, reviewItemId } from "@/lib/spaced-review";
import { PROGRESS_CHANGED_EVENT } from "@/lib/events";
import { CheckCircle2, XCircle, RotateCcw, Trophy, Pencil } from "lucide-react";

type Props = {
  questions: Quiz[];
  category: string;
  slug: string;
  lessonTitle: string;
};

/** A quiz question carrying its original (pre-shuffle) position, the stable
 *  handle spaced-review uses so an id survives Quiz.tsx's per-mount shuffle. */
type PreparedQuiz = Quiz & { origIndex: number };

/** 4 of 5 correct required to pass, see the threshold note in the file docstring. */
const PASS_THRESHOLD = 0.8;

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

/** Shuffles question order (tagging each with its origIndex so spaced-review
 *  ids stay stable across shuffles, see @/lib/spaced-review), and within each
 *  question shuffles option order while recomputing `correct` (a positional
 *  index) so grading stays correct. */
function prepareQuestions(questions: Quiz[]): PreparedQuiz[] {
  const withIndex = questions.map((q, i) => ({ ...q, origIndex: i }));
  return shuffle(withIndex).map((q) => {
    const paired = q.options.map((text, i) => ({ text, wasCorrect: i === q.correct }));
    const shuffledPairs = shuffle(paired);
    return {
      ...q,
      options: shuffledPairs.map((p) => p.text),
      correct: shuffledPairs.findIndex((p) => p.wasCorrect),
    };
  });
}

export default function Quiz({ questions, category, slug, lessonTitle }: Props) {
  const pathname = usePathname();
  const [shuffled, setShuffled] = useState<PreparedQuiz[]>([]);
  const [current, setCurrent] = useState(0);
  // selections[i] = the option index picked for question i, or -1 if
  // unanswered. Fixed length (== questions.length) so any question's pick
  // can be revised in place, at any time before the final submit.
  const [selections, setSelections] = useState<number[]>([]);
  const [mode, setMode] = useState<"question" | "review">("question");
  // True while editing a single question that was reopened from the review
  // screen, changes the primary button to return to review instead of
  // advancing linearly to the next question.
  const [editingFromReview, setEditingFromReview] = useState(false);
  const [finished, setFinished] = useState(false);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  // Shuffle once on mount, client-only (avoids SSR/hydration mismatch), and
  // seed a fresh, all-unanswered selections array sized to match.
  useEffect(() => {
    const prepared = prepareQuestions(questions);
    setShuffled(prepared);
    setSelections(new Array(prepared.length).fill(-1));
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

  function handleSelect(index: number) {
    // Always revisable: picking a different option before final submit just
    // updates that question's slot, no lock (IMPROVEMENT_PLAN.md #23).
    setSelections((prev) => {
      const next = [...prev];
      next[current] = index;
      return next;
    });
  }

  function goBack() {
    if (editingFromReview) {
      setEditingFromReview(false);
      setMode("review");
      return;
    }
    if (current === 0) return;
    setCurrent((c) => c - 1);
  }

  function goNext() {
    if (shuffled.length === 0 || selections[current] === -1) return;
    if (editingFromReview) {
      setEditingFromReview(false);
      setMode("review");
      return;
    }
    if (current + 1 >= totalQuestions) {
      setMode("review");
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function editQuestion(index: number) {
    setCurrent(index);
    setEditingFromReview(true);
    setMode("question");
  }

  function handleSubmit() {
    if (shuffled.length === 0) return;
    const finalSelections = selections;

    try {
      localStorage.setItem(
        quizStorageKey(pathname),
        JSON.stringify({ selections: finalSelections, total: totalQuestions })
      );
      window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
    } catch { /* storage full or unavailable */ }

    const finalScore = finalSelections.filter((sel, i) => sel === shuffled[i].correct).length;

    // Spaced review (independent of pass/fail): every answered question
    // either lapses a missed one back to rung 0 or advances an already-
    // tracked one, questions that have never been missed are never tracked.
    finalSelections.forEach((sel, i) => {
      const q = shuffled[i];
      const id = reviewItemId(category, slug, q.origIndex);
      if (sel === q.correct) {
        recordHit(id);
      } else {
        recordMiss({
          id,
          category,
          slug,
          lessonTitle,
          question: q.question,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation,
        });
      }
    });

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
    setFinished(true);
  }

  function handleRetry() {
    try { localStorage.removeItem(quizStorageKey(pathname)); } catch { /* ignore */ }
    // Reshuffle both question order and each question's options on retry,
    // never mid-session (saved answers are indexed positionally against the
    // question order they were recorded under).
    const prepared = prepareQuestions(questions);
    setShuffled(prepared);
    setSelections(new Array(prepared.length).fill(-1));
    setCurrent(0);
    setMode("question");
    setEditingFromReview(false);
    setFinished(false);
    // A retake is a genuine fresh attempt: drop the "jumped straight to the
    // success screen" flag so the new attempt shows its own real score and
    // per-question review. The persisted pass flag (getQuizPassed) is left
    // untouched, so "Mark as Complete" stays unlocked no matter how the
    // retake goes, a retake can never re-lock a lesson already earned.
    setAlreadyPassed(false);
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
    // A per-question review needs the actual answers from this attempt. It's
    // available whenever a fresh attempt just completed, but NOT when we
    // jumped straight to the success screen on mount from a stored pass flag
    // (alreadyPassed, selections never filled from a real attempt). Shown for
    // both a pass and a fail now, so a learner who aces the quiz still sees
    // exactly which answers were right and can read every explanation.
    const showReview = !alreadyPassed && selections.length === totalQuestions;

    // Shared review list, used by both the pass and fail branches below.
    const reviewList = showReview ? (
      <div className="flex flex-col gap-4 mb-6 text-left">
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
    ) : null;

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
            {reviewList}
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <RotateCcw size={14} />
              Retake quiz
            </button>
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
            {reviewList}

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

  if (mode === "review") {
    return (
      <div
        id="quiz-section"
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
        role="region"
        aria-label="Review your answers before submitting"
      >
        <div className="mb-5">
          <h3 className="text-lg font-semibold mb-1">Review your answers</h3>
          <p className="text-sm text-[var(--muted-foreground)]">
            Check each answer before submitting, you can still go back and change any of them.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {shuffled.map((q, qi) => {
            const pick = selections[qi];
            return (
              <div
                key={qi}
                className="rounded-lg bg-[var(--muted)] border border-[var(--border)] p-4 flex items-start justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold mb-1 leading-snug">
                    {qi + 1}. {q.question}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Your answer:{" "}
                    <span className="font-medium text-[var(--foreground)]">
                      {pick !== -1 ? `${String.fromCharCode(65 + pick)}. ${q.options[pick]}` : "Not answered"}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => editQuestion(qi)}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <Pencil size={12} aria-hidden="true" />
                  Edit
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCurrent(totalQuestions - 1);
              setMode("question");
            }}
            className="px-4 py-2.5 rounded-lg text-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 rounded-lg text-sm font-medium"
            style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = shuffled[current];
  const pickedForCurrent = selections[current] ?? -1;

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
        {/* Stage 7.8: flex-wrap + min-w so pills don't overflow at 375px */}
        <div className="flex flex-wrap gap-1.5 justify-end">
          {shuffled.map((_, i) => (
            <div
              key={i}
              className="h-2.5 min-w-5 flex-1 max-w-8 sm:max-w-7 rounded-full transition-colors"
              style={{
                background:
                  selections[i] !== -1
                    ? "var(--accent)"
                    : i === current
                    ? "var(--accent)"
                    : "var(--border)",
                opacity: selections[i] !== -1 ? 0.5 : 1,
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
          // neutral highlight on the user's own selection. Always clickable,
          // so an earlier pick can be changed at any time before submit.
          const isPicked = pickedForCurrent === i;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-pressed={isPicked}
              className="w-full text-left px-4 py-3 rounded-lg border text-sm transition-all cursor-pointer"
              style={{
                borderColor: isPicked ? "var(--accent)" : "var(--border)",
                background: isPicked ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
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

      <div className="flex items-center gap-3">
        {!editingFromReview && current > 0 && (
          <button
            onClick={goBack}
            className="px-4 py-2.5 rounded-lg text-sm border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Back
          </button>
        )}
        {pickedForCurrent !== -1 && (
          <button
            onClick={goNext}
            className="px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
          >
            {editingFromReview
              ? "Back to Review"
              : current + 1 >= totalQuestions
              ? "Review Answers"
              : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}
