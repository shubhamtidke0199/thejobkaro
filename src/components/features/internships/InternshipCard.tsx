import Image from "next/image";
import {
  BadgeCheck,
  Clock,
  Globe,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { InternshipListing } from "@/types/internships";

interface InternshipMetaProps {
  duration: string;
  location: string;
  certificate?: boolean;
  inverse?: boolean;
}

function InternshipMeta({
  duration,
  location,
  certificate,
  inverse = false,
}: InternshipMetaProps) {
  const isRemote = location.toLowerCase().includes("remote");
  const LocationIcon = isRemote ? Globe : MapPin;
  const textClass = inverse ? "text-surface-variant" : "text-on-surface-variant";
  const certClass = inverse
    ? "bg-primary/20 text-primary-fixed"
    : "bg-primary-container/10 text-primary";

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <span className={`flex items-center gap-2 ${textClass}`}>
        <Clock className="size-4.5" aria-hidden="true" />
        <span className="font-label text-label-sm">{duration}</span>
      </span>
      <span className={`flex items-center gap-2 ${textClass}`}>
        <LocationIcon className="size-4.5" aria-hidden="true" />
        <span className="font-label text-label-sm">{location}</span>
      </span>
      {certificate && (
        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 font-label text-label-sm ${certClass}`}
        >
          <BadgeCheck className="size-4" aria-hidden="true" />
          Certificate provided
        </span>
      )}
    </div>
  );
}

interface DeadlineBadgeProps {
  label: string;
  variant: "urgent" | "standard";
  inverse?: boolean;
}

function DeadlineBadge({ label, variant, inverse = false }: DeadlineBadgeProps) {
  if (inverse && variant === "urgent") {
    return (
      <span className="mb-2 rounded-full bg-error-container px-3 py-1 font-mono text-label-sm text-error">
        {label}
      </span>
    );
  }

  return (
    <span className="mb-2 rounded-full bg-secondary-container px-3 py-1 font-mono text-label-sm text-secondary">
      {label}
    </span>
  );
}

interface SponsoredInternshipCardProps {
  internship: InternshipListing;
}

export function SponsoredInternshipCard({
  internship,
}: SponsoredInternshipCardProps) {
  return (
    <article className="bento-card relative rounded-xl border border-outline-variant bg-inverse-surface p-6 text-inverse-on-surface">
      <span className="absolute top-4 right-4 rounded bg-primary/20 px-2 py-1 font-mono text-label-sm text-primary-fixed">
        SPONSORED
      </span>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-white p-2">
          <Image
            src={internship.logo}
            alt={internship.logoAlt}
            width={48}
            height={48}
            className="size-full object-contain"
          />
        </div>
        <div className="min-w-0 grow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="mb-1 font-sans text-headline-md font-semibold">
                {internship.title}
              </h3>
              <p className="text-base text-surface-variant">
                {internship.company} · {internship.department}
              </p>
            </div>
            <div className="hidden flex-col items-end md:flex">
              <DeadlineBadge
                label={internship.deadlineLabel}
                variant={internship.deadlineVariant}
                inverse
              />
              <span className="font-sans text-headline-md text-primary-fixed">
                {internship.stipend}
              </span>
            </div>
          </div>
          <InternshipMeta
            duration={internship.duration}
            location={internship.location}
            certificate={internship.certificate}
            inverse
          />
        </div>
      </div>
      <Button className="mt-6 w-full px-8 py-3 md:w-auto">
        Apply Now
      </Button>
    </article>
  );
}

interface InternshipCardProps {
  internship: InternshipListing;
}

export function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <article className="bento-card rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-outline-variant bg-surface-container-low p-2">
          <Image
            src={internship.logo}
            alt={internship.logoAlt}
            width={48}
            height={48}
            className="size-full object-contain"
          />
        </div>
        <div className="min-w-0 grow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="mb-1 font-sans text-headline-md font-semibold text-on-surface">
                {internship.title}
              </h3>
              <p className="text-base text-secondary">
                {internship.company} · {internship.department}
              </p>
            </div>
            <div className="hidden flex-col items-end md:flex">
              <DeadlineBadge
                label={internship.deadlineLabel}
                variant={internship.deadlineVariant}
              />
              <span className="font-sans text-headline-md text-primary">
                {internship.stipend}
              </span>
            </div>
          </div>
          <InternshipMeta
            duration={internship.duration}
            location={internship.location}
            certificate={internship.certificate}
          />
        </div>
      </div>
    </article>
  );
}
