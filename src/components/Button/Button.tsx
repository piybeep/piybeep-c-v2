import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";
import classNames from "classnames";

export function Button(props: ButtonProps) {
	return (
		<button
			className={classNames(styles.button, {
				[styles.button__rounded]: props.rounded,
				[styles.button__outline]: props.outline,
			})}
		>
			{props.value}
		</button>
	);
}

