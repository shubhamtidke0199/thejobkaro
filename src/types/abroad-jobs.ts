import type { LucideIcon } from "lucide-react";

export type AbroadJobBenefitVariant = "primary" | "tertiary" | "secondary";

export interface AbroadJobBenefit {
  label: string;
  variant: AbroadJobBenefitVariant;
}

export interface FeaturedDestination {
  id: string;
  name: string;
  openingsCount: number;
  image: string;
  imageAlt: string;
  href?: string;
}

export interface AbroadJobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  logo: string;
  logoAlt: string;
  benefits: AbroadJobBenefit[];
  status?: {
    type: "deadline" | "applications";
    label: string;
    urgent?: boolean;
  };
}

export interface SponsoredRelocationAd {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface CareerSuccessTool {
  id: string;
  title: string;
  description: string;
  type: "link" | "converter";
  href?: string;
  linkLabel?: string;
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface SalaryRangeConfig {
  min: number;
  max: number;
  default: number;
  minLabel: string;
  maxLabel: string;
}
