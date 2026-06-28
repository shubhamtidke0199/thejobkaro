import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SCHOLARSHIP_IMAGES } from "@/constants/images";

export function ScholarshipsHero() {
  return (
    <section className="overflow-hidden bg-inverse-surface px-4 py-20 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-fixed/20 bg-primary-container/20 px-3 py-1 text-[11px] font-bold tracking-widest text-primary-fixed uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-primary-fixed" />
            Academic Excellence 2026
          </div>
          <h1 className="font-sans text-4xl leading-[1.1] font-bold tracking-tight text-primary-fixed md:text-6xl">
            Unlock Your Educational Potential.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-tertiary-fixed md:text-xl">
            Discover curated scholarships tailored to your academic excellence
            and financial needs. We bridge the gap between dreams and degrees.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button className="px-10 py-4 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-xl">
              Explore All Opportunities
            </Button>
            <button
              type="button"
              className="rounded-xl border border-outline px-10 py-4 text-lg font-bold text-surface transition-all hover:bg-white/10"
            >
              Guide for Applicants
            </button>
          </div>
        </div>
        <div className="w-full max-w-xl flex-1">
          <div className="relative rotate-1 overflow-hidden rounded-3xl border-8 border-white/5 shadow-2xl">
            <Image
              src={SCHOLARSHIP_IMAGES.hero}
              alt="Student studying in a modern library"
              width={640}
              height={480}
              className="aspect-[4/3] w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
