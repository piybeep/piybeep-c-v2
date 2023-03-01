import { PrivacyProps } from "./Privacy.types";
import { PRIVACY_LINK } from "../../constatnts";

// Style
import s from "./Privacy.module.scss";

export function Privacy({ title, subtitle, ...props }: PrivacyProps) {
	return (
		<div className={s.privacy}>
			<input
				{...props}
				className={s.privacy__checkbox}
				readOnly
				type="checkbox"
			/>
			<span className={s.privacy__agree} onClick={props.onClick}></span>
			<span className={s.privacy__label} onClick={props.onClick}>
				{title}{" "}
				<a
					onClick={(e) => e.stopPropagation()}
					className={s.privacy__link}
					href={PRIVACY_LINK}
					target="_blank"
					rel="noopener noreferrer"
				>
					{subtitle}
				</a>
			</span>
		</div>
	);
}

