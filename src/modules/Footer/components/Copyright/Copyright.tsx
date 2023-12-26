import Link from "next/link";

import s from './Copyright.module.scss'

export function Copyright() {
    return (
        <div className={s.copyright}>
            made by{" "}
            <Link className={s.copyright__link} href="https://piybeep.com" title="piybeep.com">
                piybeep
            </Link>
            .
        </div>
    );
};