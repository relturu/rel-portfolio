/**
 * Shared content types. Everything in content/data.ts and the MDX exports
 * in content/projects conforms to these.
 */

export type ProjectType = "case-study" | "project" | "series" | "in-progress";
export type ProjectContext = "startup" | "client" | "hackathon" | "course";
export type RoleTag = "product" | "research" | "design" | "engineering" | "leadership";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  context: ProjectContext;
  date: string; // e.g. "Fall 2026"
  outcome: string; // one line, max 2 lines on cards
  roleTags: RoleTag[]; // strongest first
  stack: string[];
  image?: string; // path under /public
  imageLabel?: string; // label for the placeholder when there is no image
  links?: { demo?: string; code?: string; slides?: string; video?: string; report?: string };
  featured?: boolean;
  nda?: boolean;
  expectedDate?: string; // in-progress only
  children?: string[]; // series only: slugs into seriesChildren
};

export type SeriesChild = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  image?: string;
  link?: string;
};

export type LensPreset = {
  id: string;
  title: string;
  description: string;
  cta: string;
  roles: RoleTag[]; // project matches if it has any of these roles
  contexts?: ProjectContext[]; // ...and (if set) one of these contexts
  pinned: string[]; // slugs shown first, in this order
};

export type Stat = {
  value: string;
  label: string;
  annotation?: string;
};

export type ExperienceRow = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

export type HobbyCategory = "Music" | "Movement" | "Stories";

export type Hobby = {
  id: string;
  category: HobbyCategory;
  title: string;
  description: string;
  detail: string;
  image?: string;
};

export type NowPanel = {
  term: string;
  slugs: string[]; // in-progress projects shown in the Now panel
};

export type Person = {
  name: string;
  shortName: string;
  degree: string;
  school: string;
  graduation: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  heroHeadline: string;
  heroSubline: string;
  aboutTagline: string;
  aboutLead: string;
  aboutBody: string[];
  availability: string;
};

export type SiteSettings = {
  title: string;
  description: string;
  widgets: {
    music: { enabled: boolean; appleMusicUrl: string };
    dailyWord: { enabled: boolean; fallbackWords: { word: string; language: string; translation: string }[] };
  };
};

/** Exported as `meta` from each content/projects/<slug>.mdx case study. */
export type CaseStudyMeta = {
  summary: string;
  role: string;
  team: string;
  timeline: string;
  outcome: string;
};
