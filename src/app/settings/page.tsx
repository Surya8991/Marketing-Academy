import type { Metadata } from "next";
import { emailAuthConfigured } from "@/lib/env";
import SettingsClient from "./SettingsClient";

export const metadata: Metadata = {
  title: "Settings",
  robots: { index: false, follow: false },
  description: "Export or import your learning progress.",
};

export default function SettingsPage() {
  return <SettingsClient authConfigured={emailAuthConfigured()} />;
}
