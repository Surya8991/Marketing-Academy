import type { Metadata } from "next";
import BookmarksList from "./BookmarksList";

export const metadata: Metadata = {
  title: "My Bookmarks | Marketing Academy",
};

export default function BookmarksPage() {
  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "48px 24px",
        color: "var(--foreground)",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "8px",
          color: "var(--foreground)",
        }}
      >
        My Bookmarks
      </h1>
      <p style={{ color: "var(--muted-foreground)", marginBottom: "40px" }}>
        Lessons you have saved to revisit later.
      </p>

      <BookmarksList />
    </main>
  );
}
