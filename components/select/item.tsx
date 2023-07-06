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
          "outline-none text-sm cursor-pointer px-3 py-[7px] transition-colors text-lx-color-text-1",
          "data-[state=checked]:bg-lx-color-fill-2 hover:bg-lx-color-fill-2",
          "data-[disabled]:text-lx-color-text-4 data-[disabled]:bg-white data-[disabled]:cursor-not-allowed",
          className
        )}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  }
);

export default SelectItem;
