import { Route } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { ScholarshipApplicationStep } from "@/types/scholarships";

interface ScholarshipApplicationProcessSectionProps {
  steps: ScholarshipApplicationStep[];
}

export function ScholarshipApplicationProcessSection({
  steps,
}: ScholarshipApplicationProcessSectionProps) {
  return (
    <article className={`${detailSectionCardClassName} p-6 md:p-8`}>
      <h2 className="mb-6 flex items-center gap-2 font-sans text-xl font-bold">
        <Route className="size-6 text-primary" aria-hidden="true" />
        Application Process
      </h2>
      <div className="relative pl-10 before:absolute before:top-4 before:bottom-4 before:left-[11px] before:border-l-2 before:border-dashed before:border-outline-variant before:content-['']">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={index < steps.length - 1 ? "relative pb-8" : "relative"}
          >
            <div
              className={`absolute top-1 -left-10 z-10 size-6 shrink-0 rounded-full border-4 ${
                step.active
                  ? "border-primary-container bg-primary"
                  : "border-surface bg-outline-variant"
              }`}
              aria-hidden="true"
            />
            <h3 className="text-lg font-bold">{step.title}</h3>
            <p className="text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
