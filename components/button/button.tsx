import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../_lib/cn";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva("bg-sky-400 text-sm", {
  variants: {
    type: {
      default: "asf",
      primary: "asf",
      success: "asf",
      warning: "asf",
      danger: "asf",
    },
    size: {
      sm: "h-7 px-3 rounded-md",
      base: "h-8 px-4 rounded-md",
      lg: "h-9 px-4 rounded-md",
    },
  },
  defaultVariants: {
    type: "default",
    size: "base",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, type, disabled, ...props }, forwardredRef) => {
    return (
      <button
        className={cn(buttonVariants({ className, size, type }))}
        ref={forwardredRef}
        {...props}
      />
    );
  }
);

export default Button;
