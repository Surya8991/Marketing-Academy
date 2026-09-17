/**
 * One branded HTML shell every transactional/engagement email renders
 * through (IMPROVEMENT_PLAN §D2). Email clients don't support CSS
 * variables or external stylesheets, so the site's light-mode tokens
 * (globals.css) are inlined as static hex, dark-mode email rendering is
 * unreliable across clients, so every email intentionally renders in the
 * site's light theme regardless of the recipient's site preference.
 *
 * Table-based layout + inline styles: the only markup that survives
 * Outlook/Gmail/Apple Mail's wildly inconsistent CSS support.
 */
const COLORS = {
  background: "#ffffff",
  foreground: "#0a0a0a",
  mutedForeground: "#525866",
  border: "#e5e7eb",
  accent: "#6366f1",
  accentForeground: "#ffffff",
};

export type EmailLayoutInput = {
  preheader: string;
  heading: string;
  bodyHtml: string;
  /** Rendered as a button when both are set. */
  ctaLabel?: string;
  ctaUrl?: string;
  /** Required for opt-in (engagement/milestone) emails per CAN-SPAM/GDPR; omitted for transactional/security mail. */
  unsubscribeUrl?: string;
};

const BASE_URL = "https://marketing-academy-roan.vercel.app";

export function renderEmailLayout(input: EmailLayoutInput): { html: string; text: string } {
  const cta =
    input.ctaLabel && input.ctaUrl
      ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0;">
          <tr><td style="border-radius:9999px;background:${COLORS.accent};">
            <a href="${input.ctaUrl}" style="display:inline-block;padding:12px 28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;font-weight:600;color:${COLORS.accentForeground};text-decoration:none;">
              ${input.ctaLabel}
            </a>
          </td></tr>
        </table>`
      : "";

  const footer = input.unsubscribeUrl
    ? `<p style="margin:0;">You're receiving this because you opted into Marketing Academy email updates. <a href="${input.unsubscribeUrl}" style="color:${COLORS.mutedForeground};">Unsubscribe</a>.</p>`
    : `<p style="margin:0;">This is a transactional message about your Marketing Academy account.</p>`;

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <span style="display:none;font-size:1px;color:#f4f4f5;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${input.preheader}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:520px;background:${COLORS.background};border:1px solid ${COLORS.border};border-radius:16px;overflow:hidden;">
        <tr><td style="padding:28px 32px 0;">
          <p style="margin:0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.accent};font-weight:600;">Marketing Academy</p>
        </td></tr>
        <tr><td style="padding:16px 32px 8px;">
          <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:${COLORS.foreground};">${input.heading}</h1>
          <div style="font-size:15px;line-height:1.6;color:${COLORS.foreground};">${input.bodyHtml}</div>
          ${cta}
        </td></tr>
        <tr><td style="padding:20px 32px 28px;border-top:1px solid ${COLORS.border};margin-top:12px;">
          <div style="font-size:12px;color:${COLORS.mutedForeground};line-height:1.6;">
            ${footer}
            <p style="margin:8px 0 0;"><a href="${BASE_URL}" style="color:${COLORS.mutedForeground};">marketing-academy-roan.vercel.app</a></p>
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = `${input.heading}\n\n${stripTags(input.bodyHtml)}${
    input.ctaLabel && input.ctaUrl ? `\n\n${input.ctaLabel}: ${input.ctaUrl}` : ""
  }\n\n---\n${stripTags(footer)}\n${BASE_URL}`;

  return { html, text };
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "").trim();
}
