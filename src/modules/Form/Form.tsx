import classNames from "classnames";
import * as Yup from "yup";
import { useFormik } from "formik";

import { Button, Input, Title } from "../../components";

import { PRIVACY_LINK } from "../../constatnts";

import { useRouterQuery, useUserSelectForm } from "../../hooks";

import s from "./Form.module.scss";
import { useEffect } from "react";
import Link from "next/link";
import CreateRequest from "../../api/createRequest";
import { Service, toast } from "../../utils";
import { useApp } from "../../store";
import { useInView } from "react-intersection-observer";

export function Form({ services }: { services: Service[]; count: number }) {
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

	const toggleIsFooterFormInView = useApp(
		(state) => state.toggleIsFooterFormInView,
	);
	const { ref } = useInView({
		onChange: (inView) => {
			toggleIsFooterFormInView(inView);
		},
	});

	const initialValues: {
		name: string;
		contact: string;
		selects: string[];
	} = { name: "", contact: "", selects: [] };
	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			name: Yup.string().trim().min(1).required(),
			contact: Yup.string()
				.trim()
				.min(1) /*.email()*/
				.required(),
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
					toast(
						"Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами: 8 926 576-28-77, info@piybeep.com",
					);
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
		<main className={s.wrapper} ref={ref}>
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
					{services.map((current: any) => (
						<h2
							key={current.id}
							className={classNames(s.products__product, {
								[s.products__product_active]: isHasUserSelect(current.name),
							})}
							onClick={() => handleProduct(current.name)}
						>
							{current.name}
						</h2>
					))}
				</div>
				<div className={s.buttons}>
					<div className={s.privacy}>
						<h2 className={s.privacy__text}>
							{
								'Нажимая "Отправить", вы принимаете политику хранения и обработки '
							}
							<Link
								href={PRIVACY_LINK}
								target={"_blank"}
								className={s.privacy__link}
							>
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
				</div>
			</form>
		</main>
	);
}
