import { ComponentProps } from "react";

export interface InputProps
    extends ComponentProps<'input'> {
    text: string,
    type: string,
    name?: string,
    value: string,
}