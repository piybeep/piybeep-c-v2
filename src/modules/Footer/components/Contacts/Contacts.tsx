import Link from 'next/link';
import s from './Contacts.module.scss'
import transformPhoneNumber from '../../../../utils/transformPhoneNumber';

export function Contacts({ phone, email }: { phone: string, email: string }) {

    return (
        <div className={s.contacts}>
            <Link
                className={s.contacts__link}
                href={`tel:${phone}`}>
                {transformPhoneNumber(phone)}
            </Link>
            <Link
                className={s.contacts__link}
                href={`mailto:${email}`}>
                {email}
            </Link>
        </div>
    );
};
