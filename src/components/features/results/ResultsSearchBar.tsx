"use client";

import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

export function ResultsSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative mb-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-outline">
        <Search className="size-5" aria-hidden="true" />
      </div>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search by Exam Name, Organization, or Year..."
        className="w-full rounded-xl border border-outline-variant bg-surface py-4 pr-4 pl-12 font-body-md shadow-md outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
      />
      <div className="absolute inset-y-0 right-3 hidden items-center md:flex">
        <span className="inline-flex items-center rounded bg-surface-container-high px-2 py-1 font-mono text-[10px] tracking-tighter text-secondary uppercase">
          Press / to focus
        </span>
      </div>
    </div>
  );
}
