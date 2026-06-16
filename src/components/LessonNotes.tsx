"use client";

import { useEffect, useRef, useState } from "react";

const NOTE_PREFIX = "ma_note_";

function noteKey(category: string, slug: string) {
  return `${NOTE_PREFIX}${category}_${slug}`;
}

export default function LessonNotes({ category, slug }: { category: string; slug: string }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingText = useRef<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(noteKey(category, slug));
    if (stored) {
      setText(stored);
      setOpen(true);
    }
  }, [category, slug]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const val = e.target.value;
    setText(val);
    setSaved(false);
    pendingText.current = val;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      if (val.trim()) {
        localStorage.setItem(noteKey(category, slug), val);
      } else {
        localStorage.removeItem(noteKey(category, slug));
      }
      pendingText.current = null;
      setSaved(true);
    }, 800);
  }

  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      // Flush any pending text that hasn't been saved yet
      if (pendingText.current !== null) {
        const key = noteKey(category, slug);
        if (pendingText.current.trim()) {
          localStorage.setItem(key, pendingText.current);
        } else {
          localStorage.removeItem(key);
        }
      }
    };
  }, [category, slug]);

  return (
    <div
      style={{
        marginTop: "2.5rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--muted-foreground)",
          fontSize: "0.9rem",
          fontWeight: 500,
          padding: 0,
        }}
      >
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.2s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            fontSize: "0.75rem",
          }}
        >
          ▶
        </span>
        My Notes
        {text.trim() && !open && (
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--accent)",
              background: "color-mix(in srgb, var(--accent) 15%, transparent)",
              border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
              borderRadius: "9999px",
              padding: "1px 7px",
            }}
          >
            saved
          </span>
        )}
      </button>

      {open && (
        <div style={{ marginTop: "0.875rem" }}>
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Jot down anything — key takeaways, questions, ideas to try…"
            rows={5}
            style={{
              width: "100%",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              padding: "0.875rem 1rem",
              color: "var(--foreground)",
              fontSize: "0.9rem",
              lineHeight: 1.65,
              resize: "vertical",
              outline: "none",
              fontFamily: "inherit",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--accent)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border)";
            }}
          />
          <p
            style={{
              marginTop: "0.35rem",
              fontSize: "0.75rem",
              color: saved ? "var(--accent)" : "var(--muted-foreground)",
              transition: "color 0.3s",
            }}
          >
            {saved ? "Saved" : "Auto-saves as you type"}
          </p>
        </div>
      )}
    </div>
  );
}
