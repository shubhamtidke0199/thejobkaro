import { MousePointerClick } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { SponsoredOpportunity } from "@/types/landing";

interface SponsoredCardProps {
  sponsored: SponsoredOpportunity;
}

export function SponsoredCard({ sponsored }: SponsoredCardProps) {
  return (
    <article className="group relative flex cursor-pointer flex-col items-stretch justify-between gap-4 overflow-hidden rounded-xl border border-outline bg-inverse-surface p-5 md:col-span-2 md:flex-row md:items-center">
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container-lowest/10">
          <MousePointerClick
            className="size-6 text-surface-container-lowest"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-inverse-on-surface">
            {sponsored.title}
          </h3>
          <p className="font-label text-label-sm text-surface-variant">
            {sponsored.description}
          </p>
        </div>
      </div>
      <div className="relative z-10 text-left md:text-right">
        <span className="mb-1 block font-mono text-label-sm uppercase text-surface-variant/50">
          Sponsored
        </span>
        <Button variant="accent" className="px-4 py-2">
          Explore Course
        </Button>
      </div>
      <div
        className="absolute top-0 right-0 h-full w-32 translate-x-16 skew-x-12 bg-primary/20 transition-transform group-hover:translate-x-12"
        aria-hidden="true"
      />
    </article>
  );
}
