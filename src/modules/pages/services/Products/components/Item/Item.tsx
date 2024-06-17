import classNames from "classnames";

import { ItemProps } from "./Item.types";
import { useRouter } from "next/router";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

import s from "./Item.module.scss";

const RUBCurrency = () => <span style={{ fontWeight: "500" }}>р.</span>;

export function Item({
	number,
	title,
	description,
	discount,
	price,
	status,
	className,
	disabled = false,
	...props
}: ItemProps) {
	const router = useRouter();

	return (
		<div className={classNames(s.wrapper, className)} id={title} {...props}>
			<div className={s.title}>
				<span className={s.title}>
					{(typeof number == "number" && number < 10 ? "0" : "") + number}
				</span>
				<h2 className={s.title} style={{ margin: '0px' }}>{title}</h2>
			</div>
			<ReactMarkdown
				className={s.description}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
			>
				{description}
			</ReactMarkdown>
			<div className={s.prices}>
				{discount ? (
					<span>
						{">"} {discount.toLocaleString("ru-RU")} <RUBCurrency />
					</span>
				) : (
					""
				)}
				{price ? (
					<span>
						{discount ? "" : ">"} {price.toLocaleString("ru-RU")}{" "}
						<RUBCurrency />
					</span>
				) : (
					""
				)}
				{status ? <span className={s.status}>{status}</span> : ""}
			</div>
			<button
				className={classNames(s.button, { [s.disabled]: disabled })}
				onClick={() =>
					!disabled &&
					router.push(
						{
							query: {
								form: "request",
								userSelect: title,
							},
						},
						undefined,
						{ scroll: false },
					)
				}
			>
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
