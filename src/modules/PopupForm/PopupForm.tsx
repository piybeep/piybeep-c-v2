import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouterQuery, useUserSelectForm } from "../../hooks";
import createRequest from "../../api/createRequest";

import classNames from "classnames";
import { useEffect, useState } from "react";

import { Service, toast } from "../../utils";

import { Input, Privacy, SelectItem, Title } from "../../components";

import s from "./PopupForm.module.scss";
import { useAptabase } from "@aptabase/react";

export function PopupForm({
	services,
}: {
	services: Service[];
	count: number;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const { trackEvent } = useAptabase();

	const { isHas, query, mutate } = useRouterQuery();

	useEffect(() => {
		if (isHas("form") && query.form === "request") {
			setIsOpen(true);
			trackEvent('open-popup-form')
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
		contact: string;
		selects: string[];
	} = { name: "", contact: "", selects: [] };

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			name: Yup.string().trim().min(1).required(),
			contact: Yup.string()
				.trim()
				.min(1)
				.required(),
			selects: Yup.array().of(Yup.string()),
		}),
		onSubmit: (values) => {
			if (!values.selects.length) {
				toast("Выберите услуги");
			} else {
				createRequest({ ...values, servicesList: services })
					.then((_data) => {
						formik.resetForm();
						removeUserSelect();
						mutate({
							query: { form: "success" },
						});
					})
					.catch(() => {
						toast(
							"Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами: 8 926 576-28-77, info@piybeep.com",
						);
					})
					.finally(() => {
						formik.setSubmitting(false);
					});
			}
		},
	});

	useEffect(() => {
		formik.setFieldValue(
			"selects",
			isHas("userSelect") ? (query.userSelect as string).split(",") : [],
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
				<Title value={"Оставьте заявку и мы с вами свяжемся"} size="md" />
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
						name="contact"
						required
						value={formik.values.contact}
						onChange={formik.handleChange}
					/>
				</div>
				<div className={s.products}>
					{services?.map((current) => (
						<SelectItem
							size='md'
							key={current.id}
							isActive={isHasUserSelect(current.name)}
							value={current.name}
							onClick={() => handleProduct(current.name)} />
					))}
				</div>

				<Privacy size="sm" />

				<div className={s.buttons}>
					<button
						type="submit"
						className={s.buttons__sumbit}
						disabled={!formik.isValid}
					>
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
								fill="#ECECEC"
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
