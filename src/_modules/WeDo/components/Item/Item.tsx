import Link from "next/link";

import { ItemProps } from "./Item.types";

import s from './Item.module.scss'

export function Item({ name, href, index, title, text }: ItemProps) {
    return (
        <Link
            className={s.info}
            style={{ marginLeft: index * 8.6 + "%" }}
            href={{
                pathname: href,
                hash: name,
            }}
        >
            <h2 className={s.info__title}>{title}</h2>
            <h3 className={s.info__subtitle}>{text}</h3>
        </Link>
    );
};