import { NextResponse } from "next/server";

const BASE = "https://marketing-academy-roan.vercel.app";

export function GET() {
  const opml = `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>Marketing Academy RSS Feeds</title>
  </head>
  <body>
    <outline text="Marketing Academy" title="Marketing Academy"
      type="rss"
      xmlUrl="${BASE}/feed.xml"
      htmlUrl="${BASE}"
      description="Free marketing lessons — SEO, paid ads, growth, analytics, AI, social media and more." />
  </body>
</opml>`;

  return new NextResponse(opml, {
    headers: {
      "Content-Type": "text/x-opml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
