'use client'

import s from './Preview.module.scss'

export function Preview({ text, description }: { text: string, description: string }) {
    return (
        <div className={s.wrapper}>
            <h1 className={s.text} data-description={description}>
                <span className={s.text__bold}>piybeep.</span> {text}
            </h1>
            <button className={s.button} onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                Заказать сайт
                <svg className={s.button__svg} width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.502 35.0019L3.002 35.0019L65.9646 35.0005L41.5434 10.5793L39.7756 8.81158L43.3111 5.27605L45.0789 7.04381L73.7678 35.7326C74.2366 36.2015 74.5 36.8373 74.5 37.5004C74.5 38.1634 74.2366 38.7993 73.7678 39.2681L45.0789 67.957L43.3111 69.7248L39.7756 66.1892L41.5433 64.4215L65.9643 40.0005L3.00211 40.0019L0.502108 40.0019L0.502 35.0019Z" fill="#ECECEC" />
                </svg>
            </button>
        </div>
    );
}
