import {
  FEATURED_OPPORTUNITIES,
  SPONSORED_OPPORTUNITY,
} from "@/constants/landing";

import { OpportunityCard } from "./OpportunityCard";
import { SponsoredCard } from "./SponsoredCard";

export function FeaturedOpportunities() {
  return (
    <section aria-labelledby="featured-heading">
      <h2
        id="featured-heading"
        className="mb-6 font-sans text-headline-md font-semibold tracking-tight"
      >
        Featured Opportunities
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FEATURED_OPPORTUNITIES.map((opportunity) => (
          <OpportunityCard key={opportunity.title} opportunity={opportunity} />
        ))}
        <SponsoredCard sponsored={SPONSORED_OPPORTUNITY} />
      </div>
    </section>
  );
}
