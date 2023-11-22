import Image from 'next/image';
import s from './Person.module.scss'
import { PersonProps } from './Person.types';

export function Person({ length, id, windowSize, title, text, img }: PersonProps) {
    return (
        <div
            className={s.person}
            style={{
                zIndex: length - id,
                left: windowSize * id + "%",
            }}
        >
            <Image
                className={s.person__img}
                src={img}
                alt={"Картинка"}
                quality={100}
            />
            <div className={s.person__info}>
                <h2 className={s.person__title}>{title}</h2>
                <h3 className={s.person__text}>{text}</h3>
            </div>
        </div>
    );
};