import { ComponentProps } from "react";

export interface ItemProps extends ComponentProps<"div"> {
    number: number | string;
    title: string;
    description: string;
    price?: number;
    discount?: number;
    status?: string;
    disabled?: boolean;
}
