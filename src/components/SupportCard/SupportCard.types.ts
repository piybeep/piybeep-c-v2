import React from "react";

export interface SupportCardProps extends React.ComponentProps<"div"> {
    title: string;
    description: string;
    options: string[][];
    price: number;
}
