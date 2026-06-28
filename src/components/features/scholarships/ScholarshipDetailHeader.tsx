import Image from "next/image";
import { CalendarX, GraduationCap, HandCoins } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { ScholarshipDetail } from "@/types/scholarships";

interface ScholarshipDetailHeaderProps {
  scholarship: ScholarshipDetail;
}

export function ScholarshipDetailHeader({
  scholarship,
}: ScholarshipDetailHeaderProps) {
  return (
    <section className={`${detailSectionCardClassName} mb-6 p-6 md:p-8`}>
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-4">
            <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-outline-variant bg-white">
              <Image
                src={scholarship.logo}
                alt={scholarship.logoAlt}
                width={40}
                height={40}
                className="size-10 object-contain"
              />
            </div>
            <span className="font-sans text-xl font-bold text-secondary">
              {scholarship.organization}
            </span>
          </div>
          <h1 className="mb-6 font-sans text-3xl leading-tight font-bold text-on-surface md:text-5xl">
            {scholarship.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-surface-container-low px-4 py-2">
              <HandCoins className="size-5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-label text-label-sm leading-none tracking-wider text-secondary uppercase">
                  Amount
                </p>
                <p className="font-bold text-on-surface">{scholarship.amount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-surface-container-low px-4 py-2">
              <CalendarX className="size-5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-label text-label-sm leading-none tracking-wider text-secondary uppercase">
                  Deadline
                </p>
                <p className="font-bold text-on-surface">{scholarship.deadline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-surface-container-low px-4 py-2">
              <GraduationCap className="size-5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-label text-label-sm leading-none tracking-wider text-secondary uppercase">
                  Education
                </p>
                <p className="font-bold text-on-surface">{scholarship.education}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-[200px] flex-col gap-2">
          <Button className="w-full bg-primary-container py-4 text-lg font-bold text-on-primary-container shadow-sm hover:opacity-90">
            Apply Now
          </Button>
          <p className="text-center font-mono text-label-sm text-secondary">
            {scholarship.appliedCount}
          </p>
        </div>
      </div>
    </section>
  );
}
