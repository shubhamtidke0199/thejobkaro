import Image from "next/image";

import { SCHEME_IMAGES } from "@/constants/images";
import { SCHEME_QUICK_SEARCHES } from "@/constants/schemes";

export function SchemesHero() {
  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-xl bg-inverse-surface px-8 py-20 text-center">
        <Image
          src={SCHEME_IMAGES.heroBackground}
          alt="Government schemes background"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative z-10">
          <h1 className="mb-4 font-sans text-3xl font-bold text-primary-fixed md:text-5xl">
            Welfare & Career Schemes
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-surface-container-low">
            Discover verified government initiatives designed to empower students,
            entrepreneurs, and communities through financial and structural support.
          </p>
          <div className="group relative mx-auto max-w-xl">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search by scheme name, state, or ministry..."
              className="w-full rounded-full border-none bg-white py-4 pr-4 pl-12 text-on-surface shadow-sm outline-none transition-all focus:ring-2 focus:ring-primary-container group-focus-within:scale-105"
            />
            <div className="absolute top-full left-0 z-20 mt-2 hidden w-full rounded-xl border border-outline-variant bg-white p-4 text-left shadow-lg group-focus-within:block">
              <p className="mb-2 px-2 font-label text-label-sm font-bold tracking-wider text-secondary uppercase">
                Quick Results
              </p>
              <div className="space-y-1">
                {SCHEME_QUICK_SEARCHES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-surface"
                    >
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                      <span className="text-body-md">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
