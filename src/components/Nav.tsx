"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Search, BookOpen, ChevronDown, Bookmark,
  GraduationCap, LayoutGrid, Brain, Map,
  BookMarked, FileText, Mic2, Wrench,
  SlidersHorizontal, Trophy, Settings, Library,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/curriculum";
import ThemeToggle from "@/components/ThemeToggle";
import StreakBadge from "@/components/StreakBadge";
import { COMMAND_PALETTE_EVENT } from "@/lib/events";

const LEARN_ITEMS = [
  { href: "/tracks",       label: "Learning Tracks", icon: Map,           desc: "Structured paths by goal" },
  { href: "/quizzes",      label: "Quizzes",         icon: Brain,         desc: "Test your knowledge" },
  { href: "/cheat-sheets", label: "Cheat Sheets",    icon: FileText,      desc: "Quick-reference study aids" },
  { href: "/certificates", label: "Certificates",    icon: GraduationCap, desc: "Prove your skills" },
];

const PROGRESS_ITEMS = [
  { href: "/skill-map",    label: "Skill Map",    icon: LayoutGrid, desc: "See your progress by category" },
  { href: "/achievements", label: "Achievements", icon: Trophy,     desc: "Badges and XP milestones" },
  { href: "/bookmarks",    label: "Bookmarks",    icon: BookMarked, desc: "Your saved lessons" },
];

const RESOURCE_ITEMS = [
  { href: "/glossary",            label: "Glossary",        icon: BookMarked,        desc: "Marketing terms A-Z" },
  { href: "/interview-questions", label: "Interview Prep",  icon: Mic2,              desc: "Ace your marketing interview" },
  { href: "/tools",               label: "Tools Directory", icon: Wrench,            desc: "Best marketing tools" },
  { href: "/resources",           label: "Curated Resources", icon: Library,         desc: "Newsletters, books, communities" },
  { href: "/compare",             label: "Compare Tools",   icon: SlidersHorizontal, desc: "Side-by-side tool comparison" },
  { href: "/search",              label: "Search",          icon: Search,            desc: "Find any lesson fast" },
];

type DropId = "topics" | "learn" | "progress" | "resources" | null;

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<DropId>(null);
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        router.push("/search");
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_EVENT));
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [router]);

  useEffect(() => {
    if (!openDrop) return;
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDrop(null);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDrop(null);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [openDrop]);

  function toggle(id: DropId) {
    setOpenDrop((prev) => (prev === id ? null : id));
  }

  const onLearn = pathname.startsWith("/learn");

  const learnActive =
    pathname.startsWith("/tracks") ||
    pathname.startsWith("/quizzes") ||
    pathname.startsWith("/cheat-sheets") ||
    pathname.startsWith("/digital-marketing-cheat-sheet") ||
    pathname.startsWith("/certificates");

  const progressActive =
    pathname.startsWith("/skill-map") ||
    pathname.startsWith("/achievements") ||
    pathname.startsWith("/bookmarks");

  const resourceActive =
    pathname.startsWith("/glossary") ||
    pathname.startsWith("/interview") ||
    pathname.startsWith("/tools") ||
    pathname.startsWith("/resources") ||
    pathname.startsWith("/compare") ||
    pathname.startsWith("/search");

  const dropBtn = (id: DropId, label: string, active: boolean) => (
    <button
      onClick={() => toggle(id)}
      aria-expanded={openDrop === id}
      className={cn(
        "flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
        active || openDrop === id
          ? "bg-[var(--muted)] text-[var(--foreground)]"
          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
      )}
    >
      {label}
      <ChevronDown
        size={14}
        className={cn("transition-transform", openDrop === id && "rotate-180")}
      />
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" width={28} height={28} alt="" className="rounded-md" />
          <span className="hidden sm:inline">Marketing Academy</span>
          <span className="sm:hidden font-semibold">Academy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5 relative">

          {/* Topics dropdown */}
          <div className="relative">
            {dropBtn("topics", "Topics", onLearn)}
            {openDrop === "topics" && (
              <div className="absolute left-0 top-full mt-2 w-[min(740px,90vw)] rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-3 grid grid-cols-2 gap-1">
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
                  className="mt-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--muted)] transition-colors"
                >
                  <LayoutGrid size={14} />
                  Browse all topics
                </Link>
                <Link
                  href="/skill-map"
                  className="mt-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--muted)] transition-colors"
                >
                  <Map size={14} />
                  My progress map
                </Link>
              </div>
            )}
          </div>

          {/* Learn dropdown */}
          <div className="relative">
            {dropBtn("learn", "Learn", learnActive)}
            {openDrop === "learn" && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-2">
                {LEARN_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const active =
                    item.href === "/cheat-sheets"
                      ? pathname.startsWith("/cheat-sheets") || pathname.startsWith("/digital-marketing-cheat-sheet")
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        active
                          ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                          : "hover:bg-[var(--muted)] text-[var(--foreground)]"
                      )}
                    >
                      <Icon size={16} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{item.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Progress dropdown */}
          <div className="relative">
            {dropBtn("progress", "Progress", progressActive)}
            {openDrop === "progress" && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-2">
                {PROGRESS_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        active
                          ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                          : "hover:bg-[var(--muted)] text-[var(--foreground)]"
                      )}
                    >
                      <Icon size={16} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{item.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Resources dropdown */}
          <div className="relative">
            {dropBtn("resources", "Resources", resourceActive)}
            {openDrop === "resources" && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl p-2">
                {RESOURCE_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        active
                          ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                          : "hover:bg-[var(--muted)] text-[var(--foreground)]"
                      )}
                    >
                      <Icon size={16} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{item.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/about"
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              pathname.startsWith("/about")
                ? "bg-[var(--muted)] text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <StreakBadge />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_EVENT))}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors border border-[var(--border)]"
            aria-label="Open command palette"
            title="Command palette (Ctrl+K)"
          >
            <Search size={13} />
            <kbd className="font-sans">⌘K</kbd>
          </button>
          <ThemeToggle />
          <Link
            href="/bookmarks"
            className={cn(
              "p-2 rounded-md transition-colors",
              pathname.startsWith("/bookmarks")
                ? "text-[var(--foreground)] bg-[var(--muted)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
            aria-label="Bookmarks"
            title="Bookmarks"
          >
            <Bookmark size={18} />
          </Link>
          <Link
            href="/settings"
            className={cn(
              "p-2 rounded-md transition-colors",
              pathname.startsWith("/settings")
                ? "text-[var(--foreground)] bg-[var(--muted)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            )}
            aria-label="Settings"
            title="Settings"
          >
            <Settings size={18} />
          </Link>
          <Link
            href="/learn/fundamentals/what-is-marketing"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity ml-1"
          >
            <BookOpen size={14} />
            Start Learning
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 pt-3 pb-5 max-h-[calc(100vh-4rem)] overflow-y-auto">

          {/* Topics grouped */}
          {[
            { label: "Strategy", slugs: ["fundamentals", "psychology", "copywriting", "brand-strategy", "product-marketing"] },
            { label: "Channels", slugs: ["seo", "paid-ads", "social", "content", "email"] },
            { label: "Growth & Data", slugs: ["growth", "analytics", "tools", "cro", "ai-marketing"] },
          ].map((group) => (
            <div key={group.label} className="mb-3">
              <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-1.5 px-1 font-semibold">
                {group.label}
              </p>
              <div className="grid grid-cols-2 gap-1">
                {group.slugs.map((slug) => {
                  const cat = CATEGORIES.find((c) => c.slug === slug);
                  if (!cat) return null;
                  const active = pathname.startsWith(`/learn/${slug}`);
                  return (
                    <Link
                      key={slug}
                      href={`/learn/${slug}`}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors",
                        active
                          ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                          : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                      )}
                    >
                      <span className="text-base">{cat.emoji}</span>
                      <span className="font-medium text-xs truncate">{cat.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <Link
            href="/learn"
            className="flex items-center justify-center gap-2 px-3 py-2 mb-4 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--muted)] transition-colors"
          >
            <LayoutGrid size={14} />
            All Topics
          </Link>

          {/* Learn */}
          <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 px-1 font-semibold">
            Learn
          </p>
          <div className="flex flex-col gap-1 mb-4">
            {LEARN_ITEMS.map((item) => {
              const Icon = item.icon;
              const active =
                item.href === "/cheat-sheets"
                  ? pathname.startsWith("/cheat-sheets") || pathname.startsWith("/digital-marketing-cheat-sheet")
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  <Icon size={16} className="text-[var(--accent)]" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Progress */}
          <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 px-1 font-semibold">
            Progress
          </p>
          <div className="flex flex-col gap-1 mb-4">
            {PROGRESS_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  <Icon size={16} className="text-[var(--accent)]" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Resources */}
          <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-2 px-1 font-semibold">
            Resources
          </p>
          <div className="flex flex-col gap-1 mb-4">
            {RESOURCE_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                      : "text-[var(--foreground)] hover:bg-[var(--muted)]"
                  )}
                >
                  <Icon size={16} className="text-[var(--accent)]" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Footer links */}
          <div className="flex flex-col gap-2 pt-3 border-t border-[var(--border)]">
            <Link
              href="/about"
              className={cn(
                "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/about")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              About
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/settings")
                  ? "bg-[var(--accent)]/15 text-[var(--foreground)]"
                  : "text-[var(--foreground)] hover:bg-[var(--muted)]"
              )}
            >
              <Settings size={16} className="text-[var(--muted-foreground)]" />
              Settings
            </Link>
            <Link
              href="/learn/fundamentals/what-is-marketing"
              className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium"
            >
              <BookOpen size={14} />
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
