"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import { getQuizPassed, QUIZ_PASSED_EVENT } from "@/lib/quizzes";
import { addXP, ENGAGEMENT_EVENT } from "@/lib/engagement";
import posthog from "posthog-js";
import { LESSON_TOGGLE_EVENT } from "@/lib/events";
import { checkAchievements } from "@/lib/achievements";
import { CheckCircle, Circle, ArrowRight, Lock } from "lucide-react";

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
  hasQuiz = false,
}: {
  category: string;
  slug: string;
  nextHref?: string;
  nextTitle?: string;
  hasQuiz?: boolean;
}) {
  const id = lessonId(category, slug);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);
  const [quizPassed, setQuizPassedState] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDone(getCompleted().has(id));
    setQuizPassedState(getQuizPassed(category, slug));
  }, [id, category, slug]);

  // Sync multiple instances of MarkComplete on the same page
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ id: string; done: boolean }>;
      if (ce.detail.id === id) setDone(ce.detail.done);
    };
    window.addEventListener(LESSON_TOGGLE_EVENT, handler);
    return () => window.removeEventListener(LESSON_TOGGLE_EVENT, handler);
  }, [id]);

  // Listen for quiz-passed event to unlock immediately without reload
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ id: string }>;
      if (ce.detail.id === `${category}/${slug}`) {
        setQuizPassedState(true);
      }
    };
    window.addEventListener(QUIZ_PASSED_EVENT, handler);
    return () => window.removeEventListener(QUIZ_PASSED_EVENT, handler);
  }, [category, slug]);

  if (!mounted) return null;

  // Determine if the button should be locked
  // Locked only when: lesson has a quiz AND quiz not passed AND lesson not already completed
  const locked = hasQuiz && !quizPassed && !done;

  const toggle = () => {
    if (locked) return;
    if (done) {
      markIncomplete(id);
      setDone(false);
      setJustCompleted(false);
      window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: false } }));
    } else {
      markComplete(id);
      setDone(true);
      setJustCompleted(true);
      fireConfetti();
      window.dispatchEvent(new CustomEvent(LESSON_TOGGLE_EVENT, { detail: { id, done: true } }));
      const newState = addXP("complete", id);
      const unlocked = checkAchievements(newState);
      window.dispatchEvent(new CustomEvent(ENGAGEMENT_EVENT, { detail: { state: newState, unlocked } }));
      posthog.capture("lesson_completed", { lesson_id: id });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Mark Complete button */}
      <div className="flex flex-col gap-1">
        <button
          onClick={toggle}
          disabled={locked}
          title={locked ? "Pass the quiz below to unlock this" : undefined}
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
                  cursor: "not-allowed",
                  opacity: "0.7",
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
          {done ? "Completed" : locked ? "Complete the quiz first" : "Mark as complete"}
        </button>

        {locked && (
          <p className="text-xs text-[var(--muted-foreground)] pl-1">
            Answer all questions correctly to unlock &darr;{" "}
            <a href="#quiz-section" className="underline hover:text-[var(--foreground)] transition-colors">
              Take Quiz
            </a>
          </p>
        )}
      </div>

      {/* Continue CTA after completing */}
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
