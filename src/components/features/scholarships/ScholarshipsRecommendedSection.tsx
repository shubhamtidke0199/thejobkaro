import { ScholarshipSectionHeader } from "@/components/features/scholarships/ScholarshipSectionHeader";
import { FeaturedScholarshipCard } from "@/components/features/scholarships/FeaturedScholarshipCard";
import { PremiumScholarshipCard } from "@/components/features/scholarships/PremiumScholarshipCard";
import {
  FEATURED_SCHOLARSHIP,
  PREMIUM_SCHOLARSHIP,
} from "@/data/scholarships";

export function ScholarshipsRecommendedSection() {
  return (
    <section>
      <ScholarshipSectionHeader
        title="Recommended for You"
        linkLabel="View Personalized List"
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <FeaturedScholarshipCard scholarship={FEATURED_SCHOLARSHIP} />
        <PremiumScholarshipCard scholarship={PREMIUM_SCHOLARSHIP} />
      </div>
    </section>
  );
}
