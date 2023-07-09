import classNames from "classnames";

import { ProductListItemProps } from "./ProductListItem.types";
import s from "./ProductListItem.module.scss";

export function ProductListItem({
	number,
	title,
	description,
	discount,
	price,
	status,
	className,
	disabled = false,
	...props
}: ProductListItemProps) {
	return (
		<div className={classNames(s.wrapper, className)} {...props}>
			<div className={s.title}>
				<span>
					{(typeof number == "number" && number < 10 ? "0" : "") + number}
				</span>
				<span>{title}</span>
			</div>
			<div className={s.description}>{description}</div>
			<div className={s.prices}>
				{discount ? (
					<span>
						{">"} {discount.toLocaleString("ru-RU")} р.
					</span>
				) : (
					""
				)}
				{price ? (
					<span>
						{discount ? "" : ">"} {price.toLocaleString("ru-RU")} р.
					</span>
				) : (
					""
				)}
				{status ? <span className={s.status}>{status}</span> : ""}
			</div>
			<button className={classNames(s.button, { [s.disabled]: disabled })}>
				Заказать
				<svg
					width="12"
					height="11"
					viewBox="0 0 12 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
						fill="#ECECEC"
					/>
				</svg>
			</button>
		</div>
	);
}
