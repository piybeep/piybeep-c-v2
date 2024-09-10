import Image from 'next/image';
import { IncludesDevelopmentTypes } from '../../types';
import s from './IncludeDevelopment.module.scss'
import { Title } from '../../components';

export function IncludeDevelopment({ list, title }: { list: IncludesDevelopmentTypes[] | [], title: string }) {
    if (!list) {
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
                                src={process.env.NEXT_PUBLIC_STRAPI_URL + item.image.url}
                                alt={item.image.alternativeText ?? ''}
                                width={item.image.width}
                                height={item.image.height}
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
