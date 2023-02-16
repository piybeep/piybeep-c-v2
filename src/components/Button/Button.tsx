import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

export function Button(props: ButtonProps) {
	return <button className={styles.button}>{props.value}</button>;
}

