import { CheckCircle } from "lucide-react";

import { detailCardClassName } from "@/components/features/schemes/detailCardClassName";
import type { SchemeEligibilityItem } from "@/types/schemes";

interface SchemeEligibilitySectionProps {
  items: SchemeEligibilityItem[];
}

export function SchemeEligibilitySection({ items }: SchemeEligibilitySectionProps) {
  return (
    <section className={`${detailCardClassName} rounded-2xl p-6 md:p-8`}>
      <h2 className="mb-6 font-sans text-xl font-semibold text-on-surface">
        Who Can Apply
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-container/20">
              <CheckCircle className="size-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h4 className="mb-1 font-bold text-on-surface">{item.title}</h4>
              <p className="text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
