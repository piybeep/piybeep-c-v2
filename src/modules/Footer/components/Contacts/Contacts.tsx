import Link from 'next/link';
import s from './Contacts.module.scss'

export function Contacts({ phone, email }: { phone: string, email: string }) {
    return (
        <div className={s.contacts}>
            <Link
                className={s.contacts__link}
                href={`tel:${phone}`}>
                {phone}
            </Link>
            <Link
                className={s.contacts__link}
                href={`mailto:${email}`}>
                {email}
            </Link>
        </div>
    );
};
