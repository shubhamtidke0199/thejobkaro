import Image from "next/image";
import Link from "next/link";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { getGovernmentJobDetailSlugs } from "@/data/government-job-details";
import type {
  GovernmentJobListing,
  GovernmentJobTag,
} from "@/types/government-jobs";

const detailSlugs = new Set(getGovernmentJobDetailSlugs());

const tagStyles: Record<GovernmentJobTag["variant"], string> = {
  tertiary: "bg-tertiary-container/20 text-on-tertiary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  primary: "bg-primary/10 text-primary",
};

interface GovernmentJobCardProps {
  job: GovernmentJobListing;
}

export function GovernmentJobCard({ job }: GovernmentJobCardProps) {
  const hasDetail = detailSlugs.has(job.id);

  return (
    <article className="bento-card flex flex-col items-start gap-6 rounded-xl border border-outline-variant bg-white p-5 md:flex-row">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-surface-container">
        <Image
          src={job.logo}
          alt={job.logoAlt}
          width={40}
          height={40}
          className="size-10 object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded px-2 py-0.5 font-mono text-xs ${tagStyles[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-on-background">{job.title}</h3>
        <p className="mt-1 text-sm text-secondary">{job.description}</p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-outline">
          <span className="flex items-center gap-1">
            <MapPin className="size-4" aria-hidden="true" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="size-4" aria-hidden="true" />
            {job.qualification}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-4" aria-hidden="true" />
            {job.postedAt}
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 md:w-auto">
        <Button className="px-6 py-2.5 text-sm">Apply Now</Button>
        {hasDetail ? (
          <Link
            href={`/government-jobs/${job.id}`}
            className="inline-flex items-center justify-center rounded-lg border border-outline-variant bg-transparent px-6 py-2.5 text-sm font-semibold text-secondary transition-all hover:border-primary hover:bg-surface-container-low"
          >
            Details
          </Link>
        ) : (
          <Button variant="outline" className="px-6 py-2.5 text-sm text-secondary">
            Details
          </Button>
        )}
      </div>
    </article>
  );
}
