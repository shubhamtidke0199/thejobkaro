import {
  Bell,
  Bookmark,
  Compass,
  Home,
  User,
} from "lucide-react";

import type {
  FooterColumn,
  MobileNavItem,
  NavLink,
} from "@/types/navigation";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Private Jobs", href: "/private-jobs" },
  { label: "Internships", href: "/internships" },
  { label: "Govt Jobs", href: "/government-jobs" },
  { label: "Abroad Jobs", href: "/abroad-jobs" },
  { label: "Results", href: "/results" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Schemes", href: "/schemes" },
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
      { label: "Internships", href: "/internships" },
      { label: "Govt Portals", href: "/government-jobs" },
      { label: "Abroad Jobs", href: "/abroad-jobs" },
      { label: "Remote Roles", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Result Center", href: "/results" },
      { label: "Scholarship Finder", href: "/scholarships" },
      { label: "State Schemes", href: "/schemes" },
    ],
  },
  {
    title: "Prep",
    links: [
      { label: "Admit Cards", href: "/results" },
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
