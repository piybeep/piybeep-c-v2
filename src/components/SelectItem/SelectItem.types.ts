export interface SelectItemProps {
    active: boolean;
    value: string;
    onClick: (value: string) => void;
    size?: 'lg' | 'md'
}