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
