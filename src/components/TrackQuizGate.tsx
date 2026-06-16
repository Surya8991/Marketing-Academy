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
const PAGE_SIZE = 10;

export default function TrackQuizGate({ questions, trackTitle, onPass, onClose }: Props) {
  const [shuffled, setShuffled] = useState<Quiz[]>([]);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setShuffled([...questions].sort(() => Math.random() - 0.5));
  }, [questions]);

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const totalPages = Math.ceil(shuffled.length / PAGE_SIZE);
  const pageQuestions = shuffled.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const answeredOnPage = pageQuestions.every((_, i) => {
    const globalIdx = page * PAGE_SIZE + i;
    return answers[globalIdx] !== undefined;
  });
  const allAnswered = shuffled.length > 0 && Object.keys(answers).length === shuffled.length;

  function pick(globalIdx: number, optIdx: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [globalIdx]: optIdx }));
  }

  function submit() {
    const correct = shuffled.filter((q, i) => answers[i] === q.correct).length;
    const pct = shuffled.length > 0 ? correct / shuffled.length : 0;
    setScore(correct);
    setSubmitted(true);
    if (pct >= PASS_THRESHOLD) {
      setTimeout(onPass, 1200);
    }
  }

  const passed = submitted && score / shuffled.length >= PASS_THRESHOLD;
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
    maxWidth: "660px",
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
              Track Knowledge Check
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
              {trackTitle} — {shuffled.length} questions · pass {Math.round(PASS_THRESHOLD * 100)}% to mark all complete
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
              ? `${score}/${shuffled.length} correct — great work! Marking all complete…`
              : `${score}/${shuffled.length} correct — need ${Math.round(PASS_THRESHOLD * 100)}% to pass. Review the lessons and try again.`}
          </div>
        )}

        {/* Progress bar across pages */}
        {!submitted && totalPages > 1 && (
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
              <span>Page {page + 1} of {totalPages}</span>
              <span>{Object.keys(answers).length} / {shuffled.length} answered</span>
            </div>
            <div style={{ height: "4px", background: "var(--muted)", borderRadius: "9999px", overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: "var(--accent)",
                  borderRadius: "9999px",
                  width: `${(Object.keys(answers).length / shuffled.length) * 100}%`,
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>
        )}

        {/* Questions for current page */}
        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {pageQuestions.map((q, localIdx) => {
            const globalIdx = page * PAGE_SIZE + localIdx;
            const userAnswer = answers[globalIdx];
            return (
              <li key={globalIdx}>
                <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                  {globalIdx + 1}. {q.question}
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
                        onClick={() => pick(globalIdx, oi)}
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

        {/* Footer */}
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", justifyContent: "space-between", alignItems: "center" }}>
          {/* Page nav */}
          {!submitted && totalPages > 1 && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                style={{
                  padding: "0.5rem 0.875rem",
                  borderRadius: "0.5rem",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: page === 0 ? "var(--muted-foreground)" : "var(--foreground)",
                  cursor: page === 0 ? "default" : "pointer",
                  fontSize: "0.875rem",
                  opacity: page === 0 ? 0.5 : 1,
                }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                style={{
                  padding: "0.5rem 0.875rem",
                  borderRadius: "0.5rem",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: page === totalPages - 1 ? "var(--muted-foreground)" : "var(--foreground)",
                  cursor: page === totalPages - 1 ? "default" : "pointer",
                  fontSize: "0.875rem",
                  opacity: page === totalPages - 1 ? 0.5 : 1,
                }}
              >
                Next →
              </button>
            </div>
          )}

          {/* Submit / retry / close */}
          <div style={{ display: "flex", gap: "0.625rem", marginLeft: "auto" }}>
            {failed && (
              <button
                onClick={() => { setSubmitted(false); setAnswers({}); setPage(0); }}
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
                title={!allAnswered ? `Answer all ${shuffled.length} questions to submit` : undefined}
              >
                Submit {shuffled.length} answers
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
    </div>
  );
}
