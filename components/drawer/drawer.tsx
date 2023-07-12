import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../_lib/cn";
import { Close_line } from "../icon";

export interface DrawerProps {
  className?: string;

  overlayClassName?: string;

  children?: React.ReactNode;

  placement?: "left" | "right";

  /** Whether to close the Alert dialog when the Overlay is clicked. default is true */
  maskClosable?: boolean;

  /** The Drawer is open or not */
  open?: boolean;

  /** The Drawer's Title */
  title?: React.ReactNode;

  /** Width of the Drawer, default is 378px */
  width?: number | string;

  /** Specify a function that will be called when the drawer close */
  onClose?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  className,
  overlayClassName,
  children,
  placement = "right",
  maskClosable = true,
  open,
  title = "Title",
  width = 378,
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
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "bg-gray-900/60 backdrop-blur-sm fixed inset-0 z-[500]",
            "data-[state=open]:animate-lx-fade-in data-[state=closed]:animate-lx-fade-out",
            overlayClassName
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed top-0 bottom-0 z-[500] max-w-[calc(100vw-2rem)]",
            "data-[state=open]:animate-lx-dialog-show-left data-[state=closed]:animate-lx-dialog-hide-left",
            {
              "left-0 data-[state=open]:animate-lx-dialog-show-left data-[state=closed]:animate-lx-dialog-hide-left":
                placement === "left",
            },
            {
              "right-0 data-[state=open]:animate-lx-dialog-show-right data-[state=closed]:animate-lx-dialog-hide-right":
                placement === "right",
            },
            "bg-white/90 dark:bg-gray-700/70 backdrop-blur-sm",
            className
          )}
          style={{ width }}
          onInteractOutside={onInteractOutside}
        >
          <Dialog.Title asChild>
            <div className="flex font-medium h-14 px-4 leading-6 items-center">
              {title}
            </div>
          </Dialog.Title>
          <div className="px-4">{children}</div>
          <Dialog.Close asChild>
            <button
              className={cn(
                "outline-none transition-colors absolute h-14 w-14 flex justify-center items-center top-0 right-0",
                "text-black/40 hover:text-black/90",
                "dark:text-white/40 dark:hover:text-white/90"
              )}
            >
              <Close_line size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Drawer;
