"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically imports CommandPalette so its 400+ entry search index (COMMAND_INDEX)
 * and Fuse.js aren't bundled into every page's initial JS — the palette is invisible
 * until Ctrl+K, but was previously mounted (and its module eagerly loaded) in the root
 * layout, shipping on every route regardless of whether it's ever opened.
 *
 * `ssr: false` requires a Client Component boundary; layout.tsx is a Server Component,
 * so this thin wrapper exists purely to host the dynamic() call.
 */
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

export default function CommandPaletteLoader() {
  return <CommandPalette />;
}
