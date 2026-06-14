"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const ALL_QUESTIONS = [
  // General
  "Walk me through the 4Ps framework and explain when it breaks down as a strategic tool.",
  "What is Jobs-to-be-Done theory and how does it change the way you define an Ideal Customer Profile?",
  "How would you explain the difference between brand marketing and performance marketing to a skeptical CFO who only trusts ROAS?",
  "What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?",
  "What is the difference between first-party and zero-party data, and why does the distinction matter in 2026?",
  // SEO
  "What is keyword cannibalization and how do you fix it?",
  "Explain the difference between a 301 and 302 redirect and when you would use each.",
  "What is E-E-A-T and how do you improve it for a new domain?",
  "How does Google's INP metric (which replaced FID in March 2024) differ from the metrics it replaced?",
  "What is topical authority and how do you build it?",
  // Paid Ads
  "What is the difference between Smart Bidding and manual CPC bidding, and when would you choose each?",
  "How does Performance Max differ from traditional campaign types, and what are its main risks?",
  "What is incrementality testing and why is it more reliable than last-click attribution for measuring paid media?",
  "A campaign has a strong ROAS but pipeline has not moved. How do you diagnose the problem?",
  "What is Meta Advantage+ and how does it change audience and creative management?",
  // Content
  "What is topical authority and how does it relate to a content cluster strategy?",
  "How do you measure the ROI of content marketing when the conversion cycle is 6+ months?",
  "What is zero-click content and why is it becoming more important?",
  "How do you approach content auditing at scale?",
  "What is the difference between evergreen content and news-driven content, and how do you balance them?",
  // Analytics
  "How does GA4 differ from Universal Analytics in how it counts users and sessions?",
  "What is the difference between correlation and causation in marketing analytics?",
  "How would you structure a UTM tagging system from scratch for a company with multiple channels?",
  "What is dark social and how do you measure it?",
  "Explain multi-touch attribution and its limitations.",
  // Email
  "What is Apple Mail Privacy Protection (MPP) and how has it changed email marketing measurement?",
  "How do you decide what goes into a welcome sequence?",
  "What is the difference between a broadcast email and a triggered email?",
  "How do you improve deliverability for a domain with a high spam complaint rate?",
  "What metrics matter most for email beyond open rate?",
  // Growth
  "What is the AARRR framework and what is its main limitation?",
  "How do you identify the aha moment for a product?",
  "What is the difference between activation and the aha moment?",
  "How do you run a growth experiment end to end?",
  "What is product-led growth and how does it differ from sales-led growth?",
  // AI Marketing
  "How should a marketer think about LLM hallucinations and what safeguards do you put in place?",
  "What is a retrieval-augmented generation (RAG) system and why is it useful for marketing?",
  "How do AI Overviews in Google Search change SEO strategy in 2026?",
  "What is an AI agent and how does it differ from a standard AI chatbot?",
  "How do you evaluate whether an AI tool is worth adding to a marketing workflow?",
];

export default function CopyQuestionsButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = ALL_QUESTIONS.map((q, i) => `${i + 1}. ${q}`).join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      id="copy-all-questions-btn"
      onClick={handleCopy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.5rem 1.1rem",
        fontSize: "0.85rem",
        fontWeight: 600,
        borderRadius: "6px",
        border: "1px solid var(--border)",
        background: copied ? "rgba(16,185,129,0.12)" : "var(--card)",
        color: copied ? "#10b981" : "var(--muted-foreground)",
        cursor: "pointer",
        transition: "all 0.2s",
        marginBottom: "2rem",
      }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied to clipboard!" : "Copy all 40 questions"}
    </button>
  );
}
