import Link from "next/link";

import s from './Social.module.scss'
import { ContactsType } from "../../../../types";

export function Social({ social }: { social: ContactsType[] }) {
    return (
        <div className={s.social}>
            {social.map((link) => (
                <Link
                    className={s.social__link}
                    key={link.type}
                    href={link.text}
                    title={link.type === 'vk' ? "Вконтакте" : link.type === 'wa' ? "WhatsApp" : "Телеграм"}
                    target={'_blank'}>
                    {link.type === 'vk' ? "Вконтакте" : link.type === 'wa' ? "WhatsApp" : "Телеграм"}
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
