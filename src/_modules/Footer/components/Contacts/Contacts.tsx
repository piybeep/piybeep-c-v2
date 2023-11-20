import Link from 'next/link';
import s from './Contacts.module.scss'
import { CONTACTS_DATA } from '../../../../constatnts';

export function Contacts() {
    return (
        <div className={s.contacts}>
            <Link
                className={s.contacts__link}
                href={`tel:${CONTACTS_DATA.get("phone")}`}>
                {CONTACTS_DATA.get("phone")}
            </Link>
            <Link
                className={s.contacts__link}
                href={`mailto:${CONTACTS_DATA.get("email")}`}>
                {CONTACTS_DATA.get("email")}
            </Link>
        </div>
    );
};