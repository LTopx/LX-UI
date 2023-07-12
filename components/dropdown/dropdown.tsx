import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../_lib/cn";
import { Check_fill } from "../icon";

export interface DropdownOption {
  label?: React.ReactNode;
  value?: string;
  type?: "seperate";
}

export interface DropdownProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  side?: "top" | "bottom";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  label?: React.ReactNode;
  options?: DropdownOption[];
  /** support selection */
  selectable?: boolean;
  value?: any;
  onSelect?: (value: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  disabled,
  children,
  side,
  align,
  alignOffset,
  sideOffset = 6,
  label,
  options,
  selectable,
  value,
  onSelect,
}) => {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = (isOpen: boolean) => {
    if (disabled) return setOpen(false);
    setOpen(isOpen);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger
        style={{ boxShadow: "none" }}
        onClick={(e) => e.stopPropagation()}
        asChild
      >
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={side}
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={cn(
            "z-[500] bg-white border border-neutral-200 rounded-md py-1",
            "data-[side=top]:animate-lx-dropdown-open-top data-[side=bottom]:animate-lx-dropdown-open-down",
            "data-[state=closed]:animate-lx-fade-out",
            "dark:bg-gray-700 dark:border-slate-400/40",
            className
          )}
        >
          {!!label && (
            <DropdownMenu.Label className="mb-1">{label}</DropdownMenu.Label>
          )}
          {options?.map((item) =>
            item.type === "seperate" ? (
              <DropdownMenu.Separator
                key={item.value}
                className="bg-neutral-200 h-[1px] my-1 dark:bg-slate-400/40"
              />
            ) : (
              <DropdownMenu.Item
                key={item.value}
                style={{ boxShadow: "none" }}
                onSelect={() => onSelect?.(item.value)}
                className={cn(
                  "select-none cursor-pointer outline-none border-none h-8 px-3 flex items-center text-sm transition-colors",
                  "bg-white hover:bg-neutral-200/60",
                  "dark:bg-gray-700 dark:hover:bg-slate-500/60"
                )}
              >
                <div className="flex gap-2 items-center">
                  {!!selectable && (
                    <div className="w-4">
                      {item.value === value && <Check_fill />}
                    </div>
                  )}
                  <div>{item.label}</div>
                </div>
              </DropdownMenu.Item>
            )
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
