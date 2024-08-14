import { NavLinkProps } from './NavLink.types';

import s from './NavLink.module.scss'
import Link from 'next/link';
import Image from 'next/image';

export function NavLink({ title, href, preview_image, slug }: NavLinkProps) {
    return (
        <Link
            href={[href, slug].join("/")}
            className={s.link}
        >
            <Image
                title={title}
                className={s.link__img}
                src={preview_image}
                alt={title}
                width={270}
                height={152}
            />
        </Link>
    );
};
