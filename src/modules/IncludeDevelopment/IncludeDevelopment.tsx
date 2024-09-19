import Image from 'next/image';
import { IncludesDevelopmentTypes } from '../../types';
import s from './IncludeDevelopment.module.scss'
import { Title } from '../../components';

import plug from '../../../public/svg/services/plug.svg'

export function IncludeDevelopment({ list, title }: { list: IncludesDevelopmentTypes[] | [], title: string }) {
    if (!list || list.length <= 0) {
        return <></>
    }

    return (
        <div className={s.wrapper}>
            <Title value={title} size='md' />
            <div className={s.list}>
                {
                    list.map(item => (
                        <div key={item.title} className={s.list__item}>
                            <Image
                                className={s.list__img}
                                src={item?.image?.url ? (process.env.NEXT_PUBLIC_STRAPI_URL + item?.image?.url) : plug?.src}
                                alt={item?.image?.alternativeText ?? ''}
                                width={item?.image?.width ?? 120}
                                height={item?.image?.height ?? 120}
                            />
                            <h3 className={s.list__title}>{item.title}</h3>
                            <p className={s.list__text}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
