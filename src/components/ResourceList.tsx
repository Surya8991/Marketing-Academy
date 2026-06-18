// Suppressed: replaced by LessonResources tabs (Watch / Read / Tools).
// MDX files still call <ResourceList> but it renders nothing.
// Keeping the types so MDX JSX doesn't break at build time.

type ResourceType = "video" | "article" | "course" | "docs" | "tool";
type Lang = "en" | "ta" | "te" | "hi";

type Resource = {
  title: string;
  url: string;
  type: ResourceType;
  note?: string;
  free?: boolean;
  lang?: Lang;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ResourceList(_props: { resources: Resource[] }) {
  return null;
}
