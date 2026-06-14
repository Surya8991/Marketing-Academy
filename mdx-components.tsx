import type { MDXComponents } from "mdx/types";
import Mermaid from "@/components/Mermaid";
import Callout from "@/components/Callout";
import ResourceList from "@/components/ResourceList";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Mermaid,
    Callout,
    ResourceList,
  };
}
