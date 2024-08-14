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
				<h3 style={{ margin: '0px' }}>{title}</h3>
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
			<div className={s.price}>{price.toLocaleString("ru-RU")} р./мес ({description})</div>
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
				Выбрать
				<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
					<path d="M8.38817 1.18359L14.704 7.49938M14.704 7.49938L8.38817 13.8152M14.704 7.49938H2.5" stroke="#ECECEC" strokeLinecap="square" strokeLinejoin="round" />
				</svg>
			</button>
		</div>
	);
}
