import type { Metadata } from "next";
import SettingsClient from "./SettingsClient";

export const metadata: Metadata = {
  title: "Settings | Marketing Academy",
  description: "Export or import your learning progress.",
};

export default function SettingsPage() {
  return <SettingsClient />;
}
