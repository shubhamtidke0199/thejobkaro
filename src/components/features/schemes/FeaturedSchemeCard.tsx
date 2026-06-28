import Image from "next/image";
import Link from "next/link";

import { SCHEME_IMAGES } from "@/constants/images";
import { schemeDetailHref } from "@/components/features/schemes/schemeDetailHref";
import type { SchemeListing } from "@/types/schemes";

interface FeaturedSchemeCardProps {
  scheme: SchemeListing;
}

export function FeaturedSchemeCard({ scheme }: FeaturedSchemeCardProps) {
  const imageSrc =
    scheme.featuredImageKey != null
      ? SCHEME_IMAGES[scheme.featuredImageKey]
      : null;

  return (
    <article className="bento-card flex flex-col gap-6 rounded-xl border border-outline bg-inverse-surface p-6 text-white md:col-span-2 md:flex-row">
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-primary-fixed px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-on-primary-fixed uppercase">
            Recommended
          </span>
          <span className="text-[12px] text-on-primary-fixed-variant">
            Featured Program
          </span>
        </div>
        <Link href={schemeDetailHref(scheme.slug)}>
          <h3 className="mb-3 font-sans text-2xl font-semibold text-primary-fixed hover:brightness-110 md:text-3xl">
            {scheme.title}
          </h3>
        </Link>
        <p className="mb-6 text-body-md text-tertiary-fixed-dim">
          {scheme.description}
        </p>
        {scheme.featuredStats ? (
          <div className="mb-6 grid grid-cols-2 gap-4">
            {scheme.featuredStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-outline/20 bg-surface-container-highest/10 p-3"
              >
                <p className="mb-1 text-[10px] text-secondary-fixed-dim uppercase">
                  {stat.label}
                </p>
                <p className="font-sans text-xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        ) : null}
        <Link
          href={schemeDetailHref(scheme.slug)}
          className="inline-flex rounded-lg bg-primary-fixed px-8 py-3 font-bold text-on-primary-fixed transition-all hover:brightness-110"
        >
          {scheme.ctaLabel}
        </Link>
      </div>
      {imageSrc ? (
        <div className="relative h-48 w-full overflow-hidden rounded-lg grayscale transition-all duration-700 hover:grayscale-0 md:h-auto md:w-1/3">
          <Image
            src={imageSrc}
            alt={scheme.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
    </article>
  );
}
