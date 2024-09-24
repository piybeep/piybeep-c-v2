import classNames from "classnames";
import Link from "next/link";

import s from './ButtonHome.module.scss'
import { PAGES_LINK } from "../../../../constatnts";
import { ButtonHomeProps } from "./ButtonHome.types";

export function ButtonHome({ pathname }: ButtonHomeProps) {

    console.log(pathname)
    return (
        <div className={classNames(s.links)}>
            <Link
                className={classNames({
                    [s.active]:
                        pathname == PAGES_LINK.MAIN
                })}
                href={PAGES_LINK.MAIN}
            >
                Главная
            </Link>
            <Link
                className={classNames({
                    [s.active]:
                        pathname == PAGES_LINK.BUSINESS
                })}
                href={PAGES_LINK.BUSINESS}
            >
                Для бизнеса
            </Link>
            <Link
                className={classNames(s.alt, {
                    [s.active]:
                        pathname == PAGES_LINK.MAIN
                })}
                href={PAGES_LINK.MAIN}
            >
                Главная
            </Link>
            <Link
                className={classNames(s.alt, {
                    [s.active]:
                        pathname == PAGES_LINK.BUSINESS
                })}
                href={PAGES_LINK.BUSINESS}
            >
                Бизнес
            </Link>
        </div>
    );
};
