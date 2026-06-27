import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface MobileNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
