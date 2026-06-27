import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-primary"
  | "ghost"
  | "surface"
  | "inverse-outline"
  | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container active:scale-[0.98]",
  secondary:
    "bg-secondary text-on-secondary hover:opacity-90 active:scale-[0.98]",
  outline:
    "border border-outline-variant bg-transparent text-on-surface hover:border-primary hover:bg-surface-container-low",
  "outline-primary":
    "border border-outline-variant bg-transparent text-primary font-bold hover:bg-primary/5",
  ghost:
    "bg-transparent text-secondary hover:bg-surface-container-low active:scale-[0.98]",
  surface:
    "bg-surface-container-lowest text-primary font-bold hover:bg-surface-container-low active:scale-[0.98]",
  "inverse-outline":
    "border border-on-primary bg-transparent text-on-primary font-bold hover:bg-on-primary/10 active:scale-[0.98]",
  accent:
    "bg-primary-fixed text-on-primary-fixed font-bold hover:bg-primary-fixed-dim active:scale-[0.98]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 font-label text-sm font-semibold tracking-wide transition-all disabled:cursor-not-allowed disabled:opacity-60 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
