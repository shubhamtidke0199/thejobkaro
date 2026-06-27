"use client";

import Link from "next/link";
import { useState } from "react";

import { NOTIFICATION_FILTER_TABS } from "@/constants/government-jobs";
import { GOVERNMENT_JOB_LISTINGS } from "@/data/government-jobs";
import type { GovernmentJobCategory } from "@/types/government-jobs";

import { GovernmentJobCard } from "./GovernmentJobCard";

type FilterValue = "all" | GovernmentJobCategory;

export function GovernmentJobNotificationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredJobs =
    activeFilter === "all"
      ? GOVERNMENT_JOB_LISTINGS
      : GOVERNMENT_JOB_LISTINGS.filter((job) => job.category === activeFilter);

  return (
    <section aria-labelledby="notifications-heading">
      <div className="mb-6 flex flex-col flex-wrap justify-between gap-4 md:flex-row md:items-center">
        <h2
          id="notifications-heading"
          className="font-sans text-headline-md font-semibold"
        >
          Latest Notifications
        </h2>

        <div
          className="flex gap-2 self-start rounded-lg bg-surface-container-high p-1"
          role="tablist"
          aria-label="Filter notifications by category"
        >
          {NOTIFICATION_FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;

            return (
              <button
                key={tab.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.value)}
                className={`rounded-md px-4 py-1.5 font-label text-label-sm transition-colors ${
                  isActive
                    ? "bg-white text-primary shadow-sm"
                    : "text-secondary hover:bg-white/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <Link
          href="#"
          className="font-label text-label-sm font-bold text-primary hover:underline md:ml-auto"
        >
          View All Jobs
        </Link>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <GovernmentJobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
