import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Marketing Academy";
  const category = searchParams.get("category") || "";
  const level = searchParams.get("level") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0b",
          padding: "60px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* accent bar */}
        <div
          style={{
            height: 4,
            width: 72,
            background: "#a5b4fc",
            borderRadius: 2,
            marginBottom: 40,
          }}
        />

        {/* category tag */}
        {category && (
          <div
            style={{
              fontSize: 20,
              color: "#a5b4fc",
              marginBottom: 20,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        )}

        {/* title */}
        <div
          style={{
            fontSize: title.length > 45 ? 52 : title.length > 30 ? 60 : 72,
            fontWeight: 800,
            color: "#f4f4f5",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 48,
            paddingTop: 28,
            borderTop: "1px solid #2a2a30",
          }}
        >
          <div style={{ fontSize: 26, color: "#b8b8c4", fontWeight: 600 }}>
            📈 Marketing Academy
          </div>
          {level && (
            <div
              style={{
                fontSize: 18,
                color: "#a5b4fc",
                background: "#18181b",
                padding: "8px 20px",
                borderRadius: 24,
                border: "1px solid #2a2a30",
              }}
            >
              {level}
            </div>
          )}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
