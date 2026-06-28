import type { LucideIcon } from "lucide-react";

export type ResultStatusVariant = "available" | "releasing" | "tba";

export type AdmitCardStatusVariant = "available" | "releasing" | "tba";

export type ResultsHubTab = "results" | "admit";

export interface ExamResultListing {
  id: string;
  title: string;
  organization: string;
  organizationDetail?: string;
  status: {
    label: string;
    variant: ResultStatusVariant;
  };
  releasedAt?: string;
  ctaLabel: string;
  ctaVariant: "primary" | "outline";
  icon?: LucideIcon;
  logo?: string;
  logoAlt?: string;
}

export interface AdmitCardListing {
  id: string;
  title: string;
  status: {
    label: string;
    variant: AdmitCardStatusVariant;
  };
  examDate: string;
  examDatePending?: boolean;
  detail: string;
  ctaLabel: string;
  ctaVariant: "download" | "notify" | "alert";
  icon: LucideIcon;
  iconTone?: "primary" | "secondary" | "tertiary";
}

export interface TrendingResource {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SponsoredResultsOffer {
  title: string;
  description: string;
  ctaLabel: string;
}
