import type { Metadata } from "next";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "Achievements | Marketing Academy",
  description: "Your earned badges, XP, and learning streak.",
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
