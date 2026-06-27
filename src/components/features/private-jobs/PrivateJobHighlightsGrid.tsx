import type { PrivateJobDetail } from "@/types/private-jobs";

import { detailCardClassName } from "./detailCardClassName";

interface PrivateJobHighlightsGridProps {
  highlights: PrivateJobDetail["highlights"];
}

export function PrivateJobHighlightsGrid({
  highlights,
}: PrivateJobHighlightsGridProps) {
  return (
    <section
      aria-label="Job highlights"
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {highlights.map((highlight) => {
        const Icon = highlight.icon;

        return (
          <div
            key={highlight.label}
            className={`${detailCardClassName} flex flex-col gap-1 p-4`}
          >
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <span className="mt-1 font-label text-label-sm text-secondary">
              {highlight.label}
            </span>
            <span className="font-bold">{highlight.value}</span>
          </div>
        );
      })}
    </section>
  );
}
