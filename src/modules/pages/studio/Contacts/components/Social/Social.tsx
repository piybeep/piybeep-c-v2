import Link from 'next/link';
import Image from 'next/image';

import telegram from "../../../../../../../public/imgs/contacts/Telegram.png"
import vk from "../../../../../../../public/imgs/contacts/VK.png"

import s from './Social.module.scss'
import { ContactsType } from '../../../../../../types';

export function Social({ social }: { social: ContactsType[] }) {
    return (
        <div className={s.social}>
            {social.map((current) => (
                <Link
                    key={current.type}
                    href={current.text}
                    className={s.social__link}
                    target={'_blank'}
                >
                    <Image
                        className={s.social__img}
                        src={current.type === 'vk' ? vk : telegram}
                        alt={"Картинка"}
                    />
                    {current.type === 'vk' ? "Вконтакте" : "Телеграм"}
                </Link>
            ))}
        </div>
    );
};
