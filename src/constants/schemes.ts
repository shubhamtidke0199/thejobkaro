import {
  CircleCheckBig,
  ClipboardList,
  FileText,
  Search,
} from "lucide-react";

import type {
  SchemeApplicationStep,
  SchemeFilterTab,
  SchemeQuickSearch,
  SponsoredSchemeOffer,
} from "@/types/schemes";

export const SCHEME_CATEGORY_FILTERS: SchemeFilterTab[] = [
  { label: "All Schemes", value: "all" },
  { label: "Students", value: "students" },
  { label: "Entrepreneurs", value: "entrepreneurs" },
  { label: "Farmers", value: "farmers" },
  { label: "Women-centric", value: "women" },
  { label: "Healthcare", value: "healthcare" },
];

export const SCHEME_QUICK_SEARCHES: SchemeQuickSearch[] = [
  { label: "PM Research Fellowship", icon: Search },
  { label: "Startup India Seed Fund", icon: Search },
];

export const SCHEME_APPLICATION_STEPS: SchemeApplicationStep[] = [
  {
    title: "Check Eligibility",
    description:
      "Use our filters to find schemes matching your demographic and needs.",
    icon: Search,
    active: true,
  },
  {
    title: "Prepare Documents",
    description:
      "Keep Aadhar, Income Certificate, and Educational docs ready in PDF.",
    icon: FileText,
  },
  {
    title: "Digital Filing",
    description:
      "Navigate to the official Ministry portal via our secure Apply links.",
    icon: ClipboardList,
  },
  {
    title: "Track Approval",
    description:
      "Enter your application ID on our Track Status page for updates.",
    icon: CircleCheckBig,
  },
];

export const SPONSORED_SCHEME_LISTING_OFFER: SponsoredSchemeOffer = {
  title: "Upskill with JobKaro AI",
  description:
    "Match your profile with government schemes automatically using our AI analysis engine.",
  ctaLabel: "Go Premium",
};

export const SPONSORED_SCHEME_DETAIL_OFFER: SponsoredSchemeOffer = {
  title: "Scale your Startup with Cloud Credits",
  description:
    "Get up to $100k in AWS credits and technical support through our partner network.",
  ctaLabel: "Learn More",
};
