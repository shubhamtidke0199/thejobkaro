import {
  Briefcase,
  Building2,
  ClipboardCheck,
  CreditCard,
  GraduationCap,
  History,
  Key,
  Landmark,
  Monitor,
  ScrollText,
} from "lucide-react";

import type { Category, PopularSearch, PrepTool } from "@/types/landing";

export const POPULAR_SEARCHES: PopularSearch[] = [
  { label: "SSC CGL 2024", href: "#" },
  { label: "Railway RRB", href: "#" },
  { label: "Google Internships", href: "#" },
];

export const CATEGORIES: Category[] = [
  {
    title: "Private Jobs",
    description: "TCS, Infosys, Startups",
    href: "/private-jobs",
    icon: Building2,
  },
  {
    title: "Govt Jobs",
    description: "SSC, UPSC, Banking",
    href: "/government-jobs",
    icon: Landmark,
  },
  {
    title: "Results",
    description: "Check Scorecards",
    href: "/results",
    icon: ClipboardCheck,
  },
  {
    title: "Admit Cards",
    description: "Download Now",
    href: "#",
    icon: CreditCard,
  },
  {
    title: "Answer Keys",
    description: "Validate Responses",
    href: "#",
    icon: Key,
  },
  {
    title: "Scholarships",
    description: "Merit & Need Based",
    href: "/scholarships",
    icon: GraduationCap,
  },
  {
    title: "Govt Schemes",
    description: "State & Central",
    href: "/schemes",
    icon: ScrollText,
  },
  {
    title: "Remote Jobs",
    description: "Work from Home",
    href: "#",
    icon: Monitor,
  },
  {
    title: "Internships",
    description: "Paid & Academic",
    href: "/internships",
    icon: Briefcase,
  },
  {
    title: "Freelance Gigs",
    description: "Short-term Projects",
    href: "#",
    icon: History,
  },
];

export const PREP_TOOLS: PrepTool[] = [
  { label: "Resume Builder", href: "#" },
  { label: "Mock Test Portal", href: "#" },
  { label: "PYQ Archives", href: "#" },
];
