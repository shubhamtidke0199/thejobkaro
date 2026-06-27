import Image from "next/image";
import { Building2, Clock, Wallet } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type {
  AbroadJobBenefit,
  AbroadJobListing,
} from "@/types/abroad-jobs";

const benefitStyles: Record<AbroadJobBenefit["variant"], string> = {
  primary:
    "border-primary/20 bg-primary-container/10 text-primary",
  tertiary:
    "border-tertiary/20 bg-tertiary-container/10 text-tertiary",
  secondary:
    "border-secondary/20 bg-secondary-container/10 text-secondary",
};

interface AbroadJobCardProps {
  job: AbroadJobListing;
}

export function AbroadJobCard({ job }: AbroadJobCardProps) {
  return (
    <article className="group rounded-xl border border-outline-variant bg-white p-6 shadow-[0px_4px_20px_rgba(7,22,39,0.05)] transition-all hover:border-primary hover:bg-surface-variant/20">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-surface-container">
          <Image
            src={job.logo}
            alt={job.logoAlt}
            width={40}
            height={40}
            className="size-10 object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-sans text-headline-md font-semibold text-on-surface transition-colors group-hover:text-primary">
                {job.title}
              </h3>
              <p className="flex items-center gap-1 text-secondary">
                <Building2 className="size-4.5" aria-hidden="true" />
                {job.company} • {job.location}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {job.benefits.map((benefit) => (
                <span
                  key={benefit.label}
                  className={`rounded-full border px-3 py-1 font-label text-label-sm font-bold ${benefitStyles[benefit.variant]}`}
                >
                  {benefit.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1.5 font-bold text-on-surface-variant">
                <Wallet className="size-5 text-primary" aria-hidden="true" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <Clock className="size-5" aria-hidden="true" />
                {job.jobType}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {job.status && (
                <span
                  className={`rounded px-2 py-1 font-mono text-label-sm ${
                    job.status.urgent
                      ? "bg-error-container text-error"
                      : "bg-surface-variant text-secondary"
                  }`}
                >
                  {job.status.label}
                </span>
              )}
              <Button className="bg-on-surface px-6 py-2 font-bold text-surface hover:bg-primary">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
