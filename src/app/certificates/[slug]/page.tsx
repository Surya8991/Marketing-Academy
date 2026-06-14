"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TRACKS } from "@/lib/tracks";

export default function CertificatePage() {
  const params = useParams();
  const slug = params.slug as string;

  const track = TRACKS.find((t) => t.slug === slug);
  const [completedCount, setCompletedCount] = useState(0);
  const [today, setToday] = useState("");

  useEffect(() => {
    let completed: string[] = [];
    try {
      const raw = localStorage.getItem("ma_completed");
      if (raw) completed = JSON.parse(raw) as string[];
    } catch {
      completed = [];
    }

    if (track) {
      const count = track.lessons.filter((l) =>
        completed.includes(`${l.category}/${l.slug}`)
      ).length;
      setCompletedCount(count);
    }

    const d = new Date();
    setToday(
      d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [track]);

  if (!track) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <p style={{ fontSize: "1.25rem" }}>Track not found.</p>
        <Link
          href="/tracks"
          style={{ color: "var(--accent)", textDecoration: "underline" }}
        >
          Back to Tracks
        </Link>
      </div>
    );
  }

  const totalLessons = track.lessons.length;
  const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          .certificate {
            box-shadow: none !important;
            border: 6px double #1a1a2e !important;
            page-break-inside: avoid;
          }
        }

        .certificate {
          background: white;
          color: #1a1a2e;
          max-width: 780px;
          margin: 2rem auto;
          padding: 3rem 3.5rem;
          border: 6px double #1a1a2e;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
          border-radius: 4px;
          text-align: center;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .cert-logo {
          font-size: 3rem;
          margin-bottom: 0.25rem;
        }

        .cert-brand {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .cert-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 1.75rem;
          color: #1a1a2e;
        }

        .cert-track-emoji {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.35rem;
        }

        .cert-track-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a2e;
          margin-bottom: 2rem;
        }

        .cert-awarded {
          font-size: 0.95rem;
          color: #555;
          font-style: italic;
          margin-bottom: 0.5rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .cert-name-line {
          display: block;
          width: 280px;
          border-bottom: 2px solid #1a1a2e;
          margin: 0 auto 2rem;
          height: 2rem;
        }

        .cert-divider {
          border: none;
          border-top: 1px solid #ccc;
          margin: 1.75rem 0;
        }

        .cert-meta {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 0.9rem;
          color: #444;
          margin-bottom: 1.25rem;
        }

        .cert-progress-bar-bg {
          background: #e5e7eb;
          border-radius: 999px;
          height: 10px;
          width: 100%;
          max-width: 400px;
          margin: 0.5rem auto 1.5rem;
        }

        .cert-progress-bar-fill {
          height: 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          transition: width 0.6s ease;
        }

        .cert-footer {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 0.75rem;
          color: #999;
          margin-top: 0.5rem;
        }
      `}</style>

      {/* Non-print header */}
      <div
        className="no-print"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem 1.5rem",
          borderBottom: "1px solid var(--border)",
          background: "var(--background)",
        }}
      >
        <Link
          href="/tracks"
          style={{
            color: "var(--muted-foreground)",
            textDecoration: "none",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          &larr; Back to Tracks
        </Link>
        <span style={{ flex: 1 }} />
        <button
          onClick={() => window.print()}
          style={{
            padding: "0.5rem 1.25rem",
            background: "var(--accent)",
            color: "var(--accent-foreground)",
            border: "none",
            borderRadius: "6px",
            fontSize: "0.9rem",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Print Certificate
        </button>
      </div>

      {/* Certificate */}
      <div className="certificate">
        <div className="cert-logo">📈</div>
        <div className="cert-brand">Marketing Academy</div>

        <div className="cert-title">Certificate of Completion</div>

        <span className="cert-track-emoji">{track.emoji}</span>
        <div className="cert-track-name">{track.title}</div>

        <div className="cert-awarded">Awarded to:</div>
        <span className="cert-name-line" aria-label="Learner name line" />

        <hr className="cert-divider" />

        <div className="cert-meta">
          <strong>Date:</strong> {today}
        </div>

        <div className="cert-meta">
          Completed {completedCount} of {totalLessons} lessons ({pct}%)
        </div>

        <div className="cert-progress-bar-bg">
          <div
            className="cert-progress-bar-fill"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="cert-footer">
          Marketing Academy &nbsp;&bull;&nbsp; marketing-academy-roan.vercel.app
        </div>
      </div>
    </>
  );
}
