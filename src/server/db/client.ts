import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/lib/env";
import * as schema from "./schema";

/**
 * LAZY on purpose. `@libsql/client`'s createClient() is EAGER for a `file:`
 * URL — it opens the SQLite file at construction time and throws if the
 * parent directory doesn't exist. `src/auth.ts` imports this module at
 * module scope, and SessionProvider in the root layout hits
 * /api/auth/session on every page load, so an eager throw here would 500
 * EVERY page on a fresh checkout / fresh deploy with zero env vars set —
 * exactly the "everything runs unchanged with no new env vars" case the
 * accounts feature guarantees.
 *
 * Constructing on first real use instead means importing this module (or
 * anything that imports it, i.e. `@/auth`, i.e. most pages) is always safe;
 * only code that actually talks to the database can fail, and it fails
 * inside a route handler where the error is contained.
 */
type Db = LibSQLDatabase<typeof schema>;

let instance: Db | null = null;

export function getDb(): Db {
  if (!instance) {
    const client = createClient({
      url: env.DATABASE_URL,
      // Only meaningful for a remote libsql://... Turso URL; harmless/unused
      // for a local file: URL.
      authToken: env.TURSO_AUTH_TOKEN,
    });
    instance = drizzle(client, { schema });
  }
  return instance;
}

/**
 * Generic "construct on first touch" proxy. Any property access (including
 * `in`, `Object.keys`, spread) triggers `factory()`; merely holding the
 * reference does not. Used for `db` below and for the Auth.js adapter in
 * src/auth.ts (DrizzleAdapter() itself reads `db[entityKind]` to pick a
 * dialect, so it must be deferred too, not just the client construction).
 */
export function lazyProxy<T extends object>(factory: () => T): T {
  let value: T | null = null;
  const get = (): T => (value ??= factory());
  return new Proxy({} as T, {
    get(_target, prop) {
      const real = get() as unknown as Record<string | symbol, unknown>;
      const v = real[prop];
      return typeof v === "function" ? v.bind(real) : v;
    },
    has(_target, prop) {
      return prop in (get() as object);
    },
    ownKeys() {
      return Reflect.ownKeys(get() as object);
    },
    getOwnPropertyDescriptor(_target, prop) {
      const d = Object.getOwnPropertyDescriptor(get() as object, prop);
      return d ? { ...d, configurable: true } : undefined;
    },
  });
}

/**
 * Kept as the `db` export so call sites read unchanged, but it is a lazy
 * proxy: property access is what triggers getDb(), not module import.
 */
export const db: Db = lazyProxy<Db>(getDb);
