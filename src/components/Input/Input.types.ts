import {ComponentProps} from "react";

export interface InputProps extends ComponentProps<"input"> {
    text: string;
    position?: 'top' | 'center';
    sizeInput?: 'default' | 'large';
}
