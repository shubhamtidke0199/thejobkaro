export function isNavLinkActive(href: string, activeHref: string): boolean {
  if (href === "/") return activeHref === "/";
  return activeHref.startsWith(href) && href !== "#";
}

export function isMobileNavActive(
  href: string,
  activeHref: string,
  activePrefixes?: string[],
): boolean {
  const prefixes = activePrefixes ?? [href];
  return prefixes.some(
    (prefix) =>
      prefix !== "#" &&
      (prefix === "/"
        ? activeHref === "/"
        : activeHref === prefix || activeHref.startsWith(`${prefix}/`)),
  );
}
