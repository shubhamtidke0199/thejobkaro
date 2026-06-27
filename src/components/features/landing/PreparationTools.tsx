import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { PrepTool } from "@/types/landing";

interface PreparationToolsProps {
  tools: PrepTool[];
}

export function PreparationTools({ tools }: PreparationToolsProps) {
  return (
    <div className="rounded-xl bg-tertiary-fixed p-6">
      <h3 className="mb-4 text-base font-bold text-on-tertiary-fixed">
        Preparation Tools
      </h3>
      <ul className="space-y-3">
        {tools.map((tool) => (
          <li key={tool.label}>
            <Link
              href={tool.href}
              className="flex items-center justify-between rounded-lg bg-surface-container-lowest/50 p-3 transition-all hover:bg-surface-container-lowest"
            >
              <span className="font-label text-sm font-bold">{tool.label}</span>
              <ChevronRight className="size-4" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
