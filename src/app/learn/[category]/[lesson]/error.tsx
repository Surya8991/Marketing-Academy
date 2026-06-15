"use client";

import Link from "next/link";

export default function LessonError() {
  return (
    <div
      className="max-w-xl mx-auto px-6 py-24 text-center"
      style={{ color: "var(--foreground)" }}
    >
      <p className="text-4xl mb-4">⚠️</p>
      <h1 className="text-2xl font-bold mb-3">Failed to load lesson</h1>
      <p style={{ color: "var(--muted-foreground)" }} className="mb-6">
        Something went wrong rendering this lesson. Try refreshing the page.
      </p>
      <Link
        href="/learn"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors"
        style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
      >
        Back to All Topics
      </Link>
    </div>
  );
}
