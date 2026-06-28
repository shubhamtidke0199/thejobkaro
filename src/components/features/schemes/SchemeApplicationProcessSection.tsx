import { SCHEME_APPLICATION_STEPS } from "@/constants/schemes";

export function SchemeApplicationProcessSection() {
  return (
    <section className="mb-20">
      <div className="rounded-2xl border border-outline-variant bg-white p-6 md:p-10">
        <h2 className="mb-8 font-sans text-2xl font-bold">
          Simplified Application Process
        </h2>
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
          <div
            className="absolute top-10 right-10 left-10 -z-10 hidden h-0.5 border-t-2 border-dashed border-outline-variant md:block"
            aria-hidden="true"
          />
          {SCHEME_APPLICATION_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className={`mb-4 flex size-16 items-center justify-center rounded-full border-4 border-white shadow-md transition-transform group-hover:scale-110 ${
                    step.active
                      ? "bg-primary-container text-on-primary-container"
                      : "bg-surface-container-highest text-secondary"
                  }`}
                >
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h4 className="mb-2 font-bold">{index + 1}. {step.title}</h4>
                <p className="font-label text-label-sm text-secondary">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
