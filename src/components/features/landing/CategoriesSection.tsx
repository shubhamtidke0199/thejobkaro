import { LayoutGrid } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { CATEGORIES } from "@/constants/landing";

import { CategoryCard } from "./CategoryCard";

export function CategoriesSection() {
  return (
    <section aria-labelledby="categories-heading">
      <Container className="py-8">
        <h2
          id="categories-heading"
          className="mb-8 flex items-center gap-2 font-sans text-headline-md font-semibold tracking-tight"
        >
          <LayoutGrid className="size-6 text-primary" aria-hidden="true" />
          Categories
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
