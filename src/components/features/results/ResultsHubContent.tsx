"use client";

import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Info,
  Ticket,
  Verified,
} from "lucide-react";
import { useState } from "react";

import { AdmitCardRow } from "@/components/features/results/AdmitCardRow";
import { ResultListingCard } from "@/components/features/results/ResultListingCard";
import {
  RESULTS_HUB_TABS,
  SPONSORED_ADMIT_OFFER,
  SPONSORED_RESULTS_OFFER,
  TRENDING_RESOURCES,
} from "@/constants/results";
import { RESULTS_IMAGES } from "@/constants/images";
import { ADMIT_CARDS, EXAM_RESULTS } from "@/data/results";
import type { ResultsHubTab } from "@/types/results";

export function ResultsHubContent() {
  const [activeTab, setActiveTab] = useState<ResultsHubTab>("results");

  return (
    <section className="lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-8">
        <div className="mb-6 flex gap-8 overflow-x-auto border-b border-outline-variant">
          {RESULTS_HUB_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.id === "results" ? Verified : Ticket;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 pb-4 font-sans text-xl font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-b-2 border-primary font-bold text-primary"
                    : "border-b-2 border-transparent text-secondary hover:text-on-surface"
                }`}
              >
                <TabIcon className="size-5" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "results" ? (
          <div className="space-y-4">
            {EXAM_RESULTS.map((result) => (
              <ResultListingCard key={result.id} result={result} />
            ))}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-lg border border-outline-variant transition-colors hover:bg-surface-variant/50"
                aria-label="Previous page"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-lg bg-primary font-bold text-on-primary"
              >
                1
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {ADMIT_CARDS.map((card) => (
              <AdmitCardRow key={card.id} card={card} />
            ))}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="flex items-center gap-1 font-bold text-primary hover:underline underline-offset-4"
              >
                View older admit cards
                <ChevronDown className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>

      <aside className="mt-8 hidden space-y-6 lg:col-span-4 lg:mt-0 lg:block">
        {activeTab === "results" ? (
          <div className="rounded-xl border border-outline-variant bg-surface-container-low p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-wider text-outline uppercase">
                Sponsored
              </span>
              <Info className="size-4 text-outline" aria-hidden="true" />
            </div>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={RESULTS_IMAGES.sponsoredCloud}
                alt="Cloud computing bootcamp"
                width={400}
                height={160}
                className="h-40 w-full object-cover"
              />
            </div>
            <h4 className="mb-2 font-sans text-xl font-semibold text-on-surface">
              {SPONSORED_RESULTS_OFFER.title}
            </h4>
            <p className="mb-4 text-secondary">
              {SPONSORED_RESULTS_OFFER.description}
            </p>
            <button
              type="button"
              className="w-full rounded-lg bg-secondary py-3 font-bold text-on-secondary transition-all hover:brightness-110"
            >
              {SPONSORED_RESULTS_OFFER.ctaLabel}
            </button>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-2xl bg-inverse-surface p-6 shadow-lg">
            <span className="absolute top-4 right-4 rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-widest text-tertiary-fixed uppercase">
              Sponsored
            </span>
            <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
              <Image
                src={RESULTS_IMAGES.sponsoredCloud}
                alt="Cloud computing masterclass"
                fill
                className="object-cover"
                sizes="400px"
              />
            </div>
            <h4 className="mb-2 font-sans text-xl font-semibold text-white">
              {SPONSORED_ADMIT_OFFER.title}
            </h4>
            <p className="mb-4 text-sm text-tertiary-fixed">
              {SPONSORED_ADMIT_OFFER.description}
            </p>
            <button
              type="button"
              className="w-full rounded-lg bg-primary-fixed py-3 font-bold text-on-primary-fixed transition-all hover:brightness-110"
            >
              {SPONSORED_ADMIT_OFFER.ctaLabel}
            </button>
          </div>
        )}

        <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-md">
          <h4 className="mb-4 font-bold text-on-surface">Trending Resources</h4>
          <ul className="space-y-3">
            {TRENDING_RESOURCES.map((resource) => {
              const Icon = resource.icon;
              return (
                <li key={resource.id}>
                  <button
                    type="button"
                    className="group flex w-full cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <span className="text-on-surface-variant transition-colors group-hover:text-primary">
                        {resource.label}
                      </span>
                    </div>
                    <ChevronRight
                      className="size-4 text-outline transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {activeTab === "admit" ? (
          <div className="rounded-2xl border border-outline-variant/50 bg-surface-container-low p-6">
            <div className="mb-3 flex items-center gap-3">
              <CircleHelp className="size-5 text-primary" aria-hidden="true" />
              <h4 className="font-bold text-on-surface">Need Help?</h4>
            </div>
            <p className="mb-4 text-sm text-on-surface-variant">
              Facing issues with downloading your admit card? Contact our support
              team immediately.
            </p>
            <button
              type="button"
              className="text-sm font-bold text-primary hover:underline"
            >
              Get Support Now
            </button>
          </div>
        ) : null}
      </aside>
    </section>
  );
}
