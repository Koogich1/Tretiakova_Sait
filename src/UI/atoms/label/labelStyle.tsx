import { cva } from "class-variance-authority";

const labelStyle = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer gap-3",
  {
    variants: {
      variant: {
        default: "text-gray-500 text-gray-600",
      },
      inputSize: {
        default: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export default labelStyle;
