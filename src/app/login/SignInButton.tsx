"use client";
import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";

export default function SignInButton() {
  return (
    <button
      onClick={() => void signIn("google", { callbackUrl: "/" })}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] font-medium hover:opacity-90 transition-opacity"
    >
      <LogIn size={16} />
      Continue with Google
    </button>
  );
}
