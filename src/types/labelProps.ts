import { VariantProps } from "class-variance-authority";
import labelStyle from "../UI/atoms/label/labelStyle";

export interface LabelProps
	extends React.DetailedHTMLProps<
			React.LabelHTMLAttributes<HTMLLabelElement>,
			HTMLLabelElement
		>,
		VariantProps<typeof labelStyle> {}
