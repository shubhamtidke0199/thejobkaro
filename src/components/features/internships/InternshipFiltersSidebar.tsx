"use client";

import { Search } from "lucide-react";

import {
  DURATION_OPTIONS,
  INTERNSHIP_TYPE_OPTIONS,
} from "@/constants/internships";

export function InternshipFiltersSidebar() {
  return (
    <aside className="md:col-span-3">
      <div className="sticky top-24 rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-sans text-headline-md font-semibold">Filters</h2>
          <button
            type="button"
            className="font-label text-label-sm text-primary hover:underline"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="internship-keywords"
              className="mb-2 block font-label text-label-sm text-secondary"
            >
              Keywords
            </label>
            <div className="relative">
              <Search
                className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-outline"
                aria-hidden="true"
              />
              <input
                id="internship-keywords"
                type="search"
                placeholder="Design, Dev, Marketing..."
                className="w-full rounded-lg border border-outline-variant bg-surface py-2 pr-4 pl-10 text-base text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <fieldset>
            <legend className="mb-3 font-label text-label-sm tracking-wider text-secondary uppercase">
              Internship Type
            </legend>
            <div className="space-y-2">
              {INTERNSHIP_TYPE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    defaultChecked={option.defaultChecked}
                    className="rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-base transition-colors group-hover:text-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-3 font-label text-label-sm tracking-wider text-secondary uppercase">
              Duration
            </legend>
            <div className="space-y-2">
              {DURATION_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    defaultChecked={option.defaultChecked}
                    className="rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-base transition-colors group-hover:text-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="internship-stipend"
              className="mb-3 block font-label text-label-sm tracking-wider text-secondary uppercase"
            >
              Min Stipend (₹)
            </label>
            <input
              id="internship-stipend"
              type="range"
              min={0}
              max={50000}
              step={5000}
              defaultValue={25000}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-surface-variant accent-primary"
            />
            <div className="mt-2 flex justify-between font-mono text-label-sm text-outline">
              <span>₹0</span>
              <span>₹50k+</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
