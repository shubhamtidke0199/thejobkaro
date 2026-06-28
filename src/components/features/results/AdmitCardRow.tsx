import { Download, Megaphone, Bell } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { AdmitCardListing } from "@/types/results";

const statusStyles = {
  available:
    "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-primary uppercase",
  releasing:
    "rounded-full bg-surface-container-high px-2 py-0.5 text-[10px] font-bold tracking-wider text-on-secondary-container uppercase",
  tba: "rounded-full border border-outline-variant bg-surface-container-lowest px-2 py-0.5 text-[10px] font-bold tracking-wider text-outline uppercase",
};

const iconToneStyles = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

interface AdmitCardRowProps {
  card: AdmitCardListing;
}

export function AdmitCardRow({ card }: AdmitCardRowProps) {
  const Icon = card.icon;
  const iconTone = card.iconTone ?? "primary";

  const ctaIcon =
    card.ctaVariant === "download" ? (
      <Download className="size-5" aria-hidden="true" />
    ) : card.ctaVariant === "notify" ? (
      <Bell className="size-5" aria-hidden="true" />
    ) : (
      <Megaphone className="size-5" aria-hidden="true" />
    );

  return (
    <article className="group flex flex-col justify-between gap-4 rounded-xl border border-outline-variant bg-white p-6 transition-all hover:bg-surface-container-low md:flex-row md:items-center">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface-container">
          <Icon
            className={`size-8 ${iconToneStyles[iconTone]}`}
            aria-hidden="true"
          />
        </div>
        <div>
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <span className={statusStyles[card.status.variant]}>
              {card.status.label}
            </span>
            <h3 className="font-sans text-lg font-semibold text-on-surface">
              {card.title}
            </h3>
          </div>
          <p className="text-sm text-on-surface-variant">
            Exam Date:{" "}
            <span
              className={
                card.examDatePending
                  ? "italic"
                  : "font-semibold text-on-surface"
              }
            >
              {card.examDate}
            </span>{" "}
            • {card.detail}
          </p>
        </div>
      </div>
      <Button
        variant={
          card.ctaVariant === "download"
            ? "primary"
            : card.ctaVariant === "notify"
              ? "outline-primary"
              : "outline"
        }
        className={`flex w-full items-center justify-center gap-2 px-6 py-3 font-bold md:w-auto ${
          card.ctaVariant === "alert" ? "border-outline text-on-surface-variant" : ""
        }`}
      >
        {ctaIcon}
        {card.ctaLabel}
      </Button>
    </article>
  );
}
