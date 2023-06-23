export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
        React.AriaAttributes {
    value: string;
    outline?: boolean;
    rounded?: boolean;
    size?: "default" | "large" | "small";
    active?: boolean;
    color?: "primary" | "light";
}
