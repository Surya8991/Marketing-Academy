"use client";

/**
 * MarkComplete: per-lesson completion button with quiz gate.
 *
 * State machine:
 *   locked  (quizPassed=false, done=false) → shows Lock icon, click scrolls to #quiz-section
 *   unlocked (quizPassed=true, done=false)  → shows Circle icon, click marks complete + fires confetti
 *   done    (done=true)                     → shows CheckCircle icon, click un-marks
 *
 * There is NO modal here. The quiz gate is purely a scroll, see AGENTS.md Rule 25.
 * Do NOT add a hasQuiz prop, all 393 lessons have quizzes.
 *
 * Events emitted:
 *   LESSON_TOGGLE_EVENT: keeps other MarkComplete instances on the same page in sync
 *   ENGAGEMENT_EVENT: carries new XP state + unlocked achievements for StreakBadge / toast
 *
 * Events listened:
 *   LESSON_TOGGLE_EVENT, syncs done state when a sibling instance toggles
 *   QUIZ_PASSED_EVENT  , dispatched by Quiz.tsx on 100% score; unlocks this button
 */

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import { getQuizPassed, setQuizPassed, QUIZ_PASSED_EVENT } from "@/lib/quizzes";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import posthog from "posthog-js";
import { LESSON_TOGGLE_EVENT } from "@/lib/events";
import { checkAchievements } from "@/lib/achievements";
import { CheckCircle, Circle, ArrowRight, Lock } from "lucide-react";

/** Canvas-based confetti burst. Appends a temporary canvas and self-removes after animation. */
function fireConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) { document.body.removeChild(canvas); return; }

  const colors = ["#6366f1","#a855f7","#ec4899","#f59e0b","#10b981","#3b82f6"];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -10 - Math.random() * 40,
    r: 5 + Math.random() * 6,
    d: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 5,
    tiltSpeed: 0.05 + Math.random() * 0.1,
    angle: 0,
  }));

  let frame = 0;
  const max = 90;

  function draw() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of pieces) {
      ctx!.beginPath();
      ctx!.fillStyle = p.color;
      ctx!.globalAlpha = Math.max(0, 1 - frame / max);
      ctx!.ellipse(p.x, p.y, p.r, p.r / 2, p.angle, 0, Math.PI * 2);
      ctx!.fill();
      p.y += p.d;
      p.x += Math.sin(p.angle) * 1.5;
      p.angle += p.tiltSpeed;
      p.tilt += p.tiltSpeed;
    }
    frame++;
    if (frame < max) requestAnimationFrame(draw);
    else document.body.removeChild(canvas);
  }
  requestAnimationFrame(draw);
}

export default function MarkComplete({
  category,
  slug,
  nextHref,
  nextTitle,
}: {
  category: string;
  slug: string;
  nextHref?: string;   // href for the "Continue" CTA shown after completing
  nextTitle?: string;  // label for the "Continue" CTA
}) {
  const id = lessonId(category, slug);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [quizPassed, setQuizPassedState] = useState(false);
  // Ref guard prevents double-XP when users double-click the button rapidly
  const completing = useRef(false);

  useEffect(() => {
    setMounted(true);
    setDone(getCompleted().has(id));
    setQuizPassedState(getQuizPassed(category, slug));
  }, [id, category, slug]);

  // Sync multiple MarkComplete instances that exist on the same lesson page
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ id: string; done: boolean }>;
      if (ce.detail.id === id) setDone(ce.detail.done);
    };
    window.addEventListener(LESSON_TOGGLE_EVENT, handler);
    return () => window.removeEventListener(LESSON_TOGGLE_EVENT, handler);
  }, [id]);

  // Quiz.tsx dispatches QUIZ_PASSED_EVENT when the user scores 100%.
  // This unlocks the button without requiring a page reload.
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ id: string }>;
      if (ce.detail.id === `${category}/${slug}`) {
        setQuizPassedState(true);
        setQuizPassed(category, slug); // persist so unlock survives refresh
      }
    };
    window.addEventListener(QUIZ_PASSED_EVENT, handler);
    return () => window.removeEventListener(QUIZ_PASSED_EVENT, handler);
  }, [category, slug]);

  // Avoid rendering with stale server state (localStorage is client-only)
  if (!mounted) return null;

  // locked=true when neither the quiz has been passed nor the lesson already completed
  const locked = !quizPassed && !done;

  function handleComplete() {
    // Double-click guard: completing.current is reset synchronously after all state updates
    if (completing.current) return;
    completing.current = true;
    markComplete(id);
    setDone(true);
    setJustCompleted(true);
    fireConfetti();
    // Notify sibling instances on the same page
    window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: true } }));
    // Award XP, check achievements, broadcast to StreakBadge + AchievementToast
    const newState = addXP("complete", id);
    const unlocked = checkAchievements(newState);
    window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
    posthog.capture("lesson_completed", { lesson_id: id });
    completing.current = false;
  }

  const toggle = () => {
    if (done) {
      markIncomplete(id);
      setDone(false);
      setJustCompleted(false);
      window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: false } }));
    } else if (locked) {
      // Scroll to the quiz instead of opening a modal, see AGENTS.md Rule 25
      document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      handleComplete();
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={toggle}
        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all w-fit"
        style={
          done
            ? {
                background: "rgba(22,163,74,0.15)",
                color: "rgb(22 163 74)",
                border: "1px solid rgba(22,163,74,0.3)",
              }
            : locked
            ? {
                background: "var(--muted)",
                color: "var(--muted-foreground)",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }
            : {
                background: "var(--muted)",
                color: "var(--muted-foreground)",
                border: "1px solid transparent",
              }
        }
      >
        {done ? (
          <CheckCircle size={16} />
        ) : locked ? (
          <Lock size={16} />
        ) : (
          <Circle size={16} />
        )}
        {done ? "Completed" : locked ? "Take quiz to complete" : "Mark as complete"}
      </button>

      {/* Continue CTA, only shown immediately after the user completes the lesson */}
      {justCompleted && nextHref && nextTitle && (
        <Link
          href={nextHref}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold w-fit"
          style={{
            background: "rgba(22,163,74,0.12)",
            color: "rgb(22 163 74)",
            border: "1px solid rgba(22,163,74,0.25)",
          }}
        >
          <CheckCircle size={15} />
          Continue: {nextTitle}
          <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
