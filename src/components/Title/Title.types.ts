import { ReactNode } from "react";

export interface TitleProps {
	value: string;
	subtitle?: string | ReactNode;
	position?: "left" | "center";
	dot?: boolean;
}

