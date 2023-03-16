import Link from 'next/link';

import { HeaderProps } from './Header.types';
import { CONTACTS_DATA, MENU_ITEMS } from '../../constatnts';

import s from './Header.module.scss'

import logo from '../../../public/svg/logo.svg'

export function Header({ ...props }: HeaderProps) {

    const links = MENU_ITEMS.map(current => {
        return (
            <Link className={s.menu__link} href={current.link} key={current.display_name}>{current.display_name}</Link>
        )
    })

    return (
        <div className={s.header}>
            <Link href='/' className={s.logo}>
                <img className={s.logo__svg} src={logo.src} alt="Логотип" />
                <p className={s.logo__text}>piybeep.</p>
            </Link>

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
        </div>
    );
};

export default Header;