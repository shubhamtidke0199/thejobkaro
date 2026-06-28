import { Gift } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { ScholarshipBenefit } from "@/types/scholarships";

interface ScholarshipBenefitsSectionProps {
  benefits: ScholarshipBenefit[];
}

export function ScholarshipBenefitsSection({
  benefits,
}: ScholarshipBenefitsSectionProps) {
  return (
    <article className={`${detailSectionCardClassName} p-6 md:p-8`}>
      <h2 className="mb-4 flex items-center gap-2 font-sans text-xl font-bold">
        <Gift className="size-6 text-primary" aria-hidden="true" />
        Scholarship Benefits
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-lg border border-outline-variant bg-surface-container-low p-4"
          >
            <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
            <p className="text-secondary">{benefit.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
