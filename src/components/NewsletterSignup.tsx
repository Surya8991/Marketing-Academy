"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="you@example.com"
        aria-label="Email address"
        disabled={status === "loading" || status === "success"}
        className="bg-[var(--background)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] disabled:opacity-60 w-full sm:w-60"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="bg-[var(--accent)] text-[var(--accent-foreground)] rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 self-center sm:ml-1">
          You&apos;re in! Check your inbox.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500 self-center sm:ml-1">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
