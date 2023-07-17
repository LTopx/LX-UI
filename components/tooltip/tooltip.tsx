import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../_lib/cn";

export interface ToolTipProps {
  className?: string;
  title?: React.ReactNode;
  side?: "top" | "bottom";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  children?: React.ReactNode;
}

const Tooltip: React.FC<ToolTipProps> = ({
  className,
  title,
  side,
  align,
  alignOffset,
  sideOffset = 6,
  children,
}) => {
  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div>{children}</div>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={cn(
              "z-[2000] py-2 px-4 text-sm rounded-md shadow-md max-w-[calc(100vw-10rem)] md:max-w-xs break-words",
              "data-[side=top]:animate-lx-dropdown-open-top data-[side=bottom]:animate-lx-dropdown-open-down",
              "data-[state=closed]:animate-lx-fade-out",
              "text-white/90 bg-neutral-800 dark:bg-gray-700",
              className
            )}
            side={side}
            align={align}
            alignOffset={alignOffset}
            sideOffset={sideOffset}
          >
            {title}
            <RadixTooltip.Arrow className="fill-neutral-800 dark:fill-gray-700" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
