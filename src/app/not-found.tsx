import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-5xl font-bold text-[var(--accent)] mb-4">404</p>
      <h1 className="text-2xl font-bold text-[var(--foreground)] mb-3">
        This lesson doesn&apos;t exist yet
      </h1>
      <p className="text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
        We&apos;re still writing it. Check back soon — new lessons are added regularly.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/learn"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Browse all lessons
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted)] transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
