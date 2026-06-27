import { Calendar } from "lucide-react";

import type { GovernmentJobDetail } from "@/types/government-jobs";

interface GovernmentJobImportantDatesSectionProps {
  dates: GovernmentJobDetail["importantDates"];
}

export function GovernmentJobImportantDatesSection({
  dates,
}: GovernmentJobImportantDatesSectionProps) {
  return (
    <section
      aria-labelledby="dates-heading"
      className="bento-card overflow-hidden rounded-xl"
    >
      <div className="border-b border-outline-variant bg-surface-container-low p-8">
        <h2
          id="dates-heading"
          className="flex items-center gap-2 font-sans text-headline-md font-semibold"
        >
          <Calendar className="size-6 text-primary" aria-hidden="true" />
          Important Dates
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-container">
              <th className="border-b border-outline-variant p-4 font-label text-label-sm text-secondary">
                Event
              </th>
              <th className="border-b border-outline-variant p-4 font-label text-label-sm text-secondary">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {dates.map((row) => (
              <tr
                key={row.event}
                className={row.urgent ? "bg-error-container/10" : undefined}
              >
                <td
                  className={`p-4 ${row.urgent ? "font-semibold text-error" : ""}`}
                >
                  {row.event}
                </td>
                <td
                  className={`p-4 font-mono ${row.urgent ? "text-right font-semibold text-error" : ""}`}
                >
                  {row.badge && (
                    <span className="mr-2 rounded bg-error px-2 py-1 text-xs text-on-error">
                      {row.badge}
                    </span>
                  )}
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
