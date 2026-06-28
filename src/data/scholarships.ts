import { Building2, FileText } from "lucide-react";

import { SCHOLARSHIP_IMAGES } from "@/constants/images";
import type {
  FeaturedScholarship,
  GovernmentScholarship,
  InternationalScholarship,
  PremiumScholarship,
} from "@/types/scholarships";

export const FEATURED_SCHOLARSHIP: FeaturedScholarship = {
  id: "reliance-foundation-ug",
  title: "Reliance Foundation Undergraduate Scholarship",
  description:
    "Empowering India's brightest minds in Technology & Social Impact. Pan-India coverage for high-potential students.",
  organization: "Reliance Foundation",
  logo: SCHOLARSHIP_IMAGES.relianceLogo,
  logoAlt: "Reliance Logo",
  closingLabel: "Closing in 48h",
  stats: [
    { label: "Amount", value: "₹2,00,000" },
    { label: "Education", value: "1st Year UG" },
    { label: "Region", value: "Pan India" },
    { label: "Type", value: "Merit-based" },
  ],
  eligibility: "Minimum 60% in Class 12, Enrolled in Degree.",
  ctaLabel: "Apply Now",
};

export const PREMIUM_SCHOLARSHIP: PremiumScholarship = {
  id: "chevening",
  badge: "Premium Opportunity",
  title: "Chevening International Awards",
  description:
    "Fully funded master's degree in the UK for future global leaders and change-makers.",
  benefits: [
    "Full Tuition Fees Covered",
    "Monthly Living Stipend",
    "Return Economy Airfare",
  ],
  ctaLabel: "Check Eligibility",
};

export const GOVERNMENT_SCHOLARSHIPS: GovernmentScholarship[] = [
  {
    id: "post-matric-minorities",
    title: "Post-Matric Scholarship for Minorities",
    organization: "Ministry of Minority Affairs, Govt. of India",
    closingLabel: "Closing Dec 31, 2026",
    amount: "₹10,000 / year",
    level: "Class 11 to PhD",
    icon: Building2,
  },
  {
    id: "nsp-pre-matric-sc",
    title: "NSP Pre-Matric SC Scholarship",
    organization: "Ministry of Social Justice & Empowerment",
    closingLabel: "Closing Jan 15, 2027",
    amount: "₹4,000 / year",
    level: "Class 9 & 10",
    icon: FileText,
  },
];

export const INTERNATIONAL_SCHOLARSHIPS: InternationalScholarship[] = [
  {
    id: "fulbright-nehru",
    title: "Fulbright-Nehru Master's",
    description:
      "Comprehensive funding for high-achieving Indian students to pursue master's degrees in the United States.",
    region: "USA",
    fundingLabel: "Fully Funded",
    imageKey: "fulbright",
  },
  {
    id: "daad",
    title: "DAAD Scholarships",
    description:
      "Excellence awards for postgraduate studies and research for international students in German universities.",
    region: "Germany",
    fundingLabel: "€934 / Month",
    imageKey: "daad",
  },
  {
    id: "australia-awards",
    title: "Australia Awards",
    description:
      "Prestigious international scholarships funded by the Australian Govt for long term study in Australia.",
    region: "Australia",
    fundingLabel: "100% Waiver",
    imageKey: "australia",
  },
];
