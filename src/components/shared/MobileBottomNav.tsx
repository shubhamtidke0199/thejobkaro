import Link from "next/link";

import { MOBILE_NAV_ITEMS } from "@/constants/navigation";
import { isMobileNavActive } from "@/lib/navigation";

interface MobileBottomNavProps {
  activeHref?: string;
}

export function MobileBottomNav({ activeHref = "/" }: MobileBottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-outline-variant bg-surface px-4 py-3 shadow-lg md:hidden"
      aria-label="Mobile navigation"
    >
      {MOBILE_NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const active = isMobileNavActive(
          item.href,
          activeHref,
          item.activePrefixes,
        );
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-transform active:scale-95 ${
              active ? "font-bold text-primary" : "text-secondary"
            }`}
            aria-current={active ? "page" : undefined}
          >
            <Icon className="size-6" aria-hidden="true" />
            <span className="font-label text-label-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
