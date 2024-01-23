import { LottieAnimation } from "react-lottie-tools";
import coder from '../../../../../public/animtate/coder.json'

import s from "./Spa.module.scss";
import { Header, Info } from "./components";

export function Spa() {
	return (
		<div className={s.wrapper}>
			<Header title="Мы разрабатываем" text="Spa" />
			<div className={s.info}>
				<Info
					title="Что такое SPA?"
					text="SPA - single page applications (одностраничные приложения) - это
						самая современная технология разработки сайтов, которая позволяет
						сделать ресурс максимально быстрым, удобным и безопасным,
						оптимизировать для лучшей выдачи в поисковых системах
						(SEO-оптимизация) и выполнить поставленную заказчиком задачу."
				/>
				<Info
					pos='right'
					title="А подробнее..."
					text="Хоть и называется “приложение” - на самом деле это обыкновенный
						сайт, каким вы привыкли его видеть. “Одностраничное” - потому что
						используется одна оболочка для загрузки информации, а весь
						последующий контент загружается динамически без перезагрузки,
						поэтому количество страниц может быть каким угодно." />
			</div>
			<div className={s.block}>
				<LottieAnimation loop={true} animation={coder} />
			</div>
		</div>
	);
}
