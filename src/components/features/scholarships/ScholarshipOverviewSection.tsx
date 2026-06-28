import { Info } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";

interface ScholarshipOverviewSectionProps {
  overview: string;
}

export function ScholarshipOverviewSection({
  overview,
}: ScholarshipOverviewSectionProps) {
  return (
    <article className={`${detailSectionCardClassName} p-6 md:p-8`}>
      <h2 className="mb-4 flex items-center gap-2 font-sans text-xl font-bold">
        <Info className="size-6" aria-hidden="true" />
        Overview
      </h2>
      <p className="text-lg leading-relaxed text-on-surface-variant">
        {overview}
      </p>
    </article>
  );
}
