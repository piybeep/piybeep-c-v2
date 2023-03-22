import { ProductListItemProps } from "./ProductListItem.types";

import s from "./ProductListItem.module.scss";

export function ProductListItem({
	number,
	title,
	description,
	discount,
	price,
	status,
}: ProductListItemProps) {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<span>{(number < 10 ? "0" : "") + number}</span>
				<span>{title}</span>
			</div>
			<div className={s.description}>{description}</div>
			<div className={s.prices}>
				{discount ? (
					<span>
						{">"} {discount} р.
					</span>
				) : (
					""
				)}
				{price ? (
					<span>
						{">"} {price} р.
					</span>
				) : (
					""
				)}
				{status ? <span>{status}</span> : ""}
			</div>
		</div>
	);
}
