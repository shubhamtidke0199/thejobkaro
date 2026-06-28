import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { ExamResultListing } from "@/types/results";

const statusStyles = {
  available: "bg-primary-container/10 text-primary-container",
  releasing: "bg-secondary-container text-on-secondary-container",
  tba: "bg-surface-variant text-on-surface-variant",
};

interface ResultListingCardProps {
  result: ExamResultListing;
}

export function ResultListingCard({ result }: ResultListingCardProps) {
  const Icon = result.icon;

  return (
    <article className="group rounded-xl border border-outline-variant bg-white p-6 shadow-md transition-all hover:border-primary-container">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-outline-variant bg-surface-container-low transition-colors group-hover:border-primary-container">
            {result.logo ? (
              <Image
                src={result.logo}
                alt={result.logoAlt ?? result.organization}
                width={40}
                height={40}
                className="size-10 object-contain"
              />
            ) : Icon ? (
              <Icon className="size-8 text-primary" aria-hidden="true" />
            ) : null}
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-sans text-xl font-semibold text-on-surface">
                {result.title}
              </h3>
              <span
                className={`rounded px-2 py-0.5 text-[11px] font-bold uppercase ${statusStyles[result.status.variant]}`}
              >
                {result.status.label}
              </span>
            </div>
            <p className="font-label text-label-sm text-secondary">
              {result.organization}
              {result.organizationDetail
                ? ` • ${result.organizationDetail}`
                : null}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-2 lg:items-end">
          {result.releasedAt ? (
            <span className="font-label text-label-sm text-secondary">
              Released: {result.releasedAt}
            </span>
          ) : null}
          <Button
            variant={result.ctaVariant === "primary" ? "primary" : "outline-primary"}
            className={`w-full px-8 py-3 font-bold lg:w-auto ${
              result.ctaVariant === "primary"
                ? "shadow-md shadow-primary/10"
                : "border-2"
            }`}
          >
            {result.ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
