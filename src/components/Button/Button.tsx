import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";
import classNames from "classnames";

export function Button({ value, size = 'default', rounded, outline, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={classNames(styles.button, styles['button__' + size], {
				[styles.button__rounded]: rounded,
				[styles.button__outline]: outline,
			})}
		>
			{value}
		</button>
	);
}

