"use client";

import { useState, useEffect, useCallback } from "react";
import type { Quiz } from "@/lib/quizzes";

type Props = {
  questions: Quiz[];
  trackTitle: string;
  onPass: () => void;
  onClose: () => void;
};

const PASS_THRESHOLD = 0.8;
const MAX_QUESTIONS = 10;

export default function TrackQuizGate({ questions, trackTitle, onPass, onClose }: Props) {
  const [sample, setSample] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Shuffle and cap
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setSample(shuffled.slice(0, MAX_QUESTIONS));
  }, [questions]);

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  function pick(qIdx: number, optIdx: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  }

  function submit() {
    const correct = sample.filter((q, i) => answers[i] === q.correct).length;
    const pct = sample.length > 0 ? correct / sample.length : 0;
    setScore(correct);
    setSubmitted(true);
    if (pct >= PASS_THRESHOLD) {
      setTimeout(onPass, 1200);
    }
  }

  const allAnswered = sample.length > 0 && Object.keys(answers).length === sample.length;
  const passed = submitted && score / sample.length >= PASS_THRESHOLD;
  const failed = submitted && !passed;

  const overlay: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(4px)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  };

  const modal: React.CSSProperties = {
    background: "var(--background)",
    border: "1px solid var(--border)",
    borderRadius: "1rem",
    maxWidth: "640px",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
    padding: "2rem",
    position: "relative",
  };

  return (
    <div style={overlay} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div style={modal}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.25rem" }}>
              Quick Knowledge Check
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
              {trackTitle} — pass {Math.round(PASS_THRESHOLD * 100)}% to mark all complete
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)", fontSize: "1.25rem", lineHeight: 1, padding: "0.25rem" }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Score banner */}
        {submitted && (
          <div
            style={{
              marginBottom: "1.5rem",
              padding: "0.875rem 1rem",
              borderRadius: "0.75rem",
              background: passed ? "rgba(22,163,74,0.1)" : "rgba(220,38,38,0.1)",
              border: `1px solid ${passed ? "rgba(22,163,74,0.3)" : "rgba(220,38,38,0.3)"}`,
              color: passed ? "rgb(22,163,74)" : "rgba(220,38,38,0.9)",
              fontWeight: 600,
            }}
          >
            {passed
              ? `${score}/${sample.length} correct — nice work! Marking all complete…`
              : `${score}/${sample.length} correct — need ${Math.round(PASS_THRESHOLD * 100)}% to pass. Review the lessons and try again.`}
          </div>
        )}

        {/* Questions */}
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {sample.map((q, qi) => {
            const userAnswer = answers[qi];
            return (
              <li key={qi}>
                <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                  {qi + 1}. {q.question}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {q.options.map((opt, oi) => {
                    let bg = "var(--card)";
                    let border = "1px solid var(--border)";
                    let color = "var(--foreground)";
                    if (submitted) {
                      if (oi === q.correct) {
                        bg = "rgba(22,163,74,0.12)";
                        border = "1px solid rgba(22,163,74,0.4)";
                        color = "rgb(22,163,74)";
                      } else if (oi === userAnswer && oi !== q.correct) {
                        bg = "rgba(220,38,38,0.1)";
                        border = "1px solid rgba(220,38,38,0.35)";
                        color = "rgba(220,38,38,0.9)";
                      }
                    } else if (userAnswer === oi) {
                      border = "1px solid var(--accent)";
                      bg = "color-mix(in srgb, var(--accent) 12%, transparent)";
                    }
                    return (
                      <button
                        key={oi}
                        onClick={() => pick(qi, oi)}
                        disabled={submitted}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          padding: "0.625rem 0.875rem",
                          borderRadius: "0.5rem",
                          background: bg,
                          border,
                          color,
                          fontSize: "0.875rem",
                          cursor: submitted ? "default" : "pointer",
                          transition: "border-color 0.15s, background 0.15s",
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--muted-foreground)", fontStyle: "italic" }}>
                    {q.explanation}
                  </p>
                )}
              </li>
            );
          })}
        </ol>

        {/* Footer buttons */}
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
          {failed && (
            <button
              onClick={() => { setSubmitted(false); setAnswers({}); }}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Try again
            </button>
          )}
          {!submitted && (
            <button
              onClick={submit}
              disabled={!allAnswered}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                background: allAnswered ? "var(--accent)" : "var(--muted)",
                color: allAnswered ? "var(--accent-foreground)" : "var(--muted-foreground)",
                border: "none",
                fontWeight: 600,
                cursor: allAnswered ? "pointer" : "default",
                fontSize: "0.9rem",
                transition: "background 0.15s",
              }}
            >
              Submit answers
            </button>
          )}
          {passed && (
            <button
              onClick={handleClose}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "0.5rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: 500,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
