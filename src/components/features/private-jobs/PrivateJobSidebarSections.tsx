import Link from "next/link";

import { Button } from "@/components/ui/Button";
import {
  SIMILAR_PRIVATE_JOBS,
  SPONSORED_CAREER_OFFER,
} from "@/data/private-job-details";

export function SimilarPrivateJobsSection() {
  return (
    <section aria-labelledby="similar-jobs-heading" className="space-y-4">
      <h2
        id="similar-jobs-heading"
        className="px-1 font-sans text-headline-md font-semibold"
      >
        Similar Roles
      </h2>
      <div className="space-y-3">
        {SIMILAR_PRIVATE_JOBS.map((job) => {
          const Icon = job.icon;

          return (
            <Link
              key={job.id}
              href={job.href}
              className="group block rounded-xl border border-outline-variant bg-surface-container-lowest p-4 transition-all hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded bg-surface-variant">
                  <Icon
                    className="size-5 text-secondary transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-label text-label-sm font-bold transition-colors group-hover:text-primary">
                    {job.title}
                  </h3>
                  <p className="font-label text-label-sm text-secondary">
                    {job.company} • {job.salary}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function SponsoredCareerServicesCard() {
  return (
    <section
      aria-labelledby="career-services-heading"
      className="group relative overflow-hidden rounded-xl bg-on-background p-6 text-on-primary-fixed"
    >
      <div
        className="absolute -top-12 -right-12 size-48 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/30"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <span className="font-mono text-[10px] tracking-widest text-primary-fixed uppercase">
          Sponsored
        </span>
        <h2
          id="career-services-heading"
          className="mt-4 mb-2 font-sans text-headline-md font-semibold"
        >
          {SPONSORED_CAREER_OFFER.title}
        </h2>
        <p className="mb-6 font-label text-label-sm text-primary-fixed-dim">
          {SPONSORED_CAREER_OFFER.description}
        </p>
        <Button variant="accent" className="w-full py-2 hover:shadow-lg">
          {SPONSORED_CAREER_OFFER.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
