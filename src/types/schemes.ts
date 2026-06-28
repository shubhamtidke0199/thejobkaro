import type { LucideIcon } from "lucide-react";

export type SchemeCategory =
  | "students"
  | "entrepreneurs"
  | "farmers"
  | "women"
  | "healthcare";

export type SchemeStatusVariant =
  | "urgent"
  | "rolling"
  | "new"
  | "open"
  | "active"
  | "closing";

export interface SchemeHighlight {
  icon: LucideIcon;
  label: string;
}

export interface SchemeListing {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: SchemeCategory;
  highlights: SchemeHighlight[];
  status?: {
    label: string;
    variant: SchemeStatusVariant;
  };
  variant: "standard" | "featured" | "accent";
  ctaLabel: string;
  icon: LucideIcon;
  featuredImageKey?: keyof typeof import("@/constants/images").SCHEME_IMAGES;
  featuredStats?: { label: string; value: string }[];
}

export interface SchemeQuickSearch {
  label: string;
  icon: LucideIcon;
}

export interface SchemeApplicationStep {
  title: string;
  description: string;
  icon: LucideIcon;
  active?: boolean;
}

export interface SchemeQuickFact {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface SchemeEligibilityItem {
  title: string;
  description: string;
}

export interface SchemeBenefit {
  title: string;
  description: string;
  imageKey: keyof typeof import("@/constants/images").SCHEME_IMAGES;
}

export interface SchemeDocument {
  label: string;
  icon: LucideIcon;
}

export interface SchemeApplicationGuideStep {
  step: number;
  title: string;
  description: string;
}

export interface SchemeDetail {
  slug: string;
  title: string;
  summary: string;
  tags: { label: string; variant: "primary" | "secondary" | "neutral" }[];
  quickFacts: SchemeQuickFact[];
  about: string[];
  eligibility: SchemeEligibilityItem[];
  benefits: SchemeBenefit[];
  documents: SchemeDocument[];
  applicationSteps: SchemeApplicationGuideStep[];
}

export interface RelatedScheme {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface SchemeHelpContact {
  type: "faq" | "email" | "phone";
  title: string;
  detail: string;
  icon: LucideIcon;
}

export interface SponsoredSchemeOffer {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface SchemeFilterTab {
  label: string;
  value: "all" | SchemeCategory;
}
