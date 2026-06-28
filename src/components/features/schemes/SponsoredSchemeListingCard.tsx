import { Network } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SPONSORED_SCHEME_LISTING_OFFER } from "@/constants/schemes";

export function SponsoredSchemeListingCard() {
  return (
    <section
      aria-labelledby="sponsored-scheme-listing-heading"
      className="bento-card relative flex flex-col justify-center rounded-xl border border-outline bg-inverse-surface p-6 text-center"
    >
      <span className="absolute top-4 right-4 font-mono text-[10px] text-secondary-fixed-dim uppercase opacity-60">
        Sponsored
      </span>
      <Network
        className="mx-auto mb-4 size-12 text-primary-fixed"
        aria-hidden="true"
      />
      <h2
        id="sponsored-scheme-listing-heading"
        className="mb-2 font-sans text-xl font-semibold text-primary-fixed"
      >
        {SPONSORED_SCHEME_LISTING_OFFER.title}
      </h2>
      <p className="mb-6 px-4 font-label text-label-sm text-tertiary-fixed-dim">
        {SPONSORED_SCHEME_LISTING_OFFER.description}
      </p>
      <Button
        variant="outline"
        className="mx-auto rounded-full border-primary-fixed px-6 py-2 font-label text-label-sm font-bold text-primary-fixed hover:bg-primary-fixed hover:text-on-primary-fixed"
      >
        {SPONSORED_SCHEME_LISTING_OFFER.ctaLabel}
      </Button>
    </section>
  );
}
