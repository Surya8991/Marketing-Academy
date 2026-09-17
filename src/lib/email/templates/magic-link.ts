import { renderEmailLayout } from "@/lib/email/layout";

export function magicLinkEmail(input: { url: string }) {
  const { html, text } = renderEmailLayout({
    preheader: "Your sign-in link for Marketing Academy",
    heading: "Sign in to Marketing Academy",
    bodyHtml: `<p style="margin:0 0 8px;">Click the button below to sign in. This link expires in 10 minutes and can only be used once.</p>
      <p style="margin:0;color:#525866;">If you didn't request this, you can safely ignore this email — no account changes will be made.</p>`,
    ctaLabel: "Sign in",
    ctaUrl: input.url,
  });
  return { subject: "Sign in to Marketing Academy", html, text };
}
