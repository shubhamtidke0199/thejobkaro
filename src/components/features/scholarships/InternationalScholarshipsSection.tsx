import { InternationalScholarshipCard } from "@/components/features/scholarships/InternationalScholarshipCard";
import { ScholarshipSectionHeader } from "@/components/features/scholarships/ScholarshipSectionHeader";
import { INTERNATIONAL_SCHOLARSHIPS } from "@/data/scholarships";

export function InternationalScholarshipsSection() {
  return (
    <section>
      <ScholarshipSectionHeader
        title="International Opportunities"
        linkLabel="Explore Global Markets"
        accentClassName="border-primary"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {INTERNATIONAL_SCHOLARSHIPS.map((scholarship) => (
          <InternationalScholarshipCard
            key={scholarship.id}
            scholarship={scholarship}
          />
        ))}
      </div>
    </section>
  );
}
