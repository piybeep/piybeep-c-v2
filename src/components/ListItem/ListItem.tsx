import ReactMarkdown from "react-markdown";

import { ListItemProps } from "./ListItem.types";

import s from "./ListItem.module.scss";

export function ListItem({
	title,
	text,
	titleIcon,
	number,
	...props
}: ListItemProps) {
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
