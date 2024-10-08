import Image from "next/image";
import { useEffect, useState } from "react";

import { useRouterQuery } from "../../hooks";

import imageEye from "../../../public/imgs/eyes.png";

import s from "./Eyes.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export function Eyes() {
	const [isOpen, setIsOpen] = useState(false);

	const router = useRouter()
	const pathname = usePathname()

	const { isHas, query } = useRouterQuery();

	useEffect(() => {
		if (isHas("form") && query.form === "success") {
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

	const closeEyes = () => {
		setIsOpen(false);

		// Фикс за место mutate
		router.replace(pathname, undefined, { shallow: true });
	};

	return (
		<div
			onClick={() => closeEyes()}
			className={classNames(s.wrapper, {
				[s.wrapper__open]: isOpen,
			})}
		>
			<div className={s.info} onClick={(e) => e.stopPropagation()}>
				<div className={s.info__slogan}>
					<h2 className={s.info__text}>Смотрим вашу заявку!</h2>
					<h2 className={s.info__text}>
						Скоро мы напишем вам на почту и обговорим проект подробнее.
					</h2>
				</div>
				<button
					type={"button"}
					onClick={() => closeEyes()}
					className={s.info__button}
				>
					Хорошо
				</button>
				<Image className={s.info__img} src={imageEye} alt={"Глазки"} />
			</div>
		</div>
	);
}
