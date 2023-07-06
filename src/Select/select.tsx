import * as RadixSelect from '@radix-ui/react-select';
import React from 'react';
import { cn } from '../_lib/cn';
import type { SizeType } from '../config-provider';
import { Down_fill, Loading_line } from '../icon';
import SelectItem from './item';

export interface SelectOption {
  label: React.ReactNode | string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabled?: boolean;
  loading?: boolean;
  size?: SizeType;
  options?: string[] | number[] | SelectOption[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  className,
  placeholder,
  disabled = false,
  loading = false,
  size = 'base',
  options = [],
  defaultValue,
  value,
  onChange,
}) => {
  // data
  const [isOpen, setIsOpen] = React.useState(false);

  // ref
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const selectOptions: SelectOption[] = React.useMemo(() => {
    return options.map((item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        return {
          label: String(item),
          value: String(item),
          disabled: false,
        };
      }

      return {
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
    console.log(value, 'value');
    onChange?.(value);
  };

  return (
    <RadixSelect.Root
      open={isOpen}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      onOpenChange={onOpenChange}
      onValueChange={onValueChange}
    >
      <RadixSelect.Trigger asChild>
        <div
          ref={triggerRef}
          className={cn(
            'px-3 relative cursor-pointer transition-colors group select-none rounded outline-none inline-flex text-sm items-center justify-between border border-transparent',
            'data-[state=open]:bg-white data-[state=open]:border-sky-400',
            'data-[disabled]:bg-lx-color-fill-2 data-[disabled]:cursor-not-allowed data-[disabled]:text-lx-color-text-4',
            'bg-lx-color-fill-2 hover:bg-lx-color-fill-3 text-lx-color-text-3',
            { 'h-7': size === 'sm' },
            { 'h-8': size === 'base' },
            { 'h-9': size === 'lg' },
            className,
          )}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon>
            {loading ? (
              <Loading_line className="animate-spin" />
            ) : (
              <Down_fill className={cn({ 'rotate-180': isOpen })} />
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
            'z-[2000] bg-white shadow-md border rounded py-1',
            'data-[state=open]:animate-lx-select-open data-[state=closed]:animate-lx-select-closed',
          )}
        >
          <RadixSelect.Viewport>
            {selectOptions.map((item) => (
              <RadixSelect.Group key={item.value}>
                <SelectItem value={item.value} disabled={item.disabled}>
                  {item.label}
                </SelectItem>
              </RadixSelect.Group>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export default Select;
