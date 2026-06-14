"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Search, BookOpen, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/curriculum";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const pathname = usePathname();
  const topicsRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setTopicsOpen(false);
  }, [pathname]);

  // Close topics on outside click / escape
  useEffect(() => {
    if (!topicsOpen) return;
    function onClick(e: MouseEvent) {
      if (topicsRef.current && !topicsRef.current.contains(e.target as Node)) {
        setTopicsOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setTopicsOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [topicsOpen]);

  const onLearn = pathname.startsWith("/learn");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg shrink-0">
          <span className="text-2xl">📈</span>
          <span className="hidden sm:inline">Marketing Academy</span>
          <span className="sm:hidden">MktAcademy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div ref={topicsRef} className="relative">
            <button
              onClick={() => setTopicsOpen((v) => !v)}
              aria-expanded={topicsOpen}
              className={cn(
                "flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                onLearn || topicsOpen
                  ? "bg-[var(--muted)] text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              Topics
              <ChevronDown
                size={14}
                className={cn("transition-transform", topicsOpen && "rotate-180")}
              />
            </button>

            {topicsOpen && (
              <div className="absolute left-0 top-full mt-2 w-[min(720px,90vw)] rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-3 grid grid-cols-2 gap-1">
                {CATEGORIES.map((cat) => {
                  const active = pathname.startsWith(`/learn/${cat.slug}`);
                  return (
                    <Link
                      key={cat.slug}
                      href={`/learn/${cat.slug}`}
                      className={cn(
                        "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        active
                          ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                          : "hover:bg-[var(--muted)] text-[var(--foreground)]"
                      )}
                    >
                      <span className="text-xl shrink-0 leading-none mt-0.5">{cat.emoji}</span>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{cat.title}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">
                          {cat.lessons.length} lessons
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <Link
                  href="/learn"
                  className="col-span-2 mt-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--muted)] transition-colors"
                >
                  Browse all topics
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/learn"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname === "/learn"
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            Browse
          </Link>
          <Link
            href="/tracks"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith("/tracks")
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            Tracks
          </Link>
          <Link
            href="/glossary"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith("/glossary")
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            Glossary
          </Link>
          <Link
            href="/interview-questions"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith("/interview-questions")
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            Interview Prep
          </Link>
          <Link
            href="/digital-marketing-cheat-sheet"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith("/digital-marketing-cheat-sheet")
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            Cheat Sheets
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/search"
            className="p-2 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/learn/fundamentals/what-is-marketing"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <BookOpen size={14} />
            Start Learning
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 pt-3 pb-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 px-1">
            Topics
          </p>
          <div className="grid grid-cols-1 gap-1 mb-4">
            {CATEGORIES.map((cat) => {
              const active = pathname.startsWith(`/learn/${cat.slug}`);
              return (
                <Link
                  key={cat.slug}
                  href={`/learn/${cat.slug}`}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                    active
                      ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  <span className="flex-1 font-medium">{cat.title}</span>
                  <span className="text-xs text-[var(--muted-foreground)]">
                    {cat.lessons.length}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <Link
              href="/tracks"
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/tracks")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              🗺️ Learning Tracks
            </Link>
            <Link
              href="/glossary"
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/glossary")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              📖 Glossary
            </Link>
            <Link
              href="/interview-questions"
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/interview-questions")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              🎤 Interview Prep
            </Link>
            <Link
              href="/digital-marketing-cheat-sheet"
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/digital-marketing-cheat-sheet")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              📋 Cheat Sheets
            </Link>
          </div>
          <Link
            href="/learn/fundamentals/what-is-marketing"
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium"
          >
            <BookOpen size={14} />
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}
