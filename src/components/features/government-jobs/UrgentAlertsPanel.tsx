import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { URGENT_ALERTS } from "@/data/government-jobs";
import type { UrgentAlert } from "@/types/government-jobs";

const urgencyBorderStyles: Record<UrgentAlert["urgencyLevel"], string> = {
  high: "border-error",
  medium: "border-error/50",
  low: "border-error/30",
};

export function UrgentAlertsPanel() {
  return (
    <section
      aria-labelledby="urgent-alerts-heading"
      className="overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm"
    >
      <div className="flex items-center gap-2 bg-error px-4 py-3 text-white">
        <AlertTriangle className="size-4" aria-hidden="true" />
        <h2
          id="urgent-alerts-heading"
          className="text-sm font-bold tracking-wider uppercase"
        >
          Urgent Alerts
        </h2>
      </div>

      <div className="space-y-4 p-4">
        {URGENT_ALERTS.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 pl-3 ${urgencyBorderStyles[alert.urgencyLevel]}`}
          >
            <p className="font-mono text-xs text-secondary">
              {alert.urgencyLabel}
            </p>
            <h3 className="text-sm font-bold">{alert.title}</h3>
            <Link
              href={alert.href}
              className="text-xs font-bold text-primary hover:underline"
            >
              {alert.ctaLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
