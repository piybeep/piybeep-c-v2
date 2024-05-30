// Style
import classNames from "classnames";

import style from "./Title.module.scss";
import { TitleProps } from "./Title.types";

export function Title({
    value,
    subtitle,
    position = "left",
    withDot = true,
    size = 'lg'
}: TitleProps) {
    return (
        <div className={style.wrapper}>
            <div className={classNames(style.title, style[position], style[`title__${size}`])}>
                <h3>
                    {value} {withDot && '.'}
                </h3>
                {subtitle && <h4>{subtitle}</h4>}
            </div>
        </div>
    );
}
