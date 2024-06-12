import classNames from 'classnames';
import s from './Info.module.scss'

export function Info({ title, text, pos = 'left' }: { title: string, text: string, pos?: 'left' | 'right' }) {
    return (
        <div className={classNames(s.wrapper, s[`wrapper__${pos}`])}>
            <div className={s.info}>
                <h3 className={s.info__title}>{title}</h3>
                <p className={s.info__description}>{text}</p>
            </div>
        </div>
    );
};