'use client'

import classNames from 'classnames';
import s from './Preview.module.scss'
import { useEffect, useState } from 'react';

export function Preview({ text, description, isBusiness = false }: { text: string, description: string, isBusiness?: boolean }) {
    const [heigthHeader, setHeigthHeader] = useState('')
    useEffect(() => {
        // Тоже рабочее решение
        // document.getElementById('previewId')?.scrollIntoView({ behavior: 'instant', block: 'center' })
        const headerRect = document.getElementById('headerId')?.getBoundingClientRect()

        if (headerRect) {
            setHeigthHeader(`${headerRect.height}px`)
        }
    }, [])

    console.log(heigthHeader)

    return (
        <div className={s.wrapper} id='previewId'
            style={{ height: `calc(100vh - ${heigthHeader})` }}
        >
            <h1 className={s.content}>
                <span className={classNames(s.content__title, {
                    [s.content__title_business]: isBusiness
                })}>
                    piybeep. <span className={s.content__text}>{text}</span>
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
