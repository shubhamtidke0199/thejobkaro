import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { JobFiltersSidebar } from "@/components/features/private-jobs/JobFiltersSidebar";
import { PrivateJobListings } from "@/components/features/private-jobs/PrivateJobListings";
import { RecommendedJobsSection } from "@/components/features/private-jobs/RecommendedJobsSection";
import { SeoContentBlock } from "@/components/features/private-jobs/SeoContentBlock";
import { JOB_LISTING_COUNT } from "@/data/private-jobs";
import { SORT_OPTIONS } from "@/constants/private-jobs";

export const metadata: Metadata = {
  title: "Private Jobs | JobKaro - Accelerating Professional Growth",
  description:
    "Explore verified private sector jobs. Filter by location, experience, and salary to find high-growth opportunities.",
};

export default function PrivateJobsPage() {
  return (
    <>
      <Navbar activeHref="/private-jobs" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <JobFiltersSidebar />

            <section className="space-y-8 md:col-span-9">
              <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h1 className="font-sans text-display-lg-mobile font-bold tracking-tight text-on-surface md:text-display-lg md:leading-[1.1]">
                    Explore Private Jobs
                  </h1>
                  <p className="text-lg text-secondary">
                    Showing {JOB_LISTING_COUNT.toLocaleString()} high-growth
                    opportunities for you
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label text-label-sm text-secondary">
                    Sort by:
                  </span>
                  <select
                    className="cursor-pointer border-none bg-transparent font-medium text-primary focus:ring-0"
                    defaultValue={SORT_OPTIONS[0].value}
                    aria-label="Sort all jobs"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </header>

              <RecommendedJobsSection />
              <PrivateJobListings />
              <SeoContentBlock />
            </section>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/private-jobs" />
    </>
  );
}
