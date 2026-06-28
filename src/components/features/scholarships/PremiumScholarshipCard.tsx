import { ShieldCheck } from "lucide-react";

import type { PremiumScholarship } from "@/types/scholarships";

interface PremiumScholarshipCardProps {
  scholarship: PremiumScholarship;
}

export function PremiumScholarshipCard({
  scholarship,
}: PremiumScholarshipCardProps) {
  return (
    <article className="bento-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-inverse-surface p-8 text-surface">
      <div className="absolute -top-12 -right-12 size-48 rounded-full bg-primary-container/10 blur-3xl" />
      <div>
        <span className="rounded-full bg-primary-container px-3 py-1 text-[10px] font-bold tracking-wider text-on-primary-container uppercase">
          {scholarship.badge}
        </span>
        <h3 className="mt-6 font-sans text-2xl leading-tight font-semibold">
          {scholarship.title}
        </h3>
        <p className="mt-4 text-tertiary-fixed">{scholarship.description}</p>
        <ul className="mt-8 space-y-4">
          {scholarship.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3">
              <ShieldCheck
                className="size-5 text-primary-fixed"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-surface-variant">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-primary-fixed py-4 font-label text-label-sm font-bold text-on-primary-fixed shadow-xl shadow-black/20 transition-all hover:brightness-110"
      >
        {scholarship.ctaLabel}
      </button>
    </article>
  );
}
