import Link from "next/link";

import { ItemProps } from "./Item.types";

import s from './Item.module.scss'
import { useRouter } from "next/router";

export function Item({ name, href, index, title, text }: ItemProps) {

    const router = useRouter()

    const handleScrollTo = () => {
        router.push(href)

        setTimeout(() => {
            document.getElementById(name)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 300);
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
