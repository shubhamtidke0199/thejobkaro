import { BellRing } from "lucide-react";

export function ScholarshipsSubscribeSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-outline-variant bg-surface-container p-8 text-center shadow-sm md:p-16">
      <div
        className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary-container via-primary to-primary-container"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-2xl space-y-6">
        <h2 className="font-sans text-3xl leading-tight font-semibold text-on-surface md:text-[40px]">
          Never Miss an Opportunity Again.
        </h2>
        <p className="text-lg text-secondary">
          Get personalized scholarship alerts delivered directly to your inbox
          based on your academic profile and interests.
        </p>
        <form className="flex flex-col gap-3 pt-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-2xl border border-outline-variant px-6 py-4 text-lg shadow-inner outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-on-primary transition-all hover:shadow-xl hover:shadow-primary/20"
          >
            Notify Me
            <BellRing className="size-5 fill-current" aria-hidden="true" />
          </button>
        </form>
        <p className="text-[11px] font-medium text-tertiary">
          Join 50,000+ students already using JobKaro for their education journey.
        </p>
      </div>
    </section>
  );
}
