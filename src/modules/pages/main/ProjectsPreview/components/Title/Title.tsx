import { TitleProps } from './Title.types';

import s from './Title.module.scss'

export function Title({ text, price }: TitleProps) {
    return (
        <div className={s.title}>
            <p className={s.title__text}>{text}</p>
            <p className={s.title__text}>{price}</p>
        </div>
    );
};