import s from "./BlockLayout.module.scss";
import { BlockLayoutProps } from "./BlockLayout.types";

export function BlockLayout({ children, title, subtitle }: BlockLayoutProps) {
	return (
		<section className={s.wrapper}>
			<div className={s.title}>
				<h3>{title}</h3>
				{subtitle ? <h4>{subtitle}</h4> : ""}
			</div>
			{children}
		</section>
	);
}
