import { LESSON_RESOURCES } from "@/lib/lesson-resources";
import LessonResourcesClient from "./LessonResourcesClient";

export default function LessonResources({ slug }: { slug: string }) {
  const data = LESSON_RESOURCES[slug];
  if (!data) return null;

  const hasContent =
    data.videos.en.length + data.videos.hi.length + data.videos.te.length + data.videos.ta.length +
    data.articles.length + data.docs.length + data.tools.length > 0;

  if (!hasContent) return null;

  return <LessonResourcesClient data={data} />;
}
