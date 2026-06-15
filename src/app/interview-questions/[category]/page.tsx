import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { INTERVIEW_SECTIONS } from "@/lib/interview-questions";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return INTERVIEW_SECTIONS.map((s) => ({ category: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const section = INTERVIEW_SECTIONS.find((s) => s.id === category);
  if (!section) return {};
  const total = section.conceptualQAs.length + section.scenarioQAs.length;
  return {
    title: `${section.title} 2026 | Marketing Academy`,
    description: `${total} real ${section.categoryLabel} interview questions with detailed answers - ${section.conceptualQAs.length} conceptual and ${section.scenarioQAs.length} scenario-based questions for 2026.`,
  };
}

const pageCss = `
details[open] summary .iq-plus { display: none; }
details[open] summary .iq-minus { display: inline; }
details:not([open]) summary .iq-minus { display: none; }
.iq-details {
  transition: border-color 0.15s;
}
.iq-details:hover {
  border-color: var(--accent) !important;
}
`;

export default async function InterviewCategoryPage({ params }: Props) {
  const { category } = await params;
  const section = INTERVIEW_SECTIONS.find((s) => s.id === category);
  if (!section) notFound();

  const currentIndex = INTERVIEW_SECTIONS.findIndex((s) => s.id === category);
  const prev = currentIndex > 0 ? INTERVIEW_SECTIONS[currentIndex - 1] : null;
  const next = currentIndex < INTERVIEW_SECTIONS.length - 1 ? INTERVIEW_SECTIONS[currentIndex + 1] : null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem 4rem", color: "var(--foreground)" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "1.5rem", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          <Link href="/interview-questions" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
            Interview Questions
          </Link>
          {" / "}
          <span style={{ color: "var(--foreground)" }}>{section.categoryLabel}</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{section.emoji}</span>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                fontWeight: 800,
                color: "var(--foreground)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {section.title}
            </h1>
          </div>
          <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "700px" }}>
            {section.description}
          </p>

          {/* Question type summary badges */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(99,102,241,0.1)",
                color: "var(--foreground)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              {section.conceptualQAs.length} conceptual questions
            </span>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(217,119,6,0.1)",
                color: "var(--foreground)",
                border: "1px solid rgba(217,119,6,0.2)",
              }}
            >
              {section.scenarioQAs.length} scenario-based questions
            </span>
          </div>
        </div>

        {/* Conceptual Questions */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
              paddingBottom: "0.5rem",
              borderBottom: "2px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            Conceptual Questions
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1rem", lineHeight: 1.6 }}>
            These questions test your foundational knowledge of the discipline. Expect them in phone screens and first-round interviews.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {section.conceptualQAs.map((qa, i) => (
              <details
                key={i}
                className="iq-details"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  background: "var(--card)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1.1rem 1.25rem",
                    minHeight: "52px",
                    fontWeight: 600,
                    fontSize: "0.975rem",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <span style={{ flex: 1, lineHeight: 1.5 }}>
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: "0.5rem",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.15rem 0.5rem",
                        borderRadius: "999px",
                        background: "rgba(99,102,241,0.12)",
                        color: "var(--foreground)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        verticalAlign: "middle",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Q{i + 1}
                    </span>
                    {qa.q}
                  </span>
                  <span style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", flexShrink: 0, lineHeight: 1 }}>
                    <span className="iq-plus">+</span>
                    <span className="iq-minus">-</span>
                  </span>
                </summary>
                <div
                  style={{
                    padding: "1rem 1.25rem 1.25rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.8,
                    borderTop: "1px solid var(--border)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {qa.a.split("\n\n").map((para, pi) => (
                    <p key={pi} style={{ margin: pi === 0 ? 0 : "0.75rem 0 0" }}>{para}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Scenario-Based Questions */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
              paddingBottom: "0.5rem",
              borderBottom: "2px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            Scenario-Based Questions
          </h2>
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "1rem", lineHeight: 1.6 }}>
            These are the questions that separate senior candidates from junior ones. They test how you think under pressure and structure a real business problem.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {section.scenarioQAs.map((qa, i) => (
              <details
                key={i}
                className="iq-details"
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  background: "var(--muted)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1.1rem 1.25rem",
                    minHeight: "52px",
                    fontWeight: 600,
                    fontSize: "0.975rem",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <span style={{ flex: 1, lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        display: "inline-block",
                        flexShrink: 0,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.15rem 0.55rem",
                        borderRadius: "999px",
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginTop: "0.15rem",
                      }}
                    >
                      Scenario
                    </span>
                    <span>{qa.q}</span>
                  </span>
                  <span style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", flexShrink: 0, lineHeight: 1 }}>
                    <span className="iq-plus">+</span>
                    <span className="iq-minus">-</span>
                  </span>
                </summary>
                <div
                  style={{
                    padding: "1rem 1.25rem 1.25rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.8,
                    borderTop: "1px solid var(--border)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {qa.a.split("\n\n").map((para, pi) => (
                    <p key={pi} style={{ margin: pi === 0 ? 0 : "0.75rem 0 0" }}>{para}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Study deeper CTA */}
        <div
          style={{
            background: "var(--accent)",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ color: "var(--accent-foreground)", fontWeight: 500 }}>
            Want to go deeper on {section.categoryLabel}?
          </span>
          <Link
            href={`/learn/${section.categorySlug}`}
            style={{ color: "var(--accent-foreground)", fontWeight: 700, textDecoration: "underline" }}
          >
            Study {section.categoryLabel} lessons
          </Link>
        </div>

        {/* Prev / Next navigation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: prev ? (next ? "1fr 1fr" : "1fr") : "1fr",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {prev && (
            <Link
              href={`/interview-questions/${prev.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                padding: "1rem 1.25rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", fontWeight: 500 }}>
                &larr; Previous
              </span>
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)" }}>
                {prev.emoji} {prev.categoryLabel}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={`/interview-questions/${next.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                padding: "1rem 1.25rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                textDecoration: "none",
                textAlign: "right",
                marginLeft: "auto",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", fontWeight: 500 }}>
                Next &rarr;
              </span>
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--foreground)" }}>
                {next.emoji} {next.categoryLabel}
              </span>
            </Link>
          )}
        </div>

        {/* Back link */}
        <Link
          href="/interview-questions"
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
          &larr; All interview question categories
        </Link>
      </main>
    </>
  );
}
