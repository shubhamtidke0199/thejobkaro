import type { LucideIcon } from "lucide-react";

export interface Category {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface PopularSearch {
  label: string;
  href: string;
}

export interface Notification {
  title: string;
  time: string;
  tags: { label: string; variant: "result" | "govt" | "internship" | "default" }[];
  active?: boolean;
}

export interface Opportunity {
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  logoAlt: string;
}

export interface SponsoredOpportunity {
  title: string;
  description: string;
}

export interface Deadline {
  title: string;
  timeLabel: string;
  progress: number;
  note?: string;
  urgent?: boolean;
}

export interface PrepTool {
  label: string;
  href: string;
}
