import { VariantProps } from "class-variance-authority";
import inputStyle from "../UI/atoms/input/inputStyle";

export interface InputProps
	extends React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		VariantProps<typeof inputStyle> {}