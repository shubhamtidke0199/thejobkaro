import type { LucideIcon } from "lucide-react";

export type GovernmentJobCategory = "central" | "state" | "psu";

export type GovernmentJobTagVariant = "tertiary" | "secondary" | "primary";

export interface GovernmentJobTag {
  label: string;
  variant: GovernmentJobTagVariant;
}

export interface RecruitmentAgency {
  name: string;
  activeCount: number;
  logo: string;
  logoAlt: string;
  href?: string;
}

export interface RecommendedGovernmentJob {
  title: string;
  organization: string;
  location: string;
  detail: string;
  logo: string;
  logoAlt: string;
}

export interface GovernmentJobListing {
  id: string;
  title: string;
  description: string;
  location: string;
  qualification: string;
  postedAt: string;
  logo: string;
  logoAlt: string;
  tags: GovernmentJobTag[];
  category: GovernmentJobCategory;
}

export interface UrgentAlert {
  id: string;
  urgencyLabel: string;
  title: string;
  ctaLabel: string;
  href: string;
  urgencyLevel: "high" | "medium" | "low";
}

export interface SponsoredPrimeOffer {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface ResourceCenterLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface TrendingSearch {
  label: string;
  href: string;
}

export interface NotificationFilterTab {
  label: string;
  value: "all" | GovernmentJobCategory;
}

export interface GovernmentJobMetaTag {
  label: string;
  variant: "primary" | "secondary";
}

export interface GovernmentJobStat {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface EligibilityItem {
  label: string;
  description: string;
}

export interface ImportantDateRow {
  event: string;
  date: string;
  urgent?: boolean;
  badge?: string;
}

export interface SelectionStep {
  step: number;
  title: string;
  description: string;
  active?: boolean;
}

export interface GovernmentJobFaq {
  question: string;
  answer: string;
}

export interface GovernmentJobApplicationStatus {
  endsLabel: string;
  progressPercent: number;
}

export interface GovernmentJobDetail {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  logoAlt: string;
  metaTags: GovernmentJobMetaTag[];
  overview: string;
  stats: GovernmentJobStat[];
  eligibility: EligibilityItem[];
  importantDates: ImportantDateRow[];
  selectionProcess: SelectionStep[];
  faqs: GovernmentJobFaq[];
  application: GovernmentJobApplicationStatus;
}

export interface RelatedOpportunity {
  id: string;
  title: string;
  category: string;
  deadlineLabel: string;
  deadlineUrgent?: boolean;
  href: string;
  icon: LucideIcon;
}

export interface SponsoredStudyOffer {
  title: string;
  description: string;
  ctaLabel: string;
}
