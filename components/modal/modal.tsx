import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../_lib/cn";

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  overlayClassName?: string;

  /** Width of the Drawer, default is 520px */
  width?: number | string;

  /** Whether to close the Alert dialog when the Overlay is clicked. default is true */
  maskClosable?: boolean;

  /** The Drawer's Title */
  title?: React.ReactNode;

  open?: boolean;

  /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  className,
  overlayClassName,
  width = "32.5rem",
  maskClosable = true,
  title = "Title",
  children,
  open,
  onClose,
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
      <Dialog.Portal
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
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
            "data-[state=closed]:animate-lx-modal-fade-out-down data-[state=open]:animate-lx-modal-fade-in-up",
            "bg-white dark:bg-gray-700/70",
            className
          )}
          style={{ width }}
          onInteractOutside={onInteractOutside}
        >
          <Dialog.Title asChild>
            <div className="font-semibold">{title}</div>
          </Dialog.Title>
          <Dialog.Description />
          <Dialog.Close />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
