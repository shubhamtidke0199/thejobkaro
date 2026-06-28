"use client";

import Image from "next/image";
import { useState } from "react";
import { Bookmark } from "lucide-react";

import { SCHOLARSHIP_IMAGES } from "@/constants/images";
import type { InternationalScholarship } from "@/types/scholarships";

interface InternationalScholarshipCardProps {
  scholarship: InternationalScholarship;
}

export function InternationalScholarshipCard({
  scholarship,
}: InternationalScholarshipCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <article className="bento-card group flex flex-col overflow-hidden rounded-3xl border border-outline-variant bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={SCHOLARSHIP_IMAGES[scholarship.imageKey]}
          alt={scholarship.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-lg bg-primary-fixed px-3 py-1 text-[10px] font-bold tracking-wider text-on-primary-fixed uppercase">
            {scholarship.region}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h4 className="mb-2 text-xl font-bold text-on-surface">
            {scholarship.title}
          </h4>
          <p className="line-clamp-3 text-sm leading-relaxed text-secondary">
            {scholarship.description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-outline-variant pt-4">
          <span className="text-lg font-bold text-primary">
            {scholarship.fundingLabel}
          </span>
          <button
            type="button"
            onClick={() => setBookmarked((prev) => !prev)}
            className={`flex size-10 items-center justify-center rounded-full border border-outline-variant transition-colors hover:border-primary hover:text-primary ${
              bookmarked ? "border-primary text-primary" : "text-outline"
            }`}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark scholarship"}
            aria-pressed={bookmarked}
          >
            <Bookmark
              className="size-5"
              fill={bookmarked ? "currentColor" : "none"}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
