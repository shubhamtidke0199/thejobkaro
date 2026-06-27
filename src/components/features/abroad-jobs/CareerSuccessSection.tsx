import Link from "next/link";
import { ArrowRight, ArrowRightLeft } from "lucide-react";

import { CAREER_SUCCESS_TOOLS } from "@/constants/abroad-jobs";
import { SAMPLE_EXCHANGE_RATE } from "@/data/abroad-jobs";

export function CareerSuccessSection() {
  return (
    <section
      aria-labelledby="career-success-heading"
      className="bg-surface py-8"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2
            id="career-success-heading"
            className="font-sans text-display-lg-mobile font-bold text-on-surface md:text-display-lg"
          >
            International Career Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-secondary">
            Tools and insights to help you navigate your global move with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAREER_SUCCESS_TOOLS.map((tool) => {
            const Icon = tool.icon;

            return (
              <article
                key={tool.id}
                className="group rounded-2xl border border-outline-variant bg-white p-8 shadow-[0px_4px_20px_rgba(7,22,39,0.05)] transition-all hover:border-primary"
              >
                <div
                  className={`mb-6 flex size-12 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${tool.iconBgClass}`}
                >
                  <Icon
                    className={`size-7 ${tool.iconColorClass}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-3 font-sans text-headline-md font-semibold text-on-surface">
                  {tool.title}
                </h3>
                <p className="mb-6 text-on-surface-variant">
                  {tool.description}
                </p>

                {tool.type === "converter" ? (
                  <div className="flex items-center gap-2 rounded-lg bg-surface-container p-3">
                    <span className="font-bold">{SAMPLE_EXCHANGE_RATE.from}</span>
                    <ArrowRightLeft
                      className="size-4 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="font-bold text-primary">
                      {SAMPLE_EXCHANGE_RATE.to}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={tool.href ?? "#"}
                    className="group/link flex items-center gap-2 font-bold text-primary"
                  >
                    {tool.linkLabel}
                    <ArrowRight
                      className="size-4 transition-transform group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
