import type { SchemeStatusVariant } from "@/types/schemes";

const statusStyles: Record<SchemeStatusVariant, string> = {
  urgent: "bg-error-container text-on-error-container uppercase font-bold",
  rolling: "bg-surface-variant text-secondary",
  new: "bg-white text-secondary",
  open: "bg-surface-variant text-secondary",
  active: "bg-surface-variant text-secondary",
  closing: "bg-error-container text-on-error-container uppercase font-bold",
};

interface SchemeStatusBadgeProps {
  label: string;
  variant: SchemeStatusVariant;
}

export function SchemeStatusBadge({ label, variant }: SchemeStatusBadgeProps) {
  return (
    <span
      className={`rounded px-2 py-1 font-mono text-[11px] ${statusStyles[variant]}`}
    >
      {label}
    </span>
  );
}
