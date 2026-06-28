import type { TrendingResource } from "@/types/results";
import {
  FileText,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

export const RESULTS_HUB_TABS = [
  { id: "results" as const, label: "Examination Results" },
  { id: "admit" as const, label: "Admit Card Center" },
];

export const SPONSORED_RESULTS_OFFER = {
  title: "Master Cloud Computing",
  description:
    "Get certified in AWS & Azure with our 12-week intensive bootcamp. 95% placement rate.",
  ctaLabel: "Learn More",
};

export const SPONSORED_ADMIT_OFFER = {
  title: "Master Cloud Computing",
  description:
    "Get certified with the industry-leading course designed by experts at JobKaro Academy.",
  ctaLabel: "Explore Curriculum",
};

export const TRENDING_RESOURCES: TrendingResource[] = [
  { id: "resume", label: "Resume Builder 2024", icon: FileText },
  { id: "interview", label: "Interview Prep Guide", icon: GraduationCap },
  { id: "salary", label: "Salary Insights Tool", icon: TrendingUp },
];
