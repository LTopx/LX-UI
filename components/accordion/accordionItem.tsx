import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "../_lib/cn";

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={cn(
        "overflow-hidden border-b border-b-[rgb(229,230,235)] dark:border-b-[rgb(72,72,73)]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

export default AccordionItem;
