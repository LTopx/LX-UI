import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../_lib/cn";
import { Loading_line } from "../icon";

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>,
      "type"
    >,
    VariantProps<typeof buttonVariants> {
  outline?: boolean;
  icon?: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const buttonVariants = cva(
  "text-sm flex justify-center items-center transition-colors rounded-md border cursor-pointer",
  {
    variants: {
      type: {
        default: cn(
          "border-neutral-200 hover:border-sky-400 hover:text-sky-400 active:border-sky-600 active:text-sky-600",
          "dark:border-neutral-500/80 dark:hover:border-sky-400/90 dark:active:border-sky-600 dark:active:text-sky-600"
        ),
        primary: cn(
          "text-white bg-sky-400 border-sky-400 hover:bg-sky-400/70 hover:border-sky-400/70 active:bg-sky-500 active:border-sky-500",
          "dark:bg-sky-500 dark:border-sky-500 dark:hover:bg-sky-600 dark:hover:border-sky-600 dark:active:bg-sky-700 dark:active:border-sky-700"
        ),
        success: cn(
          "text-white bg-emerald-400 border-emerald-400 hover:bg-emerald-400/70 hover:border-emerald-400/70 active:bg-emerald-500 active:border-emerald-500",
          "dark:bg-emerald-500 dark:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:border-emerald-600 dark:active:bg-emerald-700 dark:active:border-emerald-700"
        ),
        warning: cn(
          "text-white bg-amber-400 border-amber-400 hover:bg-amber-400/70 hover:border-amber-400/70 active:bg-amber-600/80 active:border-amber-600/80",
          "dark:bg-amber-500 dark:border-amber-500 dark:hover:bg-amber-600 dark:hover:border-amber-600 dark:active:bg-amber-700 dark:active:border-amber-700"
        ),
        danger: cn(
          "text-white bg-rose-400 border-rose-400 hover:bg-rose-400/70 hover:border-rose-400/70 active:bg-rose-600/80 active:border-rose-600/80",
          "dark:bg-rose-500 dark:border-rose-500 dark:hover:bg-rose-600 dark:hover:border-rose-600 dark:active:bg-rose-700 dark:active:border-rose-700"
        ),
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
    },
    defaultVariants: {
      type: "default",
      size: "base",
    },
  }
);

const Button = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
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
    let outlineType = "";
    let disabledType = "";

    if (disabled) disabledType = (type || "default") + "_disabled";

    if (outline) {
      if (disabled) {
        outlineType = (type || "default") + "_outline_disabled";
      } else {
        outlineType = (type || "default") + "_outline";
      }
    }

    const classNames = cn(
      buttonVariants({ className, type, size, block, rounded, loading }),
      {
        "border-sky-400 text-sky-400 dark:border-sky-500 dark:text-sky-500":
          outlineType === "default_outline",
        "bg-sky-100/70 text-sky-400 hover:bg-sky-400/70 hover:text-white dark:bg-sky-200/10 dark:text-sky-500 dark:hover:text-white":
          outlineType === "primary_outline",
        "bg-emerald-100/70 text-emerald-400 hover:bg-emerald-400/70 hover:text-white dark:bg-emerald-200/10 dark:text-emerald-500 dark:hover:text-white":
          outlineType === "success_outline",
        "bg-amber-100/70 text-amber-400 hover:bg-amber-400/70 hover:text-white dark:bg-amber-200/10 dark:text-amber-500 dark:hover:text-white":
          outlineType === "warning_outline",
        "bg-rose-100/70 text-rose-400 hover:bg-rose-400/70 hover:text-white dark:bg-rose-200/10 dark:text-rose-500 dark:hover:text-white":
          outlineType === "danger_outline",
        "cursor-not-allowed border-neutral-200/60 text-lx-color-text-4 hover:border-neutral-200/60 active:border-neutral-200/60 hover:text-lx-color-text-4 active:text-lx-color-text-4 dark:border-neutral-100/20 dark:text-lx-color-text-3 dark:hover:border-neutral-100/20 dark:hover:text-lx-color-text-3 dark:active:border-neutral-100/20 dark:active:text-lx-color-text-3":
          disabledType === "default_disabled",
        "cursor-not-allowed bg-sky-200 border-sky-200 hover:bg-sky-200 hover:border-sky-200 active:bg-sky-200 active:border-sky-200 dark:text-lx-color-text-4 dark:bg-sky-600/40 dark:border-sky-600/40 dark:hover:bg-sky-600/40 dark:hover:border-sky-600/40 dark:active:bg-sky-600/40 dark:active:border-sky-600/40":
          disabledType === "primary_disabled",
        "cursor-not-allowed bg-emerald-200 border-emerald-200 hover:bg-emerald-200 hover:border-emerald-200 active:bg-emerald-200 active:border-emerald-200 dark:text-lx-color-text-4 dark:bg-emerald-600/40 dark:border-emerald-600/40 dark:hover:bg-emerald-600/40 dark:hover:border-emerald-600/40 dark:active:bg-emerald-600/40 dark:active:border-emerald-600/40":
          disabledType === "success_disabled",
        "cursor-not-allowed bg-amber-200 border-amber-200 hover:bg-amber-200 hover:border-amber-200 active:bg-amber-200 active:border-amber-200 dark:text-lx-color-text-4 dark:bg-amber-600/40 dark:border-amber-600/40 dark:hover:bg-amber-600/40 dark:hover:border-amber-600/40 dark:active:bg-amber-600/40 dark:active:border-amber-600/40":
          disabledType === "warning_disabled",
        "cursor-not-allowed bg-rose-200 border-rose-200 hover:bg-rose-200 hover:border-rose-200 active:bg-rose-200 active:border-rose-200 dark:text-lx-color-text-4 dark:bg-rose-600/40 dark:border-rose-600/40 dark:hover:bg-rose-600/40 dark:hover:border-rose-600/40 dark:active:bg-rose-600/40 dark:active:border-rose-600/40":
          disabledType === "danger_disabled",
        "cursor-not-allowed border-sky-200 text-sky-300/70 hover:border-sky-200 hover:text-sky-200 active:border-sky-200 active:text-sky-200 dark:border-sky-800/70 dark:text-sky-800/70 dark:hover:border-sky-800/70 dark:hover:text-sky-800/70 dark:active:border-sky-800/70 dark:active:text-sky-800/70":
          outlineType === "default_outline_disabled",
        "cursor-not-allowed bg-sky-100/50 text-sky-300/70 hover:bg-sky-100/50 active:bg-sky-100/50 dark:bg-sky-600/10 dark:border-sky-800/70 dark:text-sky-800/70 dark:hover:bg-sky-600/10 dark:hover:border-sky-800/70 dark:hover:text-sky-800/70 dark:active:bg-sky-600/10 dark:active:border-sky-800/70 dark:active:text-sky-800/70":
          outlineType === "primary_outline_disabled",
        "cursor-not-allowed bg-emerald-100/50 text-emerald-300/70 hover:bg-emerald-100/50 active:bg-emerald-100/50 dark:bg-emerald-600/10 dark:border-emerald-800/70 dark:text-emerald-800/70 dark:hover:bg-emerald-600/10 dark:hover:border-emerald-800/70 dark:hover:text-emerald-800/70 dark:active:bg-emerald-600/10 dark:active:border-emerald-800/70 dark:active:text-emerald-800/70":
          outlineType === "success_outline_disabled",
        "cursor-not-allowed bg-amber-100/30 text-amber-300/70 hover:bg-amber-100/30 active:bg-amber-100/30 dark:bg-amber-600/10 dark:border-amber-800/70 dark:text-amber-800/70 dark:hover:bg-amber-600/10 dark:hover:border-amber-800/70 dark:hover:text-amber-800/70 dark:active:bg-amber-600/10 dark:active:border-amber-800/70 dark:active:text-amber-800/70":
          outlineType === "warning_outline_disabled",
        "cursor-not-allowed bg-rose-100/30 text-rose-300/70 hover:bg-rose-100/30 active:bg-rose-100/30 dark:bg-rose-600/10 dark:border-rose-800/70 dark:text-rose-800/70 dark:hover:bg-rose-600/10 dark:hover:border-rose-800/70 dark:hover:text-rose-800/70 dark:active:bg-rose-600/10 dark:active:border-rose-800/70 dark:active:text-rose-800/70":
          outlineType === "danger_outline_disabled",
      }
    );

    const onBtnClick = (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
    ) => {
      if (loading || disabled) {
        e.preventDefault();
        return;
      }
      (
        onClick as React.MouseEventHandler<
          HTMLButtonElement | HTMLAnchorElement
        >
      )?.(e);
    };

    const renderIcon = () => {
      if (loading) return <Loading_line className="text-white animate-spin" />;
      if (icon) return icon;
      return null;
    };

    if (href) {
      return (
        <a
          {...props}
          ref={forwardredRef}
          className={classNames}
          onClick={onBtnClick}
          href={href}
        >
          {renderIcon()}

          {!!props.children && (
            <div className={cn({ "ml-2": !!icon || !!loading })}>
              {props.children}
            </div>
          )}
        </a>
      );
    }

    return (
      <button
        {...props}
        className={classNames}
        ref={forwardredRef}
        onClick={onBtnClick}
      >
        {renderIcon()}

        {!!props.children && (
          <div className={cn({ "ml-2": !!icon || !!loading })}>
            {props.children}
          </div>
        )}
      </button>
    );
  }
);

export default Button;
