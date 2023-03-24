// Style
import classNames from "classnames";

import style from "./Title.module.scss";
import { TitleProps } from "./Title.types";

export function Title({ value, subtitle, position = "left" }: TitleProps) {
	return (
		<div className={style.wrapper}>
			<div className={classNames(style.title, style[position])}>
				<h3>{value} .</h3>
				{subtitle ? <h4>{subtitle}</h4> : ""}
			</div>
		</div>
	);
}

