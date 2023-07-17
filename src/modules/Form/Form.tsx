import classNames from "classnames";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Button, Input, Title } from "../../components";

import { FORM__PRODUCTS, PRIVACY_LINK } from "../../constatnts";

import { useRouterQuery, useUserSelectForm } from "../../hooks";

import s from "./Form.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import CreateRequest from "../../api/createRequest";
import { toast } from "../../utils";

export function Form() {
	const {
		add: addUserSelect,
		remove: removeUserSelect,
		isHas: isHasUserSelect,
	} = useUserSelectForm();

	const { query, isHas, mutate } = useRouterQuery();

	const handleProduct = (current: string) => {
		isHasUserSelect(current)
			? removeUserSelect(current)
			: addUserSelect(current);
	};

	const initialValues: {
		name: string;
		contact: string;
		selects: string[];
	} = { name: "", contact: "", selects: [] };
	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			contact: Yup.string().email().required(),
			selects: Yup.array().of(Yup.string()).min(1),
		}),
		onSubmit(values) {
			console.log(values);
			CreateRequest(values)
				.then((_value) => {
					formik.resetForm();
					removeUserSelect();
					mutate({
						query: { form: "success" },
					});
				})
				.catch((reason) => {
					console.error(reason);
					toast("Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами");
				})
				.finally(() => {
					formik.setSubmitting(false);
				});
		},
	});

	useEffect(() => {
		formik.setFieldValue(
			"selects",
			isHas("userSelect") ? (query.userSelect as string).split(",") : [],
		);
	}, [query.userSelect]);

	return (
		<main className={s.wrapper}>
			<Title value="Оставьте заявку и мы с вами свяжемся" />
			<form className={s.form} onSubmit={formik.handleSubmit}>
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
						name="contact"
						autoComplete="off"
						text="Почта или телефон"
						position="center"
						sizeInput="large"
						value={formik.values.contact}
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
					<div className={s.privacy}>
						<h2 className={s.privacy__text}>
							Отправляя форму, вы принимаете политику хранения и обработки{" "}
							<Link href={PRIVACY_LINK} className={s.privacy__link}>
								персональных данных
							</Link>
						</h2>
					</div>
					<Button
						value="Отправить"
						outline
						type="submit"
						disabled={formik.isSubmitting || !formik.isValid}
					/>
					{/*<Privacy
						text={
							<>
								Я соглашаюсь на хранение и обработку{" "}
								<Link href={PRIVACY_LINK}>персональных данных</Link>
							</>
						}
						checked={formik.values.privacy}
						onClick={() =>
							formik.setFieldValue("privacy", !formik.values.privacy)
						}
					/>*/}
				</div>
			</form>
		</main>
	);
}
