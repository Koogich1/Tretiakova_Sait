import React, { FC, useState } from "react";
import { cn } from "../../../lib/utils";
import labelStyle from "./labelStyle";
import { LabelProps } from "../../../types/labelProps";

const Label: FC<LabelProps> = ({
  className,
  children,
  variant,
  inputSize,
  ...props
}) => {
  return (
    <label
      htmlFor=""
      className={cn(labelStyle({ variant, inputSize, className }))}
      {...props}
    >
      <input type="checkbox" />
      {children}
    </label>
  );
};

export default Label;
