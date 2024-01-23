import Image from 'next/image';
import s from './Item.module.scss'
import { ItemProps } from './Item.types';

export function Item({ icon, title }: ItemProps) {
    return (
        <div className={s.item}>
            <Image
                className={s.item__img}
                src={icon}
                alt={"Картинка"}
            />
            <h2 className={s.item__title}>{title}</h2>
        </div>
    );
};