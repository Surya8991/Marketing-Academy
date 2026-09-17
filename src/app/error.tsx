"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-xl border border-[var(--border)] bg-[var(--muted)] p-8 text-center">
        {/* Theme-aware tint (Rule 19): rgba overlay works in light + dark, unlike
            bg-red-50 which renders a near-white box on a dark background. */}
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border mb-4"
          style={{ background: "rgba(239,68,68,0.12)", borderColor: "rgba(239,68,68,0.35)" }}
        >
          <AlertTriangle size={22} style={{ color: "#ef4444" }} />
        </div>
        <h2 className="font-semibold text-xl mb-2 text-[var(--foreground)]">Something went wrong</h2>
        <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed">
          {error.message || "An unexpected error occurred. Try refreshing the page."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={14} />
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            Go home
          </Link>
        </div>
        {error.digest && (
          <p className="mt-4 text-[11px] text-[var(--muted-foreground)] font-mono">
            digest: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
