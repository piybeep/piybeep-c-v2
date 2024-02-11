import { Title } from "../../components";
import { BlockLayoutProps } from "./BlockLayout.types";

import s from "./BlockLayout.module.scss";

export function BlockLayout({
    children,
    value,
    subtitle,
    position,
    size = 'md'
}: BlockLayoutProps) {
    return (
        <section className={s.wrapper}>
            <Title
                size={size}
                value={value}
                position={position}
                subtitle={subtitle}
            />
            {children}
        </section>
    );
}
