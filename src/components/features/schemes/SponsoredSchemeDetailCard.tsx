import { ArrowRight, Cloud } from "lucide-react";

import { SPONSORED_SCHEME_DETAIL_OFFER } from "@/constants/schemes";

export function SponsoredSchemeDetailCard() {
  return (
    <section
      aria-labelledby="sponsored-scheme-detail-heading"
      className="bento-card group relative overflow-hidden rounded-2xl border border-outline-variant bg-on-background p-4 md:p-6"
    >
      <div className="relative z-10">
        <span className="font-mono text-[10px] tracking-widest text-primary-fixed-dim uppercase">
          Sponsored
        </span>
        <h4
          id="sponsored-scheme-detail-heading"
          className="mt-2 mb-4 font-sans text-xl leading-tight font-semibold text-white"
        >
          {SPONSORED_SCHEME_DETAIL_OFFER.title}
        </h4>
        <p className="mb-6 text-sm text-surface-variant">
          {SPONSORED_SCHEME_DETAIL_OFFER.description}
        </p>
        <button
          type="button"
          className="flex items-center gap-2 font-bold text-primary-fixed transition-all group-hover:gap-3"
        >
          {SPONSORED_SCHEME_DETAIL_OFFER.ctaLabel}
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div
        className="pointer-events-none absolute -right-10 -bottom-10 opacity-20 transition-transform group-hover:scale-110"
        aria-hidden="true"
      >
        <Cloud className="size-[120px] text-primary" strokeWidth={1.25} />
      </div>
    </section>
  );
}
