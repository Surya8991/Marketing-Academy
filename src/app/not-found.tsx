import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Marketing Academy",
};

const QUICK_LINKS = [
  { href: "/learn/fundamentals/what-is-marketing", label: "What Marketing Actually Is", emoji: "🎯" },
  { href: "/learn/seo/keyword-research", label: "Keyword Research", emoji: "🔎" },
  { href: "/learn/ai-marketing/ai-marketing-101", label: "AI in Marketing 101", emoji: "🤖" },
  { href: "/tracks", label: "Browse Learning Tracks", emoji: "🗺️" },
];

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-12">
        <p className="text-6xl font-bold text-[var(--accent)] mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-[var(--muted-foreground)] max-w-sm mx-auto">
          That URL doesn&apos;t exist. Try searching for what you need, or jump to a popular lesson.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <Link
          href="/search"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
        >
          <Search size={16} />
          Search lessons
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] font-medium hover:border-[var(--accent)] transition-colors text-sm"
        >
          <BookOpen size={16} />
          Browse all topics
        </Link>
      </div>

      <div className="border-t border-[var(--border)] pt-8">
        <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wider font-semibold mb-4">
          Popular lessons
        </p>
        <div className="space-y-2">
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:bg-[var(--muted)] transition-all group"
            >
              <span className="text-lg">{l.emoji}</span>
              <span className="text-sm font-medium flex-1 group-hover:text-[var(--accent)] transition-colors">
                {l.label}
              </span>
              <ArrowRight size={14} className="text-[var(--muted-foreground)] group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
