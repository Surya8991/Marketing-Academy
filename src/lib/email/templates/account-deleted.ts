import { renderEmailLayout } from "@/lib/email/layout";

export function accountDeletedEmail() {
  const { html, text } = renderEmailLayout({
    preheader: "Your Marketing Academy account has been deleted",
    heading: "Your account has been deleted",
    bodyHtml: `<p style="margin:0 0 8px;">Your Marketing Academy account and all associated data have been permanently deleted, as requested.</p>
      <p style="margin:0;color:#525866;">You won't receive any further emails from us. If you'd like to come back, you're welcome to create a new account any time — all 642 lessons stay free, no account required.</p>`,
  });
  return { subject: "Your Marketing Academy account was deleted", html, text };
}
