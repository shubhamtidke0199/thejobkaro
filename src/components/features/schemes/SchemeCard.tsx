import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { schemeDetailSlugs } from "@/data/scheme-details";
import { schemeDetailHref } from "@/components/features/schemes/schemeDetailHref";
import { SchemeStatusBadge } from "@/components/features/schemes/SchemeStatusBadge";
import type { SchemeListing } from "@/types/schemes";

interface SchemeCardProps {
  scheme: SchemeListing;
}

export function SchemeCard({ scheme }: SchemeCardProps) {
  const Icon = scheme.icon;
  const hasDetail = schemeDetailSlugs.has(scheme.slug);

  const cardClassName =
    scheme.variant === "accent"
      ? "bento-card flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container-low p-6"
      : "bento-card flex h-full flex-col rounded-xl border border-outline-variant bg-white p-6";

  const titleContent = (
    <h3 className="mb-2 font-sans text-xl font-semibold text-on-background">
      {scheme.title}
    </h3>
  );

  return (
    <article className={cardClassName}>
      <div className="mb-6 flex items-start justify-between">
        <div
          className={`flex size-12 items-center justify-center rounded-lg ${
            scheme.variant === "accent" ? "bg-white shadow-sm" : "bg-surface-container"
          }`}
        >
          <Icon className="size-8 text-primary" aria-hidden="true" />
        </div>
        {scheme.status ? (
          <SchemeStatusBadge
            label={scheme.status.label}
            variant={scheme.status.variant}
          />
        ) : null}
      </div>

      <div className="flex-1">
        {hasDetail ? (
          <Link href={schemeDetailHref(scheme.slug)} className="hover:text-primary">
            {titleContent}
          </Link>
        ) : (
          titleContent
        )}
        <p className="mb-4 text-body-md text-secondary">{scheme.description}</p>
        {scheme.highlights.length > 0 ? (
          <div className="mb-6 space-y-3">
            {scheme.highlights.map((highlight) => {
              const HighlightIcon = highlight.icon;
              return (
                <div key={highlight.label} className="flex items-center gap-2">
                  <HighlightIcon
                    className="size-[18px] text-primary"
                    aria-hidden="true"
                  />
                  <span className="font-label text-label-sm font-medium">
                    {highlight.label}
                  </span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <Button
        variant={scheme.variant === "accent" ? "primary" : "outline"}
        className={`w-full py-3 font-bold ${
          scheme.variant === "accent"
            ? "shadow-md hover:-translate-y-0.5"
            : "border-primary/20 bg-surface-container-low text-primary hover:bg-primary hover:text-white"
        }`}
      >
        {scheme.ctaLabel}
      </Button>
    </article>
  );
}
