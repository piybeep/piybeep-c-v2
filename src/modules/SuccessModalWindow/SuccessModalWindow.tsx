import classNames from "classnames";
import Image from "next/image";

import { SuccessModalWindowProps } from "./SuccessModalWindow.types";
import { Button } from "../../components";

// Image
import eyes from "../../../public/svg/Eyes/eyes.svg";
// Style
import style from "./SuccessModalWindow.module.scss";

export function SuccessModalWindow({ isShow, close }: SuccessModalWindowProps) {
	return (
		<div
			className={classNames(style.SuccessModalWindow, {
				[style.SuccessModalWindow__open]: isShow,
				[style.SuccessModalWindow__close]: !isShow,
			})}
		>
			<div className={style.SuccessModalWindow__info}>
				<h2 className={style.SuccessModalWindow__title}>
					Смотрим вашу заявку!
				</h2>
				<h3 className={style.SuccessModalWindow__subtitle}>
					Скоро мы свяжемся с вами и обговорим проект подробнее.
				</h3>
			</div>
			<Image className={style.SuccessModalWindow__img} src={eyes} alt="0_0" />
			<Button
				value="Хорошо, жду"
				rounded
				outline
				size="small"
				onClick={close}
			/>
		</div>
	);
}

