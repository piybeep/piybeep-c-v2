import Link from 'next/link';

import { CONTACTS_DATA } from '../../../../../../constatnts';

import s from './Links.module.scss'

export function Links() {
    return (
        <div className={s.contact}>
            <Link
                className={s.contact__link}
                href={`tel:${CONTACTS_DATA.get("phone")}`}
            >
                {CONTACTS_DATA.get("phone")}
            </Link>
            <Link
                className={s.contact__link}
                href={`tel:${CONTACTS_DATA.get("sec-phone")}`}
            >
                {CONTACTS_DATA.get("sec-phone")}
            </Link>
            <Link
                className={s.contact__link}
                href={`mailto:${CONTACTS_DATA.get("email")}`}
            >
                {CONTACTS_DATA.get("email")}
            </Link>
        </div>
    );
};