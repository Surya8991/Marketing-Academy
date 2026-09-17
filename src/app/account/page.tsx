import { requireUser } from "@/auth";
import AccountClient from "./AccountClient";

export const metadata = { title: "Account", robots: { index: false, follow: false } };

export default async function AccountPage() {
  const user = await requireUser();
  return <AccountClient email={user.email} isAdmin={Boolean(user.isAdmin)} />;
}
