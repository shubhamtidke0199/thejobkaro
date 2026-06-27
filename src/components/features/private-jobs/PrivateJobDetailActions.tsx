"use client";

import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function PrivateJobDetailActions() {
  return (
    <div className="flex w-full gap-2 md:w-auto">
      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline px-6 py-3 font-label text-label-sm text-secondary transition-colors hover:bg-surface-variant md:flex-none"
      >
        <Bookmark className="size-5" aria-hidden="true" />
        Save
      </button>
      <Button className="flex-1 px-8 py-3 shadow-md md:flex-none">
        Apply Now
      </Button>
    </div>
  );
}
