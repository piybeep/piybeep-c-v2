import Link from 'next/link';
import Image from 'next/image';

import { SOCIAL_LINKS } from '../../../../../../constatnts';

import s from './Social.module.scss'

export function Social() {
    return (
        <div className={s.social}>
            {SOCIAL_LINKS.map((current) => (
                <Link
                    key={current.display_name}
                    href={current.link}
                    className={s.social__link}
                    target={'_blank'}
                >
                    <Image
                        className={s.social__img}
                        src={current.icon}
                        alt={"Картинка"}
                    />
                    {current.display_name}
                </Link>
            ))}
        </div>
    );
};