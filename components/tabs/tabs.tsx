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
      className={cn("w-full", className)}
      defaultValue={defaultActiveTab}
      value={activeTab}
      onValueChange={onValueChange}
    >
      <div className="flex">
        <RadixTabs.List
          className={cn(
            "flex gap-1 rounded text-sm w-auto p-1",
            "bg-lx-color-fill-3 dark:bg-lx-color-fill-3-dark",
            { "flex-1": !!itemsFull }
          )}
        >
          {options.map((item) => (
            <RadixTabs.Trigger
              key={item.value}
              value={item.value}
              className={cn(
                {
                  "h-6": size === "sm",
                  "h-7": size === "base",
                  "h-8": size === "lg",
                },
                "rounded px-3 transition-colors flex-1",
                "hover:bg-white dark:hover:bg-lx-color-fill-3-dark",
                "data-[state=active]:bg-white dark:data-[state=active]:bg-lx-color-fill-3-dark",
                "text-neutral-700 dark:text-neutral-400",
                "data-[state=active]:text-sky-500 dark:data-[state=active]:text-sky-400"
              )}
            >
              {item.label}
            </RadixTabs.Trigger>
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
