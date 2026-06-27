import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 md:px-10 ${className}`}
    >
      {children}
    </Component>
  );
}
