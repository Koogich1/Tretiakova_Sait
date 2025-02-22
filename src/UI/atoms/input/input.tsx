import React, { FC } from "react";
import { cn } from "../../../lib/utils";
import inputStyle from "./inputStyle";
import { InputProps } from "../../../types/inputTypes";

const Input: FC<InputProps> = ({
  className,
  children,
  variant,
  inputSize,
  ...props
}) => {
  return (
    <input
      className={cn(inputStyle({ variant, inputSize, className }))}
      {...props}
    ></input>
  );
};

export default Input;
