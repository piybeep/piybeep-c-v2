import { ItemProps } from "./Item.types";

import s from './Item.module.scss'
import { useRouter } from "next/router";

export function Item({ name, href, index, title, text, hrefTo }: ItemProps) {

    const router = useRouter()

    const handleScrollTo = () => {
        router.push(`${href}${hrefTo ? `/${hrefTo}` : `?${name}`}`)
    }

    return (
        <button
            onClick={handleScrollTo}
            className={s.info}
            style={{ marginLeft: index * 8.6 + "%" }}
        >
            <h3 className={s.info__title}>{title}</h3>
            <p className={s.info__subtitle}>{text}</p>
        </button>
    );
};
