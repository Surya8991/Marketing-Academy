import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { authConfigured } from "@/lib/env";
import SignInButton from "./SignInButton";

export const metadata = { title: "Sign in | Marketing Academy" };

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="font-display font-semibold text-3xl mb-3">Sign in</h1>
      <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
        Optional — everything on Marketing Academy already works without an
        account. Signing in just lets your progress follow you across
        devices.
      </p>
      {authConfigured() ? (
        <SignInButton />
      ) : (
        <p className="text-sm text-[var(--muted-foreground)] border border-[var(--border)] rounded-lg p-4">
          Sign-in isn&apos;t configured on this deployment yet.
        </p>
      )}
      <Link href="/" className="block mt-6 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
        &larr; Back to Marketing Academy
      </Link>
    </div>
  );
}
