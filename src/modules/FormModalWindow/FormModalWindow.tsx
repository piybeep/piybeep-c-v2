import { FormModalWindowProps } from "./FormModalWindow.types";
import { Button, Title } from "../../components";
// Style
import s from "./FormModalWindow.module.scss";
import { Input } from "../../components/Input";
import classNames from "classnames";
import {
	FORM__PRODUCT,
	FULL_SCREEN_FORM,
	SUCCESSFUL_SENDING,
} from "../../constatnts/modalWindows";
import { Privacy } from "../../components/Privacy/Privacy";
import { useState } from "react";
import { useModalWindow } from "../../hooks";

export function FormModalWindow({ isShow, close }: FormModalWindowProps) {
	const [products, setProducts] = useState(FORM__PRODUCT);
	const { isHas, add, remove } = useModalWindow();

	const getProducts = products.map((current) => {
		return (
			<Button
				onClick={() => selectProduct(current)}
				key={current.id}
				value={current.text}
				rounded
				outline
				color="light"
				active={current.active}
			/>
		);
	});

	const selectProduct = (productActive: any) => {
		products.forEach(
			(productActive) => productActive,
			(productActive.active = !productActive.active)
		);
		setProducts([...products]);
	};

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
						<div className={s.formModalWindow__products}>{getProducts}</div>
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

