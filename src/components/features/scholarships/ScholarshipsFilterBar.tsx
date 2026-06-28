import { Search, SlidersHorizontal } from "lucide-react";

import {
  EDUCATION_LEVEL_FILTERS,
  REGION_FILTERS,
  SCHOLARSHIP_TYPE_FILTERS,
} from "@/constants/scholarships";

const selectClassName =
  "w-full cursor-pointer appearance-none rounded-xl border border-outline-variant bg-white bg-[length:20px] bg-[right_12px_center] bg-no-repeat px-4 py-3 font-label text-label-sm font-semibold shadow-sm transition-colors hover:border-primary lg:w-48";

const chevronBg =
  "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236D7A72%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')]";

function FilterSelect({
  options,
  id,
}: {
  options: { label: string; value: string }[];
  id: string;
}) {
  return (
    <select id={id} className={`${selectClassName} ${chevronBg} flex-1`}>
      {options.map((option) => (
        <option key={option.value || option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function ScholarshipsFilterBar() {
  return (
    <section className="sticky top-16 z-40 border-b border-outline-variant bg-surface/95 px-4 py-4 shadow-sm backdrop-blur-sm md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 lg:flex-row">
        <div className="relative w-full flex-1">
          <Search
            className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-outline"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search by name, organization or criteria..."
            className="w-full rounded-xl border border-outline-variant bg-white py-3 pr-4 pl-12 text-body-md shadow-sm transition-all outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex w-full flex-wrap gap-3 md:flex-nowrap lg:w-auto">
          <FilterSelect id="education-level" options={EDUCATION_LEVEL_FILTERS} />
          <FilterSelect id="scholarship-type" options={SCHOLARSHIP_TYPE_FILTERS} />
          <FilterSelect id="region" options={REGION_FILTERS} />
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-surface-container-highest px-6 py-3 font-bold text-on-surface-variant shadow-sm transition-all hover:bg-outline-variant"
          >
            <SlidersHorizontal className="size-5" aria-hidden="true" />
            Filters
          </button>
        </div>
      </div>
    </section>
  );
}
