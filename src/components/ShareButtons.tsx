"use client";

import { useState } from "react";
import { Share2, Link2, Check } from "lucide-react";

type Props = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareLinkedIn() {
    window.open(
      "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url),
      "_blank",
      "width=600,height=500"
    );
  }

  function shareTwitter() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent('I just learned "' + title + '" at Marketing Academy') +
        "&url=" +
        encodeURIComponent(url),
      "_blank",
      "width=600,height=400"
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          fontSize: "0.875rem",
          color: "var(--muted-foreground)",
        }}
      >
        <Share2 size={14} />
        Share:
      </span>

      <button
        onClick={shareLinkedIn}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.25rem 0.625rem",
          fontSize: "0.8125rem",
          borderRadius: "9999px",
          border: "1px solid var(--border)",
          background: "transparent",
          color: "var(--muted-foreground)",
          cursor: "pointer",
          transition: "background 0.15s, color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--muted)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)";
        }}
        aria-label="Share on LinkedIn"
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "0.75rem",
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          in
        </span>
        LinkedIn
      </button>

      <button
        onClick={shareTwitter}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.25rem 0.625rem",
          fontSize: "0.8125rem",
          borderRadius: "9999px",
          border: "1px solid var(--border)",
          background: "transparent",
          color: "var(--muted-foreground)",
          cursor: "pointer",
          transition: "background 0.15s, color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--muted)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)";
        }}
        aria-label="Share on X (Twitter)"
      >
        <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>𝕏</span>
        Twitter
      </button>

      <button
        onClick={copyLink}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.25rem 0.625rem",
          fontSize: "0.8125rem",
          borderRadius: "9999px",
          border: "1px solid var(--border)",
          background: copied ? "var(--muted)" : "transparent",
          color: copied ? "var(--foreground)" : "var(--muted-foreground)",
          cursor: "pointer",
          transition: "background 0.15s, color 0.15s",
        }}
        aria-label="Copy link"
      >
        {copied ? <Check size={12} /> : <Link2 size={12} />}
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
