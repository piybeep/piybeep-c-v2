import { SupportCardProps } from "./SupportCard.types";
import s from "./SupportCard.module.scss";
import classNames from "classnames";

export function SupportCard({
	title,
	price,
	options,
	description,
	className,
	...props
}: SupportCardProps) {
	return (
		<div {...props} className={classNames(s.card, className)}>
			<div className={s.title}>
				{title} <span className={s.description}>{description}</span>
			</div>
			<div className={s.options}>
				{options.map((i, index) => (
					<ul key={index} className={s.group}>
						{i.map((item, ind) => (
							<li key={ind}>{item}</li>
						))}
					</ul>
				))}
			</div>
			<div className={s.price}>{price.toLocaleString()} р./мес</div>
			<button>
				Нужна помощь{" "}
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
