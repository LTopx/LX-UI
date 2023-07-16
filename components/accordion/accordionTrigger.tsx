import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "../_lib/cn";
import { Down_fill } from "../icon";

const AccordionTrigger = React.forwardRef(
  ({ children, className, size, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "group cursor-pointer flex flex-1 items-center justify-between transition-colors",
          "hover:bg-neutral-200/60 dark:hover:bg-neutral-700/80",
          {
            "h-10 px-2": size === "sm",
            "h-12 px-3": size === "base",
            "h-[58px] px-4": size === "lg",
          },
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className="font-medium">{children}</span>
        <Down_fill
          size={16}
          className="transition-all group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export default AccordionTrigger;
