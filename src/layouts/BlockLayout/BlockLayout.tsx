import { Title } from "../../components";

import s from "./BlockLayout.module.scss";
import { BlockLayoutProps } from "./BlockLayout.types";

export function BlockLayout({
	children,
	value,
	subtitle,
	link,
	position,
}: BlockLayoutProps) {
	return (
		<section className={s.wrapper}>
			<Title
				value={value}
				position={position}
				subtitle={subtitle}
				link={link}
			/>
			{children}
		</section>
	);
}

