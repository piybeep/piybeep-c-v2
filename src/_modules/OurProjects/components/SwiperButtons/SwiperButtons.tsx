import Image from "next/image";
import React from "react";

import { SwiperButtonsProps } from "./SwiperButtons.types";
import { useSwiper } from "swiper/react";

import LeftLong from "../../../../../public/svg/Arrows/LeftLong.svg";
import RightLong from "../../../../../public/svg/Arrows/RightLong.svg";

import s from "./SwiperButtons.module.scss";

export function SwiperButtons({ groupCount, count }: SwiperButtonsProps) {
	const swiper = useSwiper()

	const [info, setInfo] = React.useState({
		activeSlide: 0,
		count,
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

	const infoText = Array(groupCount)
		.fill(0)
		.map((_, index) => groupCount - index + info.activeSlide)
		.reverse()
		.join(", ");

	return (
		<div className={s.buttonGroup}>
			<div className={s.image} onClick={() => swiper.slidePrev()}>
				<Image src={LeftLong} alt="left-arrow" />
			</div>
			<span>
				{infoText} из {info.count}
			</span>
			<div className={s.image} onClick={() => swiper.slideNext()}>
				<Image src={RightLong} alt="right-arrow" />
			</div>
		</div>
	);
}
