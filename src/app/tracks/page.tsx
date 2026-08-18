import { TRACKS } from "@/lib/tracks";
import { CATEGORIES } from "@/lib/curriculum";
import TracksPageClient from "@/components/TracksPageClient";
import PageMasthead from "@/components/PageMasthead";
import type { Metadata } from "next";

// Session 85 branch-cleanup follow-up: this used to be a hardcoded "22...8...14"
// string that drifted stale as tracks were added (real count reached 24). Derive
// it live from TRACKS so it can never drift again, same pattern as the page body.
const roleTrackCount = TRACKS.filter((t) => t.kind === "role").length;
const masteryTrackCount = TRACKS.filter((t) => t.kind === "mastery").length;

export const metadata: Metadata = {
  title: "Learning Tracks | Marketing Academy",
  description:
    `${TRACKS.length} curated learning paths: ${roleTrackCount} role-based tracks built for your job title, plus ${masteryTrackCount} skill mastery tracks that go deep on one discipline. Pick the path that matches how you learn.`,
};

export default function TracksPage() {
  return (
    <>
      <PageMasthead
        left="Marketing Academy · Curated Paths"
        right={`${TRACKS.length} tracks · ${CATEGORIES.length} disciplines pooled`}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="font-data text-[0.65rem] tracking-[0.08em] uppercase text-[var(--accent)] mb-1.5">Sequenced, not scattered</p>
          <h1 className="font-display font-semibold text-4xl mb-3">Learning Tracks</h1>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl font-ui-sans">
            Pick the path that matches your role or the skill you want to master.
            Each track pulls the most relevant lessons from across
            all {CATEGORIES.length} categories and sequences them in the order
            that actually makes sense.
          </p>
        </div>

        <TracksPageClient tracks={TRACKS} />
      </div>
    </>
  );
}
