/**
 * "What to learn next" recommendation engine.
 *
 * Pure, client-callable function over data already available: CATEGORIES
 * (curriculum.ts) and the completed-lesson set (progress.ts). No new storage,
 * no server round-trip, this is a read-only view over existing state.
 *
 * Strategy, in priority order:
 *   1. New learner (nothing completed anywhere): recommend the canonical
 *      starting lesson plus the first lesson of a couple of popular
 *      categories, so the very first homepage visit isn't empty.
 *   2. Otherwise: prioritize "almost-done" categories, the category closest
 *      to 100% (but not yet there) surfaces first, on the theory that
 *      finishing what's started beats starting something new (completion
 *      momentum, and it's also what unlocks a Skill Map "category cleared").
 *   3. Once every started category is exhausted, fill remaining slots with
 *      the first lesson of the next never-touched category, in curriculum
 *      order, to nudge breadth once depth is covered.
 */

import { CATEGORIES, canonicalLessonId, type LessonRef } from "@/lib/curriculum";
import { getCompleted } from "@/lib/progress";

export type Recommendation = {
  category: string;
  categoryTitle: string;
  emoji: string;
  slug: string;
  title: string;
  reason: string;
};

const STARTER_LESSON = { category: "fundamentals", slug: "what-is-marketing" };

function firstIncomplete(categorySlug: string, lessons: LessonRef[], completed: Set<string>): LessonRef | undefined {
  return lessons.find((l) => !completed.has(canonicalLessonId(categorySlug, l)));
}

export function getRecommendations(limit = 3): Recommendation[] {
  const completed = getCompleted();
  const out: Recommendation[] = [];
  const seen = new Set<string>(); // categorySlug, avoid recommending 2 lessons from the same category

  function push(categorySlug: string, lesson: LessonRef, reason: string) {
    const cat = CATEGORIES.find((c) => c.slug === categorySlug);
    if (!cat || seen.has(categorySlug)) return;
    seen.add(categorySlug);
    out.push({ category: categorySlug, categoryTitle: cat.title, emoji: cat.emoji, slug: lesson.slug, title: lesson.title, reason });
  }

  if (completed.size === 0) {
    const starterCat = CATEGORIES.find((c) => c.slug === STARTER_LESSON.category);
    const starterLesson = starterCat?.lessons.find((l) => l.slug === STARTER_LESSON.slug);
    if (starterCat && starterLesson) push(starterCat.slug, starterLesson, "Start here");
    for (const cat of CATEGORIES) {
      if (out.length >= limit) break;
      if (cat.slug === STARTER_LESSON.category) continue;
      const lesson = cat.lessons[0];
      if (lesson) push(cat.slug, lesson, "Popular discipline");
    }
    return out.slice(0, limit);
  }

  // Categories with progress but not yet 100%, most-nearly-done first.
  const inProgress = CATEGORIES
    .map((cat) => {
      const total = cat.lessons.length;
      const done = cat.lessons.filter((l) => completed.has(canonicalLessonId(cat.slug, l))).length;
      return { cat, total, done, pct: total > 0 ? done / total : 0 };
    })
    .filter((c) => c.done > 0 && c.done < c.total)
    .sort((a, b) => b.pct - a.pct);

  for (const { cat, total, done } of inProgress) {
    if (out.length >= limit) break;
    const next = firstIncomplete(cat.slug, cat.lessons, completed);
    if (next) push(cat.slug, next, `${Math.round((done / total) * 100)}% done, finish it off`);
  }

  // Fill remaining slots with the first lesson of an untouched category.
  if (out.length < limit) {
    for (const cat of CATEGORIES) {
      if (out.length >= limit) break;
      if (seen.has(cat.slug)) continue;
      const done = cat.lessons.some((l) => completed.has(canonicalLessonId(cat.slug, l)));
      if (done) continue; // already fully complete, or handled above
      const first = cat.lessons[0];
      if (first) push(cat.slug, first, "New discipline");
    }
  }

  return out.slice(0, limit);
}
