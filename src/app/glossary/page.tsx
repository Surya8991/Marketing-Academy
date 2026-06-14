import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Marketing Glossary",
  description:
    "Plain-English definitions for 150+ essential marketing terms - CTR, CAC, LTV, ROAS, CRO, SEO, brand, copywriting, social media, and more. The reference every marketer needs.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
