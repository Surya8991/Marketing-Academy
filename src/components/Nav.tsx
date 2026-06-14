"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/curriculum";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg shrink-0">
          <span className="text-2xl">📈</span>
          <span className="hidden sm:inline">Marketing Academy</span>
          <span className="sm:hidden">MktAcademy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/learn/${cat.slug}`}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm transition-colors",
                pathname.startsWith(`/learn/${cat.slug}`)
                  ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              <span className="mr-1">{cat.emoji}</span>
              <span className="hidden lg:inline">{cat.title.split(" ")[0]}</span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="p-2 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/learn"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <BookOpen size={14} />
            Start Learning
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 pb-4 pt-2">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/learn/${cat.slug}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                  pathname.startsWith(`/learn/${cat.slug}`)
                    ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                    : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                )}
              >
                <span>{cat.emoji}</span>
                <span>{cat.title}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/learn"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium"
          >
            <BookOpen size={14} />
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}
