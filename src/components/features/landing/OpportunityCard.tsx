import Image from "next/image";

import type { Opportunity } from "@/types/landing";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container-lowest p-5 transition-all hover:border-primary/40 hover:bg-surface-container-low hover:shadow-md">
      <div className="flex gap-4">
        <Image
          src={opportunity.logo}
          alt={opportunity.logoAlt}
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-lg object-cover"
        />
        <div>
          <h3 className="text-base font-bold text-on-surface">
            {opportunity.title}
          </h3>
          <p className="font-label text-sm text-secondary">
            {opportunity.company} • {opportunity.location}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-primary">{opportunity.salary}</span>
        <span className="rounded-full bg-primary-container/10 px-3 py-1 font-label text-sm font-medium text-primary">
          Apply Now
        </span>
      </div>
    </article>
  );
}
