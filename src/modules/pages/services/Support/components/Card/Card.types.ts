import React from "react";
import { ISupportList } from "../../../../../../types";

export interface CardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
    options: (ISupportList | undefined)[];
    price: number;
}
