"use client" // PrintButton needs window.print; make the whole file a client component

// We handle params manually because this is a client component — no generateStaticParams/generateMetadata here.
// A thin server wrapper in layout.tsx is unnecessary; we use client-side data instead.

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/curriculum";

// ---------------------------------------------------------------------------
// Print button (requires client, which this file already is)
// ---------------------------------------------------------------------------
function PrintButton() {
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

// ---------------------------------------------------------------------------
// Level badge
// ---------------------------------------------------------------------------
const levelColor: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
};

function LevelBadge({ level }: { level: string }) {
  return (
    <span
      style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        color: levelColor[level] ?? "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {level}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Print styles injected as a global <style> tag
// ---------------------------------------------------------------------------
const printCSS = `
@media print {
  nav, header, .no-print { display: none !important; }
  body { background: #fff !important; color: #000 !important; }
  .cheat-sheet-card { break-inside: avoid; page-break-inside: avoid; border: 1px solid #ccc !important; }
  .print-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; }
  a { color: inherit !important; text-decoration: none !important; }
}
`;

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CategoryCheatSheetPage() {
  const params = useParams();
  const categorySlug = typeof params.category === "string" ? params.category : "";

  const cat = getCategory(categorySlug);
  if (!cat) {
    notFound();
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{cat.emoji}</span>
              <div>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    fontWeight: 800,
                    color: "var(--foreground)",
                    lineHeight: 1.2,
                  }}
                >
                  {cat.title} Cheat Sheet
                </h1>
                <p
                  style={{
                    margin: "0.35rem 0 0",
                    fontSize: "1rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {cat.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="no-print">
            <PrintButton />
          </div>
        </div>

        {/* Lesson cards grid */}
        <div
          className="print-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {cat.lessons.map((lesson) => (
            <div
              key={lesson.slug}
              className="cheat-sheet-card"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "1.1rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <Link
                  href={`/learn/${cat.slug}/${lesson.slug}`}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    textDecoration: "none",
                    lineHeight: 1.3,
                    flexGrow: 1,
                  }}
                >
                  {lesson.title}
                </Link>
                <LevelBadge level={lesson.level} />
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.82rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.55,
                }}
              >
                {lesson.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="no-print">
          <Link
            href="/cheat-sheets"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "var(--muted-foreground)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            Back to all cheat sheets
          </Link>
        </div>
      </main>
    </>
  );
}

// ---------------------------------------------------------------------------
// Static params (used by the build when this runs as a server component tree)
// Next.js will pick these up even though the leaf is a client component,
// because the App Router static-analysis walks the file at build time.
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}
