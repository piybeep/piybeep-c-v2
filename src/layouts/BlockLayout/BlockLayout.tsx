import { Title } from "../../components";
import { BlockLayoutProps } from "./BlockLayout.types";

import s from "./BlockLayout.module.scss";

export function BlockLayout({
    children,
    value,
    subtitle,
    position,
}: BlockLayoutProps) {
    return (
        <section className={s.wrapper}>
            <Title
                value={value}
                position={position}
                subtitle={subtitle}
            />
            {children}
        </section>
    );
}
