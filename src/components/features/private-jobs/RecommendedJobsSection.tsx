import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { MapPin, Sparkles, Wallet } from "lucide-react";

import type { RecommendedJob } from "@/constants/private-jobs";
import { RECOMMENDED_JOBS } from "@/constants/private-jobs";

interface RecommendedJobCardProps {
  job: RecommendedJob;
}

function RecommendedJobCard({ job }: RecommendedJobCardProps) {
  const Icon: LucideIcon = job.icon;

  return (
    <article
      className={`bento-card relative rounded-xl border p-4 ${
        job.matchScore
          ? "border-primary/30 bg-surface-container-lowest"
          : "border-outline-variant bg-surface-container-lowest"
      }`}
    >
      {job.matchScore && (
        <span className="absolute top-3 right-3 rounded bg-primary-fixed px-2 py-0.5 font-label text-label-sm font-bold text-on-primary-fixed uppercase">
          {job.matchScore}% Match
        </span>
      )}
      <div className="flex gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface-container">
          <Icon className="size-6 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-bold text-on-surface">{job.title}</h3>
          <p className="text-sm text-secondary">{job.company}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-outline">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" aria-hidden="true" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Wallet className="size-3.5" aria-hidden="true" />
              {job.salary}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function RecommendedJobsSection() {
  return (
    <section aria-labelledby="recommended-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2
          id="recommended-heading"
          className="flex items-center gap-2 font-sans text-headline-md font-semibold"
        >
          <Sparkles className="size-6 text-primary" aria-hidden="true" />
          Recommended for You
        </h2>
        <Link
          href="#"
          className="font-label text-label-sm text-primary hover:underline"
        >
          View all matches
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {RECOMMENDED_JOBS.map((job) => (
          <RecommendedJobCard key={job.title} job={job} />
        ))}
      </div>
    </section>
  );
}
