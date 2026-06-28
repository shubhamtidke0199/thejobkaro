import Link from "next/link";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { SimilarScholarship } from "@/types/scholarships";

interface SimilarScholarshipsSectionProps {
  scholarships: SimilarScholarship[];
}

export function SimilarScholarshipsSection({
  scholarships,
}: SimilarScholarshipsSectionProps) {
  return (
    <section className={`${detailSectionCardClassName} p-4 md:p-6`}>
      <h3 className="mb-2 font-label text-label-sm font-bold tracking-widest text-secondary uppercase">
        Similar Opportunities
      </h3>
      <div className="flex flex-col gap-4">
        {scholarships.map((scholarship, index) => (
          <Link
            key={scholarship.id}
            href={scholarship.href}
            className={`group block ${
              index < scholarships.length - 1
                ? "border-b border-outline-variant pb-3"
                : ""
            }`}
          >
            <p className="font-label text-label-sm font-bold text-primary group-hover:underline">
              {scholarship.organization}
            </p>
            <p className="line-clamp-1 font-medium text-on-surface">
              {scholarship.title}
            </p>
            <p className="font-label text-label-sm text-secondary">
              {scholarship.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
