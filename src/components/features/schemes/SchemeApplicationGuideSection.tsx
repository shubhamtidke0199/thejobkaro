import type { SchemeApplicationGuideStep } from "@/types/schemes";

interface SchemeApplicationGuideSectionProps {
  steps: SchemeApplicationGuideStep[];
}

export function SchemeApplicationGuideSection({
  steps,
}: SchemeApplicationGuideSectionProps) {
  return (
    <section>
      <h2 className="mb-8 font-sans text-xl font-semibold text-on-surface">
        Step-by-Step Application Guide
      </h2>
      <div className="relative pl-10 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:border-l-2 before:border-dashed before:border-outline-variant before:content-['']">
        {steps.map((step, index) => (
          <div
            key={step.step}
            className={index < steps.length - 1 ? "relative pb-10" : "relative"}
          >
            <div className="absolute top-0 -left-10 z-10 flex size-6 items-center justify-center rounded-full bg-primary">
              <span className="text-[10px] font-bold text-on-primary">
                {step.step}
              </span>
            </div>
            <h4 className="mb-2 font-bold text-on-surface">{step.title}</h4>
            <p className="text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
