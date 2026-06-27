import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { MobileBottomNav } from "@/components/shared/MobileBottomNav";
import { Navbar } from "@/components/shared/Navbar";
import { PrivateJobBreadcrumbs } from "@/components/features/private-jobs/PrivateJobBreadcrumbs";
import {
  PrivateJobCompanyCard,
  PrivateJobHiringManagerCard,
} from "@/components/features/private-jobs/PrivateJobCompanyCard";
import { PrivateJobContentSection } from "@/components/features/private-jobs/PrivateJobContentSection";
import { PrivateJobDetailHeader } from "@/components/features/private-jobs/PrivateJobDetailHeader";
import { PrivateJobHighlightsGrid } from "@/components/features/private-jobs/PrivateJobHighlightsGrid";
import {
  SimilarPrivateJobsSection,
  SponsoredCareerServicesCard,
} from "@/components/features/private-jobs/PrivateJobSidebarSections";
import {
  getPrivateJobDetail,
  getPrivateJobDetailSlugs,
} from "@/data/private-job-details";

interface PrivateJobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPrivateJobDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PrivateJobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getPrivateJobDetail(slug);

  if (!job) {
    return { title: "Job Not Found | JobKaro" };
  }

  return {
    title: `${job.title} | ${job.company} | JobKaro`,
    description: job.aboutRole[0],
  };
}

export default async function PrivateJobDetailPage({
  params,
}: PrivateJobDetailPageProps) {
  const { slug } = await params;
  const job = getPrivateJobDetail(slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar activeHref="/private-jobs" />
      <main className="pb-20 md:pb-0">
        <Container className="py-8">
          <PrivateJobBreadcrumbs title={job.title} />

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <PrivateJobDetailHeader job={job} />
              <PrivateJobHighlightsGrid highlights={job.highlights} />
              <PrivateJobContentSection job={job} />
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="sticky top-20 space-y-6">
                <PrivateJobCompanyCard company={job.companyProfile} />
                <PrivateJobHiringManagerCard manager={job.hiringManager} />
                <SimilarPrivateJobsSection />
                <SponsoredCareerServicesCard />
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileBottomNav activeHref="/private-jobs" />
    </>
  );
}
