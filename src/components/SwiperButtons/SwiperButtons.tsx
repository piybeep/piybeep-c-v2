import Image from "next/image";
import React from "react";
import { useSwiper } from "swiper/react";

import s from "./SwiperButtons.module.scss";

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

const NavInfo = ({
	groupCount,
	totalSlides = 0,
}: {
	groupCount: number;
	totalSlides: number;
}) => {
	const swiper = useSwiper();
	const [info, setInfo] = React.useState({
		activeSlide: 0,
		totalSlides,
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
	}, [swiper]);

	// React.useEffect(() => {
	// 	setInfo((v) => ({
	// 		...v,
	// 		totalSlides: swiper.slides.length,
	// 	}));
	// }, [swiper.slides]);

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

export function SwiperButtons({
	groupCount,
	count,
}: {
	groupCount: number;
	count: number;
}) {
	return (
		<div className={s.buttonGroup}>
			<PrevButton />
			<NavInfo groupCount={groupCount} totalSlides={count} />
			<NextButton />
		</div>
	);
}
