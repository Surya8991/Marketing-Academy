# Accounts, sign-in, and cross-device sync — Design

**Status:** Approved, ready for implementation planning
**Date:** 2026-08-20

## Problem

Marketing Academy has no backend today — every learner's progress (completed
lessons, quiz passes, XP/streak, bookmarks, notes, review queue, project
completions, settings) lives in `localStorage` only. That's a deliberate,
still-true selling point ("no account needed"), but it means a learner's
progress doesn't follow them across devices or browsers.

A prior attempt at cross-device sync exists and is disabled:
`src/app/api/sync-proxy/route.ts`, backed by Cloudflare KV, gated by a shared
secret that's shipped to the client (`NEXT_PUBLIC_SYNC_SECRET`) and keyed by a
single fixed KV key (`"progress"`) shared by every visitor — meaning any
visitor could read or overwrite any other visitor's private notes and
progress. It was intentionally kill-switched
(`PROJECTS_PLAN.md` section 16.2) pending "a user identity mechanism the site
does not have." This design builds that mechanism and replaces the disabled
feature with a correct one.

## Goals

- Optional sign-in (Google OAuth only) that unlocks cross-device progress
  sync. Signing out / never signing in must leave the site exactly as it
  works today — this is additive, not a requirement.
- Replace `api/sync-proxy` (Cloudflare KV, disabled) with a real per-user
  sync path.
- Foundation for account self-service (view/revoke sessions, delete account)
  and a minimal admin flag (no admin UI yet — out of scope, see Non-Goals).

## Non-Goals

- **No admin UI.** Only a persisted `role` column + `requireAdmin()` helper +
  `ADMIN_EMAILS` bootstrap. Nothing to manage other users from.
- **No second OAuth provider / account linking.** Google-only for now. Adding
  GitHub later is a small, well-understood follow-up (Auth.js links a new
  provider to an already-authenticated session automatically, confirmed
  working in the Email-Automator sister project this design mirrors) — not
  built speculatively here.
- **No gating of any content behind sign-in.** Every lesson, project, quiz,
  and certificate stays free and account-free, unchanged.
- **No Upstash/Redis.** Rate limiting uses the same in-memory-with-warning
  pattern Email-Automator falls back to when Redis isn't configured — real,
  but per-Lambda-approximate on Vercel. Acceptable here since `/api/sync`
  isn't a high-value abuse target the way a login/magic-link endpoint is.

## Architecture

Mirrors the Email-Automator sister project's proven stack, so the same
patterns (session handling, role persistence, migration workflow) apply
without being redesigned from scratch:

- **NextAuth v5** (`auth.ts` at project root), Google provider only, database
  session strategy.
- **Drizzle ORM + Turso** (serverless libSQL) — new `server/db/` directory:
  `schema.ts`, `client.ts`, `migrations/` (hand-authored `.sql` +
  `meta/_journal.json`, matching Email-Automator's migration workflow since
  Marketing Academy has no existing Drizzle setup to diff against either).
- New env vars: `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`,
  `DATABASE_URL` (Turso), `TURSO_AUTH_TOKEN`, `ADMIN_EMAILS`. All optional —
  the app boots and runs exactly as today if none are set (sign-in simply
  doesn't render, matching Email-Automator's env-conditional provider
  pattern already used for its Google/GitHub/email buttons).

## Data Model

```ts
// server/db/schema.ts
export const users = sqliteTable('users', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text('email').unique().notNull(),
  name: text('name'),
  image: text('image'),
  emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
  createdAt: integer('createdAt', { mode: 'timestamp_ms' }).notNull().$defaultFn(() => new Date()),
  role: text('role').notNull().default('user'), // 'user' | 'admin'
});

export const accounts = sqliteTable('accounts', { /* Auth.js standard shape */ });
export const sessions = sqliteTable('sessions', { /* Auth.js standard shape */ });
export const verificationTokens = sqliteTable('verificationTokens', { /* Auth.js standard shape, unused with Google-only but part of the adapter contract */ });

export const progress = sqliteTable('progress', {
  userId: text('userId').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  data: text('data').notNull(),          // JSON blob, same shape as collectAllKeys()
  updatedAt: integer('updatedAt', { mode: 'timestamp_ms' }).notNull(),
});
```

`progress.data` reuses the exact key set `collectAllKeys()` in
`SettingsClient.tsx` already defines (`EXPORT_KEYS` +
`ALLOWED_KEY_PREFIXES`) — one definition of "what a user's data is," shared
by local export/import and server sync, instead of two that can drift.
**That list is already stale** (missing `PROJECTS_PROGRESS_KEY` and
`REVIEW_QUEUE_KEY`, both added this session) — fixing it is in scope here
since sync depends on it being correct.

## Sync Behavior

- **Guest** (no session): unchanged. Everything stays in `localStorage`
  only.
- **Signed in**: `localStorage` stays the read source of truth (no new
  network call on page render) and becomes a write-through cache:
  - **On sign-in**: pull the server's `progress` row (if any). Merge with
    local `collectAllKeys()` data using `updatedAt` — whichever side is
    newer wins as a whole snapshot (not per-field; keeps the first version
    simple). Write the merged result back to both `localStorage` and the
    server.

    **Corrected during final review (2026-08-20).** The above assumed a local
    `updatedAt` always exists and always belongs to the person signing in.
    Neither holds: it is never written for a guest, and sign-out deliberately
    leaves `localStorage` intact, so on a shared browser it can belong to the
    *previous* user. Left as written, user A's leftover timestamp could beat
    user B's server row and push A's completions, bookmarks and private notes
    into B's account.

    The shipped policy therefore stores the timestamp **scoped to the user id
    that wrote it** (`ma_sync_local_updated_at` = `{ userId, at }`) and treats
    a timestamp owned by anyone else — or absent entirely — as *no* timestamp:
      - server row exists → **remote wins**;
      - no server row either → **do nothing at all** (no restore, no push).
        Blindly pushing here would upload a guest's or a previous user's
        leftover `localStorage`. The user's own next real edit fires
        `PROGRESS_CHANGED_EVENT`, which re-stamps under their id and pushes.

    Consequence worth stating plainly: a long-time guest signing in for the
    first time on a device where their account already has a server row will
    have that server row win. Rescuing guest progress in that case is what
    `/settings`'s export/import is for; silently preferring unowned local data
    is the strictly worse failure (it is the cross-user leak above).
  - **On write**: every existing `*_EVENT` dispatch (`ENGAGEMENT_EVENT`,
    `LESSON_TOGGLE_EVENT`, `QUIZ_PASSED_EVENT`, `PROJECT_TOGGLE_EVENT`,
    `STORAGE_WRITE_FAILED`, etc.) is the trigger for a single new listener
    that debounces (~2s) and pushes the full `collectAllKeys()` snapshot to
    `POST /api/sync`. No existing call site changes — this is additive
    instrumentation, not a rewrite of how progress gets written.
  - **New device already signed in**: same pull-and-merge as sign-in, run on
    mount.
- **`/api/sync`** (`GET`/`POST`), replaces `sync-proxy` entirely:
  - Auth via `requireUser()` (real session, not a shared secret).
  - `GET`: returns the caller's `progress` row.
  - `POST`: upserts the caller's `progress` row, `updatedAt = now()`. Same
    512KB payload guard `sync-proxy` already had.
  - Rate-limited per-user (in-memory, per Non-Goals).
- **Old `sync-proxy` route, `NEXT_PUBLIC_SYNC_SECRET`, and the 4 Cloudflare
  env vars are deleted** — this fully replaces that mechanism, per your
  "replace it entirely" decision. `AGENTS.md` Rule 26 (which documents the
  vulnerability this replaces) gets a follow-up note marking it resolved,
  not deleted — future readers should know why the old pattern existed and
  why it's gone.

## Auth UI

- **Nav**: new "Sign in" entry (Actions bar, alongside Bookmarks/Theme/
  Settings icons). Signed-out → "Sign in" button. Signed-in → avatar/initial
  + dropdown (sync status, "Account", "Sign out").
- **`/login`**: single "Continue with Google" button. No multi-provider card
  (Google-only).
- **`/account`** (new, parallel to `/settings`): sync status ("last synced
  2 min ago" / "not synced yet"), P1 active-session list + per-session
  revoke, P1 self-serve account deletion (deletes `users` row, cascades to
  `accounts`/`sessions`/`progress`; local `localStorage` on that device is
  untouched by design — deleting the account is a server-side action, not a
  remote-wipe of every browser it was ever used on).
- **Homepage**: unchanged. "No account needed" stays literally true; sync is
  discovered via the Nav, never pushed via onboarding modal or a sign-up
  wall.

## Error Handling

- Every new `localStorage`/network call follows the existing project
  convention (AGENTS.md Rule 42): try/catch, never throw into a render path.
- `/api/sync` failures (offline, 5xx, rate-limited) fail silently to the
  user — sync is a background enhancement, not a blocking requirement. A
  failed push is retried on the next debounced write; a failed pull on
  sign-in just leaves local data as-is (nothing is lost, sync catches up
  later).
- Auth failures (`requireUser()` when unauthenticated) redirect to `/login`,
  matching Email-Automator's pattern — no separate error page needed for a
  Google-only flow.

## Testing

- **Auth-coverage test** (new, `tests/api-auth-coverage.test.ts`, mirrors
  Email-Automator's): every route under `src/app/api/**` either calls
  `requireUser()`/`requireAdmin()` or is on an explicit, reasoned exemption
  allowlist (e.g. `/api/health`, `/api/og`, `/api/robots` if such routes
  exist and are legitimately public).
- **Sync merge logic**: unit tests for the `updatedAt`-wins merge function in
  isolation (newer-local-wins, newer-server-wins, no-server-data-yet,
  malformed server blob).
- **Existing `tests/*.test.ts` suite** must stay green — this design doesn't
  touch lesson/project/quiz data structures, only adds new tables and an
  opt-in sync path.
- **Manual**: sign in on two browser profiles, verify progress merges
  correctly rather than one overwriting the other; verify guest mode is
  fully unaffected (no console errors, no network calls to `/api/sync` when
  signed out).

## Rollout / Migration

- No existing data to migrate — the old `sync-proxy` was disabled and, per
  the UX audit referenced in `PROJECTS_PLAN.md`, saw negligible real usage.
  Nothing to backfill.
- New env vars are all optional; deploying this with none set is a no-op
  (sign-in doesn't render, `/api/sync` 503s if hit directly, matching
  `sync-proxy`'s existing "degrade gracefully" convention).
- `AGENTS.md` and `PROJECT_LOG.md` get updated per the project's existing
  pre-push documentation rule (Rule 23) — new tables, new routes, new Nav
  entry, new env vars all need entries.
