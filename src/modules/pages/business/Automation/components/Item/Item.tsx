import Image from "next/image";

import { ItemProps } from "./Item.types";

import s from './Item.module.scss'

export function Item({ index, title, img, alt }: ItemProps) {
    return (
        <div
            key={index}
            className={s.item}
            style={
                index < 3
                    ? { marginTop: `${index * 80}px` }
                    : index === 3
                        ? { marginTop: "0px" }
                        : { marginTop: `${index * 80 - 240}px` }
            }
        >
            <p className={s.item__title}>{title}</p>
            <Image
                className={s.item__img}
                src={img}
                alt={alt}
                quality={100}
            />
        </div>
    );
};