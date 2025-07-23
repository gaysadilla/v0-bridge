import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead" | "large" | "small" | "muted";
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant);

    return (
      <Component
        ref={ref}
        className={cn(getVariantStyles(variant), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

function getDefaultElement(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "lead":
    case "large":
    case "small":
    case "muted":
    case "p":
    default:
      return "p";
  }
}

function getVariantStyles(variant: TypographyProps["variant"]) {
  switch (variant) {
    case "h1":
      return "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-foreground";
    case "h2":
      return "scroll-m-20 text-3xl font-semibold tracking-tight text-foreground";
    case "h3":
      return "scroll-m-20 text-2xl font-semibold tracking-tight text-foreground";
    case "h4":
      return "scroll-m-20 text-xl font-semibold tracking-tight text-foreground";
    case "h5":
      return "scroll-m-20 text-lg font-semibold tracking-tight text-foreground";
    case "h6":
      return "scroll-m-20 text-base font-semibold tracking-tight text-foreground";
    case "p":
      return "leading-7 text-foreground [&:not(:first-child)]:mt-6";
    case "lead":
      return "text-xl text-muted-foreground";
    case "large":
      return "text-lg font-semibold text-foreground";
    case "small":
      return "text-sm font-medium leading-none text-foreground";
    case "muted":
      return "text-sm text-muted-foreground";
    default:
      return "text-foreground";
  }
}

export { Typography, type TypographyProps };