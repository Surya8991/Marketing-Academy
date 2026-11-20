// Reads a lesson's "## Frequently Asked Questions" section (### question, then a plain answer
// paragraph) from raw MDX, for FAQPage JSON-LD. Stops at the next H2 or a JSX block.
export function parseFaq(mdx: string): { q: string; a: string }[] {
  const start = mdx.search(/^## Frequently Asked Questions\s*$/m);
  if (start === -1) return [];
  const rest = mdx.slice(start).split("\n").slice(1).join("\n");
  const end = rest.search(/^(## |<)/m);
  const section = end === -1 ? rest : rest.slice(0, end);
  return section
    .split(/^### /m)
    .slice(1)
    .map((block) => {
      const [q, ...body] = block.split("\n");
      const a = body.join(" ").replace(/\*\*|__|`/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s+/g, " ").trim();
      return { q: q.trim(), a };
    })
    .filter((x) => x.q && x.a);
}
