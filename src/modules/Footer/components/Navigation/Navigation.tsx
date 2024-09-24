import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import { MENU_ITEMS, PAGES_LINK } from "../../../../constatnts";

import s from './Navigation.module.scss'

export function Navigation() {
    const query = useRouter()

    return (
        <nav className={s.navigation}>
            <div className={classNames(s.home)}>
                <Link
                    className={classNames(s.home__link, {
                        [s.home__active]:
                            query.pathname == PAGES_LINK.MAIN ||
                            query.pathname == PAGES_LINK.BUSINESS ||
                            (query.pathname !== PAGES_LINK.MAIN &&
                                query.pathname !== PAGES_LINK.BUSINESS),
                    })}
                    href={PAGES_LINK.MAIN}
                >
                    Главная
                </Link>
                <Link
                    className={classNames(s.home__link, {
                        [s.home__active]:
                            query.pathname == PAGES_LINK.BUSINESS ||
                            (query.pathname !== PAGES_LINK.MAIN &&
                                query.pathname !== PAGES_LINK.BUSINESS),
                    })}
                    href={PAGES_LINK.BUSINESS}
                >
                    Для бизнеса
                </Link>
            </div>
            <div className={classNames(s.pages)}>
                {MENU_ITEMS.map((link) => (
                    <Link
                        className={s.pages__link}
                        key={link.display_name}
                        href={link.link}
                        title={link.display_name}
                    >
                        {link.display_name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
