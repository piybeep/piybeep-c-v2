import Image from "next/image";
import { useEffect, useState } from "react";

import imageEye from '../../../public/imgs/eyes.png'

import { EyesProps } from "./Eyes.types";
import s from './Eyes.module.scss'
import classNames from "classnames";

export function Eyes({ }: EyesProps) {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (isOpen){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <div onClick={() => setIsOpen(false)} className={classNames(s.wrapper, {
            [s.wrapper__open]: isOpen
        })}>
            <div className={s.info} onClick={(e) => e.stopPropagation()}>
                <div className={s.info__slogan}>
                    <h2 className={s.info__text}>Смотрим вашу заявку!</h2>
                    <h2 className={s.info__text}>Скоро мы напишем вам на почту и обговорим проект подробнее.</h2>
                </div>
                <button className={s.info__button}>Хорошо</button>
                <Image className={s.info__img} src={imageEye} alt={"Глазки"} />
            </div>
        </div>
    );
};