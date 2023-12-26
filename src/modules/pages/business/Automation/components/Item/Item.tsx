import Image from "next/image";

import { ItemProps } from "./Item.types";

import s from './Item.module.scss'

export function Item({ index, title, img }: ItemProps) {
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
            <h2 className={s.item__title}>{title}</h2>
            <Image
                className={s.item__img}
                src={img}
                alt={"Картинка"}
                quality={100}
            />
        </div>
    );
};