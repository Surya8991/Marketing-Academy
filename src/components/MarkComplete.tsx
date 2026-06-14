"use client";

import { useState, useEffect } from "react";
import { getCompleted, markComplete, markIncomplete, lessonId } from "@/lib/progress";
import { CheckCircle, Circle } from "lucide-react";

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
