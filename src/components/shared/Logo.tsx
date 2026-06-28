import Image from "next/image";
import Link from "next/link";

import {
  BRAND_LOGO_SRC,
  LOGO_DEFAULT_HEIGHT,
} from "@/constants/images";

interface LogoProps {
  href?: string;
  className?: string;
  height?: number;
  priority?: boolean;
}

export function Logo({
  href = "/",
  className = "",
  height = LOGO_DEFAULT_HEIGHT,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={BRAND_LOGO_SRC}
      alt="JobKaro"
      width={Math.round(height * 3.9)}
      height={height}
      className="w-auto"
      style={{ height }}
      priority={priority}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link href={href} className={`inline-flex shrink-0 items-center ${className}`}>
      {image}
    </Link>
  );
}
