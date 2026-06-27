"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  initialBookmarked?: boolean;
  className?: string;
}

export function BookmarkButton({
  initialBookmarked = false,
  className = "",
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);

  return (
    <button
      type="button"
      onClick={() => setBookmarked((prev) => !prev)}
      className={`rounded-full p-2 transition-colors hover:bg-surface-variant ${className} ${
        bookmarked ? "text-primary" : "text-outline"
      }`}
      aria-label={bookmarked ? "Remove bookmark" : "Save job"}
      aria-pressed={bookmarked}
    >
      <Bookmark
        className="size-5"
        fill={bookmarked ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}
