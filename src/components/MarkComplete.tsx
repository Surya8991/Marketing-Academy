"use client";

import { useState, useEffect } from "react";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import { CheckCircle, Circle } from "lucide-react";

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
}: {
  category: string;
  slug: string;
}) {
  const id = lessonId(category, slug);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDone(getCompleted().has(id));
  }, [id]);

  if (!mounted) return null;

  const toggle = () => {
    if (done) {
      markIncomplete(id);
      setDone(false);
    } else {
      markComplete(id);
      setDone(true);
      fireConfetti();
    }
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
        done
          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
          : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      }`}
    >
      {done ? <CheckCircle size={16} /> : <Circle size={16} />}
      {done ? "Completed" : "Mark as complete"}
    </button>
  );
}
