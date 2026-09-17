import type { Metadata } from "next";
import { PROJECTS_INDEX } from "@/lib/projects-index";
import { authConfigured } from "@/lib/env";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
  title: "Profile",
  robots: { index: false, follow: true },
  description: "Your personal learning dashboard: progress, XP, streak, badges, certificates, and activity.",
};

export default function ProfilePage() {
  // Slim map, not the full ProjectCardData rows: profile-stats.ts only needs
  // id + timeMinutes to compute total hands-on hours (see profile-stats.ts's
  // header comment on why it doesn't import projects-index.ts itself).
  const projectsIndex = PROJECTS_INDEX.map((p) => ({ id: p.id, timeMinutes: p.timeMinutes }));

  return <ProfileClient authConfigured={authConfigured()} projectsIndex={projectsIndex} />;
}
