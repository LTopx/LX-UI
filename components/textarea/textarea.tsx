import React from "react";
import { cn } from "../_lib/cn";
import { isUndefined } from "../_lib/is";
import { Close_line } from "../icon";

export interface TextareaProps
  extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  allowClear?: boolean;
  disabled?: boolean;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  onChange?: (value: any) => void;
  onEnter?: (value: any) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      allowClear,
      disabled,
      placeholder,
      defaultValue,
      value,
      maxLength,
      onFocus,
      onBlur,
      onChange,
      onEnter,
    },
    forwardredRef
  ) => {
    const [isFocus, setFocus] = React.useState(false);
    const [textareaValue, setTextareaValue] = React.useState<string>();

    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const onChangeValue = (e: any) => {
      setTextareaValue(e.target.value);
      onChange?.(e.target.value);
    };

    const onClear = () => {
      if (!textareaRef.current) return;
      setTextareaValue("");
      onChange?.("");
    };

    const onKeyDown = (event: any) => {
      if (event.keyCode === 13) onEnter?.(event.target.value);
    };

    React.useEffect(() => {
      if (!isUndefined(defaultValue)) setTextareaValue(defaultValue);
    }, [defaultValue]);

    React.useEffect(() => {
      if (!isUndefined(value)) setTextareaValue(value);
    }, [value]);

    React.useImperativeHandle(forwardredRef, () => textareaRef.current, []);

    return (
      <div
        className={cn(
          "group rounded relative border border-transparent transition-colors flex items-center",
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
          {
            "hover:bg-lx-color-fill-2 dark:hover:bg-lx-color-fill-2-dark cursor-not-allowed select-none text-[rgb(201,205,212)] dark:text-lx-color-text-4-dark":
              disabled,
          }
        )}
        onClick={() => textareaRef.current?.focus()}
      >
        <textarea
          ref={textareaRef}
          className={cn(
            "appearance-none bg-transparent outline-none min-h-[64px] w-full h-full text-sm leading-[1.5715] px-3 py-1",
            { "pr-5": allowClear },
            {
              "cursor-not-allowed select-none placeholder:text-[rgb(201,205,212)] dark:placeholder:text-lx-color-text-4-dark":
                disabled,
            },
            className
          )}
          style={{ boxShadow: "none" }}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          value={textareaValue}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          onChange={onChangeValue}
          onKeyDown={onKeyDown}
        />
        {!!(!!allowClear && !disabled && textareaValue) && (
          <span
            className={cn(
              "group-hover:block absolute cursor-pointer top-[10px] right-[10px] hidden",
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

Textarea.displayName = "Textarea";

export default Textarea;
