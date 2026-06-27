import {
  GraduationCap,
  Landmark,
  TrainFront,
} from "lucide-react";

import type {
  GovernmentJobDetail,
  RelatedOpportunity,
  SponsoredStudyOffer,
} from "@/types/government-jobs";

export const GOVERNMENT_JOB_DETAILS: GovernmentJobDetail[] = [
  {
    slug: "ssc-cgl-2024",
    title: "SSC CGL 2024",
    subtitle:
      "Staff Selection Commission - Combined Graduate Level Examination",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6yGl1lSx_86IEae8m654FpnkDgRccW2Dc7vhWYb4cC9Ecv7BvZZwftmSjuncoxtbIjJI_uC7rdPB4jFh0re7Q4krrMj7dvpFOd2smRFuxQxstspy3nWV4m6QTz7M-a2gZljTH2YWtDLp-4mp3XW0lbITmXmUaHsT-kW79hDo0oyDJS6t-Cq91B65w0wNfNqosPxOIm_k3sHSB1B7_ic_PzSWcoCFJcHMM9EE6VLOhMJTW4llAnPqmi5NGMFE3mMG_aRemeRVZFzs6",
    logoAlt: "Staff Selection Commission SSC logo",
    metaTags: [
      { label: "Full-time Govt.", variant: "primary" },
      { label: "Across India", variant: "secondary" },
      { label: "₹44,900 - ₹1,42,400", variant: "secondary" },
    ],
    overview:
      "The Staff Selection Commission (SSC) has released the official notification for the Combined Graduate Level (CGL) Examination, 2024. This prestigious national-level competitive exam is conducted to recruit Group B and Group C officers for various ministries, departments, and organizations of the Government of India. It offers a gateway to some of the most sought-after careers in the Indian bureaucracy.",
    stats: [
      { label: "Total Vacancies", value: "17,727+", highlight: true },
      { label: "Education Level", value: "Any Graduate" },
    ],
    eligibility: [
      {
        label: "Nationality",
        description: "Must be a citizen of India, Nepal, or Bhutan.",
      },
      {
        label: "Age Limit",
        description:
          "18 to 32 years (varies by post; age relaxation applies as per govt norms).",
      },
      {
        label: "Qualification",
        description:
          "Bachelor's Degree in any discipline from a recognized university.",
      },
    ],
    importantDates: [
      { event: "Notification Release", date: "24th June 2024" },
      { event: "Online Application Starts", date: "24th June 2024" },
      {
        event: "Last Date to Apply",
        date: "24th July 2024",
        urgent: true,
        badge: "CLOSING SOON",
      },
      { event: "Tier-I CBT Exam", date: "Sept-Oct 2024" },
    ],
    selectionProcess: [
      {
        step: 1,
        title: "Tier-I: Computer Based Examination",
        description:
          "Objective type multiple choice questions. Qualifying in nature.",
        active: true,
      },
      {
        step: 2,
        title: "Tier-II: Objective Type & Data Entry",
        description:
          "Final merit is decided based on Tier-II performance. Includes Paper-I, Paper-II, and Paper-III.",
      },
      {
        step: 3,
        title: "Document Verification (DV)",
        description:
          "Verification of physical documents at the respective regional offices.",
      },
    ],
    faqs: [
      {
        question: "Is there a negative marking in the SSC CGL exam?",
        answer:
          "Yes, there is a negative marking of 0.50 marks for each wrong answer in Tier-I. In Tier-II, there is negative marking of 1 mark for each wrong answer in Section-I, Section-II and Module-I of Section-III of Paper-I.",
      },
      {
        question: "Can final year students apply for SSC CGL?",
        answer:
          "The candidates must possess Essential qualification on or before the cut-off date mentioned in the notification. Usually, final year students are eligible if their results are declared before the cut-off.",
      },
    ],
    application: {
      endsLabel: "Application ends in 12 days",
      progressPercent: 65,
    },
  },
];

export const RELATED_OPPORTUNITIES: RelatedOpportunity[] = [
  {
    id: "ibps-po-2024",
    title: "IBPS PO 2024",
    category: "Bank Recruitment",
    deadlineLabel: "Ends in 5 days",
    deadlineUrgent: true,
    href: "#",
    icon: Landmark,
  },
  {
    id: "pm-scholarship",
    title: "PM Scholarship Scheme",
    category: "Education Fund",
    deadlineLabel: "Ends in 22 days",
    href: "#",
    icon: GraduationCap,
  },
  {
    id: "rrb-ntpc",
    title: "RRB NTPC Exam",
    category: "Railway Jobs",
    deadlineLabel: "Starting Soon",
    href: "#",
    icon: TrainFront,
  },
];

export const SPONSORED_STUDY_OFFER: SponsoredStudyOffer = {
  title: "Crack SSC CGL 2024",
  description:
    "Get 30% off on premium test series and comprehensive study material.",
  ctaLabel: "Claim Offer",
};

export function getGovernmentJobDetail(
  slug: string,
): GovernmentJobDetail | undefined {
  return GOVERNMENT_JOB_DETAILS.find((detail) => detail.slug === slug);
}

export function getGovernmentJobDetailSlugs(): string[] {
  return GOVERNMENT_JOB_DETAILS.map((detail) => detail.slug);
}
