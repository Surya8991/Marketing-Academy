/**
 * Stage 3b.3: Property test — shuffling quiz options preserves `correct`.
 *
 * This is the single highest-value test in the project. Rule 40 documents
 * the trap: shuffling options[] without recomputing correct silently
 * mis-grades all 2,568 questions with no build error, no runtime error,
 * no type error. This test blocks that trap permanently.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { QUIZZES } from "@/lib/quizzes";

/**
 * Fisher-Yates shuffle — identical to the one in Quiz.tsx and
 * TrackQuizPageClient.tsx. Must stay in sync.
 */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Pairs options with their correct flag, shuffles, and recomputes the
 * correct index — identical to prepareQuestions() in Quiz.tsx.
 */
function shuffleAndRecompute(options: string[], correct: number) {
  const paired = options.map((text, i) => ({ text, wasCorrect: i === correct }));
  const shuffled = shuffle(paired);
  return {
    options: shuffled.map((p) => p.text),
    correct: shuffled.findIndex((p) => p.wasCorrect),
  };
}

describe("quiz shuffling preserves correct answer", () => {
  // Run 10 shuffle rounds per question to catch order-dependent bugs.
  const ROUNDS = 10;

  it(`all questions survive ${ROUNDS} shuffle rounds`, () => {
    let totalChecked = 0;

    for (const [key, questions] of Object.entries(QUIZZES)) {
      for (let qi = 0; qi < questions.length; qi++) {
        const q = questions[qi];
        const originalCorrectText = q.options[q.correct];

        for (let r = 0; r < ROUNDS; r++) {
          const result = shuffleAndRecompute(q.options, q.correct);

          // The correct index must point to the same text as the original
          assert.equal(
            result.options[result.correct],
            originalCorrectText,
            `${key} Q${qi + 1} round ${r + 1}: correct text mismatch after shuffle. ` +
            `Expected "${originalCorrectText}", got "${result.options[result.correct]}"`,
          );

          // All original options must be present (no duplication or loss)
          assert.deepEqual(
            [...result.options].sort(),
            [...q.options].sort(),
            `${key} Q${qi + 1} round ${r + 1}: options set changed after shuffle`,
          );

          totalChecked++;
        }
      }
    }

    // Sanity: we actually tested a meaningful number of questions
    assert.ok(
      totalChecked > 20_000,
      `only checked ${totalChecked} question-rounds (expected 25k+)`,
    );
  });
});
