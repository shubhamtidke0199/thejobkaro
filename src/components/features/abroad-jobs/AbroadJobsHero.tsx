import Image from "next/image";
import { MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HERO_BACKGROUND_IMAGE } from "@/data/abroad-jobs";

export function AbroadJobsHero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center overflow-hidden bg-inverse-surface py-20"
      aria-labelledby="abroad-jobs-hero-heading"
    >
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <Image
          src={HERO_BACKGROUND_IMAGE.src}
          alt={HERO_BACKGROUND_IMAGE.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-10">
        <span className="mb-6 inline-block rounded-full border border-primary-fixed/30 bg-primary-container/20 px-4 py-1.5 font-mono text-label-sm text-primary-fixed">
          WORLDWIDE OPPORTUNITIES
        </span>

        <h1
          id="abroad-jobs-hero-heading"
          className="mb-6 max-w-3xl font-sans text-display-lg-mobile font-bold leading-tight text-white md:text-display-lg"
        >
          Global Careers,{" "}
          <span className="text-primary-fixed">Simplified.</span>
        </h1>

        <p className="mb-10 max-w-xl text-body-lg text-surface-variant">
          Bridge the gap between your local expertise and international
          ambition. Verified roles with visa sponsorship in 45+ countries.
        </p>

        <form
          className="flex max-w-3xl flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md md:flex-row"
          role="search"
          aria-label="Search abroad jobs"
        >
          <div className="flex flex-1 items-center gap-3 rounded-lg bg-white px-4 py-3">
            <Search className="size-5 text-secondary" aria-hidden="true" />
            <label htmlFor="abroad-job-title" className="sr-only">
              Job title, skills or role
            </label>
            <input
              id="abroad-job-title"
              type="search"
              placeholder="Job title, skills or role"
              className="w-full border-none bg-transparent text-on-surface focus:ring-0"
            />
          </div>

          <div className="flex flex-1 items-center gap-3 rounded-lg bg-white px-4 py-3">
            <MapPin className="size-5 text-secondary" aria-hidden="true" />
            <label htmlFor="abroad-job-country" className="sr-only">
              Country
            </label>
            <input
              id="abroad-job-country"
              type="search"
              placeholder="Country (e.g. Germany)"
              className="w-full border-none bg-transparent text-on-surface focus:ring-0"
            />
          </div>

          <Button
            type="submit"
            className="whitespace-nowrap bg-primary-container px-8 py-3 text-on-primary-container hover:bg-primary-fixed-dim"
          >
            Explore Jobs
          </Button>
        </form>
      </div>
    </section>
  );
}
