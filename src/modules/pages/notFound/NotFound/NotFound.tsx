import { MENU_ITEMS, PAGES_LINK } from "../../../../constatnts";

import Link from "next/link";

import cat from "../../../../../public/animtate/cat.json";

import s from "./NotFound.module.scss";
import { LottieAnimation } from "react-lottie-tools";

export function NotFound() {
	return (
		<div className={s.wrapper}>
			<div className={s.info}>
				<h2 className={s.info__title}>Ошибка 404. Страница не найдена.</h2>
				<h3 className={s.info__slogan}>
					Похоже, тут ничего нет, кроме спящего котика Тсс.. не разбуди!
				</h3>
				<div className={s.info__list}>
					<Link href={PAGES_LINK.MAIN} className={s.info__link}>
						Главная
					</Link>
					{MENU_ITEMS.map((current) => (
						<Link
							key={current.link}
							href={current.link}
							className={s.info__link}
						>
							{current.display_name}
						</Link>
					))}
				</div>
			</div>
			{/* <Image className={s.img} src={cat} alt="Котик" /> */}
			<div className={s.img}>
				<LottieAnimation loop={true} animation={cat} />
			</div>
		</div>
	);
}
