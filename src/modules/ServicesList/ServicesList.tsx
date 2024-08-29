import Link from 'next/link';
import { ProductType } from '../../utils';
import s from './ServicesList.module.scss'
import { useState } from 'react';
import classNames from 'classnames';
import { PAGES_LINK } from '../../constatnts';

export function ServicesList({ list, isCollapse = false }: { list: ProductType[], isCollapse?: boolean }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleCollapse = () => {
        setIsOpen(state => !state)
    }

    if (!list) {
        return <></>
    }

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__collapse]: isCollapse,
            [s.wrapper__collapse_open]: isCollapse && isOpen,
            [s.wrapper__collapse_hidden]: isCollapse && !isOpen
        })}>
            <div className={s.list}>
                {isCollapse && <span onClick={() => setIsOpen(state => !state)} className={s.list__before}></span>}
                {
                    list.map((item, index) => (
                        <Link href={[PAGES_LINK.SERVICES, item.slug].join('/')} key={item.id} id={item.name} className={s.list__item}>
                            <div className={s.list__info}>
                                <span className={s.list__text}>{(index + 1 < 10) && '0'}{index + 1}</span>
                                <h2 className={s.list__title}>{item.name}</h2>
                            </div>
                            <svg className={s.list__svg} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#ECECEC" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2253 20.776C10.9249 20.4756 10.9249 19.9886 11.2253 19.6882L18.3737 12.5398L11.7692 12.5398C11.3444 12.5398 11 12.1954 11 11.7706C11 11.3457 11.3444 11.0013 11.7692 11.0013L20.2308 11.0013C20.4348 11.0013 20.6304 11.0824 20.7747 11.2266C20.919 11.3709 21 11.5666 21 11.7706L21 20.2321C21 20.657 20.6556 21.0014 20.2308 21.0014C19.8059 21.0014 19.4615 20.657 19.4615 20.2321L19.4615 13.6277L12.3132 20.776C12.0128 21.0764 11.5257 21.0764 11.2253 20.776Z" fill="#ECECEC" />
                            </svg>
                        </Link>
                    ))
                }
            </div>
            {
                isCollapse &&
                <button onClick={() => handleCollapse()} className={classNames(s.button, {
                    [s.button_rotate]: isOpen
                })}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="#ECECEC" />
                        <path d="M12 17.0041L15 20.2041M15 20.2041L18 17.0041M15 20.2041V9.7959" stroke="#ECECEC" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            }
        </div>
    )
}
