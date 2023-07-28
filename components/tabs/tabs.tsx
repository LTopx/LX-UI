import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "../_lib/cn";
import type { SizeType } from "../config-provider";

export interface TabsOption {
  label?: React.ReactNode;
  value?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  className?: string;
  size?: SizeType;
  options?: TabsOption[];
  defaultActiveTab?: string;
  activeTab?: string;
  itemsFull?: boolean;
  onChange?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  className,
  size = "base",
  options = [],
  defaultActiveTab,
  activeTab,
  itemsFull,
  onChange,
}) => {
  const onValueChange = (value: string) => onChange?.(value);

  return (
    <RadixTabs.Root
      className={className}
      defaultValue={defaultActiveTab}
      value={activeTab}
      onValueChange={onValueChange}
    >
      <div className="flex flex-auto items-stretch whitespace-nowrap overflow-x-auto">
        <RadixTabs.List
          className={cn("flex text-sm", { "flex-1": !!itemsFull })}
        >
          {options.map((item, index) => (
            <div
              key={item.value}
              className={cn(
                "bg-lx-color-fill-3 dark:bg-lx-color-fill-3-dark py-1 px-0.5 flex",
                { "flex-1": !!itemsFull },
                { "pl-1 rounded-l": index === 0 },
                { "pr-1 rounded-r": index === options.length - 1 }
              )}
            >
              <RadixTabs.Trigger
                value={item.value}
                className={cn(
                  {
                    "h-6": size === "sm",
                    "h-7": size === "base",
                    "h-8": size === "lg",
                  },
                  { "flex-1": !!itemsFull },
                  "rounded px-3 transition-colors",
                  "data-[state=active]:bg-white dark:data-[state=active]:bg-lx-color-fill-3-dark",
                  "hover:bg-white dark:hover:bg-lx-color-fill-3-dark"
                )}
              >
                {item.label}
              </RadixTabs.Trigger>
            </div>
          ))}
        </RadixTabs.List>
      </div>

      {options.map((item) => (
        <RadixTabs.Content
          className={cn({
            "pt-3": size === "sm",
            "pt-4": size === "base" || size === "lg",
          })}
          key={item.value}
          value={item.value}
        >
          <div>{item.children}</div>
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
};

export default Tabs;
