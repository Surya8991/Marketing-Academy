import { renderEmailLayout } from "@/lib/email/layout";

const BASE_URL = "https://marketing-academy-roan.vercel.app";

export function welcomeEmail(input: { name?: string | null }) {
  const greeting = input.name ? `Hi ${input.name},` : "Hi there,";
  const { html, text } = renderEmailLayout({
    preheader: "Your account is set up — here's what it unlocks",
    heading: "Welcome to Marketing Academy",
    bodyHtml: `<p style="margin:0 0 8px;">${greeting} you're signed in.</p>
      <p style="margin:0 0 8px;">Everything you've already learned on this device is still here. Signing in adds one thing: your progress now backs up automatically and follows you to any device you sign in on.</p>
      <p style="margin:0;color:#525866;">Your personal dashboard — XP, streak, badges, certificates — lives at <strong>/profile</strong>.</p>`,
    ctaLabel: "Go to your profile",
    ctaUrl: `${BASE_URL}/profile`,
  });
  return { subject: "Welcome to Marketing Academy", html, text };
}
