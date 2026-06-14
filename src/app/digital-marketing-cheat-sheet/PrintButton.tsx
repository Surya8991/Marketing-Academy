"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        padding: "0.6rem 1.4rem",
        background: "var(--foreground)",
        color: "var(--background)",
        border: "none",
        borderRadius: "6px",
        fontWeight: 600,
        fontSize: "0.9rem",
        cursor: "pointer",
      }}
    >
      Print / Save as PDF
    </button>
  );
}
