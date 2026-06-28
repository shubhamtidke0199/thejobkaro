import type { ScholarshipFilterOption } from "@/types/scholarships";

export const EDUCATION_LEVEL_FILTERS: ScholarshipFilterOption[] = [
  { label: "Education Level", value: "" },
  { label: "School", value: "school" },
  { label: "Undergraduate", value: "undergraduate" },
  { label: "Postgraduate", value: "postgraduate" },
  { label: "PhD", value: "phd" },
];

export const SCHOLARSHIP_TYPE_FILTERS: ScholarshipFilterOption[] = [
  { label: "Scholarship Type", value: "" },
  { label: "Merit-based", value: "merit" },
  { label: "Need-based", value: "need" },
  { label: "International", value: "international" },
];

export const REGION_FILTERS: ScholarshipFilterOption[] = [
  { label: "Region", value: "" },
  { label: "Pan India", value: "pan-india" },
  { label: "Global", value: "global" },
  { label: "USA/UK", value: "usa-uk" },
];
