import { CATEGORIES } from "@/lib/curriculum";
import { NextResponse } from "next/server";

const BASE = "https://marketing-academy-roan.vercel.app";

export async function GET() {
  const allLessons = CATEGORIES.flatMap((cat) =>
    cat.lessons.map((lesson) => ({ cat, lesson }))
  );

  const results = await Promise.allSettled(
    allLessons.map(({ cat, lesson }) =>
      import(`@/content/${cat.slug}/${lesson.slug}.mdx`).then((mod) => ({
        cat,
        lesson,
        meta: mod.lessonMeta as { title: string; summary?: string } | undefined,
      }))
    )
  );

  const items = results
    .flatMap((r) => (r.status === "fulfilled" ? [r.value] : []))
    .map(
      ({ cat, lesson, meta }) => `
    <item>
      <title><![CDATA[${meta?.title ?? lesson.title}]]></title>
      <link>${BASE}/learn/${cat.slug}/${lesson.slug}</link>
      <guid isPermaLink="true">${BASE}/learn/${cat.slug}/${lesson.slug}</guid>
      <description><![CDATA[${meta?.summary ?? ""}]]></description>
      <category><![CDATA[${cat.title}]]></category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Marketing Academy</title>
    <link>${BASE}</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Free marketing lessons: SEO, paid ads, growth, social, email, analytics, AI tools and more.</description>
    <language>en-us</language>
    <image>
      <url>${BASE}/favicon.ico</url>
      <title>Marketing Academy</title>
      <link>${BASE}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
