import { Search } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function InternshipSearchBar() {
  return (
    <form
      className="mb-8 flex items-center gap-4 rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-sm"
      role="search"
      aria-label="Search internships"
    >
      <div className="relative grow">
        <Search
          className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-outline"
          aria-hidden="true"
        />
        <label htmlFor="internship-search" className="sr-only">
          Search internships
        </label>
        <input
          id="internship-search"
          type="search"
          placeholder="Search by role, company, or skills..."
          className="w-full rounded-lg border border-outline-variant bg-surface py-3 pr-4 pl-10 text-base text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button type="submit" className="shrink-0 px-6 py-3">
        Search
      </Button>
    </form>
  );
}
