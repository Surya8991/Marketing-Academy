import { renderEmailLayout } from "@/lib/email/layout";

const BASE_URL = "https://marketing-academy-roan.vercel.app";

export function streakReminderEmail(input: { streak: number; unsubscribeUrl: string }) {
  const { html, text } = renderEmailLayout({
    preheader: `Your ${input.streak}-day streak ends tonight`,
    heading: `Your ${input.streak}-day streak ends tonight`,
    bodyHtml: `<p style="margin:0 0 8px;">You haven't completed a lesson today yet. One lesson keeps it alive.</p>
      <p style="margin:0;color:#525866;">Even a short lesson counts — pick any topic that interests you.</p>`,
    ctaLabel: "Continue learning",
    ctaUrl: `${BASE_URL}/learn`,
    unsubscribeUrl: input.unsubscribeUrl,
  });
  return { subject: `Your ${input.streak}-day streak ends tonight`, html, text };
}
