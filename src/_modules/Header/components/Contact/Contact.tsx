import Link from 'next/link';
import { ContactProps } from './Contact.types';

import s from './Contact.module.scss'

export function Contact({ prefix, value }: ContactProps) {
    return (
        <Link
            className={s.link}
            href={prefix + value}
        >
            {value}
        </Link>
    );
};