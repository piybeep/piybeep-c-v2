'use client'

import classNames from 'classnames';
import s from './Preview.module.scss'

export function Preview({ text, description, withPadding = false }: { text: string, description: string, withPadding?: boolean }) {
    return (
        <div className={s.wrapper}>
            <h1 className={classNames(s.text, {
                [s.text__padding]: withPadding
            })} data-description={description}>
                <span className={s.text__bold}>piybeep.</span> {text}
            </h1>
        </div>
    );
}
