import React from "react";
// import { VariantProps, cva } from "class-variance-authority";

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  // const buttonVariants = cva("bg-[red]");

  return <button>按钮1</button>;
};

export default Button;
