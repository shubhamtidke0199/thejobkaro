import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { FOOTER_COLUMNS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-outline-variant bg-surface-container-low">
      <Container className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4 lg:grid-cols-6">
        <div className="col-span-2">
          <Logo className="mb-4" height={80} />
          <p className="mb-6 max-w-xs text-base text-on-surface-variant">
            Accelerating professional growth by bridging the gap between talent
            and opportunity.
          </p>
          <p className="font-label text-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} JobKaro. All rights reserved.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="mb-4 font-bold text-on-surface">{column.title}</h4>
            <ul className="space-y-2 font-label text-label-sm text-on-surface-variant">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </footer>
  );
}
