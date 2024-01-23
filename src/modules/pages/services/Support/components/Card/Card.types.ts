import React from "react";

export interface CardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
    options: string[][];
    price: number;
}
