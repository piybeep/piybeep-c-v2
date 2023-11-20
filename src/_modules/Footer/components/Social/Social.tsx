import Link from "next/link";
import { SOCIAL_LINKS } from "../../../../constatnts";

import s from './Social.module.scss'

export function Social() {
    return (
        <div className={s.social}>
            {SOCIAL_LINKS.map((link) => (
                <Link
                    className={s.social__link}
                    key={link.display_name}
                    href={link.link}
                    title={link.link}
                    target={'_blank'}>
                    {link.display_name}
                    <svg
                        className={s.social__svg}
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 9L9 1M9 1L1 1M9 1L1.00001 8.99999"
                            stroke="#ECECEC"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            ))}
        </div>
    );
};