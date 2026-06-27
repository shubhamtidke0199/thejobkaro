import type { ReactNode } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

import type { PrivateJobDetail } from "@/types/private-jobs";

import { detailCardClassName } from "./detailCardClassName";

interface PrivateJobContentSectionProps {
  job: Pick<
    PrivateJobDetail,
    "aboutRole" | "responsibilities" | "requirements" | "perks"
  >;
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-l-4 border-primary pl-4 font-sans text-headline-md font-semibold text-on-surface">
      {children}
    </h2>
  );
}

export function PrivateJobContentSection({ job }: PrivateJobContentSectionProps) {
  return (
    <section className={`${detailCardClassName} space-y-8 p-8`}>
      <div className="space-y-4">
        <SectionHeading>About the Role</SectionHeading>
        <div className="space-y-4 leading-relaxed text-on-surface-variant">
          {job.aboutRole.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeading>What You&apos;ll Do</SectionHeading>
        <ul className="space-y-3">
          {job.responsibilities.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="text-on-surface-variant">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <SectionHeading>Requirements</SectionHeading>
        <ul className="space-y-3">
          {job.requirements.map((item) => (
            <li key={item} className="flex gap-3">
              <ArrowRight
                className="mt-0.5 size-5 shrink-0 text-secondary"
                aria-hidden="true"
              />
              <span className="text-on-surface-variant">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <SectionHeading>Perks &amp; Benefits</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {job.perks.map((perk) => {
            const Icon = perk.icon;

            return (
              <div
                key={perk.label}
                className="flex items-center gap-3 rounded-lg bg-surface-container-low p-3"
              >
                <span className="rounded-md bg-white p-2 shadow-sm">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span className="font-label text-label-sm text-on-surface">
                  {perk.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
