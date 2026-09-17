import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { emailAuthConfigured } from "@/lib/env";
import SignInButton from "./SignInButton";

export const metadata = { title: "Sign in", robots: { index: false, follow: true } };

type Props = { searchParams: Promise<{ suspended?: string; error?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const { suspended, error } = await searchParams;
  const isSuspended = suspended === "1" || error === "AccessDenied";

  const session = await auth();
  // A suspended user's own session still resolves truthy (isSuspended just
  // marks it), only redirect away a genuinely active, non-suspended session,
  // or this page can never show the "your account was suspended" message.
  const user = session?.user as { isSuspended?: boolean } | undefined;
  if (session?.user && !user?.isSuspended) redirect("/");

  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <h1 className="font-display font-semibold text-3xl mb-3">Sign in</h1>
      {isSuspended ? (
        <p
          className="text-sm mb-8 leading-relaxed rounded-lg p-4"
          style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)", color: "rgba(220,38,38,0.95)" }}
        >
          This account has been suspended. If you believe this is a mistake, contact support.
        </p>
      ) : (
        <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
          Optional, everything on Marketing Academy already works without an
          account. Enter your email and we&apos;ll send a one-time link, no
          password to set or remember.
        </p>
      )}
      {isSuspended ? null : emailAuthConfigured() ? (
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
