import Image from "next/image";
import Link from "next/link";
import { Timer } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  scholarshipDetailHref,
  scholarshipDetailSlugs,
} from "@/data/scholarship-details";
import type { FeaturedScholarship } from "@/types/scholarships";

interface FeaturedScholarshipCardProps {
  scholarship: FeaturedScholarship;
}

export function FeaturedScholarshipCard({
  scholarship,
}: FeaturedScholarshipCardProps) {
  const hasDetail = scholarshipDetailSlugs.has(scholarship.id);

  return (
    <article className="bento-card group relative overflow-hidden rounded-3xl border border-outline-variant bg-white p-8 lg:col-span-2">
      <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-error-container px-4 py-1.5 text-[12px] font-bold text-on-error-container shadow-sm">
        <Timer className="size-4 fill-current" aria-hidden="true" />
        {scholarship.closingLabel}
      </div>
      <div className="mb-10 flex flex-col gap-8 md:flex-row">
        <div className="flex size-24 shrink-0 items-center justify-center rounded-2xl border border-outline-variant bg-surface transition-transform duration-500 group-hover:scale-105">
          <Image
            src={scholarship.logo}
            alt={scholarship.logoAlt}
            width={64}
            height={64}
            className="size-16 object-contain"
          />
        </div>
        <div>
          {hasDetail ? (
            <Link href={scholarshipDetailHref(scholarship.id)}>
              <h3 className="mb-2 font-sans text-2xl font-semibold text-on-surface transition-colors group-hover:text-primary md:text-3xl">
                {scholarship.title}
              </h3>
            </Link>
          ) : (
            <h3 className="mb-2 font-sans text-2xl font-semibold text-on-surface md:text-3xl">
              {scholarship.title}
            </h3>
          )}
          <p className="text-lg text-secondary">{scholarship.description}</p>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {scholarship.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-4"
          >
            <p className="mb-1 text-[10px] font-bold tracking-widest text-outline uppercase">
              {stat.label}
            </p>
            <p
              className={`text-xl font-bold ${
                stat.label === "Amount" ? "text-primary" : "text-on-surface"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-6 border-t border-outline-variant/50 pt-6 md:flex-row">
        <p className="font-label text-label-sm text-secondary">
          <span className="font-bold text-on-surface">Eligibility:</span>{" "}
          {scholarship.eligibility}
        </p>
        {hasDetail ? (
          <Link
            href={scholarshipDetailHref(scholarship.id)}
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-10 py-3.5 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:opacity-90 md:w-auto"
          >
            {scholarship.ctaLabel}
          </Link>
        ) : (
          <Button className="w-full px-10 py-3.5 font-bold shadow-lg shadow-primary/20 md:w-auto">
            {scholarship.ctaLabel}
          </Button>
        )}
      </div>
    </article>
  );
}
