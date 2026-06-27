import type { LucideIcon } from "lucide-react";
import { Code, Palette } from "lucide-react";

export interface FilterOption {
  label: string;
  value: string;
}

export interface ExperienceOption {
  label: string;
  value: string;
}

export interface RecommendedJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  icon: LucideIcon;
  matchScore?: number;
}

export interface PrivateJob {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
  postedAt?: string;
  deadline?: string;
  bookmarked?: boolean;
}

export interface SponsoredJobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  logo: string;
  logoAlt: string;
  badge?: string;
}

export interface SeoStat {
  value: string;
  label: string;
}

export const LOCATION_OPTIONS: FilterOption[] = [
  { label: "Remote", value: "remote" },
  { label: "Bengaluru, India", value: "bengaluru" },
  { label: "Hyderabad, India", value: "hyderabad" },
  { label: "Mumbai, India", value: "mumbai" },
  { label: "Pune, India", value: "pune" },
];

export const EXPERIENCE_OPTIONS: ExperienceOption[] = [
  { label: "Entry Level (0-2 yrs)", value: "entry" },
  { label: "Mid-Senior (3-5 yrs)", value: "mid" },
  { label: "Expert (6+ yrs)", value: "expert" },
];

export const SORT_OPTIONS: FilterOption[] = [
  { label: "Most Recent", value: "recent" },
  { label: "High Salary", value: "salary" },
  { label: "Top Rated", value: "rated" },
];

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
    company: "Creative Pulse",
    location: "Bengaluru",
    salary: "₹18L+",
    icon: Palette,
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

export const SEO_STATS: SeoStat[] = [
  { value: "10k+", label: "Active Listings" },
  { value: "500+", label: "Verified Employers" },
  { value: "24h", label: "Avg. Response Time" },
  { value: "₹50L+", label: "Top Salary Package" },
];

export const SEO_CONTENT =
  "JobKaro provides a curated ecosystem for high-growth talent looking for verified private sector opportunities. Our platform bridges the gap between emerging startups and established MNCs with skilled professionals. Whether you are looking for remote work in software development, on-site roles in operations, or executive positions in marketing, our advanced filter system ensures you find the most relevant roles based on your experience, salary expectations, and location.";
