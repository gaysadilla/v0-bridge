import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        success:
          "text-green-700 bg-green-50 border-green-200 dark:text-green-200 dark:bg-green-950 dark:border-green-800 [&>svg]:text-current *:data-[slot=alert-description]:text-green-600 dark:*:data-[slot=alert-description]:text-green-300",
        warning:
          "text-orange-700 bg-orange-50 border-orange-200 dark:text-orange-200 dark:bg-orange-950 dark:border-orange-800 [&>svg]:text-current *:data-[slot=alert-description]:text-orange-600 dark:*:data-[slot=alert-description]:text-orange-300",
        info:
          "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-200 dark:bg-blue-950 dark:border-blue-800 [&>svg]:text-current *:data-[slot=alert-description]:text-blue-600 dark:*:data-[slot=alert-description]:text-blue-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
