import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { SORT_OPTIONS } from "@/constants/private-jobs";
import { PRIVATE_JOBS, SPONSORED_JOB } from "@/data/private-jobs";

import {
  PrivateJobCard,
  SponsoredJobCard,
} from "./PrivateJobCard";

export function PrivateJobListings() {
  return (
    <div className="space-y-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-sans text-headline-md font-semibold">
          Latest Private Jobs
        </h2>
        <div className="flex items-center gap-2">
          <span className="font-label text-label-sm text-secondary">
            Sort by:
          </span>
          <select
            className="cursor-pointer border-none bg-transparent p-0 font-medium text-primary focus:ring-0"
            defaultValue={SORT_OPTIONS[0].value}
            aria-label="Sort jobs"
          >
            {SORT_OPTIONS.slice(0, 2).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <SponsoredJobCard job={SPONSORED_JOB} />
        {PRIVATE_JOBS.map((job) => (
          <PrivateJobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="flex justify-center py-8">
        <Button
          variant="outline-primary"
          className="gap-2 rounded-full px-8 py-3 shadow-sm"
        >
          View more jobs
          <ChevronDown className="size-5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
