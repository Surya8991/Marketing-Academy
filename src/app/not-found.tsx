import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const QUICK_LINKS = [
  { href: "/learn/fundamentals/what-is-marketing", label: "What Marketing Actually Is" },
  { href: "/learn/seo/keyword-research", label: "Keyword Research" },
  { href: "/learn/ai-marketing/ai-marketing-101", label: "AI in Marketing 101" },
  { href: "/tracks", label: "Browse Learning Tracks" },
];

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-12">
        <p className="text-6xl font-medium font-data tabular-nums text-[var(--accent)] mb-4">404</p>
        <h1 className="text-2xl font-medium font-serif mb-3">Page not found</h1>
        <p className="text-[var(--muted-foreground)] max-w-sm mx-auto">
          That URL doesn&apos;t exist. Try searching for what you need, or jump to a popular lesson.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <Link
          href="/search"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Search size={16} strokeWidth={1.5} />
          Search lessons
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] font-medium hover:border-[var(--accent)] transition-colors text-sm"
        >
          <BookOpen size={16} strokeWidth={1.5} />
          Browse all topics
        </Link>
      </div>

      <div className="border-t border-[var(--border)] pt-8">
        <p className="text-xs text-[var(--muted-foreground)] font-data mb-4">
          Popular lessons
        </p>
        <div className="space-y-2">
          {QUICK_LINKS.map((l, idx) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-colors group"
            >
              <span className="font-data text-xs text-[var(--muted-foreground)] tabular-nums w-5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium flex-1 group-hover:text-[var(--accent)] transition-colors">
                {l.label}
              </span>
              <ArrowRight size={14} strokeWidth={1.5} className="text-[var(--muted-foreground)]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
