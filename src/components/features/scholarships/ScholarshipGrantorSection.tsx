import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";
import type { ScholarshipDetail } from "@/types/scholarships";

interface ScholarshipGrantorSectionProps {
  scholarship: Pick<
    ScholarshipDetail,
    | "organization"
    | "grantorLogo"
    | "grantorLogoAlt"
    | "grantorDescription"
    | "grantorWebsiteLabel"
  >;
}

export function ScholarshipGrantorSection({
  scholarship,
}: ScholarshipGrantorSectionProps) {
  return (
    <section className={`${detailSectionCardClassName} p-4 md:p-6`}>
      <h3 className="mb-2 font-label text-label-sm font-bold tracking-widest text-secondary uppercase">
        About Grantor
      </h3>
      <div className="mb-2 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded border border-outline-variant bg-surface p-1">
          <Image
            src={scholarship.grantorLogo}
            alt={scholarship.grantorLogoAlt}
            width={32}
            height={32}
            className="size-full object-contain"
          />
        </div>
        <span className="text-lg font-bold">{scholarship.organization}</span>
      </div>
      <p className="mb-4 text-sm leading-snug text-on-surface-variant">
        {scholarship.grantorDescription}
      </p>
      <a
        href="#"
        className="flex items-center gap-1 font-label text-label-sm font-bold text-primary hover:underline"
      >
        {scholarship.grantorWebsiteLabel}
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    </section>
  );
}
