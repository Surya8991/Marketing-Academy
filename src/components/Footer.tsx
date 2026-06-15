import Link from "next/link";
import { ExternalLink, Rss } from "lucide-react";
import { CATEGORIES } from "@/lib/curriculum";

const LEARN_LINKS = [
  { href: "/learn",            label: "Browse All Lessons" },
  { href: "/tracks",           label: "Learning Tracks" },
  { href: "/quizzes",          label: "Quizzes" },
  { href: "/certificates",     label: "Certificates" },
  { href: "/bookmarks",        label: "Bookmarks" },
  { href: "/search",           label: "Search" },
];

const RESOURCE_LINKS = [
  { href: "/glossary",                          label: "Glossary" },
  { href: "/interview-questions",               label: "Interview Questions" },
  { href: "/cheat-sheets",                      label: "Cheat Sheets" },
  { href: "/tools",                             label: "Tools Directory" },
  { href: "/compare",                           label: "Compare Tools" },
  { href: "/digital-marketing-cheat-sheet",     label: "Quick Reference Sheet" },
  { href: "/about",                             label: "About" },
];

export default function Footer() {
  const colA = CATEGORIES.slice(0, 8);
  const colB = CATEGORIES.slice(8);

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top brand strip */}
        <div className="py-12 grid gap-8 grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.svg" width={28} height={28} alt="" className="rounded-md" />
              Marketing Academy
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
              Free, plain-English marketing education. From first principles to AI-era tactics, with real examples and curated resources for every level.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Surya8991/Marketing-Academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-1.5 p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors text-xs"
              >
                <ExternalLink size={15} />
                GitHub
              </a>
              <a
                href="/feed.xml"
                aria-label="RSS Feed"
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-4">
              Learn
            </p>
            <ul className="space-y-2.5 text-sm">
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

          {/* Resources */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-4">
              Resources
            </p>
            <ul className="space-y-2.5 text-sm">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/Surya8991/Marketing-Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <ExternalLink size={11} />
                  View on GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Topics A */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-4">
              Topics
            </p>
            <ul className="space-y-2.5 text-sm">
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

          {/* Topics B */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-[var(--foreground)] mb-4 opacity-0 select-none">
              More
            </p>
            <ul className="space-y-2.5 text-sm">
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
              <li className="pt-1">
                <Link
                  href="/learn"
                  className="text-[var(--accent)] hover:opacity-80 font-medium transition-opacity text-xs"
                >
                  Browse all 15 topics &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted-foreground)]">
          <p>
            &copy; {new Date().getFullYear()} Marketing Academy &mdash; Free and open source.
          </p>
          <div className="flex items-center gap-4">
            <span>Built for marketers who learn by doing.</span>
            <Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About</Link>
            <a
              href="https://github.com/Surya8991/Marketing-Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
