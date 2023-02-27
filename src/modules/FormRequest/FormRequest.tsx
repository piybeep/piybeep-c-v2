import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Title, Input, Privacy } from "../../components";
import { useModalWindow, useRouterQuery, useUserSelectForm } from "../../hooks";
import {
	FORM__PRODUCTS,
	FULL_SCREEN_FORM,
	SUCCESSFUL_SENDING,
} from "../../constatnts";

// Style
import s from "./FormRequest.module.scss";

export function FormRequest() {
	const { add, remove } = useModalWindow();
	const {
		add: addUserSelect,
		remove: removeUserSelect,
		isHas: isHasUserSelect,
	} = useUserSelectForm();

	const { query, isHas } = useRouterQuery();

	const initialValues: {
		name: string;
		email: string;
		products: string[];
		privacy: boolean;
	} = { name: "", email: "", products: [], privacy: false };
	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			email: Yup.string().required(),
			products: Yup.array().of(Yup.string()).min(1),
			privacy: Yup.bool().required().isTrue(),
		}),
		onSubmit(values) {
			remove(FULL_SCREEN_FORM);
			add(SUCCESSFUL_SENDING);

			formik.setSubmitting(false);
			formik.resetForm();
		},
		onReset() {
			removeUserSelect();
		},
	});

	useEffect(() => {
		formik.setFieldValue(
			"products",
			isHas("userSelect") ? (query.userSelect as string).split(",") : []
		);
	}, [query.userSelect]);

	return (
		<form
			onSubmit={formik.handleSubmit}
			onClick={(e) => e.stopPropagation()}
			className={s.FormRequest}
		>
			<Title
				value="Оставьте здесь заявку и мы с вами свяжемся"
				position="center"
				size="small"
			/>
			<div className={s.FormRequest__input}>
				<Input
					text="Имя"
					type="text"
					name="name"
					placeholder="Имя"
					autoComplete="off"
					value={formik.values.name}
					onChange={formik.handleChange}
				/>
				<Input
					text="Электронная почта"
					type="text"
					placeholder="Email"
					autoComplete="off"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
			</div>
			<div className={s.FormRequest__info}>
				<h2 className={s.FormRequest__title}>Выберите продукт:</h2>
				<div className={s.FormRequest__list}>
					<div className={s.FormRequest__products}>
						{FORM__PRODUCTS.map((current) => (
							<Button
								onClick={() => {
									isHasUserSelect(current)
										? removeUserSelect(current)
										: addUserSelect(current);
								}}
								key={current}
								value={current}
								rounded
								outline
								color="light"
								active={isHasUserSelect(current)}
								type="button"
							/>
						))}
					</div>
					<div className={s.FormRequest__privacy}>
						<Button
							value="Отправить"
							size="default"
							type="submit"
							disabled={formik.isSubmitting || !formik.isValid}
						/>
						<Privacy
							title="Я соглашаюсь на хранение и обработку"
							subtitle="персональных данных"
							checked={formik.values.privacy}
							onClick={() =>
								formik.setFieldValue("privacy", !formik.values.privacy)
							}
						/>
					</div>
				</div>
			</div>
		</form>
	);
}

