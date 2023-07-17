import React from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { isUndefined } from "../_lib/is";
import { cn } from "../_lib/cn";

export interface SliderProps {
  className?: string;
  defaultValue?: number;
  value?: number;
  // Maximum value of sliding range
  max?: number;

  // Slide the value of one step
  step?: number;

  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  className,
  defaultValue,
  value,
  max = 100,
  step = 1,
  onChange,
}) => {
  const onValueChange = (sliderValue: number[]) => onChange?.(sliderValue[0]);

  return (
    <RadixSlider.Root
      className={cn(
        "relative flex items-center select-none touch-none h-8",
        className
      )}
      max={max}
      step={step}
      defaultValue={isUndefined(defaultValue) ? undefined : [defaultValue]}
      value={isUndefined(value) ? undefined : [value]}
      onValueChange={onValueChange}
    >
      <RadixSlider.Track
        className={cn(
          "bg-lx-color-fill-3 relative grow rounded-full h-[3px]",
          "dark:bg-lx-color-fill-3-dark"
        )}
      >
        <RadixSlider.Range
          className={cn(
            "absolute bg-sky-400 rounded-full h-full",
            "dark:bg-sky-500"
          )}
        />
      </RadixSlider.Track>

      <RadixSlider.Thumb
        className={cn(
          "block cursor-pointer w-3 h-3 border-2 shadow-lg rounded-full focus:outline-none transition-transform",
          "hover:scale-125",
          "border-sky-400 bg-white",
          "dark:border-sky-500"
        )}
      />
    </RadixSlider.Root>
  );
};

export default Slider;
