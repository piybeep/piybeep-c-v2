import Image from "next/image";

import { MENU_ITEMS } from "../../constatnts";

import { NotFoundProps } from "./NotFound.types";
import s from './NotFound.module.scss'

import cat from '../../../public/imgs/sleeping-cat.png'
import Link from "next/link";

export function NotFound({ }: NotFoundProps) {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <h2 className={s.info__title}>Ошибка 404. Страница не найдена.</h2>
                <h3 className={s.info__slogan}>Похоже, тут ничего нет, кроме спящего котика
                    Тсс.. не разбуди!</h3>
                <div className={s.info__list}>
                    {MENU_ITEMS.map(current => (
                        <Link key={current.link} href={current.link} className={s.info__link}>{current.display_name}</Link>
                    ))}
                </div>
            </div>
            <Image className={s.img} src={cat} alt="Котик" />
        </div>
    );
};