import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../button";
import { cn } from "../_lib/cn";
import { Close_line } from "../icon";

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  overlayClassName?: string;

  /** Width of the Drawer, default is 520px */
  width?: number | string;

  /** Whether to close the Alert dialog when the Overlay is clicked. default is true */
  maskClosable?: boolean;

  /** The Drawer's Title */
  title?: React.ReactNode;

  /** The Drawer's Footer */
  footer?: React.ReactNode;
  cancelText?: React.ReactNode;
  okText?: React.ReactNode;

  open?: boolean;

  /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
  onClose?: () => void;

  /** Specify a function that will be called when a user clicks the OK button */
  onOk?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  overlayClassName,
  width = "32.5rem",
  maskClosable = true,
  title = "Title",
  children,
  footer,
  cancelText = "Cancel",
  okText = "OK",
  open,
  onClose,
  onOk,
}) => {
  const onOpenChange = (open: boolean) => {
    if (!open) onClose?.();
  };

  const onInteractOutside = (event: Event) => {
    if (maskClosable) return onClose?.();
    event.preventDefault();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "bg-gray-900/60 backdrop-blur-sm fixed inset-0 z-[500]",
            "data-[state=closed]:animate-lx-fade-out data-[state=open]:animate-lx-fade-in",
            overlayClassName
          )}
        />
        <Dialog.Content
          className={cn(
            "top-[45%] left-[50%] z-[500] -translate-x-[50%] -translate-y-[50%] fixed outline-none p-6 shadow rounded-md max-w-[calc(100vw-2rem)]",
            "data-[state=open]:animate-lx-modal-fade-in-up data-[state=closed]:animate-lx-modal-fade-out-down",
            "bg-white backdrop-blur dark:bg-gray-700/70",
            className
          )}
          style={{ width }}
          onInteractOutside={onInteractOutside}
        >
          <Dialog.Title asChild>
            <div className="font-semibold">{title}</div>
          </Dialog.Title>
          <Dialog.Close asChild style={{ boxShadow: "none" }}>
            <button
              className={cn(
                "outline-none shadow-none transition-colors absolute h-14 w-14 flex justify-center items-center top-0 right-0",
                "text-black/40 hover:text-black/90",
                "dark:text-white/40 dark:hover:text-white/90"
              )}
            >
              <Close_line size={20} />
            </button>
          </Dialog.Close>
          <div className="text-sm pt-4 pb-5 text-neutral-600 dark:text-neutral-300">
            {children}
          </div>
          {footer !== undefined ? (
            footer
          ) : (
            <div className="flex gap-2 justify-end">
              <Button onClick={onClose}>{cancelText}</Button>
              <Button type="primary" onClick={onOk}>
                {okText}
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
