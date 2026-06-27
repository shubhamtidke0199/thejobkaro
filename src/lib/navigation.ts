export function isNavLinkActive(href: string, activeHref: string): boolean {
  if (href === "/") return activeHref === "/";
  return activeHref.startsWith(href) && href !== "#";
}

export function isMobileNavActive(href: string, activeHref: string): boolean {
  return isNavLinkActive(href, activeHref);
}
