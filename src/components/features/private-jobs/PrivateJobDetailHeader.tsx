import Image from "next/image";

import type { PrivateJobDetail } from "@/types/private-jobs";

import { detailCardClassName } from "./detailCardClassName";
import { PrivateJobDetailActions } from "./PrivateJobDetailActions";

interface PrivateJobDetailHeaderProps {
  job: PrivateJobDetail;
}

export function PrivateJobDetailHeader({ job }: PrivateJobDetailHeaderProps) {
  return (
    <section
      aria-labelledby="private-job-title"
      className={`${detailCardClassName} p-8`}
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
            <Image
              src={job.logo}
              alt={job.logoAlt}
              width={48}
              height={48}
              className="size-12 object-contain"
            />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1
                id="private-job-title"
                className="font-sans text-display-lg-mobile font-bold leading-tight md:text-display-lg"
              >
                {job.title}
              </h1>
              {job.badge && (
                <span className="h-fit rounded bg-error-container px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider text-on-error-container uppercase">
                  {job.badge}
                </span>
              )}
            </div>
            <p className="font-sans text-headline-md font-semibold text-secondary">
              {job.company} • {job.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant pt-4">
        <div className="flex flex-col">
          <span className="font-label text-label-sm text-secondary">
            Annual Salary
          </span>
          <span className="font-sans text-headline-md font-bold">
            {job.salary}
          </span>
        </div>
        <PrivateJobDetailActions />
      </div>
    </section>
  );
}
