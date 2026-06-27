import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/shared/Container";
import { POPULAR_SEARCHES } from "@/constants/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24">
      <Container className="relative z-10 text-center">
        <h1 className="mx-auto mb-8 max-w-4xl font-sans text-display-lg-mobile leading-tight font-bold tracking-tight text-on-background md:text-display-lg md:leading-[1.1]">
          Find Jobs, Results, Scholarships &amp; Opportunities —{" "}
          <span className="text-primary">All in One Place</span>
        </h1>

        <div className="relative mx-auto max-w-2xl">
          <form
            className="glass-search flex items-center rounded-xl border border-outline-variant p-2 shadow-lg transition-all focus-within:ring-2 focus-within:ring-primary/20"
            role="search"
            aria-label="Site search"
          >
            <Search
              className="ml-3 size-5 shrink-0 text-secondary"
              aria-hidden="true"
            />
            <label htmlFor="hero-search" className="sr-only">
              Search jobs, exams, and internships
            </label>
            <input
              id="hero-search"
              type="search"
              placeholder="Search for SSC, TCS, internships..."
              className="w-full border-none bg-transparent px-4 py-3 text-base text-on-surface focus:ring-0 focus:outline-none"
            />
            <Button type="submit" className="px-6 py-3">
              Search
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="self-center font-label text-sm font-medium text-secondary">
              Popular:
            </span>
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full bg-surface-container-high px-3 py-1 font-label text-sm font-medium text-on-secondary-container transition-colors hover:bg-primary-container hover:text-on-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-0 h-full w-full -translate-x-1/2 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[-10%] h-[60%] w-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[60%] w-[40%] rounded-full bg-tertiary/20 blur-[120px]" />
      </div>
    </section>
  );
}
