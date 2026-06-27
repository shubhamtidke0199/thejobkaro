import Link from "next/link";

import { RELATED_OPPORTUNITIES } from "@/data/government-job-details";

export function RelatedOpportunitiesSection() {
  return (
    <section
      aria-labelledby="related-heading"
      className="bento-card space-y-4 rounded-xl p-8"
    >
      <h2 id="related-heading" className="font-bold text-body-lg">
        Related Opportunities
      </h2>
      <div className="space-y-4">
        {RELATED_OPPORTUNITIES.map((opportunity) => {
          const Icon = opportunity.icon;

          return (
            <Link
              key={opportunity.id}
              href={opportunity.href}
              className="group -mx-2 flex gap-3 rounded-lg p-2 transition-colors hover:bg-surface-container-low"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded bg-surface-variant">
                <Icon className="size-5 text-secondary" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-bold group-hover:text-primary">
                  {opportunity.title}
                </p>
                <p className="text-label-sm text-secondary">
                  {opportunity.category}
                </p>
                <p
                  className={`mt-1 font-mono text-label-sm ${
                    opportunity.deadlineUrgent
                      ? "text-primary-container"
                      : "text-secondary"
                  }`}
                >
                  {opportunity.deadlineLabel}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link
        href="/government-jobs"
        className="block w-full rounded-lg border border-primary/20 py-2 text-center font-bold text-primary transition-colors hover:bg-primary/5"
      >
        View All Govt Jobs
      </Link>
    </section>
  );
}
