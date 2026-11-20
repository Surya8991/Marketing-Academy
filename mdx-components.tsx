import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Mermaid from "@/components/Mermaid";
import Callout from "@/components/Callout";
import ResourceList from "@/components/ResourceList";
import Quiz from "@/components/Quiz";
import DiagramBlock from "@/components/DiagramBlock";
import InAction from "@/components/InAction";
import RoasCalculator from "@/components/interactive/RoasCalculator";
import HeadlineTester from "@/components/interactive/HeadlineTester";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Mermaid,
    Callout,
    ResourceList,
    Quiz,
    DiagramBlock,
    InAction,
    RoasCalculator,
    HeadlineTester,
    // The lesson page header already renders the title as the page's one H1.
    h1: () => null,
    table: (props: ComponentPropsWithoutRef<"table">) => (
      <div className="overflow-x-auto my-6 rounded-lg border border-[var(--border)]">
        <table {...props} className="my-0 border-0 rounded-lg" />
      </div>
    ),
  };
}
