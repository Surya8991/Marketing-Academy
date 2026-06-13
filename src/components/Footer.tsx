import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CATEGORIES } from "@/lib/curriculum";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  const colA = CATEGORIES.slice(0, 5);
  const colB = CATEGORIES.slice(5);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="border-b border-[var(--border)] pb-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-[var(--foreground)]">Stay sharp</h3>
            <p className="text-sm text-[var(--muted-foreground)]">New lessons and marketing insights, weekly.</p>
          </div>
          <NewsletterSignup />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-2xl">📈</span>
            Marketing Academy
          </Link>
          <p className="mt-3 text-sm text-[var(--muted-foreground)] max-w-sm">
            Free, plain-English marketing lessons. From the fundamentals to AI-era
            tactics — with diagrams, real numbers, and curated resources.
          </p>
          <a
            href="https://github.com/Surya8991/Marketing-Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ExternalLink size={14} />
            View on GitHub
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-3">
            Topics
          </p>
          <ul className="space-y-2 text-sm">
            {colA.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/learn/${cat.slug}`}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {cat.emoji} {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-3">
            More
          </p>
          <ul className="space-y-2 text-sm">
            {colB.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/learn/${cat.slug}`}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {cat.emoji} {cat.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/search"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} Marketing Academy. Free and open source.</p>
          <p>Made with care for marketers learning in public.</p>
        </div>
      </div>
    </footer>
  );
}
