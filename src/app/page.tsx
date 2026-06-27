import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { CategoriesSection } from "@/components/features/landing/CategoriesSection";
import { CommunityCTA } from "@/components/features/landing/CommunityCTA";
import { DeadlineTracker } from "@/components/features/landing/DeadlineTracker";
import { FeaturedOpportunities } from "@/components/features/landing/FeaturedOpportunities";
import { Hero } from "@/components/features/landing/Hero";
import { NotificationTimeline } from "@/components/features/landing/NotificationTimeline";
import { PreparationTools } from "@/components/features/landing/PreparationTools";
import {
  DEADLINES,
  NOTIFICATIONS,
  PREP_TOOLS,
} from "@/constants/landing";

export default function Home() {
  return (
    <>
      <Navbar activeHref="/" />
      <main className="min-h-screen pb-20 md:pb-0">
        <Hero />
        <CategoriesSection />

        <Container
          as="section"
          className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12"
          aria-label="Latest updates and sidebar"
        >
          <div className="space-y-8 lg:col-span-8">
            <NotificationTimeline notifications={NOTIFICATIONS} />
            <FeaturedOpportunities />
          </div>
          <aside className="space-y-8 lg:col-span-4">
            <DeadlineTracker deadlines={DEADLINES} />
            <PreparationTools tools={PREP_TOOLS} />
            <CommunityCTA />
          </aside>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/" />
    </>
  );
}
