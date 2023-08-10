import React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "../_lib/cn";

export interface SwitchProps {
  className?: string;
  thumbClassName?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  className,
  thumbClassName,
  checked,
  defaultChecked,
  onChange,
}) => {
  const onCheckedChange = (value: boolean) => onChange?.(value);

  return (
    <RadixSwitch.Root
      className={cn(
        "w-12 h-6 rounded-full relative outline-none cursor-pointer transition-colors",
        "data-[state=unchecked]:bg-neutral-200/80 data-[state=checked]:bg-sky-400",
        className
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    >
      <RadixSwitch.Thumb
        className={cn(
          "block w-4 h-4 bg-white rounded-full transition-all",
          "translate-x-1 data-[state=checked]:translate-x-7",
          thumbClassName
        )}
      />
    </RadixSwitch.Root>
  );
};

export default Switch;
