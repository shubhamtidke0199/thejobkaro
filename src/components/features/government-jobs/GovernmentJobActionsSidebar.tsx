"use client";

import { AlarmClock, Bookmark, ExternalLink, Share2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { GovernmentJobDetail } from "@/types/government-jobs";

interface GovernmentJobActionsSidebarProps {
  application: GovernmentJobDetail["application"];
}

export function GovernmentJobActionsSidebar({
  application,
}: GovernmentJobActionsSidebarProps) {
  return (
    <section
      aria-labelledby="actions-heading"
      className="bento-card space-y-4 rounded-xl p-8 shadow-sm"
    >
      <h2 id="actions-heading" className="sr-only">
        Job actions
      </h2>
      <Button className="flex w-full items-center justify-center gap-2 py-3">
        Apply Now
        <ExternalLink className="size-5" aria-hidden="true" />
      </Button>

      <div className="flex gap-2">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline py-2 font-bold transition-all hover:bg-surface-variant/30"
        >
          <Bookmark className="size-5" aria-hidden="true" />
          Save
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline py-2 font-bold transition-all hover:bg-surface-variant/30"
        >
          <Share2 className="size-5" aria-hidden="true" />
          Share
        </button>
      </div>

      <div className="border-t border-outline-variant pt-4">
        <p className="mb-2 flex items-center gap-1 font-label text-label-sm text-secondary">
          <AlarmClock className="size-4 text-error" aria-hidden="true" />
          {application.endsLabel}
        </p>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div
            className="h-full bg-error"
            style={{ width: `${application.progressPercent}%` }}
            role="progressbar"
            aria-valuenow={application.progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Application deadline progress"
          />
        </div>
      </div>
    </section>
  );
}
