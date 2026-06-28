"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/constants/navigation";
import { isNavLinkActive } from "@/lib/navigation";

interface MobileNavMenuProps {
  activeHref?: string;
}

export function MobileNavMenu({ activeHref = "/" }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 transition-all hover:bg-surface-container-high active:scale-95"
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <Menu className="size-5 text-on-surface" aria-hidden="true" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 left-0 border-b border-outline-variant bg-surface shadow-lg">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="font-sans text-lg font-bold text-primary">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 transition-all hover:bg-surface-container-high active:scale-95"
                aria-label="Close navigation menu"
              >
                <X className="size-5 text-on-surface" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile site navigation">
              <ul className="max-h-[70vh] overflow-y-auto px-2 pb-4">
                {NAV_LINKS.filter((link) => link.href !== "#").map((link) => {
                  const active = isNavLinkActive(link.href, activeHref);
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                          active
                            ? "bg-primary-container/10 font-bold text-primary"
                            : "text-on-surface hover:bg-surface-container-low"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
