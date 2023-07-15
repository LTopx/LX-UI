import React from "react";
import * as RadixProgress from "@radix-ui/react-progress";
import { cn } from "../_lib/cn";
import type { ShownType, SizeType } from "../config-provider";

export interface ProgressProps {
  className?: string;
  type?: ShownType;
  size?: SizeType;
  value?: number;
}

const Progress: React.FC<ProgressProps> = ({
  className,
  type = "default",
  size = "base",
  value = 0,
}) => {
  return (
    <RadixProgress.Root
      className={cn(
        "w-full bg-lx-color-fill-3 dark:bg-lx-color-fill-3-dark overflow-hidden rounded-full",
        {
          "h-3": size === "sm",
          "h-4": size === "base",
          "h-5": size === "lg",
        },
        className
      )}
      style={{ transform: "translateZ(0)" }}
      value={value}
    >
      <RadixProgress.Indicator
        className={cn("w-full h-full transition-all duration-700", {
          "bg-[rgb(201,205,212)]": type === "default",
          "bg-sky-400 dark:bg-sky-500": type === "primary",
          "bg-emerald-400 dark:bg-emerald-500": type === "success",
          "bg-amber-400 dark:bg-amber-500": type === "warning",
          "bg-rose-400 dark:bg-rose-500": type === "danger",
        })}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </RadixProgress.Root>
  );
};

export default Progress;
