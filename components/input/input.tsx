import React from "react";
import type { SizeType } from "../config-provider";
import { cn } from "../_lib/cn";
import { isUndefined } from "../_lib/is";
import { Close_line } from "../icon";

export type InputType = "text" | "password" | "number";

export interface InputProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  allowClear?: boolean;
  type?: InputType;
  size?: SizeType;
  value?: string | number;
  onChange?: (value: any) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      allowClear,
      type = "text",
      size = "base",
      placeholder,
      value,
      onFocus,
      onBlur,
      onChange,
    },
    forwardredRef
  ) => {
    // data
    const [isFocus, setFocus] = React.useState(false);
    const [inputValue, setInputValue] = React.useState<string | number>("");

    // ref
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeValue = (e: any) => {
      setInputValue(e.target.value);
      onChange?.(e.target.value);
    };

    const onClear = () => {
      if (!inputRef.current) return;
      onChange?.("");
      setInputValue("");
    };

    React.useEffect(() => {
      if (isUndefined(value)) return;
      setInputValue(value);
    }, []);

    React.useImperativeHandle(forwardredRef, () => inputRef.current, []);

    return (
      <div
        className={cn(
          "group rounded border border-transparent transition-colors flex items-center",
          "text-lx-color-text-1 dark:text-lx-color-text-1-dark",
          "bg-lx-color-fill-2 dark:bg-lx-color-fill-2-dark",
          "hover:bg-lx-color-fill-3 dark:hover:bg-lx-color-fill-3-dark",
          {
            "bg-white hover:bg-white border-sky-400": isFocus,
          },
          {
            "dark:bg-[#232324] dark:hover:bg-[#232324] dark:border-sky-500":
              isFocus,
          },
          { "h-7 px-3": size === "sm" },
          { "h-8 px-3": size === "base" },
          { "h-9 px-4": size === "lg" },
          className
        )}
        onMouseDown={(e) => {
          if ((e.target as HTMLElement).tagName !== "INPUT") e.preventDefault();
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          className={cn(
            "bg-transparent w-full h-full text-sm leading-[1.5715]",
            { "py-0.5": size === "sm" },
            { "py-1": size === "base" },
            { "py-1.5": size === "lg" }
          )}
          style={{ boxShadow: "none" }}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          onChange={onChangeValue}
        />
        {!!allowClear && inputValue && (
          <span
            className={cn(
              "group-hover:block relative cursor-pointer hidden",
              "before:absolute before:transition-colors before:rounded-full before:w-5 before:h-5 before:left-[50%] before:top-[50%] before:-translate-x-[50%] before:-translate-y-[50%]",
              "before:hover:bg-[rgb(201,205,212)] dark:before:hover:bg-lx-color-fill-4-dark",
              {
                "before:hover:bg-[rgb(242,243,245)] dark:before:hover:bg-lx-color-fill-2-dark":
                  isFocus,
              }
            )}
            onClick={onClear}
          >
            <Close_line size={12} className="relative" />
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
