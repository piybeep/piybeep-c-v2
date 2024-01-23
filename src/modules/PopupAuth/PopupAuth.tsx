import { useRouterQuery } from "../../hooks";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import classNames from "classnames";

import { useFormik } from "formik";

import s from "./PopupAuth.module.scss";
import { Input, Title } from "../../components";

export function PopupAuth() {
	const [isOpen, setIsOpen] = useState(false);

	const { isHas, query, mutate } = useRouterQuery();

	useEffect(() => {
		if (isHas("form") && query.form === "auth") {
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

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().required(),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const handleCloseForm = () => {
		mutate({
			query: { form: null },
		});
	};

	return (
		<div
			onClick={() => handleCloseForm()}
			className={classNames(s.wrapper, {
				[s.wrapper__open]: isOpen,
			})}
		>
			<form
				onSubmit={formik.handleSubmit}
				onClick={(e) => e.stopPropagation()}
				className={s.form}
			>
				<div className={s.title}>
					<Title value="авторизация" />
				</div>
				<div className={s.inputs}>
					<Input
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						text="Почта"
						required
					/>
					<Input
						name="password"
						required
						onChange={formik.handleChange}
						value={formik.values.password}
						text="Пароль"
					/>
				</div>
				<div className={s.privacy}>
					Отправляя форму, вы принимаете{" "}
					<span className={s.privacy__link}>политику конфиденциальности</span> и{" "}
					<span className={s.privacy__link}>пользовательское соглашение</span>
				</div>

				<div className={s.buttons}>
					<button className={s.buttons__sumbit} type="submit">
						Войти
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
						className={s.buttons__close}
						type="button"
						onClick={() => handleCloseForm()}
					>
						Отмена
					</button>
				</div>
			</form>
		</div>
	);
}
