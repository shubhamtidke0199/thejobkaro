import { privateJobDetailPath } from "@/data/private-job-details";

export function privateJobDetailHref(detailSlug?: string): string | undefined {
  return privateJobDetailPath(detailSlug);
}
