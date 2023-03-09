import Image from "next/image";
import Carousel from "react-multi-carousel";

import { ProjectCard } from "../../components";
import { BlockLayout } from "../../layouts";

import s from "./OurProjectsBlock.module.scss";

import LeftLong from "../../../public/svg/Arrows/LeftLong.svg";
import RightLong from "../../../public/svg/Arrows/RightLong.svg";

const ButtonGroup = ({
	next,
	previous,
	goToSlide,
	...rest
}: Record<any, any>) => {
	const {
		carouselState: { currentSlide, totalItems, slidesToShow },
	} = rest;
	const nums = Array(slidesToShow)
		.fill(1)
		.map((_, index) => slidesToShow - index + currentSlide)
		.reverse()
		.join(", ");
	return (
		<div className={s.buttonGroup}>
			<Image src={LeftLong} onClick={() => previous()} alt="left-arrow" />
			{nums} из {totalItems}
			<Image src={RightLong} onClick={() => next()} alt="right-arrow" />
		</div>
	);
};

export function OurProjectsBlock() {
	const DATA = [
		{
			id: 1,
			title: "Сервисный центр «iBolitt»",
			description:
				"Функциональный лендинг для потенциальных клиентов сервисного центра.",
		},
		{
			id: 2,
			title: "Группа компаний «Ренессанс»",
			description:
				"Веб-сервис для аналитики и учета рабочего времени сотрудников.",
		},
		{
			id: 3,
			title: "Организация «Volunvice»",
			description:
				"Создать сервис по размещению и поиску задач для волонтеров.",
		},
		{
			id: 4,
			title: "Skateshop",
			description: "Дизайн мобильного приложения скейтшопа",
		},
		{
			id: 5,
			title: "Hackathon PRO. Поколение IT",
			description: "Лендинг для регистрации на хакатон",
		},
		{
			id: 6,
			title: "Колледж связи №54",
			description: "Веб-сервис создания ведомостей",
		},
		{
			id: 7,
			title: "ZIN-shop",
			description: "Лендинг для продвижение бренда косметики",
		},
		{
			id: 8,
			title: "Loctravel",
			description: "Сервис взаимных путешествий",
		},
		{
			id: 9,
			title: "Gate 2025",
			description:
				"Веб-сервис для аналитики и учета рабочего времени сотрудников.",
		},
	];
	return (
		<BlockLayout title="Наши проекты ." subtitle="Скоро больше проектов">
			<Carousel
				responsive={{
					desktop: {
						breakpoint: { max: 5000, min: 1550 },
						items: 3,
						slidesToSlide: 3,
					},
					laptop: {
						breakpoint: { max: 1550, min: 1024 },
						items: 3,
						slidesToSlide: 3,
					},
					tablet: {
						breakpoint: { max: 1024, min: 768 },
						items: 2,
						slidesToSlide: 2,
					},
					mobile: {
						breakpoint: { max: 768, min: 0 },
						items: 1,
						slidesToSlide: 1,
					},
				}}
				customTransition={"transform 400ms ease-in-out"}
				arrows={false}
				showDots={false}
				draggable={false}
				infinite={false}
				keyBoardControl={false}
				ssr={true}
				itemClass={s.items}
				sliderClass={s.slider}
				renderButtonGroupOutside={false}
				slidesToSlide={3}
				containerClass="container-padding-bottom"
				customButtonGroup={<ButtonGroup />}
			>
				{DATA.map((item) => (
					<ProjectCard
						key={item.id}
						title={item.title}
						description={item.description}
					/>
				))}
			</Carousel>
		</BlockLayout>
	);
}
