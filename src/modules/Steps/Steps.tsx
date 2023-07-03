import classNames from 'classnames';
import { STEPS_INFO } from '../../constatnts/steps';
import s from './Steps.module.scss'
import { StepsProps } from './Steps.types';

export function Steps({ ...props }: StepsProps) {

    const Info = ({ ...props }) => {
        return (
            <>
                {
                    STEPS_INFO.map((current, index) => (
                        <div className={s.info} key={current.header}>
                            <div className={s.header}>
                                <span className={s.header__number}>{`0${index + 1}`}</span>
                                <h1 className={s.header__title}>{current.header}</h1>
                                <h2 className={s.header__slogan}>{current.slogan}</h2>
                            </div>
                            <div className={s.list}>
                                {current.list.map((current, index) => (
                                    <div className={classNames(s.item, {
                                        [s.item__right]: index === 1
                                    })} key={current.title}>
                                        <div className={s.item__info}>
                                            <h3 className={s.item__title}>{current.title}</h3>
                                            <h4 className={s.item__text}>{current.text}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }

    return (
        <div className={s.wrapper}>
            <Info />
        </div>
    );
};