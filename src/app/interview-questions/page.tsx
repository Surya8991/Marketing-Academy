import Link from "next/link";
import type { Metadata } from "next";
import { INTERVIEW_SECTIONS } from "@/lib/interview-questions";

export const metadata: Metadata = {
  title: "Digital Marketing Interview Questions 2026 | Marketing Academy",
  description:
    "Ace your next marketing job interview with 100+ real digital marketing interview questions and answers across all 15 categories - SEO, paid ads, content, analytics, email, growth, AI marketing, social, copywriting, CRO, brand strategy, product marketing, psychology, and tools.",
  keywords: [
    "digital marketing interview questions 2026",
    "marketing interview questions and answers 2026",
    "SEO interview questions 2026",
    "paid advertising interview questions",
    "content marketing interview questions",
    "analytics interview questions",
    "email marketing interview questions",
    "growth marketing interview questions",
    "AI marketing interview questions",
    "scenario based marketing interview questions",
    "marketing job interview prep 2026",
    "brand strategy interview questions",
    "product marketing interview questions",
    "CRO interview questions",
    "copywriting interview questions",
  ],
};

const hoverCSS = `
.iq-card {
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
}
.iq-card:hover {
  border-color: var(--accent) !important;
  box-shadow: 0 4px 20px rgba(99,102,241,0.12);
  transform: translateY(-2px);
}
.iq-view-btn {
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
.iq-view-btn:hover {
  background: var(--accent);
  color: var(--accent-foreground);
  border-color: var(--accent);
}
`;

export default function InterviewQuestionsPage() {
  const totalQuestions = INTERVIEW_SECTIONS.reduce(
    (sum, s) => sum + s.conceptualQAs.length + s.scenarioQAs.length,
    0
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Walk me through the 4Ps framework and explain when it breaks down as a strategic tool.",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 4Ps - Product, Price, Place, Promotion - give a structured way to audit how a business delivers value to a market. The framework breaks down for service businesses and SaaS products because Place and Product blur together when delivery is digital and continuous.",
        },
      },
      {
        "@type": "Question",
        name: "What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GEO is the practice of structuring content so it gets cited inside AI-generated answers from tools like Google AI Overviews, ChatGPT, and Perplexity. As of 2026, roughly 40-50% of Google searches return an AI Overview before any organic links.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a CDP and a DMP, and which should a brand prioritize in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A CDP collects and unifies first-party identified customer data. A DMP collected anonymous third-party cookie data for ad targeting. With third-party cookies gone in 2025, CDPs have become the foundational first-party data tool while DMPs have declined in relevance.",
        },
      },
      {
        "@type": "Question",
        name: "What is incrementality testing and why does it matter more in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incrementality testing measures the true lift a paid channel drives versus what would have happened without it. It matters more in 2026 because iOS privacy changes and cookie deprecation have made platform-reported attribution increasingly inflated.",
        },
      },
      {
        "@type": "Question",
        name: "How does the TikTok For You Page algorithm differ from Instagram Reels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TikTok's algorithm weights watch time and completion rate so new accounts can reach millions. Instagram Reels weights social graph signals, giving established accounts an advantage. TikTok favors hook-first novelty; Instagram rewards consistency with an existing audience.",
        },
      },
    ],
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hoverCSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 4rem" }}>
        {/* Hero */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            Digital Marketing Interview Questions 2026
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted-foreground)", lineHeight: 1.7, maxWidth: "780px" }}>
            {totalQuestions}+ real questions across all 15 marketing disciplines. Each category includes conceptual
            questions that test your knowledge and scenario-based questions that test your judgment. Pick a category to
            start.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { label: "Categories", value: String(INTERVIEW_SECTIONS.length) },
            { label: "Total Questions", value: String(totalQuestions) + "+" },
            { label: "Conceptual", value: String(INTERVIEW_SECTIONS.reduce((s, sec) => s + sec.conceptualQAs.length, 0)) },
            { label: "Scenario-Based", value: String(INTERVIEW_SECTIONS.reduce((s, sec) => s + sec.scenarioQAs.length, 0)) },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--foreground)" }}>{stat.value}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", marginTop: "0.2rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {INTERVIEW_SECTIONS.map((section) => {
            const total = section.conceptualQAs.length + section.scenarioQAs.length;
            return (
              <div
                key={section.id}
                className="iq-card"
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
                {/* Emoji + question count */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "2rem", lineHeight: 1 }}>{section.emoji}</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--muted-foreground)",
                      background: "var(--muted)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {total} questions
                  </span>
                </div>

                {/* Title */}
                <Link
                  href={`/interview-questions/${section.id}`}
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    textDecoration: "none",
                    lineHeight: 1.35,
                  }}
                >
                  {section.title}
                </Link>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.65,
                    flexGrow: 1,
                  }}
                >
                  {section.description}
                </p>

                {/* Question type badges */}
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "999px",
                      background: "rgba(99,102,241,0.1)",
                      color: "var(--foreground)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                  >
                    {section.conceptualQAs.length} conceptual
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "999px",
                      background: "rgba(217,119,6,0.1)",
                      color: "var(--foreground)",
                      border: "1px solid rgba(217,119,6,0.2)",
                    }}
                  >
                    {section.scenarioQAs.length} scenario
                  </span>
                </div>

                {/* CTA */}
                <Link href={`/interview-questions/${section.id}`} className="iq-view-btn">
                  View questions &rarr;
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--foreground)" }}>
            Go beyond memorizing answers
          </h2>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            Interview answers only work if you actually understand the concepts. Our structured lessons teach you how to
            apply each framework with real examples.
          </p>
          <Link
            href="/learn"
            style={{
              display: "inline-block",
              padding: "0.85rem 2rem",
              background: "var(--foreground)",
              color: "var(--background)",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Start Learning Free
          </Link>
        </div>
      </main>
    </>
  );
}
