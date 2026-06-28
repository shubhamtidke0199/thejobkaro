import {
  Briefcase,
  CheckCircle,
  FileText,
  HandCoins,
  HelpCircle,
  IdCard,
  Landmark,
  Mail,
  Phone,
  Receipt,
  Verified,
} from "lucide-react";

import type {
  RelatedScheme,
  SchemeDetail,
  SchemeHelpContact,
} from "@/types/schemes";

export const SCHEME_DETAILS: Record<string, SchemeDetail> = {
  "startup-india-seed-fund": {
    slug: "startup-india-seed-fund",
    title: "Startup India Seed Fund Scheme (SISFS)",
    summary:
      "Financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization.",
    tags: [
      { label: "Recommended", variant: "primary" },
      { label: "Central Govt", variant: "secondary" },
      { label: "Deadline: 31 Dec 2024", variant: "neutral" },
    ],
    quickFacts: [
      { label: "Max Benefit", value: "₹50 Lakhs", icon: HandCoins },
      { label: "Eligibility", value: "Early Stage", icon: Verified },
      { label: "Ministry", value: "Commerce", icon: Landmark },
    ],
    about: [
      "The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. This enables startups to graduate to a level where they will be able to raise investments from angel investors or venture capitalists or seek loans from commercial banks or financial institutions.",
      "The government has approved a budget of ₹945 Crore for the Startup India Seed Fund Scheme for a period of 4 years starting from 2021-22.",
    ],
    eligibility: [
      {
        title: "DPIIT Recognition",
        description:
          "Startup must be recognized by DPIIT, incorporated not more than 2 years ago.",
      },
      {
        title: "Innovation Quotient",
        description:
          "Must have a business idea to develop a product or a service with a market fit.",
      },
      {
        title: "Tech-Enabled Solutions",
        description:
          "Preferred sectors include healthtech, edtech, agriculture, and waste management.",
      },
      {
        title: "Max Fund History",
        description:
          "Startup should not have received more than ₹10 lakhs of monetary support.",
      },
    ],
    benefits: [
      {
        title: "₹20 Lakhs for Prototype",
        description:
          "Grant for validation of Proof of Concept, or prototype development, or product trials.",
        imageKey: "benefitPrototype",
      },
      {
        title: "₹50 Lakhs for Market Entry",
        description:
          "Investment for market entry, commercialization, or scaling up through debt-linked instruments.",
        imageKey: "benefitMarketEntry",
      },
    ],
    documents: [
      { label: "DPIIT Recognition Certificate", icon: FileText },
      { label: "Founders' ID and Address Proofs", icon: IdCard },
      { label: "Pitch Deck (Max 10 slides)", icon: Briefcase },
      {
        label: "Financial Statements of the previous year (if applicable)",
        icon: Receipt,
      },
    ],
    applicationSteps: [
      {
        step: 1,
        title: "Create Profile",
        description:
          "Register on Startup India Portal and obtain DPIIT Recognition number.",
      },
      {
        step: 2,
        title: "Select Incubator",
        description:
          "Choose up to 3 incubators as per your preference and location for evaluation.",
      },
      {
        step: 3,
        title: "Fill Application",
        description:
          "Complete the online form with your pitch deck and required financial data.",
      },
      {
        step: 4,
        title: "Review & Pitch",
        description:
          "Incubators review your application and invite you for a virtual/physical pitch session.",
      },
    ],
  },
};

export const RELATED_SCHEMES: RelatedScheme[] = [
  {
    id: "pmegp",
    title: "PMEGP Scheme",
    description:
      "Prime Minister's Employment Generation Programme for rural youth.",
    href: "#",
  },
  {
    id: "stand-up-india",
    title: "Stand Up India",
    description:
      "Loans for SC/ST and Women entrepreneurs for greenfield enterprises.",
    href: "#",
  },
  {
    id: "credit-guarantee-fund",
    title: "Credit Guarantee Fund",
    description: "Guarantee for collateral-free credit to MSME sector.",
    href: "#",
  },
];

export const SCHEME_HELP_CONTACTS: SchemeHelpContact[] = [
  {
    type: "faq",
    title: "FAQs",
    detail: "Read commonly asked questions about SISFS.",
    icon: HelpCircle,
  },
  {
    type: "email",
    title: "Email Support",
    detail: "seedfund-india@gov.in",
    icon: Mail,
  },
  {
    type: "phone",
    title: "Helpline",
    detail: "1800-115-565 (Toll Free)",
    icon: Phone,
  },
];

export function getSchemeDetail(slug: string): SchemeDetail | undefined {
  return SCHEME_DETAILS[slug];
}

export function getSchemeDetailSlugs(): string[] {
  return Object.keys(SCHEME_DETAILS);
}

export const schemeDetailSlugs = new Set(getSchemeDetailSlugs());

export function schemeDetailHref(slug: string): string {
  return `/schemes/${slug}`;
}
