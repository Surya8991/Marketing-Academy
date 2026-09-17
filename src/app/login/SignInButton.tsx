"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail } from "lucide-react";

/**
 * Single email-input magic-link form (IMPROVEMENT_PLAN #26) — no provider
 * picker, Gmail SMTP is the only enabled sign-in path. The Nodemailer
 * provider's id is literally "nodemailer" (@auth/core/providers/nodemailer.js).
 */
export default function SignInButton() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("sending");
    try {
      const res = await signIn("nodemailer", { email: trimmed, redirect: false });
      setStatus(res?.error ? "error" : "sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center border border-[var(--border)] rounded-xl p-5">
        <p className="font-medium mb-1.5">Check your inbox</p>
        <p className="text-sm text-[var(--muted-foreground)]">
          We sent a sign-in link to <strong className="text-[var(--foreground)]">{email}</strong>. It expires in 10
          minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        aria-label="Email address"
        className="w-full px-4 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-center text-sm"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        <Mail size={16} />
        {status === "sending" ? "Sending…" : "Send sign-in link"}
      </button>
      {status === "error" && (
        <p className="text-sm" style={{ color: "rgba(220,38,38,0.9)" }}>
          Something went wrong sending that link. Try again.
        </p>
      )}
    </form>
  );
}
