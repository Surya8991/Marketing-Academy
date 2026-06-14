import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "Marketing Cheat Sheets | Marketing Academy",
  description:
    "Printable quick reference cards for every marketing category. Get the key concepts, frameworks, and tactics for SEO, paid ads, email, analytics, and more — one page per topic.",
};

export default function CheatSheetsPage() {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "var(--foreground)",
            marginBottom: "1rem",
          }}
        >
          Marketing Cheat Sheets
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Quick reference cards for every marketing category. Each sheet covers
          the key concepts, frameworks, and tactics you need. Print one before a
          meeting or review before an interview.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/cheat-sheets/${cat.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                cursor: "pointer",
                transition: "box-shadow 0.15s ease, transform 0.15s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.transform = "none";
              }}
            >
              {/* Emoji + title row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "2rem", lineHeight: 1 }}>{cat.emoji}</span>
                <div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p
                    style={{
                      margin: "0.25rem 0 0",
                      fontSize: "0.8rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {cat.lessons.length} lesson{cat.lessons.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.5,
                  flexGrow: 1,
                }}
              >
                {cat.tagline}
              </p>

              {/* Button */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  alignSelf: "flex-start",
                }}
              >
                View Cheat Sheet
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
