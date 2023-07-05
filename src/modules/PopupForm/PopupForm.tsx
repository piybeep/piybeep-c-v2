import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouterQuery, useUserSelectForm } from "../../hooks";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { Input, Title } from "../../components";
import { FORM__PRODUCTS } from "../../constatnts";
import { toast } from "../../utils";

import s from "./PopupForm.module.scss";

export function PopupForm() {
	const [isOpen, setIsOpen] = useState(false);

	const { isHas, query, mutate } = useRouterQuery();

	useEffect(() => {
		if (isHas("form") && query.form === "request") {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [isHas("form"), query.form]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	const handleCloseForm = () => {
		mutate({
			query: { form: null },
		});
	};

	const {
		add: addUserSelect,
		remove: removeUserSelect,
		isHas: isHasUserSelect,
	} = useUserSelectForm();

	const handleProduct = (current: string) => {
		isHasUserSelect(current)
			? removeUserSelect(current)
			: addUserSelect(current);
	};

	const initialValues: {
		name: string;
		email: string;
		products: string[];
	} = { name: "", email: "", products: [] };

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			products: Yup.array().of(Yup.string()),
		}),
		onSubmit: (values) => {
			// console.log(values);
			if (!values.products.length) {
				console.log("Продукты не заполнены");

				toast("Выберите услуги");
			} else {
				mutate({
					query: { form: "success" },
				});
			}
			// formik.setSubmitting(false);
			// formik.resetForm();
			// removeUserSelect();
		},
	});

	useEffect(() => {
		formik.setFieldValue(
			"products",
			isHas("userSelect") ? (query.userSelect as string).split(",") : []
		);
	}, [query.userSelect]);

	return (
		<div
			onClick={() => handleCloseForm()}
			className={classNames(s.wrapper, {
				[s.wrapper__open]: isOpen,
			})}
		>
			<form
				onSubmit={formik.handleSubmit}
				className={s.info}
				onClick={(e) => e.stopPropagation()}
			>
				<Title value={"Оставьте заявку и мы с вами свяжемся"} />
				<div className={s.inputs}>
					<Input
						text="Имя"
						name="name"
						required
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					<Input
						text="Почта или телефон"
						name="email"
						required
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

				<div className={s.privacy}>
					<h2 className={s.privacy__text}>
						Отправляя форму, вы принимаете политику хранения и обработки{" "}
						<span className={s.privacy__link}>персональных данных</span>
					</h2>
				</div>

				<div className={s.buttons}>
					<button type="submit" className={s.buttons__sumbit}>
						Отправить
						<svg
							className={s.buttons__svg}
							width="12"
							height="11"
							viewBox="0 0 12 11"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className={s.buttons__svg}
								d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
								fill="#8E8E8E"
							/>
						</svg>
					</button>
					<button
						type="button"
						onClick={() => handleCloseForm()}
						className={s.buttons__close}
					>
						Отмена
					</button>
				</div>
			</form>
		</div>
	);
}
