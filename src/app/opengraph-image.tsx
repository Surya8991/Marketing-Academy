import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marketing Academy — Free marketing education";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function RootOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0d0d1f 100%)",
          padding: "60px",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "52px" }}>📈</span>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#e5e7eb",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Marketing Academy
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          Learn marketing the way it&apos;s actually done.
        </div>

        <div
          style={{
            fontSize: "26px",
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: "780px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          SEO, paid ads, growth, social, email, analytics, AI — 393 lessons, 100% free.
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
          }}
        >
          {[
            { n: "393+", label: "Lessons" },
            { n: "15", label: "Disciplines" },
            { n: "0", label: "Paywalls" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "16px 28px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span style={{ fontSize: "36px", fontWeight: 800, color: "#818cf8" }}>{s.n}</span>
              <span style={{ fontSize: "16px", color: "#9ca3af", marginTop: "4px" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
