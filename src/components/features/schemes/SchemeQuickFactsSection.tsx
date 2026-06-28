import { detailFactCardClassName } from "@/components/features/schemes/detailCardClassName";
import type { SchemeQuickFact } from "@/types/schemes";

interface SchemeQuickFactsSectionProps {
  facts: SchemeQuickFact[];
}

export function SchemeQuickFactsSection({ facts }: SchemeQuickFactsSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {facts.map((fact) => {
        const Icon = fact.icon;
        return (
          <div
            key={fact.label}
            className={`${detailFactCardClassName} flex flex-col gap-2 p-4`}
          >
            <Icon className="size-8 text-primary" aria-hidden="true" />
            <span className="font-label text-label-sm text-on-surface-variant uppercase">
              {fact.label}
            </span>
            <span className="font-sans text-xl font-semibold text-on-surface">
              {fact.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
