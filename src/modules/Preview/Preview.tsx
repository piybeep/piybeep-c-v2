'use client'

import s from './Preview.module.scss'

export function Preview() {
    return (
        <div className={s.wrapper}>
            <h2 className={s.text}>
                <span className={s.text__bold}>piybeep.</span> разрабатывает продающие сайты для компаний
            </h2>
            <button className={s.button} onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать сайт
                <svg className={s.button__svg} xmlns="http://www.w3.org/2000/svg" width="110" height="96" viewBox="0 0 110 96" fill="none">
                    <path d="M65 8L105 48M105 48L65 88M105 48H5" stroke="#ECECEC" strokeWidth="7" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
