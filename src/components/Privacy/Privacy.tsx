import { PrivacyProps } from "./Privacy.types";

// Style
import s from './Privacy.module.scss'
import classNames from "classnames";

export function Privacy({ title, subtitle }: PrivacyProps) {
    return (
        <div className={s.privacy}>
            <input className={s.privacy__checkbox} type="checkbox" id="checkbox" />
            <span className={s.privacy__agree}></span>
            <label className={s.privacy__label} htmlFor="checkbox">{title} <a className={s.privacy__link} href="https://piybeep.com" target='_blank' rel="noopener">{subtitle}</a></label>
        </div>
    );
};