"use client";

import { useState, useEffect, useCallback } from "react";
import { lessonId, getCompleted, markComplete as libMarkComplete, markIncomplete as libMarkIncomplete } from "@/lib/progress";
import { getQuizPassed, QUIZ_PASSED_EVENT } from "@/lib/quizzes";
import { getBookmarks, saveBookmarks, type BookmarkEntry } from "@/lib/bookmarks";
import { LESSON_TOGGLE_EVENT, PROGRESS_CHANGED_EVENT } from "@/lib/events";
import { useEngagement } from "@/hooks/useEngagement";

export function useLessonProgress(category: string, slug: string, sourceCategory?: string) {
  const [mounted, setMounted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [quizPassed, setQuizPassedState] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { award } = useEngagement();

  const id = lessonId(category, slug);
  const quizCat = sourceCategory ?? category;

  const refreshState = useCallback(() => {
    if (typeof window === "undefined") return;
    const completedSet = getCompleted();
    setCompleted(completedSet.has(id));
    setQuizPassedState(getQuizPassed(quizCat, slug));
    const bookmarks = getBookmarks();
    setBookmarked(bookmarks.some((b) => b.category === category && b.slug === slug));
  }, [id, quizCat, category, slug]);

  useEffect(() => {
    setMounted(true);
    refreshState();

    const handleProgressChange = () => refreshState();
    const handleLessonToggle = (e: Event) => {
      const detail = (e as CustomEvent<{ id: string; done: boolean }>).detail;
      if (detail && detail.id === id) {
        setCompleted(detail.done);
      } else {
        refreshState();
      }
    };
    const handleQuizPassed = (e: Event) => {
      const detail = (e as CustomEvent<{ id: string }>).detail;
      const targetId = `${quizCat}/${slug}`;
      if (!detail || detail.id === targetId || detail.id === id) {
        setQuizPassedState(true);
      }
    };

    window.addEventListener(PROGRESS_CHANGED_EVENT, handleProgressChange);
    window.addEventListener(LESSON_TOGGLE_EVENT, handleLessonToggle);
    window.addEventListener(QUIZ_PASSED_EVENT, handleQuizPassed);

    return () => {
      window.removeEventListener(PROGRESS_CHANGED_EVENT, handleProgressChange);
      window.removeEventListener(LESSON_TOGGLE_EVENT, handleLessonToggle);
      window.removeEventListener(QUIZ_PASSED_EVENT, handleQuizPassed);
    };
  }, [id, quizCat, slug, refreshState]);

  const toggleComplete = useCallback(() => {
    if (completed) {
      libMarkIncomplete(id);
      setCompleted(false);
      window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: false } }));
    } else {
      if (!quizPassed) return false; // Gated by quiz
      libMarkComplete(id);
      setCompleted(true);
      award("complete", id);
      window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: true } }));
    }
    return true;
  }, [completed, quizPassed, id, award]);

  const toggleBookmarkItem = useCallback((title: string) => {
    const list = getBookmarks();
    const exists = list.some((b) => b.category === category && b.slug === slug);
    let nextList: BookmarkEntry[];
    if (exists) {
      nextList = list.filter((b) => !(b.category === category && b.slug === slug));
      setBookmarked(false);
    } else {
      const entry: BookmarkEntry = { category, slug, title };
      nextList = [...list, entry];
      setBookmarked(true);
      award("bookmark", id);
    }
    saveBookmarks(nextList);
    return !exists;
  }, [id, category, slug, award]);

  return {
    mounted,
    id,
    completed,
    quizPassed,
    bookmarked,
    toggleComplete,
    toggleBookmark: toggleBookmarkItem,
    refreshState,
  };
}
