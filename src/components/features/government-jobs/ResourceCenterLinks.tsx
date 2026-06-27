import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RESOURCE_CENTER_LINKS } from "@/constants/government-jobs";

export function ResourceCenterLinks() {
  return (
    <section aria-labelledby="resource-center-heading" className="space-y-3">
      <h2
        id="resource-center-heading"
        className="px-1 font-bold text-on-background"
      >
        Resource Center
      </h2>

      {RESOURCE_CENTER_LINKS.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-xl border border-outline-variant bg-white p-4 shadow-sm transition-all hover:border-primary"
          >
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <span className="font-bold">{link.label}</span>
            </div>
            <ArrowRight
              className="size-5 text-outline transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </section>
  );
}
