import type { FilterOption } from "@/types/internships";

export const INTERNSHIP_TYPE_OPTIONS: FilterOption[] = [
  { label: "Full-time", value: "full-time", defaultChecked: true },
  { label: "Part-time", value: "part-time" },
  { label: "Remote", value: "remote" },
  { label: "Virtual", value: "virtual" },
];

export const DURATION_OPTIONS: FilterOption[] = [
  { label: "1-3 Months", value: "1-3" },
  { label: "3-6 Months", value: "3-6", defaultChecked: true },
  { label: "6+ Months", value: "6-plus" },
];

export const SORT_OPTIONS: FilterOption[] = [
  { label: "Newest First", value: "newest" },
  { label: "Highest Stipend", value: "stipend" },
  { label: "Deadline Imminent", value: "deadline" },
];
