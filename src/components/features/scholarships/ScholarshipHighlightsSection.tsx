import { detailFactCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { ScholarshipHighlight } from "@/types/scholarships";

interface ScholarshipHighlightsSectionProps {
  highlights: ScholarshipHighlight[];
}

export function ScholarshipHighlightsSection({
  highlights,
}: ScholarshipHighlightsSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {highlights.map((highlight) => {
        const Icon = highlight.icon;
        return (
          <div
            key={highlight.label}
            className={`${detailFactCardClassName} p-4`}
          >
            <Icon className="mb-2 size-6 text-primary" aria-hidden="true" />
            <h4 className="font-label text-label-sm font-bold tracking-widest text-secondary uppercase">
              {highlight.label}
            </h4>
            <p className="text-lg font-bold">{highlight.value}</p>
          </div>
        );
      })}
    </div>
  );
}
