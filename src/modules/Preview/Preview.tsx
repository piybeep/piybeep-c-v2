'use client'

import classNames from 'classnames';
import s from './Preview.module.scss'

export function Preview({ text, description, isBusiness = false }: { text: string, description: string, isBusiness?: boolean }) {
    return (
        <div className={s.wrapper}>
            <h1 className={s.content}>
                <span className={classNames(s.content__title, {
                    [s.content__title_business]: isBusiness
                })}>
                    piypeep. <span className={s.content__text}>{text}</span>
                </span>
                <span className={classNames(s.content__description, {
                    [s.content__description_business]: isBusiness
                })}>
                    {description}
                </span>
            </h1>
        </div>
    );
}
