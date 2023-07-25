import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "../_lib/cn";
import { Loading_line } from "../icon";
import type { ShownType } from "../config-provider";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement & HTMLAnchorElement> {
  type?: ShownType | "link";
  size?: "sm" | "base" | "lg";
  outline?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  block?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

export const button = tv({
  base: "text-sm flex justify-center items-center transition-colors rounded-md border cursor-pointer gap-2 select-none",
  variants: {
    type: {
      default:
        "border-neutral-200 hover:border-sky-400 hover:text-sky-400 active:border-sky-600 active:text-sky-600 dark:border-neutral-500/80 dark:hover:border-sky-400/90 dark:active:border-sky-600 dark:active:text-sky-600",
      primary:
        "text-white bg-sky-400 border-sky-400 hover:bg-sky-400/70 hover:border-sky-400/70 active:bg-sky-500 active:border-sky-500 dark:bg-sky-500 dark:border-sky-500 dark:hover:bg-sky-600 dark:hover:border-sky-600 dark:active:bg-sky-700 dark:active:border-sky-700",
      success:
        "text-white bg-emerald-400 border-emerald-400 hover:bg-emerald-400/70 hover:border-emerald-400/70 active:bg-emerald-500 active:border-emerald-500 dark:bg-emerald-500 dark:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:border-emerald-600 dark:active:bg-emerald-700 dark:active:border-emerald-700",
      warning:
        "text-white bg-amber-400 border-amber-400 hover:bg-amber-400/70 hover:border-amber-400/70 active:bg-amber-600/80 active:border-amber-600/80 dark:bg-amber-500 dark:border-amber-500 dark:hover:bg-amber-600 dark:hover:border-amber-600 dark:active:bg-amber-700 dark:active:border-amber-700",
      danger:
        "text-white bg-rose-400 border-rose-400 hover:bg-rose-400/70 hover:border-rose-400/70 active:bg-rose-600/80 active:border-rose-600/80 dark:bg-rose-500 dark:border-rose-500 dark:hover:bg-rose-600 dark:hover:border-rose-600 dark:active:bg-rose-700 dark:active:border-rose-700",
      link: "hover:underline text-sky-400 dark:text-sky-500 hover:text-sky-500 dark:hover:text-sky-600 border-transparent",
    },
    size: {
      sm: "h-7 px-3",
      base: "h-8 px-4",
      lg: "h-9 px-4",
    },
    block: {
      true: "w-full",
    },
    rounded: {
      true: "rounded-full",
    },
    loading: {
      true: "opacity-60 pointer-events-none",
    },
    outline: {
      true: "",
    },
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      type: "default",
      outline: true,
      className:
        "border-sky-400 text-sky-400 dark:border-sky-500 dark:text-sky-500",
    },
    {
      type: "primary",
      outline: true,
      className:
        "bg-sky-100/70 text-sky-400 hover:bg-sky-400/70 hover:text-white dark:bg-sky-200/10 dark:text-sky-500 dark:hover:text-white",
    },
    {
      type: "success",
      outline: true,
      className:
        "bg-emerald-100/70 text-emerald-400 hover:bg-emerald-400/70 hover:text-white dark:bg-emerald-200/10 dark:text-emerald-500 dark:hover:text-white",
    },
    {
      type: "warning",
      outline: true,
      className:
        "bg-amber-100/70 text-amber-400 hover:bg-amber-400/70 hover:text-white dark:bg-amber-200/10 dark:text-amber-500 dark:hover:text-white",
    },
    {
      type: "danger",
      outline: true,
      className:
        "bg-rose-100/70 text-rose-400 hover:bg-rose-400/70 hover:text-white dark:bg-rose-200/10 dark:text-rose-500 dark:hover:text-white",
    },
    {
      type: "default",
      disabled: true,
      className:
        "cursor-not-allowed border-neutral-200/60 text-lx-color-text-4 hover:border-neutral-200/60 active:border-neutral-200/60 hover:text-lx-color-text-4 active:text-lx-color-text-4 dark:border-neutral-100/20 dark:text-lx-color-text-3 dark:hover:border-neutral-100/20 dark:hover:text-lx-color-text-3 dark:active:border-neutral-100/20 dark:active:text-lx-color-text-3",
    },
    {
      type: "primary",
      disabled: true,
      className:
        "cursor-not-allowed bg-sky-200 border-sky-200 hover:bg-sky-200 hover:border-sky-200 active:bg-sky-200 active:border-sky-200 dark:text-lx-color-text-4 dark:bg-sky-600/40 dark:border-sky-600/40 dark:hover:bg-sky-600/40 dark:hover:border-sky-600/40 dark:active:bg-sky-600/40 dark:active:border-sky-600/40",
    },
    {
      type: "success",
      disabled: true,
      className:
        "cursor-not-allowed bg-emerald-200 border-emerald-200 hover:bg-emerald-200 hover:border-emerald-200 active:bg-emerald-200 active:border-emerald-200 dark:text-lx-color-text-4 dark:bg-emerald-600/40 dark:border-emerald-600/40 dark:hover:bg-emerald-600/40 dark:hover:border-emerald-600/40 dark:active:bg-emerald-600/40 dark:active:border-emerald-600/40",
    },
    {
      type: "warning",
      disabled: true,
      className:
        "cursor-not-allowed bg-amber-200 border-amber-200 hover:bg-amber-200 hover:border-amber-200 active:bg-amber-200 active:border-amber-200 dark:text-lx-color-text-4 dark:bg-amber-600/40 dark:border-amber-600/40 dark:hover:bg-amber-600/40 dark:hover:border-amber-600/40 dark:active:bg-amber-600/40 dark:active:border-amber-600/40",
    },
    {
      type: "danger",
      disabled: true,
      className:
        "cursor-not-allowed bg-rose-200 border-rose-200 hover:bg-rose-200 hover:border-rose-200 active:bg-rose-200 active:border-rose-200 dark:text-lx-color-text-4 dark:bg-rose-600/40 dark:border-rose-600/40 dark:hover:bg-rose-600/40 dark:hover:border-rose-600/40 dark:active:bg-rose-600/40 dark:active:border-rose-600/40",
    },
    {
      type: "default",
      disabled: true,
      outline: true,
      className:
        "cursor-not-allowed border-sky-200 text-sky-300/70 hover:border-sky-200 hover:text-sky-200 active:border-sky-200 active:text-sky-200 dark:border-sky-800/70 dark:text-sky-800/70 dark:hover:border-sky-800/70 dark:hover:text-sky-800/70 dark:active:border-sky-800/70 dark:active:text-sky-800/70",
    },
    {
      type: "primary",
      disabled: true,
      outline: true,
      className:
        "cursor-not-allowed bg-sky-100/50 text-sky-300/70 hover:text-sky-300/70 hover:bg-sky-100/50 active:bg-sky-100/50 dark:bg-sky-600/10 dark:border-sky-800/70 dark:text-sky-800/70 dark:hover:bg-sky-600/10 dark:hover:border-sky-800/70 dark:hover:text-sky-800/70 dark:active:bg-sky-600/10 dark:active:border-sky-800/70 dark:active:text-sky-800/70",
    },
    {
      type: "success",
      disabled: true,
      outline: true,
      className:
        "cursor-not-allowed bg-emerald-100/50 text-emerald-300/70 hover:text-emerald-300/70 hover:bg-emerald-100/50 active:bg-emerald-100/50 dark:bg-emerald-600/10 dark:border-emerald-800/70 dark:text-emerald-800/70 dark:hover:bg-emerald-600/10 dark:hover:border-emerald-800/70 dark:hover:text-emerald-800/70 dark:active:bg-emerald-600/10 dark:active:border-emerald-800/70 dark:active:text-emerald-800/70",
    },
    {
      type: "warning",
      disabled: true,
      outline: true,
      className:
        "cursor-not-allowed bg-amber-100/30 text-amber-300/70 hover:text-amber-300/70 hover:bg-amber-100/30 active:bg-amber-100/30 dark:bg-amber-600/10 dark:border-amber-800/70 dark:text-amber-800/70 dark:hover:bg-amber-600/10 dark:hover:border-amber-800/70 dark:hover:text-amber-800/70 dark:active:bg-amber-600/10 dark:active:border-amber-800/70 dark:active:text-amber-800/70",
    },
    {
      type: "danger",
      disabled: true,
      outline: true,
      className:
        "cursor-not-allowed bg-rose-100/30 text-rose-300/70 hover:text-rose-300/70 hover:bg-rose-100/30 active:bg-rose-100/30 dark:bg-rose-600/10 dark:border-rose-800/70 dark:text-rose-800/70 dark:hover:bg-rose-600/10 dark:hover:border-rose-800/70 dark:hover:text-rose-800/70 dark:active:bg-rose-600/10 dark:active:border-rose-800/70 dark:active:text-rose-800/70",
    },
  ],
  defaultVariants: {
    type: "default",
    size: "base",
  },
});

const renderIcon = (loading: boolean, icon: React.ReactNode) => {
  if (loading) return <Loading_line className="animate-spin" />;
  if (icon) return icon;
  return null;
};

const Button = React.forwardRef<
  HTMLDivElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      type,
      size,
      block,
      outline,
      disabled,
      rounded,
      loading,
      icon,
      href,
      onClick,
      ...props
    },
    forwardredRef
  ) => {
    const onBtnClick = (e: any) => {
      if (loading || disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      (
        onClick as React.MouseEventHandler<
          HTMLButtonElement | HTMLAnchorElement
        >
      )?.(e);
    };

    if (href) {
      return (
        <a
          {...props}
          ref={forwardredRef}
          className={cn(
            button({ size, type, block, rounded, loading, outline, disabled }),
            className
          )}
          onClick={onBtnClick}
          href={href}
        >
          {renderIcon(loading, icon)}

          {!!props.children && props.children}
        </a>
      );
    }

    return (
      <div
        {...props}
        ref={forwardredRef}
        className={cn(
          button({ size, type, block, rounded, loading, outline, disabled }),
          className
        )}
        onClick={onBtnClick}
      >
        {renderIcon(loading, icon)}

        {!!props.children && props.children}
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;
