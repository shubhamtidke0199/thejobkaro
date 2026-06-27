export interface FilterOption {
  label: string;
  value: string;
  defaultChecked?: boolean;
}

export interface RecommendedInternship {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string;
  logo: string;
  logoAlt: string;
  matchScore: number;
  featured?: boolean;
}

export interface InternshipListing {
  id: string;
  title: string;
  company: string;
  department: string;
  stipend: string;
  duration: string;
  location: string;
  logo: string;
  logoAlt: string;
  deadlineLabel: string;
  deadlineVariant: "urgent" | "standard";
  certificate?: boolean;
  sponsored?: boolean;
}
