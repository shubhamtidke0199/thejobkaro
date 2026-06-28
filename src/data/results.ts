import {
  Landmark,
  PiggyBank,
  School,
  Wrench,
} from "lucide-react";

import { RESULTS_IMAGES } from "@/constants/images";
import type { AdmitCardListing, ExamResultListing } from "@/types/results";

export const EXAM_RESULTS: ExamResultListing[] = [
  {
    id: "ssc-cgl-tier1-2024",
    title: "SSC CGL Tier-1 Final Result 2024",
    organization: "Staff Selection Commission",
    organizationDetail: "Central Government",
    status: { label: "Available", variant: "available" },
    releasedAt: "Oct 24, 2024",
    ctaLabel: "View Scorecard",
    ctaVariant: "primary",
    logo: RESULTS_IMAGES.sscLogo,
    logoAlt: "SSC Logo",
  },
  {
    id: "ibps-po-prelims",
    title: "IBPS PO Prelims Result",
    organization: "Institute of Banking Personnel Selection",
    status: { label: "Releasing Nov 20", variant: "releasing" },
    ctaLabel: "Notify Me",
    ctaVariant: "outline",
    icon: Landmark,
  },
  {
    id: "upsc-cse-prelims-2025",
    title: "UPSC CSE Prelims 2025",
    organization: "Union Public Service Commission",
    status: { label: "TBA", variant: "tba" },
    ctaLabel: "Get Alert",
    ctaVariant: "outline",
    icon: School,
  },
];

export const ADMIT_CARDS: AdmitCardListing[] = [
  {
    id: "upsc-cse-prelims-2024",
    title: "UPSC Civil Services Prelims 2024",
    status: { label: "Available", variant: "available" },
    examDate: "Nov 15, 2024",
    detail: "Venue details updated",
    ctaLabel: "Download",
    ctaVariant: "download",
    icon: Landmark,
    iconTone: "primary",
  },
  {
    id: "ssc-chsl-tier1-2024",
    title: "SSC CHSL Tier-1 Admit Card 2024",
    status: { label: "Releasing Nov 20", variant: "releasing" },
    examDate: "Dec 1, 2024",
    detail: "Center allocation in progress",
    ctaLabel: "Notify Me",
    ctaVariant: "notify",
    icon: Wrench,
    iconTone: "secondary",
  },
  {
    id: "rbi-grade-b-phase2",
    title: "RBI Grade B Phase II Admit Card",
    status: { label: "TBA", variant: "tba" },
    examDate: "To be announced",
    examDatePending: true,
    detail: "Stay tuned for official circular",
    ctaLabel: "Get Alert",
    ctaVariant: "alert",
    icon: PiggyBank,
    iconTone: "tertiary",
  },
];
