import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { AbroadJobFiltersSidebar } from "@/components/features/abroad-jobs/AbroadJobFiltersSidebar";
import { AbroadJobListings } from "@/components/features/abroad-jobs/AbroadJobListings";
import { AbroadJobsHero } from "@/components/features/abroad-jobs/AbroadJobsHero";
import { CareerSuccessSection } from "@/components/features/abroad-jobs/CareerSuccessSection";
import { FeaturedDestinationsSection } from "@/components/features/abroad-jobs/FeaturedDestinationsSection";
import { SponsoredRelocationCard } from "@/components/features/abroad-jobs/SponsoredRelocationCard";

export const metadata: Metadata = {
  title: "Abroad Jobs | JobKaro",
  description:
    "Find verified international roles with visa sponsorship in 45+ countries. Explore global careers in Germany, UK, UAE, USA and more.",
};

export default function AbroadJobsPage() {
  return (
    <>
      <Navbar activeHref="/abroad-jobs" />
      <main className="pb-20 md:pb-0">
        <AbroadJobsHero />

        <Container>
          <FeaturedDestinationsSection />
        </Container>

        <section className="bg-surface-container-low py-8">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-3">
                <AbroadJobFiltersSidebar />
                <SponsoredRelocationCard />
              </div>
              <AbroadJobListings />
            </div>
          </Container>
        </section>

        <CareerSuccessSection />
      </main>
      <Footer />
      <MobileBottomNav activeHref="/abroad-jobs" />
    </>
  );
}
