import { db } from "@/server/db/client";
import { adminAuditLog } from "@/server/db/schema";

export type AdminAction = "promote" | "demote" | "suspend" | "unsuspend" | "delete";

/**
 * Appends one row to the audit log (IMPROVEMENT_PLAN #30). Every mutating
 * /api/admin/* route calls this, the log is the only accountability record
 * for a dashboard that can change roles, suspend, or delete accounts, so
 * this is never optional or best-effort the way email sends are.
 */
export async function logAdminAction(input: {
  actorUserId: string;
  actorEmail: string;
  action: AdminAction;
  targetUserId: string;
  targetEmail: string;
}): Promise<void> {
  await db.insert(adminAuditLog).values(input);
}
