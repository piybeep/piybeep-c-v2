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
						{">"} {discount.toLocaleString()} р.
					</span>
				) : (
					""
				)}
				{price ? (
					<span>
						{">"} {price.toLocaleString()} р.
					</span>
				) : (
					""
				)}
				{status ? <span className={s.status}>{status}</span> : ""}
			</div>
		</div>
	);
}

