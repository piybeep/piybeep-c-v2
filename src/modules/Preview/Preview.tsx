'use client'

import s from './Preview.module.scss'

export function Preview({ text, description }: { text: string, description: string }) {
    return (
        <div className={s.wrapper}>
            <h1 className={s.text} data-description={description}>
                <span className={s.text__bold}>piybeep.</span> {text}
            </h1>
        </div>
    );
}
