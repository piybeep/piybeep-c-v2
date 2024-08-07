import Link from 'next/link';

import s from './Links.module.scss'

export function Links({ phone, email }: { phone: string, email: string }) {
    return (
        <div className={s.contact}>
            <Link
                className={s.contact__link}
                href={`tel:${phone}`}
            >
                {phone}
            </Link>
            <Link
                className={s.contact__link}
                href={`mailto:${email}`}
            >
                {email}
            </Link>
        </div>
    );
};
