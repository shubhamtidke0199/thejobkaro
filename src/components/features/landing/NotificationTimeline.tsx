import { Button } from "@/components/ui/Button";
import type { Notification } from "@/types/landing";

interface NotificationTimelineProps {
  notifications: Notification[];
}

const tagStyles = {
  result: "bg-secondary-container text-on-secondary-container",
  govt: "bg-primary-container text-on-primary-container",
  internship: "bg-tertiary-container text-on-tertiary-container",
  default: "bg-surface-container-high text-on-surface-variant",
} as const;

export function NotificationTimeline({
  notifications,
}: NotificationTimelineProps) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
      <h2 className="mb-6 font-sans text-headline-md font-semibold tracking-tight">
        Latest Notifications
      </h2>

      <ol className="relative space-y-0">
        {notifications.map((notification) => (
          <li
            key={notification.title}
            className="timeline-item timeline-line relative flex gap-4 pb-8 last:pb-0"
          >
            <div
              className={`relative z-10 mt-1.5 size-4 shrink-0 rounded-full ${
                notification.active
                  ? "bg-primary shadow-primary-ring"
                  : "bg-outline-variant"
              }`}
              aria-hidden="true"
            />
            <div className="min-w-0 grow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-bold text-on-surface">
                  {notification.title}
                </h3>
                <span className="shrink-0 font-label text-label-sm text-secondary">
                  {notification.time}
                </span>
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {notification.tags.map((tag) => (
                  <li key={tag.label}>
                    <span
                      className={`rounded px-2 py-0.5 font-mono text-label-sm font-medium uppercase ${tagStyles[tag.variant]}`}
                    >
                      {tag.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <Button variant="outline-primary" className="mt-6 w-full py-3">
        View All Notifications
      </Button>
    </div>
  );
}
