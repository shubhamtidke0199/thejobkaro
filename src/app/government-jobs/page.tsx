import type { Metadata } from "next";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { GovernmentJobNotificationsSection } from "@/components/features/government-jobs/GovernmentJobNotificationsSection";
import { GovernmentJobsHero } from "@/components/features/government-jobs/GovernmentJobsHero";
import { RecommendedGovernmentJobsSection } from "@/components/features/government-jobs/RecommendedGovernmentJobsSection";
import { RecruitmentAgenciesSection } from "@/components/features/government-jobs/RecruitmentAgenciesSection";
import { ResourceCenterLinks } from "@/components/features/government-jobs/ResourceCenterLinks";
import { SponsoredPrimeCard } from "@/components/features/government-jobs/SponsoredPrimeCard";
import { UrgentAlertsPanel } from "@/components/features/government-jobs/UrgentAlertsPanel";

export const metadata: Metadata = {
  title: "Government Jobs | JobKaro - Premium Government Career Portal",
  description:
    "Find UPSC, SSC, Railway, Banking and PSU vacancies. Personalized recommendations and urgent deadline alerts for public sector careers.",
};

export default function GovernmentJobsPage() {
  return (
    <>
      <Navbar activeHref="/government-jobs" />
      <main className="pb-20 md:pb-0">
        <GovernmentJobsHero />

        <Container className="py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-9">
              <RecruitmentAgenciesSection />
              <RecommendedGovernmentJobsSection />
              <GovernmentJobNotificationsSection />
            </div>

            <aside className="space-y-8 lg:col-span-3">
              <UrgentAlertsPanel />
              <ResourceCenterLinks />
              <SponsoredPrimeCard />
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/government-jobs" />
    </>
  );
}
