import Image from 'next/image';

import { BUSINESS_DATA } from '../../constatnts/business';

import s from './Business.module.scss'

export function Business() {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Автоматизация бизнес-процессов</h2>
            <div className={s.list}>
                {
                    BUSINESS_DATA.map((current, index) => (
                        <div key={index} className={s.list__item} style={index < 3 ? {marginTop: `${index * 80}px`} : index === 3 ? {marginTop: '0px'} : {marginTop: `${index * 80 - 240}px`}}>
                            <h2 className={s.list__title}>{current.title}</h2>
                            <Image className={s.list__img} src={current.img} alt={'Картинка'}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};