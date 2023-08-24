import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "../_lib/cn";
import { isUndefined } from "../_lib/is";
import type { SizeType } from "../config-provider";
import { Calendar_line } from "../icon";
import "react-day-picker/dist/style.css";

export interface DatePickerProps {
  className?: string;
  size?: SizeType;
  value?: Date;
  onChange?: (value: Date | undefined) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  className,
  size = "base",
  value,
  onChange,
}) => {
  const [date, setDate] = React.useState<Date>();

  const onSelect = (value: Date | undefined) => {
    if (onChange) onChange(value);
    setDate(value);
  };

  React.useEffect(() => {
    if (!isUndefined(value)) setDate(value);
  }, [value]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div
          className={cn(
            "rounded border border-transparent transition-colors flex items-center cursor-pointer text-sm leading-[1.5715] relative",
            "text-lx-color-text-3",
            { "text-lx-color-text-1 dark:text-lx-color-text-1-dark": date },
            "bg-lx-color-fill-2 dark:bg-lx-color-fill-2-dark",
            "hover:bg-lx-color-fill-3 dark:hover:bg-lx-color-fill-3-dark",
            { "h-7 px-3": size === "sm" },
            { "h-8 px-3": size === "base" },
            { "h-9 px-4": size === "lg" },
            className
          )}
        >
          <div className="flex gap-2 items-center select-none">
            <Calendar_line />
            {date ? format(date, "PP") : "Pick a date"}
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={5}
          className={cn(
            "bg-white border rounded-md z-[600]",
            "data-[side=top]:animate-lx-dropdown-open-top data-[side=bottom]:animate-lx-dropdown-open-down",
            "data-[state=closed]:animate-lx-fade-out"
          )}
        >
          <DayPicker mode="single" selected={date} onSelect={onSelect} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DatePicker;
