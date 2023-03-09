import { ComponentProps } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { ProjectCard } from "../../components";
import { BlockLayout } from "../../layouts";
import { PRODUCTS } from "../../constatnts";

import s from "./OurProjectsBlock.module.scss";

import LeftLong from "../../../public/svg/Arrows/LeftLong.svg";
import RightLong from "../../../public/svg/Arrows/RightLong.svg";

const ButtonGroup = (props: ComponentProps<"div">) => {
	const { slides, realIndex, slidePrev, slideNext } = useSwiper();
	const slidesToShow = slides.filter((slide) =>
			slide.classList.value.includes("swiper-slide-active")
		).length,
		currentSlide = realIndex;

	console.log(slidesToShow, currentSlide, props);

	const nums = Array(slidesToShow)
		.fill(1)
		.map((_, index) => slidesToShow - index + currentSlide)
		.reverse()
		.join(", ");

	return (
		<div {...props}>
			<Image src={LeftLong} onClick={() => slidePrev()} alt="left-arrow" />
			{nums} из {slides.length}
			<Image src={RightLong} onClick={() => slideNext()} alt="right-arrow" />
		</div>
	);
};

export function OurProjectsBlock() {
	return (
		<BlockLayout title="Наши проекты ." subtitle="Скоро больше проектов">
			<Swiper
				className={s.slider}
				direction="horizontal"
				spaceBetween={40}
				slidesPerView={3}
				slidesPerGroup={3}
				wrapperClass={s.wrapper}
				preventClicks={false}
				slideClass={s.items}
			>
				{PRODUCTS.map((item) => (
					<SwiperSlide key={item.id}>
						<ProjectCard title={item.title} description={item.description} />
					</SwiperSlide>
				))}
				<ButtonGroup className={s.buttonGroup} />
			</Swiper>
		</BlockLayout>
	);
}
