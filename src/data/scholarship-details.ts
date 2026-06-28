import {
  Clock,
  Globe,
  Star,
} from "lucide-react";

import { SCHOLARSHIP_IMAGES } from "@/constants/images";
import type { ScholarshipDetail, SimilarScholarship } from "@/types/scholarships";

export const SIMILAR_SCHOLARSHIPS: SimilarScholarship[] = [
  {
    id: "hdfc-parivartan",
    organization: "HDFC Bank Parivartan",
    title: "ECSS Programme 2024",
    summary: "₹75,000 • Merit-based",
    href: "#",
  },
  {
    id: "tata-cornell",
    organization: "Tata Scholarship",
    title: "Cornell University Support",
    summary: "Full Tuition • Needs-based",
    href: "#",
  },
  {
    id: "adobe-women-tech",
    organization: "Adobe Women in Tech",
    title: "Computer Science Grant",
    summary: "$10,000 • Tech focused",
    href: "#",
  },
];

export const SCHOLARSHIP_DETAILS: Record<string, ScholarshipDetail> = {
  "reliance-foundation-ug": {
    slug: "reliance-foundation-ug",
    organization: "Reliance Foundation",
    title: "Undergraduate Scholarship 2024-25",
    logo: SCHOLARSHIP_IMAGES.relianceDetailLogo,
    logoAlt: "Reliance Foundation logo",
    grantorLogo: SCHOLARSHIP_IMAGES.relianceGrantorLogo,
    grantorLogoAlt: "Reliance Foundation grantor logo",
    grantorDescription:
      "India's largest private sector foundation, dedicated to addressing India's development challenges through innovative and sustainable solutions.",
    grantorWebsiteLabel: "Visit Website",
    amount: "Up to ₹2,00,000",
    deadline: "Oct 15, 2024",
    education: "1st Year UG",
    appliedCount: "5,420 students applied recently",
    highlights: [
      { label: "Region", value: "Pan India", icon: Globe },
      { label: "Type", value: "Merit-based", icon: Star },
      { label: "Duration", value: "Degree Program", icon: Clock },
    ],
    overview:
      "The Reliance Foundation Undergraduate Scholarship aims to support meritorious students from all over India to pursue their undergraduate education in any stream. The program focuses on empowering young minds who demonstrate exceptional potential and a commitment to positive social change. Beyond financial aid, scholars gain access to a vibrant community and mentorship opportunities.",
    eligibility: [
      "Must be an Indian citizen currently residing in India.",
      "Enrolled in the first year of a full-time undergraduate degree program.",
      "Minimum 60% marks in the 12th standard board examination.",
      "Annual household income must be less than ₹15,00,000 (preference for < ₹2.5 Lakhs).",
    ],
    benefits: [
      {
        title: "Financial Support",
        description:
          "Total grant of up to ₹2,00,000 over the duration of the degree to cover tuition and study materials.",
      },
      {
        title: "Skill Development",
        description:
          "Exclusive access to leadership workshops, webinars, and professional networking events.",
      },
      {
        title: "Mentorship",
        description:
          "One-on-one guidance from industry experts and Reliance Foundation alumni.",
      },
      {
        title: "Alumni Network",
        description:
          "Lifetime membership to an elite circle of scholars and high-achievers across India.",
      },
    ],
    applicationSteps: [
      {
        title: "Online Registration",
        description:
          "Submit basic details on the foundation portal to generate a unique ID.",
        active: true,
      },
      {
        title: "Aptitude Test",
        description:
          "A 60-minute online assessment covering logical reasoning and verbal ability.",
      },
      {
        title: "Document Verification",
        description:
          "Upload academic transcripts and income certificates for final validation.",
      },
      {
        title: "Final Selection",
        description:
          "Selected scholars will be announced via the portal and notified by email.",
      },
    ],
    similarScholarships: SIMILAR_SCHOLARSHIPS,
    supportEmail: "support@jobkaro.com",
  },
};

export function getScholarshipDetail(slug: string): ScholarshipDetail | undefined {
  return SCHOLARSHIP_DETAILS[slug];
}

export function getScholarshipDetailSlugs(): string[] {
  return Object.keys(SCHOLARSHIP_DETAILS);
}

export const scholarshipDetailSlugs = new Set(getScholarshipDetailSlugs());

export function scholarshipDetailHref(slug: string): string {
  return `/scholarships/${slug}`;
}
