"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "var(--accent)",
        color: "var(--accent-foreground)",
        border: "none",
        padding: "0.6rem 1.25rem",
        borderRadius: "8px",
        fontSize: "0.9rem",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Print Cheat Sheet
    </button>
  );
}
