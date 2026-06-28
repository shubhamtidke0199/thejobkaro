import { BellRing } from "lucide-react";

import { Button } from "@/components/ui/Button";

export function ResultsHubHeader() {
  return (
    <header className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div>
        <h1 className="mb-1 font-sans text-3xl font-bold md:text-5xl">
          Results & Admit Card Hub
        </h1>
        <p className="max-w-2xl text-lg text-secondary">
          Your centralized portal for verified government results, final merit
          lists, and upcoming exam hall tickets.
        </p>
      </div>
      <Button className="flex items-center gap-3 px-6 py-4 font-bold shadow-lg shadow-primary/20 hover:shadow-lg">
        <BellRing className="size-5 fill-current" aria-hidden="true" />
        Enable Instant Alerts
      </Button>
    </header>
  );
}
