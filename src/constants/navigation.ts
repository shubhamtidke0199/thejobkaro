import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Bookmark,
  Compass,
  Home,
  User,
} from "lucide-react";

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

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Private Jobs", href: "/private-jobs" },
  { label: "Govt Jobs", href: "#" },
  { label: "Abroad Jobs", href: "#" },
  { label: "Results", href: "#" },
  { label: "Scholarships", href: "#" },
  { label: "Schemes", href: "#" },
  { label: "Resources", href: "#" },
];

export const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/private-jobs", icon: Compass },
  { label: "Updates", href: "#", icon: Bell },
  { label: "Saved", href: "#", icon: Bookmark },
  { label: "Profile", href: "#", icon: User },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Jobs",
    links: [
      { label: "Private Jobs Hub", href: "/private-jobs" },
      { label: "Govt Portals", href: "#" },
      { label: "Remote Roles", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Result Center", href: "#" },
      { label: "Scholarship Finder", href: "#" },
      { label: "State Schemes", href: "#" },
    ],
  },
  {
    title: "Prep",
    links: [
      { label: "Admit Cards", href: "#" },
      { label: "Answer Keys", href: "#" },
      { label: "Career Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export function isNavLinkActive(href: string, activeHref: string): boolean {
  if (href === "/") return activeHref === "/";
  return activeHref.startsWith(href) && href !== "#";
}

export function isMobileNavActive(href: string, activeHref: string): boolean {
  return isNavLinkActive(href, activeHref);
}
