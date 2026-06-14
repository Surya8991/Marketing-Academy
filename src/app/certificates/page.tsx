import Link from "next/link";
import { TRACKS } from "@/lib/tracks";

export const metadata = {
  title: "Certificates | Marketing Academy",
  description: "View and print your learning track certificates.",
};

export default function CertificatesIndexPage() {
  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        color: "var(--foreground)",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Your Certificates
      </h1>
      <p
        style={{
          color: "var(--muted-foreground)",
          marginBottom: "2.5rem",
          fontSize: "1rem",
        }}
      >
        Select a learning track to view and print your certificate of completion.
      </p>

      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        {TRACKS.map((track) => (
          <div
            key={track.slug}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "1.25rem 1.5rem",
              background: "var(--card)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem", lineHeight: 1 }}>{track.emoji}</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  marginBottom: "0.2rem",
                }}
              >
                {track.title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {track.lessons.length} lessons &bull; {track.duration}
              </div>
            </div>
            <Link
              href={`/certificates/${track.slug}`}
              style={{
                padding: "0.5rem 1.1rem",
                background: "var(--accent)",
                color: "var(--accent-foreground)",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              View Certificate
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link
          href="/tracks"
          style={{
            color: "var(--muted-foreground)",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          &larr; Back to Tracks
        </Link>
      </div>
    </main>
  );
}
