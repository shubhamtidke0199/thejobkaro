import Image from "next/image";
import { Briefcase, MapPin } from "lucide-react";

import type { GovernmentJobDetail } from "@/types/government-jobs";

interface GovernmentJobDetailHeaderProps {
  job: GovernmentJobDetail;
}

export function GovernmentJobDetailHeader({
  job,
}: GovernmentJobDetailHeaderProps) {
  return (
    <section
      aria-labelledby="job-detail-title"
      className="bento-card relative overflow-hidden rounded-xl p-8"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Image
            src={job.logo}
            alt={job.logoAlt}
            width={64}
            height={64}
            className="size-16 rounded-lg border border-outline-variant object-cover"
          />
          <div>
            <h1
              id="job-detail-title"
              className="mb-2 font-sans text-display-lg-mobile font-bold leading-tight md:text-display-lg"
            >
              {job.title}
            </h1>
            <p className="text-body-lg text-secondary">{job.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {job.metaTags.map((tag, index) => (
                <span
                  key={tag.label}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-label text-label-sm ${
                    tag.variant === "primary"
                      ? "bg-primary-container text-on-primary-container"
                      : "bg-surface-container-high font-mono text-on-secondary-container"
                  }`}
                >
                  {index === 0 && (
                    <Briefcase className="size-4" aria-hidden="true" />
                  )}
                  {index === 1 && (
                    <MapPin className="size-4" aria-hidden="true" />
                  )}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
