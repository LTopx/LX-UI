import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import AccordionItem from "./accordionItem";
import AccordionTrigger from "./accordionTrigger";
import AccordionContent from "./accordionContent";
import type { SizeType } from "../config-provider";

export interface AccordionItem {
  label?: React.ReactNode;
  value?: string;
  children?: React.ReactNode;
}

export interface AccordionProps {
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  size?: SizeType;
  items?: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  size = "base",
  items = [],
}) => {
  return (
    <RadixAccordion.Root type="single" collapsible className={className}>
      {items.map((item) => (
        <AccordionItem
          className={itemClassName}
          key={item.value}
          value={item.value}
        >
          <AccordionTrigger className={triggerClassName} size={size}>
            {item.label}
          </AccordionTrigger>
          <AccordionContent className={contentClassName} size={size}>
            {item.children}
          </AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
