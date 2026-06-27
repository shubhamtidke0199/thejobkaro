import { GitBranch, HelpCircle, ChevronDown } from "lucide-react";

import type { GovernmentJobDetail } from "@/types/government-jobs";

interface GovernmentJobSelectionProcessSectionProps {
  steps: GovernmentJobDetail["selectionProcess"];
}

export function GovernmentJobSelectionProcessSection({
  steps,
}: GovernmentJobSelectionProcessSectionProps) {
  return (
    <section
      aria-labelledby="selection-heading"
      className="bento-card space-y-6 rounded-xl p-8"
    >
      <h2
        id="selection-heading"
        className="flex items-center gap-2 font-sans text-headline-md font-semibold"
      >
        <GitBranch className="size-6 text-primary" aria-hidden="true" />
        Selection Process
      </h2>
      <div className="relative space-y-8 pl-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:border-l-2 before:border-dashed before:border-outline-variant before:content-['']">
        {steps.map((step) => (
          <div key={step.step} className="relative">
            <span
              className={`absolute -left-8 top-1 flex size-6 items-center justify-center rounded-full text-xs font-bold ${
                step.active
                  ? "bg-primary text-on-primary"
                  : "bg-outline text-on-surface"
              }`}
            >
              {step.step}
            </span>
            <h3 className="font-bold text-body-lg">{step.title}</h3>
            <p className="text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

interface GovernmentJobFaqSectionProps {
  faqs: GovernmentJobDetail["faqs"];
}

export function GovernmentJobFaqSection({ faqs }: GovernmentJobFaqSectionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bento-card space-y-4 rounded-xl p-8"
    >
      <h2
        id="faq-heading"
        className="flex items-center gap-2 font-sans text-headline-md font-semibold"
      >
        <HelpCircle className="size-6 text-primary" aria-hidden="true" />
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group cursor-pointer rounded-lg border border-outline-variant p-4"
          >
            <summary className="flex list-none items-center justify-between font-bold">
              {faq.question}
              <ChevronDown
                className="size-5 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-secondary">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
