import Image from "next/image";

import { detailSectionCardClassName } from "@/components/features/schemes/detailCardClassName";
import { SCHEME_IMAGES } from "@/constants/images";
import type { SchemeBenefit } from "@/types/schemes";

interface SchemeBenefitsSectionProps {
  benefits: SchemeBenefit[];
}

export function SchemeBenefitsSection({ benefits }: SchemeBenefitsSectionProps) {
  return (
    <section>
      <h2 className="mb-6 font-sans text-xl font-semibold text-on-surface">
        Benefits & Incentives
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className={`${detailSectionCardClassName} p-4 md:p-6`}
          >
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl">
              <Image
                src={SCHEME_IMAGES[benefit.imageKey]}
                alt={benefit.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold text-on-surface">
              {benefit.title}
            </h3>
            <p className="text-on-surface-variant">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
