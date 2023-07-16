import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "../_lib/cn";

const AccordionContent = React.forwardRef(
  ({ children, className, size, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=open]:animate-lx-accordion-down data-[state=closed]:animate-lx-accordion-up",

        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div
        className={cn({
          "p-3": size === "sm",
          "p-4": size === "base",
          "p-6": size === "lg",
        })}
      >
        {children}
      </div>
    </Accordion.Content>
  )
);

export default AccordionContent;
