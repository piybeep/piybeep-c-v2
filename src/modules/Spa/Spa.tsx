import Image from 'next/image';

import img from '../../../public/imgs/spaImg.png'

import s from './Spa.module.scss'

export function Spa() {
    return (
        <div className={s.wrapper}>
            <h2 className={s.header}>Мы разрабатываем <a className={s.header__link} target='_blank' href="https://ru.wikipedia.org/wiki/Одностраничное_приложение">Spa</a></h2>
            <div className={s.info}>
                <div className={s.column}>
                    <h2 className={s.title}>Что такое SPA?</h2>
                    <p className={s.description}>SPA - single page applications (одностраничные приложения) - это самая современная технология разработки сайтов, которая позволяет сделать ресурс максимально быстрым, удобным и безопасным, оптимизировать для лучшей выдачи в поисковых системах (SEO-оптимизация) и выполнить поставленную заказчиком задачу.</p>
                </div>
                <div className={s.right}>
                    <div className={s.column}>
                        <h2 className={s.title}>Что такое SPA?</h2>
                        <p className={s.description}>SPA - single page applications (одностраничные приложения) - это самая современная технология разработки сайтов, которая позволяет сделать ресурс максимально быстрым, удобным и безопасным, оптимизировать для лучшей выдачи в поисковых системах (SEO-оптимизация) и выполнить поставленную заказчиком задачу.</p>
                    </div>
                </div>
            </div>
            <Image width={800} height={429} className={s.block} src={img} alt={'Картинка'}/>
        </div>
    );
};