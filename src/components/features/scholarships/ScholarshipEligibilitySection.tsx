import { CircleCheck } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";

interface ScholarshipEligibilitySectionProps {
  items: string[];
}

export function ScholarshipEligibilitySection({
  items,
}: ScholarshipEligibilitySectionProps) {
  return (
    <article className={`${detailSectionCardClassName} p-6 md:p-8`}>
      <h2 className="mb-4 flex items-center gap-2 font-sans text-xl font-bold">
        <CircleCheck className="size-6 text-primary" aria-hidden="true" />
        Eligibility Criteria
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex gap-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-container text-[14px] font-bold text-on-primary-container">
              {index + 1}
            </span>
            <p className="text-on-surface-variant">{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
