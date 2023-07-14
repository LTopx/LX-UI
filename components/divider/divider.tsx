import React from "react";
import { cn } from "../_lib/cn";

export interface DividerProps {
  className?: string;
  type?: "horizontal" | "vertical";
  dashed?: boolean;
  children?: React.ReactNode;
  orientation?: "left" | "right" | "center";
}

const Divider: React.FC<DividerProps> = ({
  className,
  type = "horizontal",
  dashed,
  children,
  orientation,
}) => {
  if (!children) {
    return (
      <div
        className={cn(
          {
            "border-dashed": !!dashed,
            "border-b border-b-[rgb(229,230,235)] dark:border-b-[rgb(72,72,73)] my-5 w-full":
              type === "horizontal",
            "inline border-r border-r-[rgb(229,230,235)] dark:border-r-[rgb(72,72,73)] mx-5 h-full":
              type === "vertical",
          },
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center my-5",
        "before:h-0 before:flex-1 before:border-b before:border-[rgb(229,230,235)] dark:before:border-[rgb(72,72,73)]",
        "after:h-0 after:flex-1 after:border-b after:border-[rgb(229,230,235)] dark:after:border-[rgb(72,72,73)]",
        {
          "before:border-dashed after:border-dashed": !!dashed,
          "before:basis-6 before:grow-0": orientation === "left",
          "after:basis-6 after:grow-0": orientation === "right",
        },
        className
      )}
    >
      <span className="px-4">{children}</span>
    </div>
  );
};

export default Divider;
