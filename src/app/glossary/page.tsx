import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Marketing Glossary",
  description:
    "Plain-English definitions for 80+ essential marketing terms - CTR, CAC, LTV, ROAS, CRO, SEO, and more. The reference every marketer needs.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
