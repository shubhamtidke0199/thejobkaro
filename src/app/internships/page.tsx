import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { InternshipFiltersSidebar } from "@/components/features/internships/InternshipFiltersSidebar";
import { InternshipListings } from "@/components/features/internships/InternshipListings";
import { InternshipSearchBar } from "@/components/features/internships/InternshipSearchBar";
import { RecommendedInternshipsSection } from "@/components/features/internships/RecommendedInternshipsSection";
import { SORT_OPTIONS } from "@/constants/internships";

export const metadata: Metadata = {
  title: "Internships | JobKaro",
  description:
    "Find premium internships with verified employers. Filter by type, duration, and stipend to accelerate your career.",
};

export default function InternshipsPage() {
  return (
    <>
      <Navbar activeHref="/internships" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <InternshipFiltersSidebar />

            <section className="md:col-span-9">
              <InternshipSearchBar />

              <header className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="font-sans text-display-lg font-bold tracking-tight text-on-surface">
                    Find Your Opportunity
                  </h1>
                  <p className="text-lg text-secondary">
                    Accelerating professional growth with premium internships.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-4 py-2">
                  <span className="font-label text-label-sm text-secondary">
                    Sort by:
                  </span>
                  <select
                    className="cursor-pointer border-none bg-transparent font-label text-label-sm text-on-surface focus:ring-0"
                    defaultValue={SORT_OPTIONS[0].value}
                    aria-label="Sort internships"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </header>

              <RecommendedInternshipsSection />
              <InternshipListings />
            </section>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/internships" />
    </>
  );
}
