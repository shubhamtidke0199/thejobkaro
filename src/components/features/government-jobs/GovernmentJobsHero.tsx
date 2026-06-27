import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { TRENDING_SEARCHES } from "@/constants/government-jobs";
import { ACTIVE_OPENINGS_COUNT } from "@/data/government-jobs";

export function GovernmentJobsHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-outline-variant bg-inverse-surface py-20"
      aria-labelledby="govt-jobs-hero-heading"
    >
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center md:px-10">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1 font-label text-label-sm text-primary-fixed">
          <span
            className="size-2 animate-pulse rounded-full bg-primary"
            aria-hidden="true"
          />
          {ACTIVE_OPENINGS_COUNT.toLocaleString()}+ Active Openings Today
        </span>

        <h1
          id="govt-jobs-hero-heading"
          className="mb-8 max-w-3xl font-sans text-display-lg-mobile font-bold text-inverse-on-surface md:text-display-lg"
        >
          Your Career in Public Service Starts Here.
        </h1>

        <form
          className="flex w-full max-w-2xl flex-col gap-2 rounded-xl bg-white p-2 shadow-2xl md:flex-row"
          role="search"
          aria-label="Search government jobs"
        >
          <div className="flex flex-1 items-center border-b border-outline-variant px-4 md:border-r md:border-b-0">
            <Search
              className="mr-2 size-5 text-secondary"
              aria-hidden="true"
            />
            <label htmlFor="govt-job-search" className="sr-only">
              Search exams, departments, or postings
            </label>
            <input
              id="govt-job-search"
              type="search"
              placeholder="Exams, Departments, or Postings..."
              className="w-full border-none bg-transparent py-3 text-body-md text-on-surface focus:ring-0"
            />
          </div>

          <div className="flex min-w-[200px] items-center justify-between px-4 py-3 md:py-0">
            <span className="font-label text-label-sm text-secondary">
              Personalized for You
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                defaultChecked
                className="peer sr-only"
                aria-label="Enable personalized job recommendations"
              />
              <div className="h-6 w-11 rounded-full bg-surface-container peer-checked:bg-primary after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
            </label>
          </div>

          <Button type="submit" className="px-8 py-3 shadow-lg shadow-primary/20">
            Find Jobs
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-4 font-label text-label-sm text-surface-variant">
          <span className="text-white/50">Trending:</span>
          {TRENDING_SEARCHES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b border-white/20 hover:text-primary-fixed"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
