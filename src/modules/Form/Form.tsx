import classNames from "classnames";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Title, Button, Privacy, Input } from "../../components";

import { FORM__PRODUCTS } from "../../constatnts";

import { useRouterQuery, useUserSelectForm } from "../../hooks";

import { FormProps } from "./Form.types";

import s from "./Form.module.scss";
import { useEffect } from "react";

export function Form({ ...props }: FormProps) {
	const {
		add: addUserSelect,
		remove: removeUserSelect,
		isHas: isHasUserSelect,
	} = useUserSelectForm();

	const { query, isHas } = useRouterQuery();

	const handleProduct = (current: string) => {
		isHasUserSelect(current)
			? removeUserSelect(current)
			: addUserSelect(current);
	};

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
			email: Yup.string().email().required(),
			products: Yup.array().of(Yup.string()).min(1),
			privacy: Yup.bool().required().isTrue(),
		}),
		onSubmit(values) {
			console.log(values);
			formik.setSubmitting(false);
			formik.resetForm();
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
		<main className={s.wrapper}>
			<Title value="Оставьте заявку и мы с вами свяжемся" />
			<form className={s.form}>
				<div className={s.info}>
					<Input
						name="name"
						autoComplete="off"
						text="Имя"
						position="center"
						sizeInput="large"
						value={formik.values.name}
						onChange={formik.handleChange}
					/>

					<Input
						name="email"
						autoComplete="off"
						text="Почта или телефон"
						position="center"
						sizeInput="large"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={s.products}>
					{FORM__PRODUCTS.map((current) => (
						<h2
							key={current}
							className={classNames(s.products__product, {
								[s.products__product_active]: isHasUserSelect(current),
							})}
							onClick={() => handleProduct(current)}
						>
							{current}
						</h2>
					))}
				</div>
				<div className={s.buttons}>
					<Button
						value="Отправить"
						outline
						type="button"
						onClick={() => formik.submitForm()}
						disabled={formik.isSubmitting || !formik.isValid}
					/>
					<Privacy
						title="Я соглашаюсь на хранение и обработку персональных данных"
						onClick={() =>
							formik.setFieldValue("privacy", !formik.values.privacy)
						}
					/>
				</div>
			</form>
		</main>
	);
}

