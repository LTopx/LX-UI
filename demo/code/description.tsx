import React from "react";
import { cn } from "@components/_lib/cn";

const Description: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        "border-t min-h-[80px] text-sm py-4",
        "border-neutral-200/50 dark:border-neutral-700/80"
      )}
    >
      {children}
    </div>
  );
};

export default Description;
