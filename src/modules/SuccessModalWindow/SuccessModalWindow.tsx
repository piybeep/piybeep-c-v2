import { ButtonEye } from '../../components/ButtonEyes/ButtonEyes';

import Image from 'next/image';
import eyes from '../../../public/imgs/eyes/eyes.png'
// Style
import style from './Eye.module.scss'

export function SuccessModalWindow() {
    return (
        <div className={style.SuccessModalWindow}>
            <h2 className={style.SuccessModalWindow__title}>Смотрим вашу заявку!</h2>
            <h3 className={style.SuccessModalWindow__subtitle}>Скоро мы напишем вам на почту и обговорим проект подробнее.</h3>
            <Image src={eyes} alt='404'/>
            <ButtonEye value='Хорошо, жду'/>
        </div>
    );
};