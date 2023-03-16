import React from 'react';
import { HeaderProps } from './Header.types';
import s from './Header.module.scss'
import { CONTACTS_DATA, MENU_ITEMS } from '../../constatnts';
import Link from 'next/link';

export function Header({ ...props }: HeaderProps) {

    const links = MENU_ITEMS.map(current => {
        return (
            <Link className={s.menu__link} href={current.link}>{current.display_name}</Link>
        )
    })

    return (
        <header className={s.header}>
            <div className={s.logo}>
                <svg className={s.logo__svg} width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30.152C0 29.8326 0.25904 29.5737 0.578582 29.5737H17.7046C18.0241 29.5737 18.2832 29.8326 18.2832 30.152V33.6217C18.2832 33.9411 18.0241 34.2 17.7046 34.2H0.578582C0.25904 34.2 0 33.9411 0 33.6217V30.152Z" fill="#F1F1F1" />
                    <path d="M0.578582 18.2739C0.25904 18.2739 0 18.5328 0 18.8522V22.3219C0 22.6413 0.25904 22.9002 0.578582 22.9002H25.0526C31.3795 22.9002 36.5085 17.7738 36.5085 11.4501C36.5085 5.12639 31.3795 0 25.0526 0H0.578582C0.25904 0 0 0.258909 0 0.578289V4.04802C0 4.3674 0.25904 4.62631 0.578582 4.62631H25.0526C28.8232 4.62631 31.8798 7.68143 31.8798 11.4501C31.8798 15.2188 28.8232 18.2739 25.0526 18.2739H0.578582Z" fill="#F1F1F1" />
                    <path d="M36.5085 11.4501C36.5085 17.7738 31.3795 22.9002 25.0526 22.9002C18.7257 22.9002 13.5967 17.7738 13.5967 11.4501C13.5967 5.12639 18.7257 0 25.0526 0C31.3795 0 36.5085 5.12639 36.5085 11.4501Z" fill="#98EC65" />
                </svg>
                <p className={s.logo__text}>piybeep.</p>
            </div>

            <div className={s.menu}>
                {links}
            </div>

            <div className={s.info}>
                <div className={s.info__column}>
                    <Link className={s.info__link} href={`tel:${CONTACTS_DATA.get('phone')}`}>
                        {CONTACTS_DATA.get('phone')}
                    </Link>
                    <button className={s.info__button}>Заказать звонок</button>
                </div>
                <Link className={s.info__link} href={`mailto:${CONTACTS_DATA.get('email')}`}>
                    {CONTACTS_DATA.get('email')}
                </Link>
            </div>
        </header>
    );
};

export default Header;