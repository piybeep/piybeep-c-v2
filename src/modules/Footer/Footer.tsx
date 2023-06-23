import Link from "next/link";

import {FooterProps} from "./Footer.types";
import s from "./Footer.module.scss";

import {CONTACTS_DATA, MENU_ITEMS, SOCIAL_LINKS} from "../../constatnts";

export function Footer({...props}: FooterProps) {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <div className={s.column}>
                    <nav className={s.links}>
                        {MENU_ITEMS.map((link) => (
                            <Link
                                key={link.display_name}
                                href={link.link}
                                title={link.display_name}
                            >
                                {link.display_name}
                            </Link>
                        ))}
                    </nav>
                    <div className={s.contacts}>
                        <Link href={`tel:${CONTACTS_DATA.get("phone")}`}>
                            {CONTACTS_DATA.get("phone")}
                        </Link>
                        <Link href={`mailto:${CONTACTS_DATA.get("email")}`}>
                            {CONTACTS_DATA.get("email")}
                        </Link>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.links}>
                        {SOCIAL_LINKS.map((link) => (
                            <Link key={link.display_name} href={link.link} title={link.link}>
                                {link.display_name}
                                <svg
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
                    <div className={s.copyright}>
                        made by{" "}
                        <Link href="https://piybeep.com" title="piybeep.com">
                            piybeep
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </footer>
    );
}
