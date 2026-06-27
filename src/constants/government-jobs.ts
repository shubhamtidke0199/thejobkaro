import {
  BadgeCheck,
  BookOpen,
  FileText,
  History,
} from "lucide-react";

import type {
  NotificationFilterTab,
  ResourceCenterLink,
  TrendingSearch,
} from "@/types/government-jobs";

export const TRENDING_SEARCHES: TrendingSearch[] = [
  { label: "UPSC CSE 2024", href: "#" },
  { label: "SSC CGL Tier II", href: "#" },
  { label: "IBPS PO Notifications", href: "#" },
];

export const NOTIFICATION_FILTER_TABS: NotificationFilterTab[] = [
  { label: "All", value: "all" },
  { label: "Central", value: "central" },
  { label: "State", value: "state" },
  { label: "PSU", value: "psu" },
];

export const RESOURCE_CENTER_LINKS: ResourceCenterLink[] = [
  { label: "Latest Results", href: "#", icon: FileText },
  { label: "Admit Cards", href: "#", icon: BadgeCheck },
  { label: "Syllabus PDF", href: "#", icon: BookOpen },
  { label: "Answer Keys", href: "#", icon: History },
];
