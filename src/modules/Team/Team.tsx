import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Title } from '../../components';

import { PERSON_LIST } from '../../constatnts/person';

import { TeamProps } from './Team.types';
import s from './Team.module.scss';

export function Team({ }: TeamProps) {

    const [windowSize, setWindowSize] = useState(11)

    useEffect(() => {
        if (window){
            console.log(window.screen.width)
            console.log(windowSize)
            if (window.screen.width > 1550){
                setWindowSize(11)
            }else if (window.screen.width < 1551 && window.screen.width > 1270){
                setWindowSize(10.5)
            }
        }
    }, [])

    const PersonInfo = ({ current }: { current: any }) => {
        return (
            <div className={s.person} style={{zIndex: PERSON_LIST.length - current.id, left: windowSize * current.id + '%'}}>
                <Image className={s.person__img} src={current.img} alt={'Картинка'} />
                <div className={s.person__info}>
                    <h2 className={s.person__title}>{current.title}</h2>
                    <h3 className={s.person__text}>{current.text}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className={s.wrapper}>
            <Title value={'Команда'} />

            <div className={s.wrapper__list}>
                {PERSON_LIST.map(current => (
                    <PersonInfo key={current.id} current={current} />
                ))}
            </div>
        </div>
    );
};