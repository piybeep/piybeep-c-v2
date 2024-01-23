import { TitleProps } from './Title.types';

import s from './Title.module.scss'

export function Title({ text, price }: TitleProps) {
    return (
        <div className={s.title}>
            <h2 className={s.title__text}>{text}</h2>
            <h2 className={s.title__text}>{price}</h2>
        </div>
    );
};