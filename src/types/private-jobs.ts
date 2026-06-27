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
}

export interface SeoStat {
  value: string;
  label: string;
}
