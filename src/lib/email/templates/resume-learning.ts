import { renderEmailLayout } from "@/lib/email/layout";

const BASE_URL = "https://marketing-academy-roan.vercel.app";

export function resumeLearningEmail(input: { lessonTitle: string; lessonUrl: string; unsubscribeUrl: string }) {
  const { html, text } = renderEmailLayout({
    preheader: `Pick up where you left off: ${input.lessonTitle}`,
    heading: "Pick up where you left off",
    bodyHtml: `<p style="margin:0 0 8px;">It's been a few days. Your last lesson was:</p>
      <p style="margin:0 0 8px;font-weight:600;">${input.lessonTitle}</p>
      <p style="margin:0;color:#525866;">Your progress is exactly where you left it — no need to start over.</p>`,
    ctaLabel: "Resume lesson",
    ctaUrl: `${BASE_URL}${input.lessonUrl}`,
    unsubscribeUrl: input.unsubscribeUrl,
  });
  return { subject: `Resume: ${input.lessonTitle}`, html, text };
}
