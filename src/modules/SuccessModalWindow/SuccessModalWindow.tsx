import Image from 'next/image';
import eyes from '../../../public/svg/Eyes/eyes.svg'
import { Button } from '../../components/Button';
import { SuccessModalWindowProps } from './SuccessModalWindow.types';
import classNames from 'classnames';
// Style
import style from './SuccessModalWindow.module.scss'

export function SuccessModalWindow({isShow}:SuccessModalWindowProps) {
    return (
        <div className={classNames(style.SuccessModalWindow, {
            [style.SuccessModalWindow__open] : isShow,
            [style.SuccessModalWindow__close] : !isShow
        })}>
            <div className={style.SuccessModalWindow__info}>
            <h2 className={style.SuccessModalWindow__title}>Смотрим вашу заявку!</h2>
            <h3 className={style.SuccessModalWindow__subtitle}>Скоро мы напишем вам на почту и обговорим проект подробнее.</h3>
            </div>
            <Image className={style.SuccessModalWindow__img} src={eyes} alt='404'/>
            <Button value='Хорошо, жду' rounded outline size='small'/>
        </div>
    );
};