import { Button } from "@/components/ui/Button";
import { SPONSORED_PRIME_OFFER } from "@/data/government-jobs";

export function SponsoredPrimeCard() {
  return (
    <section
      aria-labelledby="sponsored-prime-heading"
      className="relative overflow-hidden rounded-xl border border-outline-variant bg-inverse-surface p-6 text-white"
    >
      <div className="relative z-10">
        <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
          Sponsored
        </span>
        <h2
          id="sponsored-prime-heading"
          className="mt-2 mb-4 font-sans text-lg leading-tight font-semibold"
        >
          {SPONSORED_PRIME_OFFER.title}
        </h2>
        <p className="mb-6 text-sm text-white/70 italic">
          {SPONSORED_PRIME_OFFER.description}
        </p>
        <Button className="w-full py-3 text-sm">
          {SPONSORED_PRIME_OFFER.ctaLabel}
        </Button>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"
        aria-hidden="true"
      />
    </section>
  );
}
