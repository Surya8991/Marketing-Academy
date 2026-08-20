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
