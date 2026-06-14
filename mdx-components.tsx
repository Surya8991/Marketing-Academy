import type { MDXComponents } from "mdx/types";
import Mermaid from "@/components/Mermaid";
import Callout from "@/components/Callout";
import ResourceList from "@/components/ResourceList";

const components: MDXComponents = {
  Mermaid,
  Callout,
  ResourceList,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
