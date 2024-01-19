export interface SelectItemProps {
    isActive: boolean;
    value: string;
    onClick: (value: string) => void;
    size?: 'lg' | 'md'
}