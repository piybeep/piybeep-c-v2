import Link from "next/link";
import classNames from "classnames";

import { LinksProps } from "./NavLink.types";

import s from './NavLink.module.scss'

export function NavLink({ active, value, href }: LinksProps) {
    return (
        <Link
            className={classNames(s.link, {
                [s.link_active]: active,
            })}
            href={href}
        >
            {value}
        </Link>
    );
};