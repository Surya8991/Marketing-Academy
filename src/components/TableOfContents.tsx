"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List, ChevronDown } from "lucide-react";

type Heading = { id: string; text: string; level: number };

function useHeadings() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article.prose");
    if (!article) return;
    const nodes = article.querySelectorAll<HTMLElement>("h2, h3");
    const collected: Heading[] = [];
    nodes.forEach((node) => {
      const id = node.id || node.querySelector("a")?.getAttribute("id") || "";
      if (!id) return;
      collected.push({
        id,
        text: node.textContent?.trim() || "",
        level: node.tagName === "H2" ? 2 : 3,
      });
    });
    setHeadings(collected);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return { headings, activeId };
}

export function TableOfContentsDesktop() {
  const { headings, activeId } = useHeadings();
  if (headings.length < 2) return null;

  return (
    <aside className="hidden xl:block sticky top-24 self-start w-60 shrink-0">
      <p className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] font-semibold mb-3">
        On this page
      </p>
      <nav className="space-y-1 border-l border-[var(--border)]">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={cn(
              "block text-sm py-1 -ml-px border-l-2 transition-colors",
              h.level === 3 ? "pl-6" : "pl-4",
              activeId === h.id
                ? "border-[var(--accent)] text-[var(--accent)] font-medium"
                : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function TableOfContentsMobile() {
  const { headings } = useHeadings();
  const [open, setOpen] = useState(false);
  if (headings.length < 2) return null;

  return (
    <details
      className="xl:hidden mb-8 rounded-lg border border-[var(--border)] bg-[var(--muted)]/50"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer text-sm font-medium select-none list-none [&::-webkit-details-marker]:hidden">
        <List size={15} />
        <span className="flex-1">On this page</span>
        <ChevronDown
          size={15}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </summary>
      <nav className="px-4 pb-3 space-y-1 border-t border-[var(--border)] pt-3">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={cn(
              "block text-sm py-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
              h.level === 3 && "pl-4"
            )}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </details>
  );
}
