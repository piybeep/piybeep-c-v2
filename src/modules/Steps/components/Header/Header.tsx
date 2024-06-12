import { HeaderProps } from "./Header.types";
import s from './Header.module.scss'

export function Header({ number, title, slogan }: HeaderProps) {
    return (
        <div className={s.header}>
            <span className={s.header__number}>{`0${number}`}</span>
            <h1 className={s.header__title}>{title}</h1>
            <h2 className={s.header__slogan}>{slogan}</h2>
        </div>
    );
};
