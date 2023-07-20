import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import Button, { type ButtonProps } from "../button";
import { cn } from "../_lib/cn";
import { Information_fill } from "../icon";

export interface ConfirmProps {
  className?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  maskClosable?: boolean;
  disabled?: boolean;
  type?: ButtonProps["type"];
  title?: React.ReactNode;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const Confirm: React.FC<ConfirmProps> = React.memo(
  ({
    className,
    overlayClassName,
    children,
    maskClosable = true,
    disabled,
    type = "primary",
    title = "Title",
    icon,
    content = "Content",
    cancelText = "Cancel",
    okText = "OK",
    onOk,
    onCancel,
  }) => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const retRef = React.useRef<any>();
    const reje = React.useRef<any>();

    const onOpenChange = (isOpen: boolean) => {
      if (disabled) return setOpen(false);
      if (isOpen) {
        retRef.current = null;
        reje.current = null;
      }
      setOpen(isOpen);
    };

    const onClickOverlay = (event: any) => {
      event.stopPropagation();
      if (maskClosable) setOpen(false);
    };

    const onClickCancel = () => {
      reje.current?.();
      setOpen(false);
    };

    const onAsyncOk = () => {
      return new Promise(async (resolve, reject) => {
        reje.current = reject;
        try {
          await retRef.current.then();
          resolve("");
        } catch (error) {
          reject();
        }
      });
    };

    const onClickOk = async () => {
      if (onOk) retRef.current = onOk();

      if (!retRef.current) return setOpen(false);

      if (retRef.current?.then) {
        try {
          setLoading(true);
          await onAsyncOk();
          setOpen(false);
        } finally {
          setLoading(false);
        }
      }
    };

    return (
      <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
        <AlertDialog.Trigger asChild onClick={(e) => e.stopPropagation()}>
          <div>{children}</div>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay
            className={cn(
              "bg-gray-900/60 backdrop-blur-sm fixed inset-0 z-[500]",
              "data-[state=closed]:animate-lx-fade-out data-[state=open]:animate-lx-fade-in",
              overlayClassName
            )}
            onClick={onClickOverlay}
          />
          <AlertDialog.Content
            className={cn(
              "top-[45%] left-[50%] z-[500] -translate-x-[50%] -translate-y-[50%] fixed outline-none p-6 shadow rounded-md w-[500px] max-w-[calc(100vw-2rem)]",
              "data-[state=closed]:animate-lx-modal-fade-out-down data-[state=open]:animate-lx-modal-fade-in-up",
              "bg-white backdrop-blur dark:bg-gray-700/70",
              className
            )}
            onClick={(e) => e.stopPropagation()}
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
            <div className="text-sm pt-4 pb-5 text-neutral-600 dark:text-neutral-300">
              {content}
            </div>
            <div className="flex gap-2 justify-end">
              <AlertDialog.Cancel asChild>
                <div onClick={(e) => e.preventDefault()}>
                  <Button onClick={onClickCancel}>{cancelText}</Button>
                </div>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <div onClick={(e) => e.preventDefault()}>
                  <Button type={type} loading={loading} onClick={onClickOk}>
                    {okText}
                  </Button>
                </div>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    );
  }
);

export default Confirm;
