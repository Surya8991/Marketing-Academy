import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";
import { QUIZZES } from "@/lib/quizzes";

export const metadata: Metadata = {
  title: "Marketing Interview Questions 2025 | Marketing Academy",
  description:
    "Comprehensive marketing interview questions and answers covering SEO, paid ads, content marketing, analytics, brand strategy, and all 15 marketing disciplines.",
  openGraph: {
    title: "Marketing Interview Questions 2025 | Marketing Academy",
    description:
      "Comprehensive marketing interview questions and answers covering SEO, paid ads, content marketing, analytics, brand strategy, and all 15 marketing disciplines.",
    type: "website",
  },
};

const FAQS = [
  {
    q: "What types of marketing interview questions should I expect?",
    a: "Most marketing interviews include three layers: conceptual questions (do you understand the frameworks?), situational questions (how would you handle X scenario?), and analytical questions (walk me through how you'd measure success). Prepare examples from each layer for every discipline you claim experience in.",
  },
  {
    q: "How do I answer 'Tell me about a campaign you ran'?",
    a: "Use the STAR format - Situation, Task, Action, Result. Lead with the business goal, not the tactic. Interviewers want to see that you tied your work to revenue, retention, or pipeline, not just impressions or clicks.",
  },
  {
    q: "Do I need to know SQL or data tools for a marketing role?",
    a: "It depends on the role. For growth, analytics, or performance marketing positions, basic SQL and familiarity with tools like Looker or GA4 are increasingly expected. For brand or content roles, less so. Always check the job description and prepare accordingly.",
  },
  {
    q: "How long should I spend studying before a marketing interview?",
    a: "A focused 5-7 days beats a scattered two weeks. Spend the first two days reviewing the core frameworks for the relevant disciplines, days three and four practicing answers out loud, and the last day researching the company's current marketing - channels they use, positioning, campaigns running.",
  },
  {
    q: "What is the most common mistake candidates make in marketing interviews?",
    a: "Talking tactics without connecting them to strategy or results. Saying 'I ran Instagram ads' means nothing. Saying 'I ran Instagram ads targeting lookalike audiences of our top 20% LTV customers, which drove a 34% lower CPA versus our previous broad targeting' shows you understand the why and the outcome.",
  },
];

export default function InterviewPrepPage() {
  const quizEntries = Object.entries(QUIZZES).slice(0, 12);

  return (
    <main
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "1rem",
            color: "var(--foreground)",
          }}
        >
          Marketing Interview Questions
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            maxWidth: "620px",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          Ace your next marketing interview with question-by-question prep across
          15 disciplines. Each topic links to a full lesson so you can study, not
          just memorize.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/learn"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              background: "var(--accent)",
              color: "var(--accent-foreground)",
              borderRadius: "0.5rem",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Browse All Topics
          </Link>
          <Link
            href="/learn/fundamentals"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              borderRadius: "0.5rem",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
              background: "transparent",
            }}
          >
            Start with Fundamentals
          </Link>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Browse by Discipline */}
        <section style={{ padding: "3rem 0" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--foreground)",
            }}
          >
            Browse by Discipline
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/learn/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                    background: "var(--card)",
                    textAlign: "center",
                    transition: "border-color 0.15s, background 0.15s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--border)";
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                    {cat.emoji}
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--foreground)",
                      marginBottom: "0.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {cat.lessons.length} lessons
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    {cat.lessons.length} interview questions
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Sample Questions */}
        <section
          style={{
            padding: "3rem 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--foreground)",
            }}
          >
            Sample Interview Questions
          </h2>
          <p
            style={{
              color: "var(--muted-foreground)",
              marginBottom: "1.5rem",
              fontSize: "0.95rem",
            }}
          >
            Real questions pulled from our lesson quizzes. Study the lesson
            first, then test yourself.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {quizEntries.map(([key, quizArr]) => {
              const [categorySlug, lessonSlug] = key.split("/");
              const category = CATEGORIES.find((c) => c.slug === categorySlug);
              const firstQ = quizArr[0];
              if (!firstQ || !category) return null;
              return (
                <div
                  key={key}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    background: "var(--card)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "var(--foreground)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {firstQ.question}
                  </p>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {category.emoji} {category.title}
                  </div>
                  <Link
                    href={`/learn/${categorySlug}/${lessonSlug}`}
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    Study this lesson -&gt;
                  </Link>
                </div>
              );
            })}
          </div>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.875rem",
              color: "var(--muted-foreground)",
            }}
          >
            Questions from all 241 lessons will appear here as our quiz library
            grows.
          </p>
        </section>

        {/* How to Prep */}
        <section
          style={{
            padding: "3rem 0",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--foreground)",
            }}
          >
            How to Prep
          </h2>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {[
              {
                step: "1",
                heading: "Study the lesson",
                body: "Each lesson covers the core framework, real examples, and the vocabulary interviewers expect you to use. Read it once to understand, then skim it a second time with your interview in mind.",
              },
              {
                step: "2",
                heading: "Test with the quiz",
                body: "Every lesson has an in-page quiz. Get every answer right before moving on. If you miss one, re-read that section - the explanation tells you exactly what you missed.",
              },
              {
                step: "3",
                heading: "Review the Q&A",
                body: "Use the sample questions above to practice out loud. Saying an answer is very different from knowing it silently. Record yourself once, then watch it back - the gaps will be obvious.",
              },
            ].map(({ step, heading, body }) => (
              <li
                key={step}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                  }}
                >
                  {step}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "var(--foreground)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {heading}
                  </div>
                  <p
                    style={{
                      color: "var(--muted-foreground)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section
          style={{
            padding: "3rem 0 4rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "var(--foreground)",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              maxWidth: "760px",
            }}
          >
            {FAQS.map(({ q, a }) => (
              <div key={q}>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--foreground)",
                    marginBottom: "0.4rem",
                    margin: "0 0 0.4rem 0",
                  }}
                >
                  {q}
                </h3>
                <p
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
