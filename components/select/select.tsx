import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import { cn } from "../_lib/cn";
import { isUndefined } from "../_lib/is";
import type { SizeType } from "../config-provider";
import { Down_fill, Loading_line } from "../icon";
import SelectItem from "./item";

export interface SelectOption {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps<ValueType = any>
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onChange" | "defaultValue"
  > {
  disabled?: boolean;
  loading?: boolean;
  size?: SizeType;
  options?: string[] | number[] | SelectOption[];
  renderLabel?: (value: any) => React.ReactNode;
  defaultValue?: ValueType;
  value?: ValueType;
  onChange?: (value: ValueType) => void;
}

const Select: React.FC<SelectProps> = ({
  className,
  placeholder,
  disabled,
  loading,
  size = "base",
  options = [],
  renderLabel,
  defaultValue,
  value,
  onChange,
}) => {
  // data
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState<
    string | number | undefined
  >();

  // ref
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const selectOptions: SelectOption[] = React.useMemo(() => {
    return options.map((item: any) => {
      if (typeof item === "string" || typeof item === "number") {
        return {
          label: String(item),
          value: item,
          disabled: false,
        };
      }

      return {
        ...item,
        label: item.label,
        value: item.value,
        disabled: !!item.disabled,
      };
    });
  }, [options]);

  const onOpenChange = (open: boolean) => {
    if (open) return setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const onValueChange = (value: string) => {
    setSelectValue(value);
    onChange?.(value);
  };

  const renderValue = () => {
    if (!isUndefined(value)) {
      if (renderLabel) {
        const findOption = selectOptions.find((item) => item.value === value);
        if (findOption) return renderLabel(findOption);
      }
      return value;
    }

    if (!isUndefined(selectValue)) {
      if (renderLabel) {
        const findOption = selectOptions.find(
          (item) => item.value === selectValue
        );
        if (findOption) return renderLabel(findOption);
      }
      return selectValue;
    }

    return placeholder;
  };

  React.useEffect(() => {
    if (!isUndefined(defaultValue)) setSelectValue(defaultValue);
  }, [defaultValue]);

  React.useEffect(() => {
    if (!isUndefined(value) && isUndefined(selectValue)) setSelectValue(value);
  }, [value]);

  return (
    <RadixSelect.Root
      open={isOpen}
      disabled={disabled}
      defaultValue={
        isUndefined(defaultValue) ? undefined : String(defaultValue)
      }
      value={isUndefined(value) ? undefined : String(value)}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <RadixSelect.Trigger asChild>
        <div
          ref={triggerRef}
          className={cn(
            "px-3 relative cursor-pointer transition-colors group select-none rounded outline-none inline-flex text-sm items-center justify-between border border-transparent",
            "data-[state=open]:bg-white data-[state=open]:border-sky-400",
            "dark:data-[state=open]:bg-[#232324] dark:data-[state=open]:border-sky-500",
            "data-[disabled]:bg-lx-color-fill-2 data-[disabled]:cursor-not-allowed data-[disabled]:text-lx-color-text-4",
            "bg-lx-color-fill-2 hover:bg-lx-color-fill-3 text-lx-color-text-3",
            "dark:bg-lx-color-fill-2-dark dark:hover:bg-lx-color-fill-3-dark",
            { "h-7": size === "sm" },
            { "h-8": size === "base" },
            { "h-9": size === "lg" },
            className
          )}
        >
          <RadixSelect.Value asChild>
            <div
              className={cn({
                "text-lx-color-text-1 dark:text-lx-color-text-1-dark":
                  !!selectValue,
              })}
            >
              {renderValue()}
            </div>
          </RadixSelect.Value>
          <RadixSelect.Icon>
            {loading ? (
              <Loading_line className="animate-spin" />
            ) : (
              <Down_fill className={cn({ "rotate-180": isOpen })} />
            )}
          </RadixSelect.Icon>
        </div>
      </RadixSelect.Trigger>

      <RadixSelect.Portal container={triggerRef.current}>
        <RadixSelect.Content
          asChild
          position="popper"
          sideOffset={4}
          className={cn(
            "z-[500] bg-white dark:bg-[#373739] shadow-md rounded py-1 max-h-52 overflow-y-auto",
            "border dark:border-lx-color-border-3-dark",
            "data-[state=open]:animate-lx-select-open data-[state=closed]:animate-lx-select-closed",
            "w-[--radix-popper-anchor-width]"
          )}
        >
          <RadixSelect.Viewport>
            {selectOptions.map((item) => (
              <SelectItem
                key={item.value}
                value={String(item.value)}
                disabled={item.disabled}
              >
                {renderLabel ? renderLabel(item) : item.label}
              </SelectItem>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
