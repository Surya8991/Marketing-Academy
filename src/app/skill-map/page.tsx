import type { Metadata } from "next";
import SkillMapClient from "./SkillMapClient";

export const metadata: Metadata = {
  title: "Skill Map",
  robots: { index: false, follow: true },
  description: "Track your progress across all 21 marketing disciplines.",
};

export default function SkillMapPage() {
  return <SkillMapClient />;
}
