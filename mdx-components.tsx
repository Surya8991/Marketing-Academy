import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Mermaid from "@/components/Mermaid";
import Callout from "@/components/Callout";
import ResourceList from "@/components/ResourceList";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Mermaid,
    Callout,
    ResourceList,
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-[var(--border)]">
        <table {...props} className="my-0 border-0 rounded-lg" />
      </div>
    ),
  };
}
