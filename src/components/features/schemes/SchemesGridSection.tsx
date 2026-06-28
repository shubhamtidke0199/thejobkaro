"use client";

import { useMemo, useState } from "react";

import { FeaturedSchemeCard } from "@/components/features/schemes/FeaturedSchemeCard";
import { SchemeCard } from "@/components/features/schemes/SchemeCard";
import { SchemeCategoryFilters } from "@/components/features/schemes/SchemeCategoryFilters";
import { SponsoredSchemeListingCard } from "@/components/features/schemes/SponsoredSchemeListingCard";
import {
  FEATURED_SCHEME,
  STANDARD_SCHEME_LISTINGS,
} from "@/data/schemes";
import type { SchemeCategory } from "@/types/schemes";

function matchesCategory(
  category: SchemeCategory,
  filter: "all" | SchemeCategory,
): boolean {
  return filter === "all" || category === filter;
}

export function SchemesGridSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | SchemeCategory>(
    "all",
  );

  const visibleStandardSchemes = useMemo(
    () =>
      STANDARD_SCHEME_LISTINGS.filter((scheme) =>
        matchesCategory(scheme.category, activeCategory),
      ),
    [activeCategory],
  );

  const showFeatured =
    activeCategory === "all" || activeCategory === FEATURED_SCHEME.category;

  return (
    <>
      <SchemeCategoryFilters onChange={setActiveCategory} />
      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleStandardSchemes.slice(0, 1).map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}

        {showFeatured ? <FeaturedSchemeCard scheme={FEATURED_SCHEME} /> : null}

        {visibleStandardSchemes.slice(1, 3).map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}

        <SponsoredSchemeListingCard />

        {visibleStandardSchemes.slice(3).map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </section>
    </>
  );
}
