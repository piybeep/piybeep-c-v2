import { CardProps } from "./Card.types";
import s from "./Card.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

export function Card({
	title,
	price,
	options,
	description,
	className,
	...props
}: CardProps) {
	const router = useRouter();
	return (
		<div {...props} className={classNames(s.card, className)}>
			<div className={s.title}>
				<h4>{title}</h4>
				<span className={s.description}>{description}</span>
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
			<div className={s.price}>{price.toLocaleString("ru-RU")} р./мес</div>
			<button
				onClick={() =>
					router.push(
						{
							query: {
								form: "request",
								userSelect: "Поддержка",
							},
						},
						undefined,
						{ scroll: false },
					)
				}
			>
				Нужна поддержка{" "}
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
