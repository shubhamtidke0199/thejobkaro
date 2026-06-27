import type { LucideIcon } from "lucide-react";

export interface FilterOption {
  label: string;
  value: string;
}

export interface ExperienceOption {
  label: string;
  value: string;
}

export interface RecommendedJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  icon: LucideIcon;
  matchScore?: number;
  detailSlug?: string;
}

export interface PrivateJob {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
  postedAt?: string;
  deadline?: string;
  bookmarked?: boolean;
  detailSlug?: string;
}

export interface SponsoredJobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  logo: string;
  logoAlt: string;
  badge?: string;
  detailSlug?: string;
}

export interface SeoStat {
  value: string;
  label: string;
}

export interface PrivateJobHighlight {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface PrivateJobPerk {
  label: string;
  icon: LucideIcon;
}

export interface CompanyProfile {
  name: string;
  description: string;
  size: string;
  industry: string;
  websiteLabel: string;
  websiteUrl: string;
}

export interface HiringManager {
  name: string;
  title: string;
  avatar: string;
  avatarAlt: string;
}

export interface SimilarPrivateJob {
  id: string;
  title: string;
  company: string;
  salary: string;
  href: string;
  icon: LucideIcon;
}

export interface SponsoredCareerOffer {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface PrivateJobDetail {
  slug: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  logoAlt: string;
  badge?: string;
  highlights: PrivateJobHighlight[];
  aboutRole: string[];
  responsibilities: string[];
  requirements: string[];
  perks: PrivateJobPerk[];
  companyProfile: CompanyProfile;
  hiringManager: HiringManager;
}
