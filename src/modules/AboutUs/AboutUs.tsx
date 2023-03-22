import { AboutUsProps } from "./AboutUs.types";

import aboutImg from '../../../public/imgs/about-us.png'

import s from './AboutUs.module.scss'

export function AboutUs({...props}: AboutUsProps){
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Продающие сайты для ваших маркетинговых целей.</h2>
            <div className={s.info}>
                <h3 className={s.info__slogan}>piybeep. разрабатывает продающие сайты для компаний, которые хотят уверенно овладеть таким каналом продаж, либо улучшить его и сделать свой интернет-маркетинг эффективнее</h3>
                <img className={s.info__img} src={aboutImg.src} alt="Картинка" />
            </div>
        </div>
    );
};
