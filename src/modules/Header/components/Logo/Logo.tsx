import Image from "next/image";
import Link from "next/link";

import { PAGES_LINK } from "../../../../constatnts";

import logo from '../../../../../public/svg/logo.svg'
import s from './Logo.module.scss'

export function Logo() {
    return (
        <Link href={PAGES_LINK.MAIN} className={s.logo}>
            <Image className={s.logo__svg} src={logo} alt="Логотип" />
            <p className={s.logo__text}>piybeep.</p>
        </Link>
    );
};