import React, { ComponentProps } from "react";
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

const NextButton = () => {
	const swiper = useSwiper();

	return (
		<Image
			src={RightLong}
			onClick={() => swiper.slideNext()}
			alt="right-arrow"
		/>
	);
};

const PrevButton = () => {
	const swiper = useSwiper();

	return (
		<Image src={LeftLong} onClick={() => swiper.slidePrev()} alt="left-arrow" />
	);
};

const NavInfo = ({ groupCount }: { groupCount: number }) => {
	const swiper = useSwiper();
	const [info, setInfo] = React.useState({
		activeSlide: 0,
		totalSlides: 0,
	});

	React.useEffect(() => {
		const updateActiveSlide = (data: any) => {
			setInfo((v) => ({
				...v,
				activeSlide: data.activeIndex,
			}));
		};

		if (swiper) {
			swiper.on("activeIndexChange", updateActiveSlide);
		}

		return () => {
			if (swiper) {
				swiper.off("activeIndexChange", updateActiveSlide);
			}
		};
	}, []);

	React.useEffect(() => {
		setInfo((v) => ({
			...v,
			totalSlides: swiper.slides.length,
		}));
	}, [swiper.slides]);

	const infoText = Array(groupCount)
		.fill(0)
		.map((_, index) => groupCount - index + info.activeSlide)
		.reverse()
		.join(", ");

	return (
		<span>
			{infoText} из {info.totalSlides}
		</span>
	);
};

export function OurProjectsBlock() {
	const [groupCount, setGroupCount] = React.useState(3);
	const [allowTouchMove, setAllowTouchMove] = React.useState(false);
	return (
		<BlockLayout title="Наши проекты ." subtitle="Скоро больше проектов">
			<Swiper
				className={s.slider}
				direction="horizontal"
				spaceBetween={40}
				slidesPerView={groupCount}
				slidesPerGroup={groupCount}
				wrapperClass={s.wrapper}
				preventClicks={false}
				slideClass={s.items}
				loop={false}
				allowTouchMove={allowTouchMove}
			>
				{PRODUCTS.map((item) => (
					<SwiperSlide key={item.id}>
						<ProjectCard title={item.title} description={item.description} />
					</SwiperSlide>
				))}
				<div className={s.buttonGroup}>
					<PrevButton />
					<NavInfo groupCount={groupCount} />
					<NextButton />
				</div>
			</Swiper>
		</BlockLayout>
	);
}
