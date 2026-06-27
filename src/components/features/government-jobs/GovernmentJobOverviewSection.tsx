import { CheckCircle, Info } from "lucide-react";

import type { GovernmentJobDetail } from "@/types/government-jobs";

interface GovernmentJobOverviewSectionProps {
  overview: GovernmentJobDetail["overview"];
  stats: GovernmentJobDetail["stats"];
}

export function GovernmentJobOverviewSection({
  overview,
  stats,
}: GovernmentJobOverviewSectionProps) {
  return (
    <section
      aria-labelledby="overview-heading"
      className="bento-card space-y-4 rounded-xl p-8"
    >
      <h2
        id="overview-heading"
        className="flex items-center gap-2 font-sans text-headline-md font-semibold"
      >
        <Info className="size-6 text-primary" aria-hidden="true" />
        Overview
      </h2>
      <p className="leading-relaxed text-secondary">{overview}</p>
      <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest p-4"
          >
            <p className="font-label text-label-sm tracking-wider text-secondary uppercase">
              {stat.label}
            </p>
            <p
              className={`font-sans text-headline-md font-semibold ${
                stat.highlight ? "text-primary" : "text-on-surface"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface GovernmentJobEligibilitySectionProps {
  eligibility: GovernmentJobDetail["eligibility"];
}

export function GovernmentJobEligibilitySection({
  eligibility,
}: GovernmentJobEligibilitySectionProps) {
  return (
    <section
      aria-labelledby="eligibility-heading"
      className="bento-card space-y-4 rounded-xl p-8"
    >
      <h2
        id="eligibility-heading"
        className="flex items-center gap-2 font-sans text-headline-md font-semibold"
      >
        <CheckCircle className="size-6 text-primary" aria-hidden="true" />
        Eligibility Criteria
      </h2>
      <ul className="space-y-3">
        {eligibility.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <CheckCircle
              className="mt-0.5 size-5 shrink-0 text-primary-container"
              aria-hidden="true"
            />
            <span>
              <strong>{item.label}:</strong> {item.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
