import { LottieAnimation } from "react-lottie-tools";
import coder from "../../../public/animtate/coder.json";

import s from "./Spa.module.scss";

export function Spa() {
	return (
		<div className={s.wrapper}>
			<h2 className={s.header}>
				Мы разрабатываем{" "}
				<a
					className={s.header__link}
					target="_blank"
					rel="noreferrer"
					href="https://ru.wikipedia.org/wiki/Одностраничное_приложение"
				>
					Spa
				</a>
			</h2>
			<div className={s.info}>
				<div className={s.column}>
					<h2 className={s.title}>Что такое SPA?</h2>
					<p className={s.description}>
						SPA - single page applications (одностраничные приложения) - это
						самая современная технология разработки сайтов, которая позволяет
						сделать ресурс максимально быстрым, удобным и безопасным,
						оптимизировать для лучшей выдачи в поисковых системах
						(SEO-оптимизация) и выполнить поставленную заказчиком задачу.
					</p>
				</div>
				<div className={s.right}>
					<div className={s.column}>
						<h2 className={s.title}>А подробнее...</h2>
						<p className={s.description}>
							Хоть и называется “приложение” - на самом деле это обыкновенный
							сайт, каким вы привыкли его видеть. “Одностраничное” - потому что
							используется одна оболочка для загрузки информации, а весь
							последующий контент загружается динамически без перезагрузки,
							поэтому количество страниц может быть каким угодно.
						</p>
					</div>
				</div>
			</div>
			<div className={s.block}>
				<LottieAnimation loop={true} animation={coder} />
			</div>
		</div>
	);
}
