import { PrivacyProps } from "./Privacy.types";

// Style
import s from "./Privacy.module.scss";

export function Privacy({ text, ...props }: PrivacyProps) {
	return (
		<div className={s.privacy}>
			<input
				{...props}
				className={s.privacy__checkbox}
				readOnly
				type="checkbox"
				id="check"
			/>
			<label htmlFor="check" className={s.privacy__agree}></label>
			<label htmlFor="check" className={s.privacy__label}>
				{text}
			</label>
		</div>
	);
}
