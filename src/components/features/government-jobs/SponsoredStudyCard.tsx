import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SPONSORED_STUDY_OFFER } from "@/data/government-job-details";

export function SponsoredStudyCard() {
  return (
    <section
      aria-labelledby="sponsored-study-heading"
      className="group relative overflow-hidden rounded-xl bg-inverse-surface p-8 text-inverse-on-surface"
    >
      <span className="absolute top-0 right-0 p-2 font-mono text-[10px] tracking-widest text-surface-variant/50 uppercase">
        Sponsored
      </span>
      <h2
        id="sponsored-study-heading"
        className="mb-2 font-bold text-body-lg"
      >
        {SPONSORED_STUDY_OFFER.title}
      </h2>
      <p className="mb-4 text-body-md text-surface-variant">
        {SPONSORED_STUDY_OFFER.description}
      </p>
      <Button className="w-full py-2 hover:brightness-110">
        {SPONSORED_STUDY_OFFER.ctaLabel}
      </Button>
      <Rocket
        className="absolute -right-4 -bottom-4 size-36 opacity-10 transition-transform group-hover:scale-110"
        aria-hidden="true"
      />
    </section>
  );
}
