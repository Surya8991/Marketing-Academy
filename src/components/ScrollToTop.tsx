"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-lg hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:border-[var(--accent)] transition-all"
    >
      <ChevronUp size={20} />
    </button>
  );
}
