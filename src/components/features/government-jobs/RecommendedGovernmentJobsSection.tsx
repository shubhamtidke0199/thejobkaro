import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

import { RECOMMENDED_GOVERNMENT_JOBS } from "@/data/government-jobs";

export function RecommendedGovernmentJobsSection() {
  return (
    <section
      aria-labelledby="govt-recommended-heading"
      className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface-container-lowest p-6 shadow-sm"
    >
      <div
        className="absolute -top-16 -right-16 size-32 rounded-full bg-primary/5"
        aria-hidden="true"
      />

      <div className="relative mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary-container text-white shadow-lg shadow-primary/10">
            <Sparkles className="size-6" aria-hidden="true" />
          </div>
          <div>
            <h2
              id="govt-recommended-heading"
              className="font-sans text-headline-md font-semibold"
            >
              Recommended for You
            </h2>
            <p className="text-secondary">
              Based on your Engineering degree and Delhi location.
            </p>
          </div>
        </div>
        <Link
          href="#"
          className="font-label text-label-sm font-bold text-primary hover:underline"
        >
          View all matches
        </Link>
      </div>

      <div className="relative space-y-3">
        {RECOMMENDED_GOVERNMENT_JOBS.map((job) => (
          <Link
            key={job.title}
            href="#"
            className="group flex cursor-pointer items-center rounded-xl border border-outline-variant bg-white p-4 transition-colors hover:border-primary"
          >
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={48}
              height={48}
              className="size-12 rounded-lg bg-surface-container object-contain p-2"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-bold transition-colors group-hover:text-primary">
                {job.title}
              </h3>
              <p className="text-sm text-secondary">
                {job.organization} • {job.location} • {job.detail}
              </p>
            </div>
            <ChevronRight
              className="size-5 text-outline transition-colors group-hover:text-primary"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
