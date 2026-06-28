"use client";

import { useState } from "react";

import { SCHEME_CATEGORY_FILTERS } from "@/constants/schemes";
import type { SchemeCategory } from "@/types/schemes";

interface SchemeCategoryFiltersProps {
  onChange: (category: "all" | SchemeCategory) => void;
}

export function SchemeCategoryFilters({ onChange }: SchemeCategoryFiltersProps) {
  const [active, setActive] = useState<"all" | SchemeCategory>("all");

  return (
    <section className="mb-8 pb-4">
      <div className="flex flex-wrap justify-center gap-4 whitespace-nowrap">
        {SCHEME_CATEGORY_FILTERS.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => {
                setActive(filter.value);
                onChange(filter.value);
              }}
              className={`rounded-full px-6 py-2 font-body-md text-body-md font-medium transition-colors ${
                isActive
                  ? "bg-primary text-on-primary shadow-sm"
                  : "border border-outline-variant bg-white text-secondary hover:bg-surface-variant"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
