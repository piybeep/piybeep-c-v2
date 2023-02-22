import React from "react";
import classNames from "classnames";

import { FormModalWindowProps } from "./FormModalWindow.types";
import { Button, Title, Input, Privacy } from "../../components";
import { useModalWindow, useUserSelectForm } from "../../hooks";
import {
	FORM__PRODUCTS,
	FULL_SCREEN_FORM,
	SUCCESSFUL_SENDING,
} from "../../constatnts";

// Style
import s from "./FormModalWindow.module.scss";

export function FormModalWindow({ isShow, close }: FormModalWindowProps) {
	const { add, remove } = useModalWindow();
	const {
		add: addUserSelect,
		remove: removeUserSelect,
		isHas: isHasUserSelect,
	} = useUserSelectForm();

	return (
		<div
			className={classNames(s.formModalWindow__wrapper, {
				[s.formModalWindow__wrapper__visibile]: isShow,
				[s.formModalWindow__wrapper__hidden]: !isShow,
			})}
		>
			<span onClick={close} className={s.formModalWindow__close}>
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
			<div onClick={(e) => e.stopPropagation()} className={s.formModalWindow}>
				<Title
					value="Оставьте здесь заявку и мы с вами свяжемся"
					position="center"
					size="small"
				/>
				<div className={s.formModalWindow__input}>
					<Input text="Имя" type="text" />
					<Input text="Электронная почта" type="email" />
				</div>
				<div className={s.formModalWindow__info}>
					<h2 className={s.formModalWindow__title}>Выберите продукт:</h2>
					<div className={s.formModalWindow__list}>
						<div className={s.formModalWindow__products}>
							{FORM__PRODUCTS.map((current) => (
								<Button
									onClick={() =>
										isHasUserSelect(current)
											? removeUserSelect(current)
											: addUserSelect(current)
									}
									key={current}
									value={current}
									rounded
									outline
									color="light"
									active={isHasUserSelect(current)}
								/>
							))}
						</div>
						<div className={s.formModalWindow__privacy}>
							<Button
								value="Отправить"
								size="default"
								onClick={() => {
									remove(FULL_SCREEN_FORM);
									add(SUCCESSFUL_SENDING);
								}}
							/>
							<Privacy
								title="Я соглашаюсь на хранение и обработку"
								subtitle="персональных данных"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

