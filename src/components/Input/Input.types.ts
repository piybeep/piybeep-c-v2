import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<"input"> {
	text: string;
	position?: string;
	size?: string;
}
