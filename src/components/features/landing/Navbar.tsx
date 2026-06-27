import Link from "next/link";
import { Search, UserCircle } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { NAV_LINKS } from "@/constants/landing";

export function Navbar() {
  return (
    <header className="sticky top-0 z-100 w-full border-b border-outline-variant bg-surface">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-sans text-xl font-bold text-primary"
        >
          JobKaro
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-base transition-colors ${
                  link.active
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-secondary hover:text-primary"
                }`}
                aria-current={link.active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg p-2 transition-all hover:bg-surface-container-high active:scale-95"
            aria-label="Search"
          >
            <Search className="size-5 text-on-surface" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rounded-lg p-2 transition-all hover:bg-surface-container-high active:scale-95"
            aria-label="Account"
          >
            <UserCircle className="size-5 text-on-surface" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}
