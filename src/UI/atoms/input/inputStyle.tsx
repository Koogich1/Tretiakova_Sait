import { cva } from "class-variance-authority";

const inputStyle = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-violet-200 text-violet-500 hover:bg-violet-300",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-violet-400 text-violet-400 bg-white hover:bg-violet-500 hover:text-white",
        secondary: "bg-blue-400 text-white hover:bg-blue-500",
        ghost:
          "bg-gray-100 hover:bg-gray-300 text-gray-400 hover:text-gray-700",
        link: "text-violet-400 underline-offset-4 hover:underline",
      },
      inputSize: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-4 text-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export default inputStyle;
