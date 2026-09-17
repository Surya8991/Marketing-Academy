# Pre-push checklist

**A merge to `main` is a release.** Vercel auto-deploys to production on every
push to `main` via the GitHub integration, no staging step in between. CI
(`.github/workflows/ci.yml`: lint → test → build, plus a git-identity check)
runs on every push and PR, but CI passing and a merge being *safe* are not
the same claim, work through this before every push, on `development-branch`
or any other.

---

## Before step 0: push policy for this repo

**Only commit/push/merge when explicitly asked, every time.** Unlike some
sibling projects, there is no standing go-ahead here, branch before
committing on `main`, and wait for the owner's actual "push" / "merge" in the
current turn. This has held throughout the project's history (see
`docs/PROJECT_LOG.md`'s repeated "commits remain UNPUSHED per the owner's
explicit instruction" entries) and is not superseded by finishing a feature,
by CI going green, or by a prior push having been approved, approval is
per-action, not standing.

**Default `gh`/git identity for this repo is `Surya8991`.** Confirm before
pushing:
```bash
git config user.email   # must be the Surya8991 noreply address, not edstellarmarketing
gh auth status           # "Active account: true" must be next to Surya8991
```
CI's own "Block edstellarmarketing identity on non-owned repos" check catches
a wrong commit identity, but catching it locally first avoids a red check and
a rewritten commit.

---

## 0. Sync with `main` first

- [ ] `git fetch origin`, then `git log --oneline HEAD..origin/main`, see what
      landed upstream since you branched
- [ ] If anything is upstream, rebase and **re-run the full verify chain
      after the rebase** (step 1 below), someone else's change can break
      yours with no merge conflict at all
- [ ] Never force-push a shared branch; never push on top of a diverged remote

## 1. The verify chain, in order, every time

```bash
npx tsc --noEmit
npx eslint . --max-warnings=9999
npm test
npm run build
```

- [ ] `tsc` reports no errors
- [ ] `eslint` reports 0 errors (warnings are reviewed, not auto-blocking,
      but a NEW warning your change introduced still needs a look)
- [ ] `npm test` reports the full count passing, 0 failed (currently 75,
      the number grows; note it going up, investigate if it goes down)
- [ ] `npm run build` prints `✓ Compiled successfully` **and** the full route
      table with no `Error occurred prerendering page` lines, this repo
      statically generates 1,700+ pages (642 lessons, 800+ projects, 155+
      glossary terms, 24 tracks); a single bad prerender is easy to miss in
      a wall of successful ones, so actually scan for the word `Error`, don't
      just check the exit code
- [ ] Run these **in this order**, a build can succeed on code that fails
      `tsc`/`eslint` if you skip straight to `npm run build` (Next's build
      does its own type-check, but running `tsc --noEmit` first gives a
      faster, clearer failure)

**Never skip straight to `npm test` or `npm run build` alone.** This project
has real, previously-shipped bugs that only one specific gate in this chain
catches, see AGENTS.md Rules 57, 67-70 for concrete examples (`tsc` catches
an `Archetype`/`ProjectMode` mix-up that `npm test` doesn't; `npm test`
catches a `nextStageId: ""` or an empty `stages[]` array that `tsc` and the
audit script both miss).

## 1a. `npm ci` sanity: the lock file must match what CI actually runs

**CI uses Node 20 (`.github/workflows/ci.yml`: `node-version: 20`) and
whatever npm ships with it (~10.x). A lock file regenerated with a newer
local npm/Node can resolve optional peer dependencies differently and pass
locally while failing CI's `npm ci` with `EUSAGE ... in sync` / `Missing: X
from lock file`.** This is not hypothetical, it happened on 2026-09-17
after adding `nodemailer` as a direct dependency, silently past local
verification, caught only when CI ran `npm ci`.

Before pushing any commit that touches `package.json`:
```bash
node --version   # if this isn't 20.x, the check below matters more, not less
npx --yes npm@10 ci --dry-run
```
- [ ] The dry run completes with no `EUSAGE` error. If it fails, run
      `npx --yes npm@10 install` to regenerate `package-lock.json` against
      npm 10's resolution, then re-run the full verify chain (step 1) and
      commit the corrected lock file **in the same push**, not a follow-up
- [ ] If `package-lock.json` changed by more than the dependency you actually
      added/removed, look at the diff before committing, a large unrelated
      diff usually means the two npm versions disagree about something worth
      understanding, not just noise to accept

## 2. Database: Drizzle / Turso (libsql)

Local dev uses a SQLite file (`data/marketing-academy.db`, gitignored);
production points at a `libsql://...-turso.io` URL. **The build does not run
migrations or touch the database at all**, a broken schema change is
invisible until `db:migrate` actually runs against a real database.

```bash
npm run db:generate   # after any src/server/db/schema.ts change
npm run db:migrate    # applies to the local dev DB
```

- [ ] Any schema change has a generated migration file under
      `src/server/db/migrations/` **committed alongside it**, a schema
      edit with no matching migration file works locally (the dev DB was
      never actually migrated, or was, by an earlier partial run) and then
      fails or silently no-ops on the real deployment
- [ ] The migration applied cleanly to the local dev DB with no errors
- [ ] Every new column/table has a real read/write path shipping in the same
      change, an unused column is a ticking "why does this exist" for the
      next person, and an addition to `users` (or any auth-adjacent table)
      that isn't wired into `session()`/`requireUser()` where it should be
      is a security gap, not just dead weight
- [ ] If you added a query, run it for real (via a scratch script against the
      real local DB, or by exercising the feature through the actual API
      route), a wrong column name or a broken `where` clause compiles
      perfectly under `tsc` and only breaks at runtime. This is how every
      admin-dashboard and cron-route query this project has shipped was
      actually verified, see `docs/PROJECT_LOG.md`'s Session 88 entries for
      the pattern (seed real rows in a throwaway script, run the real query,
      check the output, clean up)
- [ ] **Migrating production is a separate, real step**, `npm run db:migrate`
      run locally only touches the local file. A schema change doesn't reach
      the live Turso database until someone runs the migration against it
      with `DATABASE_URL`/`TURSO_AUTH_TOKEN` pointed at production. Say so
      explicitly when a push includes an unapplied production migration,
      don't let a green local build imply the live schema is already correct

## 3. Feature verification in the browser (mandatory for any user-facing change)

**A passing build and passing tests prove the code compiles and the unit-level
logic holds. They do not prove the feature works.** Start the dev server
(`preview_start` in this environment, or `npm run dev` directly) and actually
drive the feature.

- [ ] Every step of the flow, through the real UI, not just the happy path.
      For a gated action (quiz pass, admin action, sign-in), also exercise
      the refusal: the locked state, the 401, the "not authorized" message
- [ ] Check the browser console for errors the UI swallowed (`read_console_messages`
      or DevTools), a caught exception that still renders something plausible
      is exactly the kind of thing that passes a glance and fails in production
- [ ] If a piece of the feature can't be exercised in this environment (no
      real email credentials, no live Vercel Cron, no `SUPERADMIN_EMAILS` set
      locally, all real examples from this project), **say so explicitly**
      in the commit message / PR description rather than implying it was
      verified. Verify everything mechanically checkable instead: the DB
      queries against real seeded data, the auth gate returning the right
      status code, the token/signature round-trip
- [ ] For anything localStorage-backed, confirm the write actually dispatches
      `PROGRESS_CHANGED_EVENT` where required (AGENTS.md Rule 77), a missed
      dispatch has zero build/lint/runtime error and only shows up as "my
      progress didn't sync," discovered much later

## 4. Access control

- [ ] Every new API route is gated, `requireUser()` / `requireAdmin()` /
      `requireSuperAdmin()` for a redirectable page flow, or a direct
      `auth()` check (with an explicit `isSuspended` check alongside it,
      AGENTS.md Rule 80) for a `fetch()`-based API route that needs a real
      401 instead of a redirect. `tests/api-auth-coverage.test.ts` enforces
      this mechanically, if a new route legitimately has no session (a
      public utility, a cron endpoint, a token-verified unsubscribe link),
      add it to that test's `EXEMPT` list or `AUTH_MARKERS` with a **verified**
      reason, don't leave it failing or silently exempt something that
      shouldn't be
- [ ] Any route reachable by a cron/scheduled job checks `isCronAuthorized()`
      (AGENTS.md Rule 81), not a user session, there is no user attached to
      a cron invocation
- [ ] A superadmin-only mutation can't be pointed at another superadmin or at
      the actor's own account (AGENTS.md Rule 80), this is a deliberate,
      tested guard, not an incidental one
- [ ] Every mutating admin action still writes its `adminAuditLog` row
- [ ] Nothing new bypasses the quiz-completion gate (`getQuizPassed()` before
      `markComplete()`, AGENTS.md Rule 36), this has been the single most
      recurring integrity bug class in this codebase

## 5. Email (magic-link, transactional, and cron-triggered engagement mail)

- [ ] A new outbound email uses the shared `src/lib/email/` layer
      (`renderEmailLayout` + a template file), not one-off HTML, keeps the
      branded shell, the plain-text fallback, and the unsubscribe/footer
      handling consistent
- [ ] Every send goes through `sendMail()` (`src/lib/email/transport.ts`),
      which is deliberately best-effort (`false` on failure, never throws),
      a mail failure must never block the action it's attached to (sign-in,
      account deletion, etc.)
- [ ] A new opt-in (marketing/engagement) category has a real unsubscribe
      link built from `buildUnsubscribeToken()`, and the corresponding
      Settings toggle exists and defaults OFF
- [ ] A new cron-triggered email fires on an exact date-equality condition,
      not a range (AGENTS.md Rule 81), a range re-sends once per day for
      the whole window with no tracking column to prevent it
- [ ] A new scheduled route is wired into `.github/workflows/engagement-emails.yml`
      (GitHub Actions cron, NOT `vercel.json`, Vercel's Hobby plan caps crons
      at 2; `vercel.json` deliberately has no `crons` key, don't re-add one or
      routes double-fire), the schedule is sane (UTC, no accidental every-minute
      cron), and `CRON_SECRET` exists as both a Vercel env var and a GitHub
      Actions repository secret with the same value

## 6. Secrets

- [ ] `git status` shows no `.env`, `.env.local`, or any `.env.*` except
      `.env.example`/`.env.local.example`
- [ ] No real Gmail App Password, `AUTH_SECRET`, `SUPERADMIN_EMAILS` value,
      `CRON_SECRET`, or Turso auth token in the diff or in a comment
- [ ] A new env var is added to **both** `.env.example` and the README's env
      var table in the same commit, this project has been bitten before by
      docs drifting from the real required set
```bash
git diff --cached | grep -niE 'AUTH_SECRET|EMAIL_SERVER|CRON_SECRET|TURSO_AUTH_TOKEN|sk-|AIza'
```

## 7. Brand / design system

- [ ] No Tailwind `dark:` classes, CSS variables only (`var(--foreground)`
      etc.), AGENTS.md Rule 5
- [ ] No hardcoded Tailwind color classes for status/pricing badges, `rgba()`
      overlays on the theme tokens, AGENTS.md Rule 19
- [ ] Any new page/section touching the 2026-08-12 "field manual" type system
      uses the established classes (`font-display`/`font-ui-sans`/`font-data`)
      rather than inventing a new type treatment
- [ ] No new custom `next/font` `variable:` string that doesn't exactly match
      its `@theme inline` key in `globals.css` (AGENTS.md Rule 49: silently
      falls back to the system font with zero warning if it doesn't)

## 8. Responsive / a11y

- [ ] Checked at a phone-width viewport (375px), no horizontal page scroll
- [ ] A new dropdown/mega-menu wider than ~400px is anchored to a container
      wide enough to hold it, not to its own small trigger (AGENTS.md Rule 75)
, verified by actually opening it in a browser at a real desktop width,
      not just by reading the CSS
- [ ] Interactive targets are reasonably sized on touch; new icon-only
      buttons have an `aria-label`

## 9. Docs (AGENTS.md Rule 23, updated paths)

`docs/PROJECT_LOG.md`, `docs/PROJECTS_PLAN.md`, `docs/PROJECTS_AUTHORING_GUIDE.md`,
`docs/IMPROVEMENT_PLAN.md`, and `docs/BACKLOG.md` moved from the repo root
into `docs/` on 2026-09-17, `AGENTS.md`/`CLAUDE.md`/`README.md` stay at root.

- [ ] `docs/PROJECT_LOG.md`, a new "Last audited" entry at the top describing
      what shipped, for any change beyond a trivial one-line fix
- [ ] `README.md`, Routes table (new route), Key Files table (new lib/component/
      config file), env-var table + `.env.example` (new env var), lesson/tool/
      track counts if `curriculum.ts`/`tools-directory.ts`/`tracks.ts` changed
      (get the real count from the source file directly, AGENTS.md Rule 74,
      never copy a count from another doc line, they drift independently)
- [ ] `AGENTS.md`, a new numbered Rule for any non-obvious gotcha this push
      uncovered (a build failure, a silent runtime bug, a footgun a future
      agent would otherwise re-discover the hard way)
- [ ] `docs/IMPROVEMENT_PLAN.md`, mark shipped items done if this push closes
      one, with what was and wasn't verified live
- [ ] The commit message states which docs were updated, or explicitly says
      why none needed updating

---

## After pushing / merging

- [ ] Watch the PR's checks (`gh pr checks <n>`), CI (lint/test/build),
      git-identity, and the Vercel preview deployment
- [ ] If `npm ci` fails in CI after everything passed locally, it's almost
      certainly the Node/npm version mismatch in step 1a above, fix the
      lock file with `npx npm@10 install`, don't just re-push and hope
- [ ] After merging to `main`, confirm the Vercel production deployment
      actually succeeds (Vercel dashboard or `vercel.json`/deployment logs),
      a merged PR is not the same claim as "it's live and working"
- [ ] If the push included a schema migration, remember production's Turso
      database still needs that migration run against it separately (see
      §2), merging code does not migrate a remote database
