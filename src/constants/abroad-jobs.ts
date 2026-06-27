import { ArrowRightLeft, BarChart3, ShieldCheck } from "lucide-react";

import type {
  CareerSuccessTool,
  FilterOption,
  SalaryRangeConfig,
} from "@/types/abroad-jobs";

export const REGION_OPTIONS: FilterOption[] = [
  { label: "Europe", value: "europe" },
  { label: "North America", value: "north-america" },
  { label: "Middle East", value: "middle-east" },
  { label: "APAC", value: "apac" },
];

export const VISA_RELOCATION_OPTIONS: FilterOption[] = [
  { label: "Visa Sponsorship", value: "visa-sponsorship" },
  { label: "Relocation Covered", value: "relocation-covered" },
];

export const SORT_OPTIONS: FilterOption[] = [
  { label: "Newest First", value: "newest" },
  { label: "Highest Salary", value: "salary" },
];

export const SALARY_RANGE: SalaryRangeConfig = {
  min: 40,
  max: 250,
  default: 80,
  minLabel: "$40k",
  maxLabel: "$250k",
};

export const CAREER_SUCCESS_TOOLS: CareerSuccessTool[] = [
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    description:
      "Expert documentation support for H1-B, Blue Card, and Golden Visa applications.",
    type: "link",
    href: "#",
    linkLabel: "Learn More",
    icon: ShieldCheck,
    iconColorClass: "text-primary",
    iconBgClass: "bg-primary-container/20",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description:
      "Real-time exchange rates to calculate your net income in over 150+ global currencies.",
    type: "converter",
    icon: ArrowRightLeft,
    iconColorClass: "text-secondary",
    iconBgClass: "bg-secondary-container/20",
  },
  {
    id: "cost-of-living",
    title: "Cost of Living",
    description:
      "Compare rent, groceries, and leisure expenses across 5,000+ cities globally.",
    type: "link",
    href: "#",
    linkLabel: "Explore Cities",
    icon: BarChart3,
    iconColorClass: "text-tertiary",
    iconBgClass: "bg-tertiary-container/20",
  },
];
