import type { LucideIcon } from "lucide-react";

export interface FeaturedScholarship {
  id: string;
  title: string;
  description: string;
  organization: string;
  logo: string;
  logoAlt: string;
  closingLabel: string;
  stats: { label: string; value: string }[];
  eligibility: string;
  ctaLabel: string;
}

export interface PremiumScholarship {
  id: string;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
}

export interface GovernmentScholarship {
  id: string;
  title: string;
  organization: string;
  closingLabel: string;
  amount: string;
  level: string;
  icon: LucideIcon;
}

export interface InternationalScholarship {
  id: string;
  title: string;
  description: string;
  region: string;
  fundingLabel: string;
  imageKey: keyof typeof import("@/constants/images").SCHOLARSHIP_IMAGES;
}

export interface ScholarshipFilterOption {
  label: string;
  value: string;
}

export interface ScholarshipHighlight {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ScholarshipBenefit {
  title: string;
  description: string;
}

export interface ScholarshipApplicationStep {
  title: string;
  description: string;
  active?: boolean;
}

export interface SimilarScholarship {
  id: string;
  organization: string;
  title: string;
  summary: string;
  href: string;
}

export interface ScholarshipDetail {
  slug: string;
  organization: string;
  title: string;
  logo: string;
  logoAlt: string;
  grantorLogo: string;
  grantorLogoAlt: string;
  grantorDescription: string;
  grantorWebsiteLabel: string;
  amount: string;
  deadline: string;
  education: string;
  appliedCount: string;
  highlights: ScholarshipHighlight[];
  overview: string;
  eligibility: string[];
  benefits: ScholarshipBenefit[];
  applicationSteps: ScholarshipApplicationStep[];
  similarScholarships: SimilarScholarship[];
  supportEmail: string;
}
