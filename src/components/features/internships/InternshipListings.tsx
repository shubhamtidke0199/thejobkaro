import { Button } from "@/components/ui/Button";
import { INTERNSHIP_LISTINGS } from "@/data/internships";

import {
  InternshipCard,
  SponsoredInternshipCard,
} from "./InternshipCard";

export function InternshipListings() {
  const sponsored = INTERNSHIP_LISTINGS.find((item) => item.sponsored);
  const listings = INTERNSHIP_LISTINGS.filter((item) => !item.sponsored);

  return (
    <section aria-labelledby="latest-internships-heading">
      <div className="mb-6 flex items-center gap-2">
        <h2
          id="latest-internships-heading"
          className="font-sans text-headline-md font-semibold"
        >
          Latest Internships
        </h2>
        <span className="rounded-full bg-error-container px-2 py-0.5 font-label text-label-sm font-bold tracking-tighter text-error uppercase">
          New
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {sponsored && <SponsoredInternshipCard internship={sponsored} />}
        {listings.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="outline"
          className="rounded-xl border-outline-variant bg-surface-container px-12 py-4 text-on-surface hover:bg-surface-container-high"
        >
          View More Internships
        </Button>
      </div>
    </section>
  );
}
