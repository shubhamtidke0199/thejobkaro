import {
  Building2,
  Calendar,
  GraduationCap,
  HandCoins,
  Landmark,
  Laptop,
  Leaf,
  Rocket,
  Sprout,
  TrendingUp,
  Users,
  Verified,
  Wallet,
  Wrench,
} from "lucide-react";

import type { SchemeListing } from "@/types/schemes";

export const SCHEME_LISTINGS: SchemeListing[] = [
  {
    id: "pmrf",
    slug: "pm-research-fellowship",
    title: "Prime Minister Research Fellowship (PMRF)",
    description:
      "Direct admission to Ph.D. programs in IITs and IISc with a lucrative monthly stipend.",
    category: "students",
    highlights: [
      { icon: HandCoins, label: "₹70,000 - ₹80,000 monthly" },
      { icon: Users, label: "Final year B.Tech/M.Tech students" },
      { icon: Landmark, label: "Ministry of Education" },
    ],
    status: { label: "Ends in 4d 12h", variant: "urgent" },
    variant: "standard",
    ctaLabel: "Apply Now",
    icon: GraduationCap,
  },
  {
    id: "sisfs",
    slug: "startup-india-seed-fund",
    title: "Startup India Seed Fund Scheme (SISFS)",
    description:
      "Financial assistance to startups for proof of concept, prototype development, product trials, and market entry.",
    category: "entrepreneurs",
    highlights: [],
    variant: "featured",
    ctaLabel: "Start Registration",
    icon: Rocket,
    featuredImageKey: "sisfsFeatured",
    featuredStats: [
      { label: "Max Benefit", value: "₹50 Lakhs" },
      { label: "Stage", value: "Early Seed" },
    ],
  },
  {
    id: "pm-kisan",
    slug: "pm-kisan-samman-nidhi",
    title: "PM-Kisan Samman Nidhi",
    description:
      "Direct income support of ₹6,000 per year in three equal installments to small farmer families.",
    category: "farmers",
    highlights: [
      { icon: Leaf, label: "For Land-holding farmers" },
      { icon: Wallet, label: "Direct Bank Transfer (DBT)" },
      { icon: Landmark, label: "Min. of Agriculture & FW" },
    ],
    status: { label: "Rolling Basis", variant: "rolling" },
    variant: "standard",
    ctaLabel: "Check Status",
    icon: Sprout,
  },
  {
    id: "lakhpati-didi",
    slug: "lakhpati-didi",
    title: "Lakhpati Didi Scheme",
    description:
      "Skill training and financial literacy for women in Self-Help Groups (SHGs) to earn ₹1 Lakh annually.",
    category: "women",
    highlights: [
      { icon: TrendingUp, label: "Skill Development Focus" },
      { icon: Users, label: "Target: 3 Crore Women" },
    ],
    status: { label: "New Launch", variant: "new" },
    variant: "accent",
    ctaLabel: "Join SHG Portal",
    icon: Users,
  },
  {
    id: "skill-india-digital",
    slug: "skill-india-digital",
    title: "Skill India Digital",
    description:
      "A unified platform for skill development, job discovery, and entrepreneurship support for youth.",
    category: "students",
    highlights: [
      { icon: Verified, label: "Certified Courses" },
      { icon: Building2, label: "Job Matching AI" },
    ],
    status: { label: "Open Now", variant: "open" },
    variant: "standard",
    ctaLabel: "Explore Courses",
    icon: GraduationCap,
  },
  {
    id: "naps",
    slug: "naps-apprenticeship",
    title: "NAPS Apprenticeship",
    description:
      "On-the-job training with a monthly stipend to bridge the gap between education and industry.",
    category: "students",
    highlights: [
      { icon: HandCoins, label: "Stipend Support" },
      { icon: Building2, label: "Industry Exposure" },
    ],
    status: { label: "Active", variant: "active" },
    variant: "standard",
    ctaLabel: "Find Vacancies",
    icon: Wrench,
  },
  {
    id: "digital-india-internship",
    slug: "digital-india-internship",
    title: "Digital India Internship",
    description:
      "Opportunity for students to work on live projects under the Ministry of Electronics & IT.",
    category: "students",
    highlights: [
      { icon: Calendar, label: "2-3 Months Duration" },
      { icon: Verified, label: "Govt. Certificate" },
    ],
    status: { label: "Closing Soon", variant: "closing" },
    variant: "standard",
    ctaLabel: "Apply Now",
    icon: Laptop,
  },
];

export const FEATURED_SCHEME = SCHEME_LISTINGS.find(
  (scheme) => scheme.variant === "featured",
)!;

export const STANDARD_SCHEME_LISTINGS = SCHEME_LISTINGS.filter(
  (scheme) => scheme.variant !== "featured",
);
