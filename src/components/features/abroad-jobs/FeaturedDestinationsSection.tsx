import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FEATURED_DESTINATIONS } from "@/data/abroad-jobs";

export function FeaturedDestinationsSection() {
  return (
    <section aria-labelledby="destinations-heading" className="py-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2
            id="destinations-heading"
            className="font-sans text-headline-md font-semibold text-on-surface"
          >
            Featured Destinations
          </h2>
          <p className="text-secondary">
            High-growth markets with active hiring
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 font-medium text-primary hover:underline"
        >
          View all countries
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_DESTINATIONS.map((destination) => (
          <Link
            key={destination.id}
            href={destination.href ?? "#"}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-xl"
          >
            <Image
              src={destination.image}
              alt={destination.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
              <h3 className="font-sans text-headline-md font-bold text-white">
                {destination.name}
              </h3>
              <div className="mt-1 flex items-center justify-between text-primary-fixed">
                <span className="font-mono text-label-sm">
                  {destination.openingsCount.toLocaleString()}+ Openings
                </span>
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
