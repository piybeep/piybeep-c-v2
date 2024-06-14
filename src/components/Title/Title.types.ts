import { ReactNode } from "react";

export interface TitleProps {
    value: string;
    subtitle?: string | ReactNode;
    position?: "left" | "center";
    withDot?: boolean;
    size?: 'lg' | 'md'
    tag?: 'h1' | 'h2'
}
