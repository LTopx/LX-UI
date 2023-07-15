import React from "react";
import type { IconProps } from "./types";

export const Loading_line = ({
  size = 16,
  className,
  style,
  onClick,
}: IconProps) => {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4"
      />
    </svg>
  );
};
