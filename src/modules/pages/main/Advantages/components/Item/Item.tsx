import ReactMarkdown from "react-markdown";

import { ItemProps } from "./Item.types";

import s from "./Item.module.scss";

export function Item({ title, text, titleIcon, number }: ItemProps) {
	return (
		<div className={s.wrapper}>
			<h4 className={s.title}>
				{!isNaN(Number(number)) ? String(number).padStart(2, "0") + " . " : ""}
				{title} {titleIcon}
			</h4>
			{text ? <ReactMarkdown className={s.text}>{text}</ReactMarkdown> : ""}
		</div>
	);
}
