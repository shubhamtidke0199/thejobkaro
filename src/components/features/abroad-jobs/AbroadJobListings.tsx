import { ABROAD_JOB_LISTINGS, JOB_LISTING_COUNT } from "@/data/abroad-jobs";
import { SORT_OPTIONS } from "@/constants/abroad-jobs";

import { AbroadJobCard } from "./AbroadJobCard";

export function AbroadJobListings() {
  return (
    <div className="space-y-4 lg:col-span-9">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-sans text-headline-md font-semibold text-on-surface">
          {JOB_LISTING_COUNT.toLocaleString()} Jobs Found
        </h2>
        <div className="flex items-center gap-2 font-label text-label-sm text-secondary">
          Sort by:
          <select
            className="border-none bg-transparent font-bold text-on-surface focus:ring-0"
            defaultValue={SORT_OPTIONS[0].value}
            aria-label="Sort abroad jobs"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {ABROAD_JOB_LISTINGS.map((job) => (
        <AbroadJobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
