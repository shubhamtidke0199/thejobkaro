import { PlaneTakeoff } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SPONSORED_RELOCATION_AD } from "@/data/abroad-jobs";

export function SponsoredRelocationCard() {
  return (
    <section
      aria-labelledby="sponsored-relocation-heading"
      className="relative overflow-hidden rounded-xl border border-outline bg-inverse-surface p-6 text-white"
    >
      <PlaneTakeoff
        className="absolute top-0 right-0 size-[60px] p-3 opacity-20"
        aria-hidden="true"
      />

      <span className="mb-2 block font-mono text-label-sm text-primary-fixed">
        SPONSORED
      </span>
      <h2
        id="sponsored-relocation-heading"
        className="mb-2 font-sans text-body-lg font-bold"
      >
        {SPONSORED_RELOCATION_AD.title}
      </h2>
      <p className="mb-4 text-body-md text-secondary-fixed-dim">
        {SPONSORED_RELOCATION_AD.description}
      </p>
      <Button className="w-full py-2 font-bold hover:bg-primary-fixed">
        {SPONSORED_RELOCATION_AD.ctaLabel}
      </Button>
    </section>
  );
}
