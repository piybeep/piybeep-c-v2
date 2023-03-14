import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { ProjectCard } from "../../components";
import { BlockLayout } from "../../layouts";
import { PRODUCTS } from "../../constatnts";
import { useWindowSizes } from "../../hooks";

import s from "./OurProjectsBlock.module.scss";

import LeftLong from "../../../public/svg/Arrows/LeftLong.svg";
import RightLong from "../../../public/svg/Arrows/RightLong.svg";

const NextButton = () => {
	const swiper = useSwiper();
	return (
		<div className={s.image} onClick={() => swiper.slideNext()}>
			<Image src={RightLong} alt="right-arrow" />
		</div>
	);
};

const PrevButton = () => {
	const swiper = useSwiper();
	return (
		<div className={s.image} onClick={() => swiper.slidePrev()}>
			<Image src={LeftLong} alt="left-arrow" />
		</div>
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
	const { width } = useWindowSizes();
	const [groupCount, setGroupCount] = React.useState(1);

	React.useEffect(() => {
		setGroupCount(() => (width > 1024 ? 3 : width > 768 ? 2 : 1));
	}, [width]);

	return (
		<BlockLayout title="Наши проекты ." subtitle="Скоро больше проектов">
			<Swiper
				className={s.slider}
				direction="horizontal"
				spaceBetween={40}
				slidesPerView={1.4}
				slidesPerGroup={1}
				wrapperClass={s.wrapper}
				preventClicks={false}
				slideClass={s.items}
				loop={false}
				allowTouchMove={true}
				breakpoints={{
					1024: {
						allowTouchMove: false,
						slidesPerGroup: 3,
						slidesPerView: 3,
					},
					768: {
						slidesPerGroup: 2,
						slidesPerView: 2.5,
					},
					430: {
						slidesPerView: 1.8,
					},
					360: {
						slidesPerView: 1.6,
					},
				}}
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
