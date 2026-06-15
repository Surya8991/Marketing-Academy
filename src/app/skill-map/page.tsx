import type { Metadata } from "next";
import SkillMapClient from "./SkillMapClient";

export const metadata: Metadata = {
  title: "Skill Map | Marketing Academy",
  description: "Track your progress across all 15 marketing disciplines.",
};

export default function SkillMapPage() {
  return <SkillMapClient />;
}
