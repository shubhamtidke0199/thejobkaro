import Link from "next/link";

import { detailSectionCardClassName } from "@/components/features/schemes/detailCardClassName";
import { RELATED_SCHEMES } from "@/data/scheme-details";

export function RelatedSchemesSection() {
  return (
    <section className={`${detailSectionCardClassName} p-4 md:p-6`}>
      <h3 className="mb-4 font-sans text-xl font-semibold text-on-surface">
        Related Schemes
      </h3>
      <div className="flex flex-col gap-4">
        {RELATED_SCHEMES.map((scheme, index) => (
          <div key={scheme.id}>
            <Link href={scheme.href} className="group block">
              <p className="mb-1 font-bold text-primary group-hover:underline">
                {scheme.title}
              </p>
              <p className="line-clamp-2 text-sm text-on-surface-variant">
                {scheme.description}
              </p>
            </Link>
            {index < RELATED_SCHEMES.length - 1 ? (
              <hr className="mt-4 border-outline-variant" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
