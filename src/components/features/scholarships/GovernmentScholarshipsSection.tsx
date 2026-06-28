import Link from "next/link";

import { GovernmentScholarshipRow } from "@/components/features/scholarships/GovernmentScholarshipRow";
import { ScholarshipSectionHeader } from "@/components/features/scholarships/ScholarshipSectionHeader";
import { GOVERNMENT_SCHOLARSHIPS } from "@/data/scholarships";

export function GovernmentScholarshipsSection() {
  return (
    <section>
      <ScholarshipSectionHeader
        title="Government Sponsored"
        linkLabel="Browse All Govt Schemes"
        linkHref="/schemes"
        accentClassName="border-tertiary-container"
      />
      <div className="grid grid-cols-1 gap-4">
        {GOVERNMENT_SCHOLARSHIPS.map((scholarship) => (
          <GovernmentScholarshipRow
            key={scholarship.id}
            scholarship={scholarship}
          />
        ))}
      </div>
    </section>
  );
}
