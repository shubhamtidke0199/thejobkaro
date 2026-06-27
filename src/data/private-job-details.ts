import {
  Briefcase,
  Calendar,
  Dumbbell,
  Globe,
  Layers,
  Rocket,
  Shield,
  TrendingUp,
  Wallet,
  Workflow,
} from "lucide-react";

import type {
  PrivateJobDetail,
  SimilarPrivateJob,
  SponsoredCareerOffer,
} from "@/types/private-jobs";

export const PRIVATE_JOB_DETAILS: PrivateJobDetail[] = [
  {
    slug: "scalex-lead-product-designer",
    title: "Lead Product Designer",
    company: "ScaleX AI",
    location: "San Francisco / Remote",
    salary: "$180k – $240k",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuASQztyslm_aexxXFPkB7LxKXPzd-CJhQd9-_BMkVzeTb_AqGzVI8u-nnZNchcPpTGY9dGWDk5IFhlN3NKDbX7TuqNUi-hotVbqe8CUoUYbr59UQhYisyPPf3RJCh_TymZUzimG_6-iCAl03rcg8owtL-GOyfTpaYfl6654nn5iDG0byYyENQExI-eHgP8BE9AjS49HUxv2mVPQY6KuvCBIRG4GdFXQSEBWl0bgUqxZZK15sY2LIlPmX-bD42ulMnbMM7HmkSUGmVeD",
    logoAlt: "ScaleX AI company logo",
    badge: "Hot",
    highlights: [
      { label: "Job Type", value: "Full-time", icon: Briefcase },
      { label: "Experience", value: "5+ years", icon: TrendingUp },
      { label: "Department", value: "Product Design", icon: Layers },
      { label: "Posted Date", value: "2 days ago", icon: Calendar },
    ],
    aboutRole: [
      "ScaleX AI is at the forefront of the generative revolution, building the infrastructure that powers tomorrow's intelligent applications. As our Lead Product Designer, you won't just be designing interfaces; you'll be defining the mental models for how humans interact with complex AI systems.",
      "We are looking for a visionary designer who thrives at the intersection of high-precision utility and emotional resonance. You will lead the design effort for our core developer platform, ensuring that complex data workflows feel as intuitive as a simple workspace app.",
    ],
    responsibilities: [
      "Own the end-to-end design process for our core AI Orchestration platform, from research to high-fidelity implementation.",
      "Collaborate directly with the CTO and Head of Product to translate complex technical capabilities into elegant user experiences.",
      'Standardize and evolve the ScaleX Design System, maintaining a standard of "New Silicon Valley" minimalism across all products.',
    ],
    requirements: [
      "5+ years of experience in product design, ideally within SaaS, FinTech, or Developer Tools.",
      "A portfolio demonstrating high-precision utility, sophisticated typography, and complex data visualization.",
      "Proficiency in Figma and experience building/managing systemic design libraries.",
    ],
    perks: [
      { label: "Premium Health, Vision & Dental", icon: Shield },
      { label: "Competitive Equity Package", icon: Wallet },
      { label: "Remote-First Culture", icon: Globe },
      { label: "$150/mo Wellness Stipend", icon: Dumbbell },
    ],
    companyProfile: {
      name: "ScaleX AI",
      description:
        "The infrastructure layer for Enterprise AI. We help Global 2000 companies deploy, monitor, and scale LLM-powered applications with confidence.",
      size: "50 - 150 employees",
      industry: "Artificial Intelligence",
      websiteLabel: "scalex.ai",
      websiteUrl: "#",
    },
    hiringManager: {
      name: "Sarah Chen",
      title: "Head of Design",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNuzuzp3DWvcqRV90Vrhm7nosZNjRySeJiyGpnNMqP51ASZ0K6IvL5Nrmxz7CflzyfwmxzTHGesorDA6QXPO95966O_TwncV9D5mYsYsq6gdRHVj-YXJW-SQBYaZwGj_cPRhRVOlOxyVQoSMhofEYWdtPqSkx_NUjPMO89a06JhRcdKfaweawusJ-6p8uOcisUbKKWbW3D_KjzicgqKI0KPR-WjPLle4YJB2z2upb6GG7npPi6Msj-nAhY1RtDm_PjcqmvDCXWWClq",
      avatarAlt: "Sarah Chen, Head of Design at ScaleX AI",
    },
  },
];

export const SIMILAR_PRIVATE_JOBS: SimilarPrivateJob[] = [
  {
    id: "vectorflow-ui-engineer",
    title: "Senior UI Engineer",
    company: "VectorFlow",
    salary: "$160k - $210k",
    href: "#",
    icon: Rocket,
  },
  {
    id: "modellayer-staff-designer",
    title: "Staff Product Designer",
    company: "ModelLayer",
    salary: "$200k - $260k",
    href: "#",
    icon: Workflow,
  },
];

export const SPONSORED_CAREER_OFFER: SponsoredCareerOffer = {
  title: "Accelerate Your Search",
  description:
    "Get premium job coaching and resume audits from Silicon Valley experts.",
  ctaLabel: "Explore Career Services",
};

export function getPrivateJobDetail(
  slug: string,
): PrivateJobDetail | undefined {
  return PRIVATE_JOB_DETAILS.find((detail) => detail.slug === slug);
}

export function getPrivateJobDetailSlugs(): string[] {
  return PRIVATE_JOB_DETAILS.map((detail) => detail.slug);
}

export function hasPrivateJobDetail(slug: string): boolean {
  return PRIVATE_JOB_DETAILS.some((detail) => detail.slug === slug);
}

export function privateJobDetailPath(detailSlug?: string): string | undefined {
  if (!detailSlug || !hasPrivateJobDetail(detailSlug)) {
    return undefined;
  }

  return `/private-jobs/${detailSlug}`;
}
