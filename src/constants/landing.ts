import type { LucideIcon } from "lucide-react";
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
    href: "#",
    icon: Landmark,
  },
  {
    title: "Results",
    description: "Check Scorecards",
    href: "#",
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
    href: "#",
    icon: GraduationCap,
  },
  {
    title: "Govt Schemes",
    description: "State & Central",
    href: "#",
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
    href: "#",
    icon: Briefcase,
  },
  {
    title: "Freelance Gigs",
    description: "Short-term Projects",
    href: "#",
    icon: History,
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    title: "SSC Multi Tasking Staff (MTS) 2024 Final Result",
    time: "10 mins ago",
    tags: [
      { label: "Result", variant: "result" },
      { label: "SSC", variant: "default" },
    ],
    active: true,
  },
  {
    title: "Railway Recruitment Board (RRB) Technician Grade III Notification",
    time: "2 hours ago",
    tags: [
      { label: "Govt Job", variant: "govt" },
      { label: "Railway", variant: "default" },
    ],
    active: true,
  },
  {
    title: "Google Software Engineer Internship Summer 2025",
    time: "Yesterday",
    tags: [
      { label: "Internship", variant: "internship" },
      { label: "Remote", variant: "default" },
    ],
  },
];

export const FEATURED_OPPORTUNITIES: Opportunity[] = [
  {
    title: "Senior Product Designer",
    company: "InnovateX",
    location: "Bangalore (Remote)",
    salary: "₹18L - ₹24L PA",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOKc7how9l5scpIuaspSqzvqrnLM7C2t4t-hErN93Nex0nwBO0KS33G6gofOCAu2-FY2UWxbn5JmVJycQWmehqsN07bLRfgwMIuRgc2G8ZN_llhNhF7oc7y4GGEaqJCuF3dzFZ_7-hTWdgbcA028NuQe5Nw7a4saDyUBwjdB-1fFl5a0ciYuU3ThZwrFXU6HXdOc9du4qv__4JUST8wtoBFmLojp_rFHJtMGyhdbP_u89CbjohHTUER3DeY2K9eREgQ9BowK0DAwWR",
    logoAlt: "InnovateX company logo",
  },
  {
    title: "Probationary Officer (PO)",
    company: "SBI",
    location: "Multiple Locations",
    salary: "Govt Salary Grade",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkR6-jCfgUxBs2AXBZqeIDhODX90RdKc1FbZDNowavMYQ-Ab-y8sYR6GzGlnM17puoQvvtTneXNvOpznkTvblIigf4hnXJFzWlWyyKC1VLWw8wK5lGdypBwk-2dhhmcIx8wUNt2kSVoipjVHPGCbn9XB0fDC8lA2tGWG12AD--GM1w16iSMaU4T3PoxR8t5OhSz3q9RKJyE3quL-fMuk1_rrclc98TTBI4rA3KuqWjC-prR616MjF7uSR-sfVX-YHTOfKs51Y602mT",
    logoAlt: "SBI bank logo",
  },
];

export const SPONSORED_OPPORTUNITY: SponsoredOpportunity = {
  title: "Master Data Science in 6 Months",
  description: "Top-rated bootcamp with 100% placement assistance.",
};

export const DEADLINES: Deadline[] = [
  {
    title: "SSC CGL Tier 1 Registration",
    timeLabel: "11:10:23",
    progress: 85,
    note: "Closing tomorrow at 11:59 PM",
    urgent: true,
  },
  {
    title: "UPSC CSE Prelims Form",
    timeLabel: "04 Days",
    progress: 45,
  },
  {
    title: "IBPS Clerk 2024",
    timeLabel: "12 Days",
    progress: 20,
  },
];

export const PREP_TOOLS: PrepTool[] = [
  { label: "Resume Builder", href: "#" },
  { label: "Mock Test Portal", href: "#" },
  { label: "PYQ Archives", href: "#" },
];
