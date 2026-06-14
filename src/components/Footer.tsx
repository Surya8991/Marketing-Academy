import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CATEGORIES } from "@/lib/curriculum";
import NewsletterSignup from "@/components/NewsletterSignup";

const LEARN_LINKS = [
  { href: "/learn", label: "Browse All Lessons" },
  { href: "/tracks", label: "Learning Tracks" },
  { href: "/glossary", label: "Marketing Glossary" },
  { href: "/search", label: "Search" },
  { href: "/bookmarks", label: "Bookmarks" },
  { href: "/certificates", label: "Certificates" },
];

const RESOURCE_LINKS = [
  { href: "/tools", label: "Tools Directory" },
  { href: "/cheat-sheets", label: "Cheat Sheets" },
  { href: "/interview-prep", label: "Interview Prep" },
  { href: "/interview-questions", label: "Interview Questions" },
  { href: "/digital-marketing-cheat-sheet", label: "Quick Reference Sheet" },
  { href: "/about", label: "About" },
  { href: "https://github.com/Surya8991/Marketing-Academy", label: "View on GitHub", external: true },
];

export default function Footer() {
  const colA = CATEGORIES.slice(0, 8);

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
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <img src="/icon.svg" width={28} height={28} alt="" className="rounded-md" />
            Marketing Academy
          </Link>
          <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
            Free, plain-English marketing lessons. From fundamentals to AI-era
            tactics, with real examples and curated resources.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-3">
            Learn
          </p>
          <ul className="space-y-2 text-sm">
            {LEARN_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-3">
            Resources
          </p>
          <ul className="space-y-2 text-sm">
            {RESOURCE_LINKS.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <ExternalLink size={12} />
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
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

      </div>

      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--muted-foreground)]">
          <p>© {new Date().getFullYear()} Marketing Academy. Free and open source.</p>
          <p>Built for marketers who learn by doing.</p>
        </div>
      </div>
    </footer>
  );
}
