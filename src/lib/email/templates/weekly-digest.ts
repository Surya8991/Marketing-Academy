import { renderEmailLayout } from "@/lib/email/layout";

const BASE_URL = "https://marketing-academy-roan.vercel.app";

export function weeklyDigestEmail(input: {
  lessonsThisWeek: number;
  xpThisWeek: number;
  streak: number;
  overallPct: number;
  unsubscribeUrl: string;
}) {
  const { html, text } = renderEmailLayout({
    preheader: `${input.lessonsThisWeek} lessons this week, ${input.xpThisWeek} XP earned`,
    heading: "Your week in review",
    bodyHtml: `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 8px;">
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">Lessons completed</td>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;">${input.lessonsThisWeek}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">XP earned</td>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;">${input.xpThisWeek}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;">Current streak</td>
          <td style="padding:8px 0;border-bottom:1px solid #e5e7eb;text-align:right;font-weight:600;">${input.streak} day${input.streak !== 1 ? "s" : ""}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;">Overall progress</td>
          <td style="padding:8px 0;text-align:right;font-weight:600;">${input.overallPct}%</td>
        </tr>
      </table>`,
    ctaLabel: "View your profile",
    ctaUrl: `${BASE_URL}/profile`,
    unsubscribeUrl: input.unsubscribeUrl,
  });
  return { subject: "Your week in review: Marketing Academy", html, text };
}
