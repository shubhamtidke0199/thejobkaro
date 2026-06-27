import { Code, Palette } from "lucide-react";

import type {
  PrivateJob,
  RecommendedJob,
  SponsoredJobListing,
} from "@/types/private-jobs";

export const JOB_LISTING_COUNT = 1248;

export const RECOMMENDED_JOBS: RecommendedJob[] = [
  {
    title: "Senior UI Engineer",
    company: "TechFlow Systems",
    location: "Remote",
    salary: "₹28L+",
    icon: Code,
    matchScore: 98,
  },
  {
    title: "Product Designer",
    company: "ScaleX AI",
    location: "San Francisco (Remote)",
    salary: "$180k – $240k",
    icon: Palette,
    matchScore: 92,
    detailSlug: "scalex-lead-product-designer",
  },
];

export const SPONSORED_JOB: SponsoredJobListing = {
  id: "sponsored-scalex",
  title: "Lead Product Designer",
  company: "ScaleX AI",
  location: "San Francisco (Remote)",
  salary: "$180k – $240k",
  description:
    "Shape the future of generative UI. Join a series-B team backed by top-tier VCs to lead the design systems of tomorrow.",
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNV5M9Hmp_GD2e0Hxqps1I48cGxWs5o_mpCKbG9UnkybxVJ0at0hBRZJMVmNxN1PfgrLDCvw1hwe03H0MLNFRkLvjxwLyz83cBs6nFTo_Il79A7duNR0BhEhnmOuPgH36xkvNTs3hdFudbgVlsefTjeVBPwZededJdV3dYwnboKZWs9k4wnfKEHFm3xgjZ4NO77tR0w_9n9xQ1cJirhDb8bm9daTWRH_lQXLgSySs96w4rSwfNTLcZ8N2wTleWBg65n3ix7R_Ok8Oq",
  logoAlt: "ScaleX AI company logo",
  badge: "HOT",
  detailSlug: "scalex-lead-product-designer",
};

export const PRIVATE_JOBS: PrivateJob[] = [
  {
    id: "zenith-fullstack",
    title: "Senior Full-Stack Engineer",
    company: "Zenith Fintech Solutions",
    location: "Bengaluru, KA",
    jobType: "Full-time",
    salary: "₹24L - ₹36L",
    skills: ["React", "Node.js", "AWS"],
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1K2eUSNCVQnn40xUO11xugUZC1gz3HDcnbq5fk1u8n9ux-ICubITVkDMS8pg0S5lzLCEbT2IsKcFJ_5pkVYVaTiJ3zTCeHA9vxJkF3FNO_mWaIVh_AFZZhHfN9BH_9bL_6uRKoYo2uiOYZWIG6PEQO4hRziXPbvmH9djP5wpp_n-vJl3g43Tj7zdUg-6UeAvmoLDbMWvUv8sNlKuXUbiPEJBJALMmOBJJPL7wx7gKra9EB1tmdbEIBPRVeUUTRIlXDo0S2C0Bp-IL",
    logoAlt: "Zenith Fintech Solutions logo",
    deadline: "4h left",
  },
  {
    id: "locus-flutter",
    title: "Mobile App Developer (Flutter)",
    company: "Locus Logistics",
    location: "Remote",
    jobType: "Contract",
    salary: "₹18L - ₹22L",
    skills: ["Flutter", "Dart", "Firebase"],
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqrofkDi2MopKsZMwPILWfWHq4xmDZ5-UU72XXcNY_5ft_dSS_F0_Zgn-A3uqS8cINnPUEA5jGPGi4hJGhn1azBW7TMXpQhotQ4OInr4Vpk08YG8lRlpJ_B6S69Yzyb7O56Uujp3JfRNUoOm34jk4w9MD2OvkyBXMOsg30T0RcNqV8o1wUlTjNtRJ1X9CsWN4pxVzSWVnMph7WvAJ0UZfBwCNCpvDo-ReHmNyaQ-3b9Ut-7eRbeJcz4UX_pZRbc2supDkLyRmN74GL",
    logoAlt: "Locus Logistics logo",
    postedAt: "Posted 2 days ago",
    bookmarked: true,
  },
  {
    id: "orbit-marketing",
    title: "Marketing Operations Manager",
    company: "Orbit SaaS",
    location: "Mumbai, MH",
    jobType: "Full-time",
    salary: "₹12L - ₹18L",
    skills: ["CRM", "Analytics", "Strategy"],
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Jh5xss2LnFjwpAOsAP-ox1QTakQgqZGTRATzU2VVhlAZflwTH1qWtdLDO64Ak-snoVVbTzYfRVJbkvGnYY_WdZkO2bLk-8k8QIB4OP99gSBfgefGTpzaysljDiETQBEAHVq8SgHHlcxR0WAaDzjcRGHsu74vpkdNTBcb2XBLma4Zqy4cNHWzn5tCSfb-1tuFHiLilMWfF9pRZJ7sLhPVC3wonGDHfiaj-7p_DtCiMOa6vO5HHRpsicREyAxpjTQ61aujEVd27b_3",
    logoAlt: "Orbit SaaS logo",
    postedAt: "Posted 1 week ago",
  },
];
