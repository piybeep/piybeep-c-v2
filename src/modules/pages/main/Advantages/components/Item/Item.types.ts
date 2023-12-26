import { ReactNode } from "react";

export interface ItemProps {
    title: string;
    titleIcon?: ReactNode;
    text?: string;
    number?: number;
}
