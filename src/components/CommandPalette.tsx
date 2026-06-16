"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { COMMAND_INDEX, type CommandEntry } from "@/lib/commandIndex";
import { COMMAND_PALETTE_EVENT } from "@/lib/events";

const TYPE_BADGE: Record<CommandEntry["type"], { label: string; style: React.CSSProperties }> = {
  lesson: {
    label: "Lesson",
    style: {
      background: "rgba(147, 51, 234, 0.15)",
      color: "rgba(147, 51, 234, 0.9)",
      border: "1px solid rgba(147, 51, 234, 0.3)",
    },
  },
  glossary: {
    label: "Glossary",
    style: {
      background: "rgba(37, 99, 235, 0.15)",
      color: "rgba(37, 99, 235, 0.9)",
      border: "1px solid rgba(37, 99, 235, 0.3)",
    },
  },
  tool: {
    label: "Tool",
    style: {
      background: "rgba(22, 163, 74, 0.15)",
      color: "rgba(22, 163, 74, 0.9)",
      border: "1px solid rgba(22, 163, 74, 0.3)",
    },
  },
  nav: {
    label: "Nav",
    style: {
      background: "rgba(100, 116, 139, 0.15)",
      color: "var(--muted-foreground)",
      border: "1px solid rgba(100, 116, 139, 0.3)",
    },
  },
};

const MAX_RESULTS = 8;

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const index = COMMAND_INDEX;

  const fuse = useMemo(
    () =>
      new Fuse(index, {
        keys: ["title", "subtitle"],
        threshold: 0.3,
        includeScore: true,
      }),
    [index]
  );

  const results: CommandEntry[] = useMemo(() => {
    if (!query.trim()) return index.slice(0, MAX_RESULTS);
    return fuse
      .search(query)
      .slice(0, MAX_RESULTS)
      .map((r) => r.item);
  }, [query, fuse, index]);

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const navigate = useCallback(
    (entry: CommandEntry) => {
      closePalette();
      router.push(entry.href);
    },
    [router, closePalette]
  );

  // Listen for the custom event fired by Nav / Cmd+K handler
  useEffect(() => {
    const handler = () => openPalette();
    window.addEventListener(COMMAND_PALETTE_EVENT, handler);
    return () => window.removeEventListener(COMMAND_PALETTE_EVENT, handler);
  }, [openPalette]);

  // Keyboard: Escape closes, arrow keys move selection, Enter navigates
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePalette();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (results.length > 0) setActiveIndex((i) => Math.min(i + 1, results.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (results[activeIndex]) navigate(results[activeIndex]);
        return;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, results, activeIndex, navigate, closePalette]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.children[activeIndex] as HTMLElement | undefined;
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      // Defer one tick so the modal is painted before focus
      const id = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(id);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "10vh",
        background: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(2px)",
      }}
      onMouseDown={(e) => {
        // Close when clicking the backdrop (not the modal itself)
        if (e.target === e.currentTarget) closePalette();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "0 16px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
        }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--muted-foreground)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search lessons, glossary, tools…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: 16,
              color: "var(--foreground)",
            }}
          />
          <kbd
            style={{
              padding: "2px 6px",
              fontSize: 11,
              color: "var(--muted-foreground)",
              background: "var(--muted)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              lineHeight: 1.5,
              flexShrink: 0,
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <ul
          ref={listRef}
          role="listbox"
          style={{
            listStyle: "none",
            margin: 0,
            padding: "6px 0",
            maxHeight: 380,
            overflowY: "auto",
          }}
        >
          {results.length === 0 ? (
            <li
              style={{
                padding: "20px 16px",
                textAlign: "center",
                color: "var(--muted-foreground)",
                fontSize: 14,
              }}
            >
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((entry, i) => {
              const badge = TYPE_BADGE[entry.type];
              const isActive = i === activeIndex;
              return (
                <li
                  key={entry.id}
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => navigate(entry)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 16px",
                    cursor: "pointer",
                    background: isActive ? "var(--muted)" : "transparent",
                    transition: "background 0.1s",
                  }}
                >
                  {/* Type badge */}
                  <span
                    style={{
                      ...badge.style,
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "2px 7px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {badge.label}
                  </span>

                  {/* Title + subtitle */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--foreground)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {entry.title}
                    </div>
                    {entry.subtitle && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--muted-foreground)",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          marginTop: 1,
                        }}
                      >
                        {entry.subtitle}
                      </div>
                    )}
                  </div>

                  {/* Arrow hint on active */}
                  {isActive && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--muted-foreground)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </li>
              );
            })
          )}
        </ul>

        {/* Footer hint */}
        <div
          style={{
            display: "flex",
            gap: 16,
            padding: "8px 16px",
            borderTop: "1px solid var(--border)",
            fontSize: 11,
            color: "var(--muted-foreground)",
          }}
        >
          <span>
            <kbd
              style={{
                padding: "1px 5px",
                background: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 3,
                marginRight: 4,
              }}
            >
              ↑↓
            </kbd>
            navigate
          </span>
          <span>
            <kbd
              style={{
                padding: "1px 5px",
                background: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 3,
                marginRight: 4,
              }}
            >
              ↵
            </kbd>
            open
          </span>
          <span>
            <kbd
              style={{
                padding: "1px 5px",
                background: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: 3,
                marginRight: 4,
              }}
            >
              esc
            </kbd>
            close
          </span>
        </div>
      </div>
    </div>
  );
}
