import classNames from 'classnames';
import s from './Item.module.scss'
import { ItemProps } from './Item.types';

export function Item({ index, title, text }: ItemProps) {
    return (
        <div
            className={classNames(s.item, {
                [s.item__right]: index % 2 != 0,
            })}
        >
            <div className={s.item__info}>
                <h3 className={s.item__title}>{title}</h3>
                <h4 className={s.item__text}>{text}</h4>
            </div>
        </div>
    );
};