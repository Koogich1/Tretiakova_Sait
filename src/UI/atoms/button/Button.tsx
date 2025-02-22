import React, { FC } from "react";
import { cn } from "../../../lib/utils";
import buttonStyle from "./ButtonStyle";
import { ButtonProps } from "../../../types/buttonTypes";

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonStyle({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
