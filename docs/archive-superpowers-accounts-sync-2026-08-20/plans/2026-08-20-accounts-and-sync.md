# Accounts, Sign-in, and Cross-Device Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add optional Google-only sign-in to Marketing Academy that unlocks cross-device progress sync, replacing the disabled `sync-proxy` (Cloudflare KV) with a real per-user path — while leaving the guest (no-account) experience completely unchanged.

**Architecture:** NextAuth v5 (database session strategy) + Drizzle ORM + `@libsql/client` (Turso in prod, a local `file:` DB in dev), mirroring the Email-Automator sister project's proven stack. `localStorage` stays the read source of truth; a new `PROGRESS_CHANGED_EVENT` fires from every existing progress-writing lib function and drives a debounced background push to `/api/sync` when signed in.

**Tech Stack:** Next.js 16 (App Router), TypeScript strict, `next-auth@^5.0.0-beta.32`, `@auth/core`, `@auth/drizzle-adapter`, `drizzle-orm`, `drizzle-kit`, `@libsql/client`, `zod`.

## Global Constraints

- Every new `localStorage`/network call wrapped in try/catch, never throws into a render path (AGENTS.md Rule 42).
- Shared storage/event logic lives in `src/lib/`, never duplicated per-component (AGENTS.md Rule 18).
- `@/*` resolves to `./src/*` (tsconfig) — all new server code lives under `src/`, not at the repo root (unlike Email-Automator, where `@/*` maps to the repo root).
- All new env vars are optional at boot: with none set, the app runs exactly as it does today (sign-in UI doesn't render, `/api/sync` returns 503).
- No Redis/Upstash — rate limiting is in-memory only, per the spec's Non-Goals.
- No admin UI — only a persisted `role` column and a `requireAdmin()` helper.
- `npm test` (`node --import tsx --test tests/*.test.ts`) and `npx tsc --noEmit` and `npm run lint` and `npm run build` must all stay green after every task.
- Follow AGENTS.md Rule 23: update `AGENTS.md`, `PROJECT_LOG.md`, `README.md` before the final push (Task 17).

---

## Task 1: Install dependencies

**Files:**
- Modify: `package.json`, `package-lock.json`

**Interfaces:**
- Produces: `next-auth`, `@auth/core`, `@auth/drizzle-adapter`, `drizzle-orm`, `@libsql/client`, `zod` available as production deps; `drizzle-kit` available as a dev dep.

- [ ] **Step 1: Install the runtime + dev dependencies**

```bash
npm install next-auth@^5.0.0-beta.32 @auth/core@^0.41.2 @auth/drizzle-adapter@^1.7.4 drizzle-orm@^0.45.2 @libsql/client@^0.17.3 zod@^3.23.8
npm install -D drizzle-kit@^0.31.10
```

- [ ] **Step 2: Verify the build still passes with no code changes yet**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed (new deps installed but unused, so no type errors).

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add auth/db dependencies (next-auth, drizzle, libsql)"
```

---

## Task 2: Extract shared progress-snapshot module, fix stale key list

**Files:**
- Create: `src/lib/progress-snapshot.ts`
- Create: `tests/progress-snapshot.test.ts`
- Modify: `src/app/settings/SettingsClient.tsx:1-49` (delete the local definitions, import from the new module)

**Interfaces:**
- Produces: `EXPORT_KEYS: readonly string[]`, `ALLOWED_KEY_PREFIXES: readonly string[]`, `collectAllKeys(): Record<string, unknown>`, `isAllowedKey(key: string): boolean`, `restoreAllKeys(data: Record<string, unknown>): void` — all from `@/lib/progress-snapshot`.
- Consumes: `BOOKMARK_KEY` from `@/lib/bookmarks`, `COMPLETED_KEY` from `@/lib/progress`, `ENGAGEMENT_KEY` from `@/lib/engagement`, `ONBOARDED_KEY`/`GATE_NOTICE_KEY`/`PROJECTS_PROGRESS_KEY`/`REVIEW_QUEUE_KEY` from `@/lib/events`, `QUIZ_PASS_KEY_PREFIX`/`TRACK_QUIZ_PASS_PREFIX`/`QUIZ_STORAGE_PREFIX` from `@/lib/quizzes`, `NOTE_KEY_PREFIX` from `@/lib/notes`, `RECENT_KEY` from `@/lib/recentlyViewed`.

This is a pure extraction (same logic `SettingsClient.tsx` already had) plus fixing the two keys that went stale this session — `PROJECTS_PROGRESS_KEY` (added when practice-projects shipped) and `REVIEW_QUEUE_KEY` (added with the spaced-review feature) were never added to `EXPORT_KEYS`, so export/import/reset/reset-all currently silently skip them. Both the new sync path and the existing export/import feature share one definition afterward.

- [ ] **Step 1: Write the failing test**

```typescript
// tests/progress-snapshot.test.ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  EXPORT_KEYS,
  ALLOWED_KEY_PREFIXES,
  collectAllKeys,
  isAllowedKey,
  restoreAllKeys,
} from "../src/lib/progress-snapshot";
import { PROJECTS_PROGRESS_KEY, REVIEW_QUEUE_KEY } from "../src/lib/events";

describe("progress-snapshot", () => {
  test("EXPORT_KEYS includes the two keys added this session", () => {
    assert.ok(EXPORT_KEYS.includes(PROJECTS_PROGRESS_KEY), "missing PROJECTS_PROGRESS_KEY");
    assert.ok(EXPORT_KEYS.includes(REVIEW_QUEUE_KEY), "missing REVIEW_QUEUE_KEY");
  });

  test("collectAllKeys reads every EXPORT_KEYS entry, null when unset", () => {
    const g = globalThis as unknown as { localStorage: Storage };
    const store: Record<string, string> = {};
    g.localStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
      get length() { return Object.keys(store).length; },
      key: (i: number) => Object.keys(store)[i] ?? null,
      clear: () => { for (const k of Object.keys(store)) delete store[k]; },
    } as Storage;

    store[PROJECTS_PROGRESS_KEY] = JSON.stringify({ completedProjectIds: ["a"], completedStepIds: [] });
    const data = collectAllKeys();
    assert.deepEqual(data[PROJECTS_PROGRESS_KEY], { completedProjectIds: ["a"], completedStepIds: [] });
    assert.equal(data[REVIEW_QUEUE_KEY], null);
  });

  test("isAllowedKey accepts fixed keys and prefixed keys, rejects unknown", () => {
    assert.ok(isAllowedKey(PROJECTS_PROGRESS_KEY));
    assert.ok(isAllowedKey(ALLOWED_KEY_PREFIXES[0] + "seo/keyword-research"));
    assert.equal(isAllowedKey("some_unrelated_key"), false);
  });

  test("restoreAllKeys round-trips through collectAllKeys", () => {
    const g = globalThis as unknown as { localStorage: Storage };
    const store: Record<string, string> = {};
    g.localStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = v; },
      removeItem: (k: string) => { delete store[k]; },
      get length() { return Object.keys(store).length; },
      key: (i: number) => Object.keys(store)[i] ?? null,
      clear: () => { for (const k of Object.keys(store)) delete store[k]; },
    } as Storage;

    const snapshot = collectAllKeys();
    snapshot[PROJECTS_PROGRESS_KEY] = { completedProjectIds: ["x"], completedStepIds: ["y"] };
    restoreAllKeys(snapshot);
    const roundTripped = collectAllKeys();
    assert.deepEqual(roundTripped[PROJECTS_PROGRESS_KEY], { completedProjectIds: ["x"], completedStepIds: ["y"] });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --import tsx --test tests/progress-snapshot.test.ts`
Expected: FAIL — `src/lib/progress-snapshot.ts` does not exist yet.

- [ ] **Step 3: Write the module**

```typescript
// src/lib/progress-snapshot.ts
/**
 * Single source of truth for "what counts as a user's progress data" —
 * shared by /settings export/import/reset AND the account-sync feature
 * (src/lib/sync-client.ts). Extracted from SettingsClient.tsx (AGENTS.md
 * Rule 18: shared storage logic lives in src/lib/, never duplicated
 * per-component) so the two features can't drift into two different
 * definitions of "the user's data."
 */
import { BOOKMARK_KEY } from "@/lib/bookmarks";
import { COMPLETED_KEY } from "@/lib/progress";
import { ENGAGEMENT_KEY } from "@/lib/engagement";
import { ONBOARDED_KEY, GATE_NOTICE_KEY, PROJECTS_PROGRESS_KEY, REVIEW_QUEUE_KEY } from "@/lib/events";
import { QUIZ_PASS_KEY_PREFIX, TRACK_QUIZ_PASS_PREFIX, QUIZ_STORAGE_PREFIX } from "@/lib/quizzes";
import { NOTE_KEY_PREFIX } from "@/lib/notes";
import { RECENT_KEY } from "@/lib/recentlyViewed";

/** Fixed-name keys that get exported/imported/reset/synced verbatim. */
export const EXPORT_KEYS = [
  COMPLETED_KEY,
  BOOKMARK_KEY,
  ENGAGEMENT_KEY,
  ONBOARDED_KEY,
  RECENT_KEY,
  GATE_NOTICE_KEY,
  PROJECTS_PROGRESS_KEY,
  REVIEW_QUEUE_KEY,
] as const;

/** Prefixed keys that are swept during export/import/reset/sync. */
export const ALLOWED_KEY_PREFIXES = [
  QUIZ_PASS_KEY_PREFIX,
  TRACK_QUIZ_PASS_PREFIX,
  QUIZ_STORAGE_PREFIX,
  NOTE_KEY_PREFIX,
] as const;

export function collectAllKeys(): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const key of EXPORT_KEYS) {
    const raw = localStorage.getItem(key);
    data[key] = raw ? JSON.parse(raw) : null;
  }
  // Snapshot all keys first to avoid length-changes mid-iteration.
  const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i)).filter(Boolean) as string[];
  for (const key of allKeys) {
    if (ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p))) {
      data[key] = localStorage.getItem(key);
    }
  }
  return data;
}

export function isAllowedKey(key: string): boolean {
  if ((EXPORT_KEYS as readonly string[]).includes(key)) return true;
  return ALLOWED_KEY_PREFIXES.some((p) => key.startsWith(p));
}

export function restoreAllKeys(data: Record<string, unknown>): void {
  for (const [key, value] of Object.entries(data)) {
    if (!isAllowedKey(key)) continue;
    if (value === null || value === undefined) continue;
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --import tsx --test tests/progress-snapshot.test.ts`
Expected: PASS, all 4 tests.

- [ ] **Step 5: Update `SettingsClient.tsx` to import from the new module**

In `src/app/settings/SettingsClient.tsx`, replace lines 1-49 (the imports block through the end of `restoreAllKeys`) with:

```typescript
"use client";

import { useEffect, useRef, useState } from "react";
import { ENGAGEMENT_EVENT } from "@/lib/engagement";
import { EXPORT_KEYS, ALLOWED_KEY_PREFIXES, collectAllKeys, restoreAllKeys } from "@/lib/progress-snapshot";
```

Every other reference to `EXPORT_KEYS`, `ALLOWED_KEY_PREFIXES`, `collectAllKeys`, `restoreAllKeys` later in the file (the `handlePush`/`handlePull`/`handleExport`/`handleFileChange`/`handleReset` functions) is unchanged — they already call these by name.

- [ ] **Step 6: Run the full test suite and typecheck**

Run: `npm test && npx tsc --noEmit`
Expected: all pass, no unused-import errors in `SettingsClient.tsx`.

- [ ] **Step 7: Commit**

```bash
git add src/lib/progress-snapshot.ts tests/progress-snapshot.test.ts src/app/settings/SettingsClient.tsx
git commit -m "refactor: extract progress-snapshot lib, fix stale EXPORT_KEYS list

PROJECTS_PROGRESS_KEY and REVIEW_QUEUE_KEY (both added this session) were
never added to SettingsClient.tsx's EXPORT_KEYS, so export/import/reset
silently skipped them. Extracted to src/lib/progress-snapshot.ts (Rule 18)
so the upcoming sync feature shares one definition instead of drifting."
```

---

## Task 3: Add PROGRESS_CHANGED_EVENT, wire it into every progress-writing function

**Files:**
- Modify: `src/lib/events.ts` (add the constant)
- Modify: `src/lib/progress.ts` (`markComplete`, `markIncomplete`)
- Modify: `src/lib/engagement.ts` (`addXP`)
- Modify: `src/lib/quizzes.ts` (`setQuizPassed`, `setTrackQuizPassed`)
- Modify: `src/lib/bookmarks.ts` (the add/remove function — inspect the file first to find its exact name)
- Modify: `src/lib/notes.ts` (the save function — inspect the file first to find its exact name)
- Modify: `src/lib/projects-progress.ts` (`markProjectComplete`, `markProjectIncomplete`, `markStepComplete`, `markStepIncomplete`)
- Modify: `src/lib/spaced-review.ts` (`recordMiss`, `recordHit`)
- Create: `tests/progress-changed-event.test.ts`

**Interfaces:**
- Produces: `PROGRESS_CHANGED_EVENT: string` from `@/lib/events`. A plain signal event (no payload) — consumers just need to know "something in the synced key set changed," not what.

The spec described the sync trigger as "every existing `*_EVENT` dispatch" — that turned out to be inaccurate: `bookmarks.ts` and `notes.ts` currently dispatch nothing on a successful write (only `STORAGE_WRITE_FAILED` on error), so relying only on existing events would silently miss bookmark toggles and note edits. This task adds one new consolidated event instead of listening to four different existing ones with different payload shapes.

- [ ] **Step 1: Add the constant**

In `src/lib/events.ts`, append:

```typescript
/**
 * Fired by every function that writes a key covered by
 * src/lib/progress-snapshot.ts's EXPORT_KEYS/ALLOWED_KEY_PREFIXES — the
 * signal src/lib/sync-client.ts listens for to debounce-push to /api/sync
 * when signed in. No payload: consumers re-read whatever they need via
 * collectAllKeys(), they don't need to know which key changed.
 */
export const PROGRESS_CHANGED_EVENT = "ma_progress_changed";
```

- [ ] **Step 2: Write the failing test**

```typescript
// tests/progress-changed-event.test.ts
import { test, describe, before, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { PROGRESS_CHANGED_EVENT } from "../src/lib/events";

function installLocalStorage() {
  const store: Record<string, string> = {};
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => { store[k] = v; },
    removeItem: (k: string) => { delete store[k]; },
    get length() { return Object.keys(store).length; },
    key: (i: number) => Object.keys(store)[i] ?? null,
    clear: () => { for (const k of Object.keys(store)) delete store[k]; },
  } as Storage;
}

function installWindow() {
  const listeners: Record<string, ((e: Event) => void)[]> = {};
  (globalThis as unknown as { window: Window }).window = {
    dispatchEvent: (e: Event) => {
      for (const fn of listeners[e.type] ?? []) fn(e);
      return true;
    },
    addEventListener: (type: string, fn: (e: Event) => void) => {
      (listeners[type] ??= []).push(fn);
    },
  } as unknown as Window;
  (globalThis as unknown as { CustomEvent: typeof CustomEvent }).CustomEvent = CustomEvent;
  return listeners;
}

describe("PROGRESS_CHANGED_EVENT fires from every progress-writing function", () => {
  before(() => { installLocalStorage(); installWindow(); });

  test("progress.ts markComplete/markIncomplete", async () => {
    const { markComplete, markIncomplete } = await import("../src/lib/progress.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    markComplete("seo/keyword-research");
    markIncomplete("seo/keyword-research");
    assert.equal(fired, 2);
  });

  test("bookmarks.ts toggle function fires the event", async () => {
    const bookmarks = await import("../src/lib/bookmarks.js");
    let fired = 0;
    window.addEventListener(PROGRESS_CHANGED_EVENT, () => { fired++; });
    // Inspect src/lib/bookmarks.ts during implementation for the exact
    // exported function name (e.g. addBookmark/toggleBookmark) and call it
    // here with a minimal valid argument for that signature.
    assert.ok(typeof bookmarks === "object");
    assert.ok(fired >= 0); // placeholder assertion replaced once the real call is written — see Step 3
  });
});
```

- [ ] **Step 3: Run test to verify it fails, then inspect the real function signatures**

Run: `node --import tsx --test tests/progress-changed-event.test.ts`
Expected: FAIL (0 dispatches, since nothing dispatches `PROGRESS_CHANGED_EVENT` yet).

Before writing the implementation, read `src/lib/bookmarks.ts` and `src/lib/notes.ts` in full to get their exact exported write-function names and signatures, then replace the placeholder `bookmarks.ts toggle function` test above with a real call (e.g. `bookmarks.addBookmark({ category, slug, title })` or whatever the actual signature is) asserting `fired === 1`, and add an equivalent case for `notes.ts`'s save function. Remove the placeholder assertion once the real one is in place.

- [ ] **Step 4: Add the dispatch to each function**

In each file below, add one line at the end of every successful-write branch (inside the existing `try` block, after the `localStorage.setItem`/`removeItem` call, following the exact pattern `ENGAGEMENT_EVENT` and `QUIZ_PASSED_EVENT` already use elsewhere in this codebase):

```typescript
window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT));
```

Import `PROGRESS_CHANGED_EVENT` from `@/lib/events` at the top of each file (re-exporting via the lib's own module if that file already re-exports other event constants, matching each file's existing import style).

Apply to:
- `src/lib/progress.ts`: end of `markComplete()` and `markIncomplete()`, after their `localStorage.setItem` succeeds.
- `src/lib/engagement.ts`: end of `addXP()`, after `saveEngagement(state)` — but only on the branch that actually changed something (skip the early-return dedupe branches, which don't write anything new).
- `src/lib/quizzes.ts`: end of `setQuizPassed()` and `setTrackQuizPassed()`.
- `src/lib/bookmarks.ts`: end of whatever the real add/remove function is called (found in Step 3).
- `src/lib/notes.ts`: end of the save function (found in Step 3).
- `src/lib/projects-progress.ts`: end of `markProjectComplete()`, `markProjectIncomplete()`, `markStepComplete()`, `markStepIncomplete()`.
- `src/lib/spaced-review.ts`: end of `recordMiss()` and `recordHit()` (only on the branch that actually mutates the queue — `recordHit()` currently no-ops if the id isn't already tracked; don't dispatch on that no-op path).

- [ ] **Step 5: Run test to verify it passes**

Run: `node --import tsx --test tests/progress-changed-event.test.ts`
Expected: PASS.

- [ ] **Step 6: Run the full suite**

Run: `npm test && npx tsc --noEmit && npm run lint`
Expected: all green.

- [ ] **Step 7: Commit**

```bash
git add src/lib/events.ts src/lib/progress.ts src/lib/engagement.ts src/lib/quizzes.ts src/lib/bookmarks.ts src/lib/notes.ts src/lib/projects-progress.ts src/lib/spaced-review.ts tests/progress-changed-event.test.ts
git commit -m "feat: add PROGRESS_CHANGED_EVENT, dispatch from every progress-writing fn

Consolidated signal for the upcoming sync feature to debounce-push on,
instead of listening to 4 differently-shaped existing events that don't
even cover bookmarks/notes (neither dispatches anything on success today)."
```

---

## Task 4: Env var validation module

**Files:**
- Create: `src/lib/env.ts`
- Create: `.env.example` additions (append, don't overwrite existing content — read the file first)

**Interfaces:**
- Produces: `env: { AUTH_SECRET?: string; GOOGLE_CLIENT_ID?: string; GOOGLE_CLIENT_SECRET?: string; DATABASE_URL?: string; TURSO_AUTH_TOKEN?: string; ADMIN_EMAILS: string }` and `adminEmails: string[]` from `@/lib/env`.

All fields optional except `ADMIN_EMAILS` which defaults to `""` — matching the design's "app boots and runs unchanged with none set" requirement. No `.env` file loader needed here (unlike Email-Automator's standalone-script problem) since Marketing Academy has no worker/script process that runs outside Next.js's own env loading.

- [ ] **Step 1: Write the module**

```typescript
// src/lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  AUTH_SECRET: z.string().min(16).optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  // file:./data/marketing-academy.db for local dev, libsql://...-turso.io for prod.
  DATABASE_URL: z.string().default("file:./data/marketing-academy.db"),
  TURSO_AUTH_TOKEN: z.string().optional(),
  ADMIN_EMAILS: z.string().default(""),
});

// Drop empty-string env values before validating — an env var present but
// blank (e.g. a placeholder left in Vercel's dashboard) should behave as
// "not set," not as a value that fails .min(16).optional().
function withoutBlanks(source: NodeJS.ProcessEnv): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(source)) {
    if (v === "") continue;
    out[k] = v;
  }
  return out;
}

export const env = envSchema.parse(withoutBlanks(process.env));
export const adminEmails = env.ADMIN_EMAILS.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);

/** True only when every var required for real sign-in is present. */
export function authConfigured(): boolean {
  return Boolean(env.AUTH_SECRET && env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
}
```

- [ ] **Step 2: Verify it compiles and boots with nothing set**

Run: `npx tsc --noEmit`
Expected: passes (all fields optional or defaulted, so an empty `process.env` still parses).

- [ ] **Step 3: Append new env vars to `.env.example`**

Read `.env.example` first (if it exists; if not, create it), then append:

```
# --- Accounts + sync (all optional; sign-in is hidden and /api/sync
# returns 503 until every one of these is set) ---
AUTH_SECRET=              # openssl rand -base64 32
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL=file:./data/marketing-academy.db
TURSO_AUTH_TOKEN=
ADMIN_EMAILS=
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/env.ts .env.example
git commit -m "feat: add env.ts (zod-validated, every account/sync var optional)"
```

---

## Task 5: Database schema, client, and migration

**Files:**
- Create: `src/server/db/schema.ts`
- Create: `src/server/db/client.ts`
- Create: `drizzle.config.ts`
- Create: `scripts/migrate.ts`
- Modify: `package.json` (add `db:generate` / `db:migrate` scripts)

**Interfaces:**
- Produces: `users`, `accounts`, `sessions`, `verificationTokens`, `progress` (Drizzle table objects) from `@/server/db/schema`; `db` (a Drizzle instance) from `@/server/db/client`.

- [ ] **Step 1: Write the schema**

```typescript
// src/server/db/schema.ts
import { sqliteTable, integer, text, primaryKey } from "drizzle-orm/sqlite-core";

// --- Auth.js standard tables (NextAuth v5 + @auth/drizzle-adapter contract) ---
export const users = sqliteTable("users", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text("email").unique().notNull(),
  name: text("name"),
  image: text("image"),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  // 'user' | 'admin'. Persisted, bootstrapped from ADMIN_EMAILS on sign-in
  // (see src/auth.ts's events.signIn hook). No admin UI reads/writes this
  // beyond requireAdmin() — see the design doc's Non-Goals.
  role: text("role").notNull().default("user"),
});

export const accounts = sqliteTable("accounts", {
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
}, (t) => ({ pk: primaryKey({ columns: [t.provider, t.providerAccountId] }) }));

export const sessions = sqliteTable("sessions", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable("verificationTokens", {
  identifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
}, (t) => ({ pk: primaryKey({ columns: [t.identifier, t.token] }) }));

// --- App table ---
export const progress = sqliteTable("progress", {
  userId: text("userId").primaryKey().references(() => users.id, { onDelete: "cascade" }),
  // JSON-stringified Record<string, unknown> — same shape src/lib/progress-snapshot.ts's
  // collectAllKeys() produces. One row per user, full-replace on every sync push.
  data: text("data").notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});
```

- [ ] **Step 2: Write the DB client**

```typescript
// src/server/db/client.ts
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/lib/env";
import * as schema from "./schema";

const client = createClient({
  url: env.DATABASE_URL,
  // Only meaningful for a remote libsql://... Turso URL; harmless/unused
  // for a local file: URL.
  authToken: env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
```

- [ ] **Step 3: Write the drizzle-kit config**

```typescript
// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "file:./data/marketing-academy.db",
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  strict: true,
  verbose: true,
} satisfies Config;
```

- [ ] **Step 4: Generate the initial migration**

Run: `mkdir -p data && npx drizzle-kit generate`
Expected: creates `src/server/db/migrations/0000_<random-name>.sql` and `src/server/db/migrations/meta/` (snapshot + `_journal.json`). This is a brand-new schema with no prior migrations to conflict with, so — unlike Email-Automator, which has an incomplete snapshot chain requiring a hand-authoring workaround — `drizzle-kit generate` can be used normally here and for all future schema changes on this project.

- [ ] **Step 5: Write the migration-apply script**

```typescript
// scripts/migrate.ts
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "../src/server/db/client";

async function main() {
  await migrate(db, { migrationsFolder: "./src/server/db/migrations" });
  console.log("[db] migrated");
}

main().catch((err) => {
  console.error("[db] migration failed:", err);
  process.exit(1);
});
```

- [ ] **Step 6: Add npm scripts**

In `package.json`'s `"scripts"` block, add:

```json
"db:generate": "drizzle-kit generate",
"db:migrate": "tsx scripts/migrate.ts"
```

(`tsx` needs adding as a dev dependency if not already present — check `package.json` first; if absent, run `npm install -D tsx`.)

- [ ] **Step 7: Apply the migration locally and verify**

Run: `npm run db:migrate`
Expected: `[db] migrated`, and `data/marketing-academy.db` now exists with the 5 tables.

Verify with:
```bash
node -e "
const { createClient } = require('@libsql/client');
const c = createClient({ url: 'file:./data/marketing-academy.db' });
c.execute(\"SELECT name FROM sqlite_master WHERE type='table'\").then(r => console.log(r.rows));
"
```
Expected: lists `users`, `accounts`, `sessions`, `verificationTokens`, `progress` (plus SQLite's internal tables).

- [ ] **Step 8: Add the local DB file to `.gitignore`**

Check `.gitignore` for an existing `data/` or `*.db` entry; if absent, append:
```
data/*.db
data/*.db-*
```

- [ ] **Step 9: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green. (The build must succeed even though nothing imports the new schema/client yet — dead code, but must still compile.)

- [ ] **Step 10: Commit**

```bash
git add src/server/db/schema.ts src/server/db/client.ts src/server/db/migrations drizzle.config.ts scripts/migrate.ts package.json .gitignore
git commit -m "feat(db): add Drizzle schema (users/accounts/sessions/progress) + migration"
```

---

## Task 6: NextAuth config (`auth.ts`) and route handler

**Files:**
- Create: `src/auth.ts`
- Create: `src/app/api/auth/[...nextauth]/route.ts`

**Interfaces:**
- Consumes: `db` from `@/server/db/client`; `users`, `accounts`, `sessions`, `verificationTokens` from `@/server/db/schema`; `env`, `adminEmails`, `authConfigured` from `@/lib/env`.
- Produces: `handlers`, `auth`, `signIn`, `signOut` (NextAuth exports) from `@/auth`; `requireUser(): Promise<{ id: string; email: string; name?: string; image?: string; isAdmin?: boolean }>`; `requireAdmin(): Promise<...>`; `isAdminUser(u: { email: string | null; role?: string | null }): boolean` — all from `@/auth`.

- [ ] **Step 1: Write `src/auth.ts`**

```typescript
// src/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { accounts, sessions, users, verificationTokens } from "@/server/db/schema";
import { env, adminEmails } from "@/lib/env";

/** True if a user counts as an admin via the persisted `role` column or the
 *  ADMIN_EMAILS env var (bootstrap + failsafe — see events.signIn below). */
export function isAdminUser(u: { email: string | null; role?: string | null }): boolean {
  return u.role === "admin" || adminEmails.includes((u.email ?? "").toLowerCase());
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: "database", maxAge: 60 * 60 * 24 * 7 },
  trustHost: true,
  providers: [
    ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
      ? [Google({ clientId: env.GOOGLE_CLIENT_ID, clientSecret: env.GOOGLE_CLIENT_SECRET })]
      : []),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        (session.user as { id?: string }).id = user.id;
        (session.user as { isAdmin?: boolean }).isAdmin = isAdminUser(user as { email: string | null; role?: string | null });
      }
      return session;
    },
  },
  events: {
    // Auto-promote: any ADMIN_EMAILS address gets role='admin' persisted on
    // its next real sign-in. Same pattern as the Email-Automator sister
    // project — ADMIN_EMAILS is a bootstrap mechanism, `role` is the
    // primary source (checked by isAdminUser() above).
    async signIn({ user }) {
      if (!user?.id || !user.email) return;
      if (!adminEmails.includes(user.email.toLowerCase())) return;
      try {
        await db.update(users).set({ role: "admin" }).where(eq(users.id, user.id));
      } catch {
        // Non-fatal — isAdminUser()'s env fallback still grants admin
        // access this session even if the persist failed.
      }
    },
  },
  pages: { signIn: "/login" },
});

export async function requireUser() {
  const session = await auth();
  const id = (session?.user as { id?: string } | undefined)?.id;
  if (!session?.user || !id) redirect("/login");
  return session.user as { id: string; email: string; name?: string; image?: string; isAdmin?: boolean };
}

export async function requireAdmin() {
  const u = await requireUser();
  if (!u.isAdmin) redirect("/");
  return u;
}
```

- [ ] **Step 2: Write the route handler**

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;
```

- [ ] **Step 3: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: passes. (Auth won't function yet without `AUTH_SECRET`/Google credentials set locally — that's expected and matches the "optional at boot" requirement; this step only checks types.)

- [ ] **Step 4: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 5: Commit**

```bash
git add src/auth.ts "src/app/api/auth/[...nextauth]/route.ts"
git commit -m "feat(auth): NextAuth v5 config, Google-only, requireUser/requireAdmin"
```

---

## Task 7: In-memory rate limiter

**Files:**
- Create: `src/lib/rate-limit.ts`
- Create: `tests/rate-limit.test.ts`

**Interfaces:**
- Produces: `rateLimit(key: string, max: number, windowMs: number): boolean` from `@/lib/rate-limit`.

- [ ] **Step 1: Write the failing test**

```typescript
// tests/rate-limit.test.ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { rateLimit } from "../src/lib/rate-limit";

describe("rateLimit", () => {
  test("allows up to max calls in the window, then blocks", () => {
    const key = `test-${Date.now()}`;
    for (let i = 0; i < 3; i++) {
      assert.equal(rateLimit(key, 3, 60_000), true, `call ${i} should be allowed`);
    }
    assert.equal(rateLimit(key, 3, 60_000), false, "4th call should be blocked");
  });

  test("different keys have independent buckets", () => {
    const a = `a-${Date.now()}`;
    const b = `b-${Date.now()}`;
    assert.equal(rateLimit(a, 1, 60_000), true);
    assert.equal(rateLimit(a, 1, 60_000), false);
    assert.equal(rateLimit(b, 1, 60_000), true, "different key must not share a's bucket");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --import tsx --test tests/rate-limit.test.ts`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write the module**

```typescript
// src/lib/rate-limit.ts
/**
 * In-memory sliding-window rate limiter. Per-instance only — on Vercel that
 * means per-Lambda, so a "global" limit is approximate under multi-instance
 * load. Accepted per the design doc's Non-Goals: /api/sync isn't a
 * high-value abuse target the way a login/magic-link endpoint would be, so
 * no Redis dependency is introduced for it.
 */
interface Bucket { hits: number[] }
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const b = buckets.get(key) ?? { hits: [] };
  b.hits = b.hits.filter((t) => t > now - windowMs);
  if (b.hits.length >= max) {
    buckets.set(key, b);
    return false;
  }
  b.hits.push(now);
  buckets.set(key, b);
  if (buckets.size > 2000) {
    for (const [k, v] of buckets) {
      if (v.hits.length === 0 || v.hits[v.hits.length - 1]! < now - windowMs) buckets.delete(k);
    }
  }
  return true;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --import tsx --test tests/rate-limit.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/rate-limit.ts tests/rate-limit.test.ts
git commit -m "feat: add in-memory rate limiter for /api/sync"
```

---

## Task 8: `/api/sync` route, delete old `sync-proxy` and `sync/status`

**Files:**
- Create: `src/app/api/sync/route.ts`
- Delete: `src/app/api/sync-proxy/route.ts`
- Delete: `src/app/api/sync/status/route.ts`
- Modify: `next.config.ts` (remove the `api.cloudflare.com` CSP entry and its explanatory comment)

**Interfaces:**
- Consumes: `auth` from `@/auth` (NOT `requireUser` — that redirects on failure, which is correct for a page but wrong for a JSON API route; this route calls `auth()` directly and returns a real 401 instead); `db` from `@/server/db/client`; `progress` from `@/server/db/schema`; `rateLimit` from `@/lib/rate-limit`.
- Produces: `GET /api/sync` → `{ data: Record<string, unknown> | null; updatedAt: number | null }`; `POST /api/sync` (body: `Record<string, unknown>`) → `{ ok: true }`.

- [ ] **Step 1: Delete the old routes**

```bash
rm -rf src/app/api/sync-proxy src/app/api/sync/status
```

(The `src/app/api/sync/` directory now holds only the new `route.ts` from Step 2 below.)

- [ ] **Step 2: Write the new route**

```typescript
// src/app/api/sync/route.ts
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/server/db/client";
import { progress } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";
// auth() directly, not requireUser(): requireUser() redirects unauthenticated
// callers rather than returning null, which is correct for a page but wrong
// for an API route consumed by fetch() — a redirect response confuses a
// JSON client. Route handlers call auth() and return a real 401 instead.
import { auth } from "@/auth";

async function getUserId(): Promise<string | null> {
  const session = await auth();
  return (session?.user as { id?: string } | undefined)?.id ?? null;
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`sync:get:${userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const [row] = await db.select().from(progress).where(eq(progress.userId, userId));
  if (!row) return NextResponse.json({ data: null, updatedAt: null });
  try {
    return NextResponse.json({ data: JSON.parse(row.data), updatedAt: row.updatedAt.getTime() });
  } catch {
    return NextResponse.json({ error: "Corrupt sync data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`sync:post:${userId}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const bodyStr = JSON.stringify(body);
  // Same 512KB guard the old sync-proxy had — a realistic snapshot is a few KB.
  if (bodyStr.length > 512 * 1024) {
    return NextResponse.json({ error: "Payload too large (max 512KB)" }, { status: 413 });
  }

  const now = new Date();
  await db
    .insert(progress)
    .values({ userId, data: bodyStr, updatedAt: now })
    .onConflictDoUpdate({ target: progress.userId, set: { data: bodyStr, updatedAt: now } });

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Remove the obsolete CSP entry**

In `next.config.ts`, find the `connect-src` line (currently `"connect-src 'self' https://us.i.posthog.com https://us-assets.i.posthog.com https://api.cloudflare.com"`) and remove ` https://api.cloudflare.com` from it — `/api/sync` now talks to Turso from the server side only, which browser CSP doesn't govern; the client only ever calls same-origin `/api/sync`, already covered by `'self'`. Also remove the now-stale comment line `- api.cloudflare.com is whitelisted for the KV sync proxy's server-side fetch.` a few lines above it.

- [ ] **Step 4: Verify nothing else references the deleted routes**

Run: `grep -rn "sync-proxy\|api/sync/status" src`
Expected: no output (Task 9 will update `SettingsClient.tsx`'s remaining references — if this grep finds any right now outside `SettingsClient.tsx`, investigate before proceeding).

- [ ] **Step 5: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green. (`SettingsClient.tsx` will still reference the old routes until Task 9 — if the build fails specifically because of that file, it's fine to note and proceed; Task 9 fixes it immediately next. If it fails for any other reason, stop and investigate.)

- [ ] **Step 6: Commit**

```bash
git add -A src/app/api/sync src/app/api/sync-proxy next.config.ts
git commit -m "feat(sync): replace disabled sync-proxy (Cloudflare KV) with /api/sync

Real per-user auth via requireUser()/session, not a shared secret shipped
to the client. Per-user rate limiting. Deletes the single-global-KV-key
security hole documented in AGENTS.md Rule 26 / PROJECTS_PLAN.md 16.2."
```

---

## Task 9: Sync client (pull-merge-on-signin, debounced push) and unit-tested merge logic

**Files:**
- Create: `src/lib/sync-client.ts`
- Create: `tests/sync-merge.test.ts`
- Modify: `src/app/settings/SettingsClient.tsx` (replace the `handlePush`/`handlePull`/sync-status UI to call the new endpoint instead of the deleted one — see Step 5)

**Interfaces:**
- Consumes: `collectAllKeys`, `restoreAllKeys` from `@/lib/progress-snapshot`; `PROGRESS_CHANGED_EVENT` from `@/lib/events`.
- Produces: `mergeSnapshots(local: Record<string, unknown>, localUpdatedAt: number, remote: Record<string, unknown> | null, remoteUpdatedAt: number | null): { winner: "local" | "remote" | "none"; data: Record<string, unknown> }`; `pullAndMerge(): Promise<void>`; `pushNow(): Promise<boolean>`; `startAutoSync(): () => void` (returns an unsubscribe function) — all from `@/lib/sync-client`.

- [ ] **Step 1: Write the failing test for the merge function (pure, easiest to get right in isolation)**

```typescript
// tests/sync-merge.test.ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { mergeSnapshots } from "../src/lib/sync-client";

describe("mergeSnapshots", () => {
  test("newer local wins when local is more recent", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 2000, remote, 1000);
    assert.equal(result.winner, "local");
    assert.deepEqual(result.data, local);
  });

  test("newer remote wins when remote is more recent", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 1000, remote, 2000);
    assert.equal(result.winner, "remote");
    assert.deepEqual(result.data, remote);
  });

  test("no server data yet: local wins unconditionally", () => {
    const local = { a: 1 };
    const result = mergeSnapshots(local, 1000, null, null);
    assert.equal(result.winner, "local");
    assert.deepEqual(result.data, local);
  });

  test("equal timestamps: local wins (stable, avoids flapping)", () => {
    const local = { a: 1 };
    const remote = { a: 2 };
    const result = mergeSnapshots(local, 1000, remote, 1000);
    assert.equal(result.winner, "local");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --import tsx --test tests/sync-merge.test.ts`
Expected: FAIL — module doesn't exist.

- [ ] **Step 3: Write `src/lib/sync-client.ts`**

```typescript
// src/lib/sync-client.ts
"use client";
/**
 * Client-side half of cross-device sync. localStorage stays the read
 * source of truth (no new network call on page render); this module keeps
 * it in sync with the server in the background when signed in.
 */
import { collectAllKeys, restoreAllKeys } from "@/lib/progress-snapshot";
import { PROGRESS_CHANGED_EVENT } from "@/lib/events";

const LOCAL_UPDATED_AT_KEY = "ma_sync_local_updated_at";

function localUpdatedAt(): number {
  const raw = localStorage.getItem(LOCAL_UPDATED_AT_KEY);
  return raw ? Number(raw) : 0;
}

function touchLocalUpdatedAt(): void {
  try {
    localStorage.setItem(LOCAL_UPDATED_AT_KEY, String(Date.now()));
  } catch {
    // best-effort — a missed timestamp just makes the next merge slightly
    // more conservative (may prefer remote when it shouldn't), never crashes.
  }
}

/** Pure — the whole-snapshot "whichever side is newer wins" policy from the
 *  design doc. Not per-field: keeps a first version simple and predictable. */
export function mergeSnapshots(
  local: Record<string, unknown>,
  localUpdatedAtMs: number,
  remote: Record<string, unknown> | null,
  remoteUpdatedAtMs: number | null
): { winner: "local" | "remote" | "none"; data: Record<string, unknown> } {
  if (remote === null || remoteUpdatedAtMs === null) {
    return { winner: "local", data: local };
  }
  if (remoteUpdatedAtMs > localUpdatedAtMs) {
    return { winner: "remote", data: remote };
  }
  return { winner: "local", data: local };
}

/** Called once on sign-in (and on mount, if already signed in): pulls the
 *  server snapshot, merges with local, writes the winner back to both. */
export async function pullAndMerge(): Promise<void> {
  try {
    const res = await fetch("/api/sync");
    if (!res.ok) return; // offline/5xx/rate-limited — leave local as-is, next push catches up
    const { data: remote, updatedAt: remoteUpdatedAt } = (await res.json()) as {
      data: Record<string, unknown> | null;
      updatedAt: number | null;
    };
    const local = collectAllKeys();
    const merged = mergeSnapshots(local, localUpdatedAt(), remote, remoteUpdatedAt);
    if (merged.winner === "remote") {
      restoreAllKeys(merged.data);
      touchLocalUpdatedAt();
    }
    // Always push after a pull so the loser side (local or remote,
    // whichever wasn't picked) converges to the winner immediately, rather
    // than waiting for the next debounced write.
    await pushNow();
  } catch {
    // Network failure — sync is a background enhancement, never blocks the UI.
  }
}

/** Pushes the current local snapshot to the server. Returns true on success. */
export async function pushNow(): Promise<boolean> {
  try {
    const data = collectAllKeys();
    const res = await fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Subscribes to PROGRESS_CHANGED_EVENT and debounce-pushes (2s) while
 * signed in. Call only when the caller already knows the user is signed in
 * (SyncProvider checks session state before calling this) — this module has
 * no session awareness of its own, keeping it independently testable.
 * Returns an unsubscribe function.
 */
export function startAutoSync(): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  function onChange() {
    touchLocalUpdatedAt();
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { void pushNow(); }, 2000);
  }
  window.addEventListener(PROGRESS_CHANGED_EVENT, onChange);
  return () => {
    window.removeEventListener(PROGRESS_CHANGED_EVENT, onChange);
    if (timer) clearTimeout(timer);
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --import tsx --test tests/sync-merge.test.ts`
Expected: PASS, all 4 cases.

- [ ] **Step 5: Update `SettingsClient.tsx`'s sync UI to use the new module**

Read the current file (post-Task-2 state) in full first. Replace the `syncEnabled` state/effect (the `fetch("/api/sync/status")` call) and the `handlePush`/`handlePull` functions with:

```typescript
import { pushNow, pullAndMerge } from "@/lib/sync-client";

// Replace the syncEnabled useEffect entirely — enablement is now just
// "are you signed in," which the account menu already shows; this page no
// longer needs its own server round-trip to know that. If you want an
// explicit indicator here, read session state via next-auth/react's
// useSession() hook instead (see Task 11 for the Nav's use of the same hook).

async function handlePush() {
  setSyncing(true);
  setSyncStatus(null);
  const ok = await pushNow();
  setSyncStatus(
    ok
      ? { type: "success", message: `Saved to cloud at ${new Date().toLocaleTimeString()}.` }
      : { type: "error", message: "Push failed. Make sure you're signed in." }
  );
  setSyncing(false);
}

async function handlePull() {
  setSyncing(true);
  setSyncStatus(null);
  await pullAndMerge();
  setSyncStatus({ type: "success", message: "Pulled and merged from cloud. Refreshing…" });
  setTimeout(() => window.location.reload(), 1200);
  setSyncing(false);
}
```

Remove the now-unused `syncEnabled` state variable and its `useEffect` (the `fetch("/api/sync/status")` block), and remove the `NEXT_PUBLIC_SYNC_SECRET` reference entirely — grep the file afterward to confirm it's gone.

- [ ] **Step 6: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green, and `grep -rn "NEXT_PUBLIC_SYNC_SECRET\|sync-proxy" src` returns nothing.

- [ ] **Step 7: Commit**

```bash
git add src/lib/sync-client.ts tests/sync-merge.test.ts src/app/settings/SettingsClient.tsx
git commit -m "feat(sync): client-side pull/merge/push logic, wire into /settings"
```

---

## Task 10: SyncProvider — wire session state + auto-sync into the app

**Files:**
- Create: `src/components/SyncProvider.tsx`
- Modify: `src/app/layout.tsx` (wrap children with `<SessionProvider>` from `next-auth/react` and the new `<SyncProvider>`)

**Interfaces:**
- Consumes: `pullAndMerge`, `startAutoSync` from `@/lib/sync-client`; `useSession` from `next-auth/react`.
- Produces: `<SyncProvider>` (client component, renders nothing but its children — a behavior-only wrapper, matching the existing `<PostHogProvider>` pattern in this codebase).

- [ ] **Step 1: Write `SyncProvider`**

```typescript
// src/components/SyncProvider.tsx
"use client";
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { pullAndMerge, startAutoSync } from "@/lib/sync-client";

export default function SyncProvider({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pulledForSession = useRef(false);

  useEffect(() => {
    if (status !== "authenticated") {
      pulledForSession.current = false;
      return;
    }
    if (pulledForSession.current) return;
    pulledForSession.current = true;
    void pullAndMerge();
  }, [status]);

  useEffect(() => {
    if (status !== "authenticated") return;
    return startAutoSync();
  }, [status]);

  return <>{children}</>;
}
```

- [ ] **Step 2: Wire into `layout.tsx`**

Read `src/app/layout.tsx` in full first to find the exact current provider nesting order around `<PostHogProvider>`. Add a `SessionProvider` (from `next-auth/react`) as the outermost new wrapper (it needs to wrap everything that might call `useSession()`, including `Nav`, which Task 11 updates) and `SyncProvider` just inside it:

```typescript
import { SessionProvider } from "next-auth/react";
import SyncProvider from "@/components/SyncProvider";
```

```jsx
<SessionProvider>
  <SyncProvider>
    {/* existing PostHogProvider / Nav / children / Footer tree, unchanged */}
  </SyncProvider>
</SessionProvider>
```

- [ ] **Step 3: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 4: Commit**

```bash
git add src/components/SyncProvider.tsx src/app/layout.tsx
git commit -m "feat(sync): wire SessionProvider + SyncProvider into the app shell"
```

---

## Task 11: Nav sign-in UI

**Files:**
- Modify: `src/components/Nav.tsx`

**Interfaces:**
- Consumes: `useSession`, `signIn`, `signOut` from `next-auth/react`.

- [ ] **Step 1: Read `src/components/Nav.tsx` in full**

Confirm the exact current structure of the Actions bar (where `<ThemeToggle />`, the Bookmarks link, and the Settings link currently render) before editing, so the new entry matches existing spacing/style conventions exactly.

- [ ] **Step 2: Add the sign-in/user-menu entry**

Add `"use client"` is already present (Nav is already a client component per this session's earlier work). Import at the top:

```typescript
import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut, User } from "lucide-react";
```

Inside the component, add:

```typescript
const { data: session, status } = useSession();
const [userMenuOpen, setUserMenuOpen] = useState(false);
```

In the Actions bar JSX, immediately before the mobile-menu toggle button, add:

```jsx
{status === "authenticated" && session?.user ? (
  <div className="relative">
    <button
      onClick={() => setUserMenuOpen((v) => !v)}
      aria-expanded={userMenuOpen}
      aria-label="Account menu"
      className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
    >
      {session.user.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={session.user.image} alt="" className="w-full h-full object-cover" />
      ) : (
        <User size={16} />
      )}
    </button>
    {userMenuOpen && (
      <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-2xl overflow-hidden">
        <Link
          href="/account"
          onClick={() => setUserMenuOpen(false)}
          className="block px-4 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
        >
          Account &amp; sync
        </Link>
        <button
          onClick={() => { setUserMenuOpen(false); void signOut(); }}
          className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors border-t border-[var(--border)]"
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    )}
  </div>
) : status !== "loading" ? (
  <button
    onClick={() => void signIn("google")}
    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors border border-[var(--border)]"
  >
    <LogIn size={13} />
    Sign in
  </button>
) : null}
```

This intentionally renders nothing while `status === "loading"` (the brief moment before NextAuth resolves session state) rather than a flash of the wrong button.

- [ ] **Step 3: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 4: Manual check**

Start the dev server (`npm run dev`), confirm the "Sign in" button renders in the Nav when signed out and no console errors appear (clicking it will fail gracefully with no Google credentials configured locally — that's expected at this point in the plan; Task 16 covers end-to-end manual verification once every piece is in place).

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat(nav): sign-in button + account menu"
```

---

## Task 12: `/login` page

**Files:**
- Create: `src/app/login/page.tsx`

**Interfaces:**
- Consumes: `auth` from `@/auth`; `authConfigured` from `@/lib/env`.

- [ ] **Step 1: Write the page**

```typescript
// src/app/login/page.tsx
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { authConfigured } from "@/lib/env";
import { LogIn } from "lucide-react";
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
```

- [ ] **Step 2: Write the client-side button (a Server Component page can't call `signIn()` from `next-auth/react` directly, per Rule 20's server/client boundary)**

```typescript
// src/app/login/SignInButton.tsx
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
```

- [ ] **Step 3: Fix the unused import in `page.tsx`**

Remove `import { LogIn } from "lucide-react";` from `src/app/login/page.tsx` — it's used in `SignInButton.tsx`, not this file.

- [ ] **Step 4: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 5: Commit**

```bash
git add src/app/login
git commit -m "feat: add /login page"
```

---

## Task 13: Account API routes (sessions list/revoke, delete account)

**Files:**
- Create: `src/app/api/account/sessions/route.ts`
- Create: `src/app/api/account/delete/route.ts`

**Interfaces:**
- Produces: `GET /api/account/sessions` → `{ sessions: { tokenPreview: string; expires: string; isCurrent: boolean }[] }`; `DELETE /api/account/sessions` (body: `{ tokenPreview: string }`) → `{ ok: true } | { error: string }`; `POST /api/account/delete` → `{ ok: true } | { error: string }`.

- [ ] **Step 1: Write the sessions route**

```typescript
// src/app/api/account/sessions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { and, eq, gt, ne } from "drizzle-orm";
import { cookies } from "next/headers";
import { auth } from "@/auth";
import { db } from "@/server/db/client";
import { sessions } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";

const SESSION_COOKIE = "authjs.session-token";

function maskToken(token: string): string {
  if (token.length <= 12) return "••••••••";
  return `${token.slice(0, 6)}••••${token.slice(-4)}`;
}

export async function GET() {
  const session = await auth();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const jar = await cookies();
  const currentToken = jar.get(SESSION_COOKIE)?.value ?? "";
  const rows = await db
    .select()
    .from(sessions)
    .where(and(eq(sessions.userId, userId), gt(sessions.expires, new Date())));

  return NextResponse.json({
    sessions: rows
      .map((r) => ({
        tokenPreview: maskToken(r.sessionToken),
        expires: r.expires.toISOString(),
        isCurrent: r.sessionToken === currentToken,
        _sort: r.expires.getTime(),
      }))
      .sort((a, b) => b._sort - a._sort)
      .map(({ _sort: _unused, ...rest }) => rest),
  });
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  const userId = (session?.user as { id?: string } | undefined)?.id;
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`revoke-session:${userId}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { tokenPreview } = (await req.json().catch(() => ({}))) as { tokenPreview?: string };
  if (!tokenPreview) return NextResponse.json({ error: "tokenPreview required" }, { status: 400 });

  const jar = await cookies();
  const currentToken = jar.get(SESSION_COOKIE)?.value ?? "";
  const rows = await db.select().from(sessions).where(eq(sessions.userId, userId));
  const target = rows.find((r) => maskToken(r.sessionToken) === tokenPreview);
  if (!target) return NextResponse.json({ error: "Session not found" }, { status: 404 });
  if (target.sessionToken === currentToken) {
    return NextResponse.json({ error: "That's your current session — sign out instead" }, { status: 400 });
  }

  await db.delete(sessions).where(eq(sessions.sessionToken, target.sessionToken));
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Write the delete-account route**

```typescript
// src/app/api/account/delete/route.ts
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { auth, isAdminUser } from "@/auth";
import { db } from "@/server/db/client";
import { users } from "@/server/db/schema";
import { rateLimit } from "@/lib/rate-limit";

const SESSION_COOKIE = "authjs.session-token";

export async function POST() {
  const session = await auth();
  const user = session?.user as { id?: string; email?: string; role?: string } | undefined;
  if (!user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!rateLimit(`self-delete-account:${user.id}`, 3, 60_000)) {
    return NextResponse.json({ error: "Too many attempts — slow down" }, { status: 429 });
  }
  if (isAdminUser({ email: user.email ?? null, role: user.role ?? null })) {
    return NextResponse.json({ error: "Admin accounts can't self-delete" }, { status: 400 });
  }

  // Cascading FKs handle accounts/sessions/progress (all reference users.id
  // with onDelete: "cascade" — see src/server/db/schema.ts).
  await db.delete(users).where(eq(users.id, user.id));

  const jar = await cookies();
  jar.delete(SESSION_COOKIE);

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 4: Commit**

```bash
git add src/app/api/account
git commit -m "feat: account API routes (session list/revoke, self-delete)"
```

---

## Task 14: `/account` page

**Files:**
- Create: `src/app/account/page.tsx`
- Create: `src/app/account/AccountClient.tsx`

**Interfaces:**
- Consumes: `requireUser` from `@/auth` (page.tsx, server); `useSession`, `signOut` from `next-auth/react` (AccountClient, client); the two new `/api/account/*` routes.

- [ ] **Step 1: Write the server page (auth gate + static shell)**

```typescript
// src/app/account/page.tsx
import { requireUser } from "@/auth";
import AccountClient from "./AccountClient";

export const metadata = { title: "Account | Marketing Academy" };

export default async function AccountPage() {
  const user = await requireUser();
  return <AccountClient email={user.email} isAdmin={Boolean(user.isAdmin)} />;
}
```

- [ ] **Step 2: Write the client component**

```typescript
// src/app/account/AccountClient.tsx
"use client";
import { useEffect, useState, useTransition } from "react";
import { signOut } from "next-auth/react";
import { LogOut, Trash2, ShieldAlert } from "lucide-react";

type SessionRow = { tokenPreview: string; expires: string; isCurrent: boolean };

export default function AccountClient({ email, isAdmin }: { email: string; isAdmin: boolean }) {
  const [sessions, setSessions] = useState<SessionRow[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [confirmText, setConfirmText] = useState("");
  const [pending, start] = useTransition();

  function loadSessions() {
    fetch("/api/account/sessions")
      .then((r) => r.json())
      .then((d: { sessions: SessionRow[] }) => setSessions(d.sessions))
      .catch(() => setSessions([]));
  }

  useEffect(() => { loadSessions(); }, []);

  function revoke(tokenPreview: string) {
    start(async () => {
      setErr(null);
      const res = await fetch("/api/account/sessions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenPreview }),
      });
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({ error: "Failed" }))) as { error?: string };
        setErr(error ?? "Failed to revoke session");
        return;
      }
      loadSessions();
    });
  }

  function deleteAccount() {
    if (confirmText.trim().toLowerCase() !== email.toLowerCase()) return;
    if (!confirm("This permanently deletes your account and synced progress. Your local browser data on this device is untouched. Continue?")) return;
    start(async () => {
      setErr(null);
      const res = await fetch("/api/account/delete", { method: "POST" });
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({ error: "Failed" }))) as { error?: string };
        setErr(error ?? "Failed to delete account");
        return;
      }
      window.location.href = "/";
    });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 font-ui-sans">
      <h1 className="font-display font-semibold text-3xl mb-2">Account</h1>
      <p className="text-[var(--muted-foreground)] mb-8">{email}{isAdmin ? " · admin" : ""}</p>

      {err ? <p className="mb-4 rounded-md bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-600">{err}</p> : null}

      <button
        onClick={() => void signOut({ callbackUrl: "/" })}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[var(--border)] hover:bg-[var(--muted)] transition-colors mb-10"
      >
        <LogOut size={14} /> Sign out
      </button>

      <section className="mb-10">
        <h2 className="font-display font-semibold text-lg mb-3">Active sessions</h2>
        {sessions === null ? (
          <p className="text-sm text-[var(--muted-foreground)]">Loading…</p>
        ) : (
          <ul className="divide-y border border-[var(--border)] rounded-lg text-sm">
            {sessions.map((s) => (
              <li key={s.tokenPreview} className="flex items-center justify-between px-3 py-2">
                <div>
                  <div className="font-mono text-xs flex items-center gap-2">
                    {s.tokenPreview}
                    {s.isCurrent ? <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)]">this device</span> : null}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">Expires {new Date(s.expires).toLocaleString()}</div>
                </div>
                {!s.isCurrent ? (
                  <button onClick={() => revoke(s.tokenPreview)} disabled={pending} className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                    Revoke
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {!isAdmin ? (
        <section className="border border-red-500/30 rounded-lg p-4">
          <h2 className="flex items-center gap-2 font-display font-semibold text-lg text-red-600 mb-2">
            <ShieldAlert size={18} /> Delete account
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-3">
            Permanently deletes your account and synced progress. Type <code className="bg-[var(--muted)] px-1 rounded">{email}</code> to confirm.
          </p>
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder={email}
            className="w-full mb-3 px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-sm"
          />
          <button
            onClick={deleteAccount}
            disabled={pending || confirmText.trim().toLowerCase() !== email.toLowerCase()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white disabled:opacity-40 transition-opacity"
          >
            <Trash2 size={14} /> Delete my account permanently
          </button>
        </section>
      ) : (
        <p className="text-sm text-[var(--muted-foreground)]">Admin accounts can&apos;t self-delete from here.</p>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Run the full verify chain**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 4: Commit**

```bash
git add src/app/account
git commit -m "feat: add /account page (sessions list/revoke, delete account)"
```

---

## Task 15: Auth-coverage regression test

**Files:**
- Create: `tests/api-auth-coverage.test.ts`

**Interfaces:**
- None (standalone test file, mirrors the Email-Automator sister project's `test/unit/api-auth-coverage.test.ts` structural-scan approach).

- [ ] **Step 1: Enumerate the current `src/app/api/**` routes and classify each**

Run: `find src/app/api -name "route.ts"`

At time of writing this plan, expect: `geo-audit/route.ts`, `newsletter/route.ts`, `og/route.ts`, `sync/route.ts` (new), `auth/[...nextauth]/route.ts` (new), `account/sessions/route.ts` (new), `account/delete/route.ts` (new). Re-run this command during implementation — Tasks 6/8/13 already exist by this point, so the list should match; if it doesn't, investigate before writing the allowlist.

Read each of `geo-audit/route.ts`, `newsletter/route.ts`, `og/route.ts` to confirm whether each is legitimately public (per this session's earlier security-audit findings: `og` renders an image from query params, no user data; `newsletter` is a stub that always 501s; `geo-audit` has its own SSRF-hardened fetch but no user-auth requirement by design, since it's a public utility tool). Confirm these classifications against the actual code — don't assume the audit findings are still accurate without re-checking.

- [ ] **Step 2: Write the test**

```typescript
// tests/api-auth-coverage.test.ts
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const API_ROOT = path.resolve(__dirname, "../src/app/api");

/**
 * routeKey → reason it's exempt from requiring auth() / requireUser() /
 * requireAdmin(). Every entry here should have been read and verified, not
 * assumed. Mirrors the Email-Automator sister project's
 * test/unit/api-auth-coverage.test.ts.
 */
const EXEMPT: Record<string, string> = {
  "auth/[...nextauth]/route.ts": "This IS the auth system — nothing to gate.",
  "og/route.ts": "Renders an OG image from query params. No user data, reflected input only.",
  "newsletter/route.ts": "Stub route, always returns 501, not wired to any real service.",
  "geo-audit/route.ts": "Public utility tool (SSRF-hardened URL fetch + scoring), no per-user data — verify this is still accurate by reading the file before trusting this entry.",
};

const AUTH_MARKERS = [/\brequireUser\s*\(/, /\brequireAdmin\s*\(/, /\bawait\s+auth\s*\(\s*\)/];

function findRouteFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findRouteFiles(full));
    else if (entry.isFile() && entry.name === "route.ts") out.push(full);
  }
  return out;
}

describe("every API route is either auth-gated or explicitly exempt", () => {
  const routeFiles = findRouteFiles(API_ROOT);

  test("found route files to check (sanity)", () => {
    assert.ok(routeFiles.length >= 4, `expected at least 4 route files, found ${routeFiles.length}`);
  });

  for (const file of routeFiles) {
    const routeKey = path.relative(API_ROOT, file).replace(/\\/g, "/");
    test(`${routeKey} is gated or exempt`, () => {
      if (routeKey in EXEMPT) {
        assert.ok(EXEMPT[routeKey]);
        return;
      }
      const src = fs.readFileSync(file, "utf8");
      const gated = AUTH_MARKERS.some((re) => re.test(src));
      assert.ok(
        gated,
        `${routeKey} calls none of requireUser()/requireAdmin()/auth() and isn't in EXEMPT. ` +
          `If genuinely public, add it to EXEMPT with a verified reason.`
      );
    });
  }

  test("every EXEMPT entry still points at a real file", () => {
    for (const routeKey of Object.keys(EXEMPT)) {
      assert.ok(fs.existsSync(path.join(API_ROOT, routeKey)), `EXEMPT lists '${routeKey}' but no such file exists`);
    }
  });
});
```

- [ ] **Step 3: Run the test**

Run: `node --import tsx --test tests/api-auth-coverage.test.ts`
Expected: PASS for every route. If any route fails, that's a real gap — go add the missing `requireUser()`/`requireAdmin()` call to that route (don't add it to `EXEMPT` unless you've actually verified it's meant to be public).

- [ ] **Step 4: Run the full suite**

Run: `npm test && npx tsc --noEmit && npm run lint`
Expected: all green.

- [ ] **Step 5: Commit**

```bash
git add tests/api-auth-coverage.test.ts
git commit -m "test: add API auth-coverage regression test"
```

---

## Task 16: Manual end-to-end verification

**Files:** none (verification only)

- [ ] **Step 1: Set up real Google OAuth credentials**

Go to `console.cloud.google.com` → APIs & Services → Credentials → Create OAuth 2.0 Client ID (Web application). Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`. Copy the client ID and secret.

- [ ] **Step 2: Configure local env**

In `.env.local` (create if absent, never commit it), set:
```
AUTH_SECRET=<output of: openssl rand -base64 32>
GOOGLE_CLIENT_ID=<from step 1>
GOOGLE_CLIENT_SECRET=<from step 1>
DATABASE_URL=file:./data/marketing-academy.db
ADMIN_EMAILS=<your own email>
```

- [ ] **Step 3: Apply the migration and start the dev server**

Run: `npm run db:migrate && npm run dev`

- [ ] **Step 4: Manual test — guest mode unaffected**

Open `http://localhost:3000` in an incognito window. Confirm: no console errors, no network requests to `/api/sync`, "Sign in" button visible in Nav, complete a lesson and confirm it still saves to `localStorage` exactly as before (check DevTools → Application → Local Storage).

- [ ] **Step 5: Manual test — sign in and sync**

Click "Sign in" → complete the Google OAuth flow → land back on the site signed in (avatar visible in Nav). Confirm a row now exists in the `progress` table:
```bash
node -e "
const { createClient } = require('@libsql/client');
const c = createClient({ url: 'file:./data/marketing-academy.db' });
c.execute('SELECT userId, updatedAt FROM progress').then(r => console.log(r.rows));
"
```
Complete another lesson, wait 3 seconds (past the debounce), re-run the query above and confirm `updatedAt` advanced.

- [ ] **Step 6: Manual test — cross-device merge**

Open a second browser (or a second Chrome profile) signed in as the same Google account, with different localStorage state (e.g. complete a different lesson before signing in). Sign in, confirm both browsers' progress merges (visit `/skill-map` on both and confirm both lessons show as complete after a page reload on each).

- [ ] **Step 7: Manual test — `/account` page**

Visit `/account`. Confirm the current session shows "this device," sessions list is accurate, and (carefully, using a throwaway test Google account, not your real one) the delete-account flow actually removes the row from `users`/`progress`/`sessions` and signs you out.

- [ ] **Step 8: No commit for this task** — it's verification only. If any manual test fails, go fix the relevant task above and re-run its own automated tests before re-attempting the manual check.

---

## Task 17: Documentation updates (AGENTS.md, PROJECT_LOG.md, README.md)

**Files:**
- Modify: `AGENTS.md`
- Modify: `PROJECT_LOG.md`
- Modify: `README.md`

Per AGENTS.md Rule 23 (update docs before every push) — this feature adds new routes, new env vars, a new nav entry, and closes out the Rule 26/44 vulnerability this session's earlier security audit flagged.

- [ ] **Step 1: Add a new numbered rule to `AGENTS.md`**

Read the end of the existing rules list first (to get the next number correct) and append a new rule documenting: the `PROGRESS_CHANGED_EVENT` pattern (any future progress-writing function must dispatch it, or silently won't sync), the `progress-snapshot.ts` single-source-of-truth pattern, and that `role`/`ADMIN_EMAILS` mirrors the Email-Automator sister project's pattern exactly.

- [ ] **Step 2: Update the Rule 26/44 references**

Find Rule 26 and Rule 44 in `AGENTS.md` (both discuss the `sync-proxy`/`NEXT_PUBLIC_SYNC_SECRET` vulnerability) and add a note to each marking it resolved as of this feature, with a pointer to the new rule from Step 1 — don't delete the original text, per this session's own established convention (see how Rule 36 was annotated, not rewritten, when its defects were fixed).

- [ ] **Step 3: Update `PROJECT_LOG.md`**

Add a new "Last audited" entry at the top (most-recent-first convention already used in this file) describing: new tables/routes added, the sync-proxy replacement, new env vars, and the 60-Second Resume section's file inventory tree gets the new `src/server/db/`, `src/auth.ts`, `src/app/account/`, `src/app/login/` entries.

- [ ] **Step 4: Update `README.md`**

Add the new env vars to whatever section documents deployment/env configuration, and add `/account` and `/login` to the Routes table if one exists.

- [ ] **Step 5: Run the full verify chain one last time**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: all green.

- [ ] **Step 6: Commit**

```bash
git add AGENTS.md PROJECT_LOG.md README.md
git commit -m "docs: document accounts/sync feature (Rule 26/44 resolved)"
```

---

## Self-Review Notes

- **Spec coverage:** every section of the design doc maps to a task — architecture/data model → Tasks 5-6, sync behavior → Tasks 8-10, auth UI → Tasks 11-14, error handling → woven into Tasks 8-9 (try/catch, silent-fail sync), testing → Tasks 2/3/7/9/15, rollout → Task 16-17.
- **Known deviation from the spec's prose, fixed here:** the spec said the sync push trigger needs "no existing call site changes." Task 3 found that's false for `bookmarks.ts`/`notes.ts` (neither dispatches a success event today) and introduces one new consolidated event instead of hooking four disparate existing ones — documented inline in Task 3 rather than silently diverging from the written spec.
- **Type/name consistency check:** `mergeSnapshots`, `pullAndMerge`, `pushNow`, `startAutoSync` (Task 9) are the exact names `SyncProvider` (Task 10) and `SettingsClient.tsx` (Task 9 Step 5) import. `requireUser`/`requireAdmin`/`isAdminUser` (Task 6) are the exact names every later task (8, 12, 13, 14) imports from `@/auth`. `EXPORT_KEYS`/`ALLOWED_KEY_PREFIXES`/`collectAllKeys`/`restoreAllKeys` (Task 2) are what Tasks 9's `sync-client.ts` and the updated `SettingsClient.tsx` both consume.
- **No placeholders:** every step has real, complete code — Task 3's bookmark/notes test has one explicit "inspect the real file, replace this" instruction (Step 3) because the exact function name genuinely isn't knowable without reading a file this plan didn't read; that's flagged as an explicit action, not left vague.
