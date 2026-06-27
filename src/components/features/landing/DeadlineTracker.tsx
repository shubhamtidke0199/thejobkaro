"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

import type { Deadline } from "@/constants/landing";

interface DeadlineTrackerProps {
  deadlines: Deadline[];
}

function parseCountdown(label: string): number | null {
  if (!label.includes(":")) return null;
  const [hours, minutes, seconds] = label.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function formatCountdown(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

export function DeadlineTracker({ deadlines }: DeadlineTrackerProps) {
  const urgentDeadline = deadlines.find((deadline) => deadline.urgent);
  const initialCountdown = urgentDeadline
    ? parseCountdown(urgentDeadline.timeLabel)
    : null;

  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    if (initialCountdown === null) return;

    const interval = setInterval(() => {
      setCountdown((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCountdown]);

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 text-base font-bold">
        <Timer className="size-5 text-error" aria-hidden="true" />
        Closing Soon
      </h3>

      <ul className="space-y-4">
        {deadlines.map((deadline) => {
          const displayTime =
            deadline.urgent && countdown !== null
              ? formatCountdown(countdown)
              : deadline.timeLabel;

          return (
            <li
              key={deadline.title}
              className={`rounded-lg border p-4 ${
                deadline.urgent
                  ? "border-error-container bg-error-container/30"
                  : "border-outline-variant bg-surface-container-low"
              }`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h4
                  className={`font-label text-label-sm font-bold ${
                    deadline.urgent
                      ? "text-on-error-container"
                      : "text-on-surface"
                  }`}
                >
                  {deadline.title}
                </h4>
                <span
                  className={`shrink-0 font-mono text-label-sm font-bold ${
                    deadline.urgent ? "text-error" : "text-secondary"
                  }`}
                >
                  {displayTime}
                </span>
              </div>
              <div
                className={`h-1.5 w-full overflow-hidden rounded-full ${
                  deadline.urgent
                    ? "bg-on-error-container/10"
                    : "bg-outline-variant"
                }`}
                role="progressbar"
                aria-valuenow={deadline.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${deadline.title} deadline progress`}
              >
                <div
                  className={`h-full ${deadline.urgent ? "bg-error" : "bg-primary"}`}
                  style={{ width: `${deadline.progress}%` }}
                />
              </div>
              {deadline.note && (
                <p className="mt-2 font-label text-label-sm text-secondary">
                  {deadline.note}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
