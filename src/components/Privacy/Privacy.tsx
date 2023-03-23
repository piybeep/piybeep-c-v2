import { PrivacyProps } from "./Privacy.types";

// Style
import s from "./Privacy.module.scss";

export function Privacy({ title, ...props }: PrivacyProps) {
	return (
		<div className={s.privacy}>
			<input
				{...props}
				className={s.privacy__checkbox}
				readOnly
				type="checkbox"
				id="check"
			/>
			<label htmlFor="check" className={s.privacy__agree} onClick={props.onClick}></label>
			<label htmlFor="check" className={s.privacy__label}>
				{title}
			</label>
		</div>
	);
}

