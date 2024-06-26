// Style
import classNames from "classnames";

import style from "./Title.module.scss";
import { TitleProps } from "./Title.types";

export function Title({
    value,
    subtitle,
    position = "left",
    withDot = true,
    size = 'lg',
    tag = 'h2'
}: TitleProps) {
    return (
        <div className={style.wrapper}>
            <div className={classNames(style.title, style[position], style[`title__${size}`])}>
                {
                    tag === 'h2'
                        ? <h2>
                            {value} {withDot && '.'}
                        </h2>
                        : <h1>
                            {value} {withDot && '.'}
                        </h1>
                }
                {subtitle && <span>{subtitle}</span>}
            </div>
        </div>
    );
}
