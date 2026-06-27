"use client";

import { Filter } from "lucide-react";

import {
  REGION_OPTIONS,
  SALARY_RANGE,
  VISA_RELOCATION_OPTIONS,
} from "@/constants/abroad-jobs";

export function AbroadJobFiltersSidebar() {
  return (
    <aside className="space-y-6">
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-[0px_4px_20px_rgba(7,22,39,0.05)]">
        <h2 className="mb-4 flex items-center gap-2 font-bold text-on-surface">
          <Filter className="size-5 text-primary" aria-hidden="true" />
          Filters
        </h2>

        <div className="space-y-6">
          <fieldset className="space-y-2">
            <legend className="mb-3 block font-label text-label-sm tracking-wider text-secondary uppercase">
              Region
            </legend>
            <div className="space-y-2">
              {REGION_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    defaultChecked={option.value === "north-america"}
                    className="size-4 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-body-md transition-colors group-hover:text-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <hr className="border-outline-variant" />

          <fieldset className="space-y-2">
            <legend className="mb-3 block font-label text-label-sm tracking-wider text-secondary uppercase">
              Visa &amp; Relocation
            </legend>
            <div className="space-y-2">
              {VISA_RELOCATION_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="group flex cursor-pointer items-center gap-3"
                >
                  <input
                    type="checkbox"
                    defaultChecked={option.value === "visa-sponsorship"}
                    className="size-4 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-body-md transition-colors group-hover:text-primary">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <hr className="border-outline-variant" />

          <div className="space-y-2">
            <label
              htmlFor="abroad-salary-range"
              className="mb-3 block font-label text-label-sm tracking-wider text-secondary uppercase"
            >
              Annual Salary (USD)
            </label>
            <input
              id="abroad-salary-range"
              type="range"
              min={SALARY_RANGE.min}
              max={SALARY_RANGE.max}
              defaultValue={SALARY_RANGE.default}
              className="w-full accent-primary"
            />
            <div className="mt-2 flex justify-between font-label text-label-sm text-secondary">
              <span>{SALARY_RANGE.minLabel}</span>
              <span className="font-bold text-primary">
                ${SALARY_RANGE.default}k+
              </span>
              <span>{SALARY_RANGE.maxLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
