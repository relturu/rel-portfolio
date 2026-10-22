import type { MDXComponents } from "mdx/types";
import { Callout, Gallery, Metric, Phase, PullQuote, Section } from "@/components/CaseStudyBlocks";

const components: MDXComponents = {
  Section,
  Phase,
  Callout,
  Metric,
  PullQuote,
  Gallery,
  p: (props) => <p className="font-sans text-base text-ink leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 space-y-2 font-sans text-sm text-muted marker:text-ink" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 space-y-2 font-sans text-sm text-muted marker:text-ink" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  a: (props) => <a className="text-accent underline underline-offset-4" {...props} />,
  h3: (props) => <h3 className="font-mono text-lg font-bold text-ink pt-2" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
