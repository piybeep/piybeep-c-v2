import React from "react";
import classNames from "classnames";

import { FullScreenFormProps } from "./FullScreenForm.types";

// Style
import s from "./FullScreenForm.module.scss";
import { FormRequest } from "../FormRequest";

export function FullScreenForm({ isShow, close }: FullScreenFormProps) {
	return (
		<div
			className={classNames(s.FullScreenForm__wrapper, {
				[s.FullScreenForm__wrapper__visibile]: isShow,
				[s.FullScreenForm__wrapper__hidden]: !isShow,
			})}>
			<span onClick={close} className={s.FullScreenForm__close}>
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.15385 28L0 25.8462L11.8462 14L0 2.15385L2.15385 0L14 11.8462L25.8462 0L28 2.15385L16.1538 14L28 25.8462L25.8462 28L14 16.1538L2.15385 28Z"
						fill="white"
					/>
				</svg>
			</span>
			<FormRequest />
		</div>
	);
}

