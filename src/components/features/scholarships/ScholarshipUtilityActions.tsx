"use client";

import { useState } from "react";
import { Bookmark, Share2 } from "lucide-react";

import { detailSectionCardClassName } from "@/components/features/scholarships/detailCardClassName";

export function ScholarshipUtilityActions() {
  const [saved, setSaved] = useState(false);

  return (
    <section className={`${detailSectionCardClassName} p-4 md:p-6`}>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setSaved((prev) => !prev)}
          className="flex items-center justify-center gap-2 rounded-lg border border-outline py-2 font-bold text-on-surface transition-colors hover:bg-surface-container-low"
        >
          <Bookmark
            className="size-5"
            fill={saved ? "currentColor" : "none"}
            aria-hidden="true"
          />
          Save Scholarship
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-outline py-2 font-bold text-on-surface transition-colors hover:bg-surface-container-low"
        >
          <Share2 className="size-5" aria-hidden="true" />
          Share Link
        </button>
      </div>
    </section>
  );
}
