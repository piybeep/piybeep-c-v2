import {ReactNode} from "react";

export interface ListItemProps {
    title: string;
    titleIcon?: ReactNode;
    text?: string;
    number?: number;
}
