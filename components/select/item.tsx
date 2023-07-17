import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import { cn } from "../_lib/cn";

interface SelectItemProps extends React.PropsWithChildren {
  className?: string | undefined;
  value: any;
  disabled?: boolean;
}

const SelectItem = React.forwardRef<any, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        {...props}
        ref={forwardedRef}
        className={cn(
          "outline-none text-sm cursor-pointer px-3 py-[7px] transition-colors",
          "text-lx-color-text-1 dark:text-lx-color-text-1-dark",
          "data-[state=checked]:bg-lx-color-fill-2 dark:data-[state=checked]:bg-lx-color-fill-2-dark hover:bg-lx-color-fill-2 dark:hover:bg-lx-color-fill-2-dark",
          "data-[disabled]:text-lx-color-text-4 dark:data-[disabled]:text-lx-color-text-4-dark data-[disabled]:bg-white dark:data-[disabled]:bg-[#373739] data-[disabled]:cursor-not-allowed",
          className
        )}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  }
);

export default SelectItem;
