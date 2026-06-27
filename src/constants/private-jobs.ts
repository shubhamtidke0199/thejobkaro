import type {
  ExperienceOption,
  FilterOption,
  SeoStat,
} from "@/types/private-jobs";

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

export const SEO_STATS: SeoStat[] = [
  { value: "10k+", label: "Active Listings" },
  { value: "500+", label: "Verified Employers" },
  { value: "24h", label: "Avg. Response Time" },
  { value: "₹50L+", label: "Top Salary Package" },
];

export const SEO_CONTENT =
  "JobKaro provides a curated ecosystem for high-growth talent looking for verified private sector opportunities. Our platform bridges the gap between emerging startups and established MNCs with skilled professionals. Whether you are looking for remote work in software development, on-site roles in operations, or executive positions in marketing, our advanced filter system ensures you find the most relevant roles based on your experience, salary expectations, and location.";
