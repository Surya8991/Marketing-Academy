import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/curriculum";
import PrintButton from "./PrintButton";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: `${cat.title} Cheat Sheet | Marketing Academy`,
    description: `Printable quick reference for all ${cat.lessons.length} ${cat.title} lessons. Key concepts, frameworks, and tactics on one page.`,
  };
}

const printCSS = `
@media print {
  nav, header, .no-print { display: none !important; }
  body { background: #fff !important; color: #000 !important; }
  .cheat-sheet-card { break-inside: avoid; page-break-inside: avoid; border: 1px solid #ccc !important; }
  .print-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; }
  a { color: inherit !important; text-decoration: none !important; }
  .cs-read-btn { display: none !important; }
}
.cheat-sheet-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.cheat-sheet-card:hover {
  border-color: var(--accent) !important;
  box-shadow: 0 4px 20px rgba(99,102,241,0.12);
  transform: translateY(-2px);
}
.cs-read-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: auto;
  padding: 0.45rem 0.95rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--accent);
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;
  width: fit-content;
}
.cs-read-btn:hover {
  background: var(--accent);
  color: var(--accent-foreground);
  border-color: var(--accent);
}
`;

const levelColor: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
};

const levelBg: Record<string, string> = {
  Beginner: "rgba(22,163,74,0.1)",
  Intermediate: "rgba(217,119,6,0.1)",
  Advanced: "rgba(220,38,38,0.1)",
};

export default async function CategoryCheatSheetPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
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
              <span style={{ fontSize: "2.5rem", lineHeight: "1" }}>{cat.emoji}</span>
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
                <p style={{ margin: "0.35rem 0 0", fontSize: "1rem", color: "var(--muted-foreground)" }}>
                  {cat.tagline}
                </p>
              </div>
            </div>
          </div>
          <div className="no-print">
            <PrintButton />
          </div>
        </div>

        <div
          className="print-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
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
                borderRadius: "14px",
                padding: "1.5rem 1.65rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {/* Level badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: levelColor[lesson.level] ?? "var(--muted-foreground)",
                  background: levelBg[lesson.level] ?? "transparent",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {lesson.level}
              </span>

              {/* Title */}
              <Link
                href={`/learn/${cat.slug}/${lesson.slug}`}
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  textDecoration: "none",
                  lineHeight: 1.35,
                }}
              >
                {lesson.title}
              </Link>

              {/* Summary */}
              <p
                style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {lesson.summary}
              </p>

              {/* CTA */}
              <Link
                href={`/learn/${cat.slug}/${lesson.slug}`}
                className="cs-read-btn no-print"
              >
                Read lesson &rarr;
              </Link>
            </div>
          ))}
        </div>

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


