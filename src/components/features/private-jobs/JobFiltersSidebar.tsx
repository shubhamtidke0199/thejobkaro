"use client";

import { Search } from "lucide-react";

import {
  EXPERIENCE_OPTIONS,
  LOCATION_OPTIONS,
} from "@/constants/private-jobs";

export function JobFiltersSidebar() {
  return (
    <aside className="md:col-span-3">
      <div className="sticky top-24 rounded-xl border border-outline-variant bg-surface-container-lowest p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-sans text-headline-md font-semibold">Filters</h2>
          <button
            type="button"
            className="font-label text-label-sm text-primary hover:underline"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <label
              htmlFor="filter-keywords"
              className="font-label text-label-sm tracking-wider text-secondary uppercase"
            >
              Search Keywords
            </label>
            <div className="relative">
              <Search
                className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-secondary"
                aria-hidden="true"
              />
              <input
                id="filter-keywords"
                type="search"
                placeholder="Design, Engineer..."
                className="w-full rounded-lg border-none bg-surface-container py-2 pr-4 pl-10 text-base text-on-surface outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="filter-location"
              className="font-label text-label-sm tracking-wider text-secondary uppercase"
            >
              Location
            </label>
            <select
              id="filter-location"
              className="w-full rounded-lg border-none bg-surface-container px-3 py-2 text-base text-on-surface outline-none focus:ring-2 focus:ring-primary"
              defaultValue="remote"
            >
              {LOCATION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="space-y-2">
            <legend className="font-label text-label-sm tracking-wider text-secondary uppercase">
              Experience
            </legend>
            <div className="space-y-2">
              {EXPERIENCE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    className="size-4 rounded border-outline text-primary focus:ring-primary"
                  />
                  <span className="text-base transition-colors group-hover:text-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="space-y-2">
            <label
              htmlFor="filter-salary"
              className="font-label text-label-sm tracking-wider text-secondary uppercase"
            >
              Salary (Annual)
            </label>
            <input
              id="filter-salary"
              type="range"
              min={5}
              max={50}
              defaultValue={25}
              className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-variant accent-primary"
            />
            <div className="flex justify-between font-mono text-label-sm text-secondary">
              <span>₹5L</span>
              <span>₹50L+</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="font-medium">Remote Only</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <span className="peer h-6 w-11 rounded-full bg-surface-variant peer-checked:bg-primary peer-focus:outline-none after:absolute after:top-0.5 after:left-0.5 after:size-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
}
