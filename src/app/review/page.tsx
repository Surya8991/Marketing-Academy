import type { Metadata } from "next";
import ReviewPageClient from "./ReviewPageClient";

export const metadata: Metadata = {
  title: "Review Queue | Marketing Academy",
  description: "Spaced-repetition review of quiz questions you've gotten wrong, so mistakes actually stick as lessons.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ReviewPage() {
  return <ReviewPageClient />;
}
