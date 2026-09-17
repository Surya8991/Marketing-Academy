import type { Metadata } from "next";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements",
  robots: { index: false, follow: true },
  description: "Your earned badges, XP, and learning streak.",
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
