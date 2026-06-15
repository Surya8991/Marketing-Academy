"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function TrackShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${title} | Marketing Academy`, url });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
    >
      {copied ? (
        <Check size={14} style={{ color: "rgba(22,163,74,0.9)" }} />
      ) : (
        <Share2 size={14} />
      )}
      {copied ? "Link copied!" : "Share track"}
    </button>
  );
}
