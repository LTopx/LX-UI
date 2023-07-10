import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../_lib/cn";
import Button, { type ButtonProps } from "../button";
import { Information_fill } from "../icon";

export interface ConfirmProps {
  children?: React.ReactNode;
  maskClosable?: boolean;
  disabled?: boolean;
  type?: ButtonProps["type"];
  title?: React.ReactNode | string;
  icon?: React.ReactNode;
  content?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  okText?: React.ReactNode | string;
  onOk?: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({
  children,
  maskClosable,
  disabled,
  type = "primary",
  title = "Title",
  icon,
  content = "Content",
  cancelText = "Cancel",
  okText = "OK",
  onOk,
}) => {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = (isOpen: boolean) => {
    if (disabled) return setOpen(false);
    setOpen(isOpen);
  };

  const onClickOverlay = (event: any) => {
    event.stopPropagation();
    if (maskClosable) setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Trigger asChild>
        <div>{children}</div>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={cn(
            "bg-gray-900/60 backdrop-blur-sm fixed inset-0 z-[500]",
            "data-[state=open]:animate-lx-fade-in data-[state=closed]:animate-lx-fade-out"
          )}
          onClick={onClickOverlay}
        />
        <AlertDialog.Content
          className={cn(
            "top-[45%] left-[50%] z-[500] -translate-x-[50%] -translate-y-[50%] fixed outline-none p-6 shadow rounded-md w-[500px] max-w-[calc(100vw-2rem)]",
            "data-[state=open]:animate-lx-modal-fade-in-up data-[state=closed]:animate-lx-modal-fade-out-down",
            "bg-white"
          )}
        >
          <AlertDialog.Title asChild>
            <div className="flex font-semibold gap-1.5 items-center">
              {icon || (
                <Information_fill
                  className="text-amber-400 dark:text-amber-500"
                  size={22}
                />
              )}
              {title}
            </div>
          </AlertDialog.Title>
          <AlertDialog.Description asChild>
            <div className="text-sm pt-4 pb-5 text-neutral-600">{content}</div>
          </AlertDialog.Description>
          <div className="flex gap-2 justify-end">
            <AlertDialog.Cancel asChild>
              <div>
                <Button>{cancelText}</Button>
              </div>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <div>
                <Button type={type} onClick={onOk}>
                  {okText}
                </Button>
              </div>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Confirm;
