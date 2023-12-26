import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import { BlockLayout } from "../../layouts";
import { useWindowSizes } from "../../hooks";
import { PAGES_LINK } from "../../constatnts";
import { Review } from "../../utils";

import s from "./Reviews.module.scss";
import { Slide } from "./components";
import { SwiperButtons } from "../../_components";

export function Reviews({
	reviews,
	count = 0,
}: {
	reviews: Review[];
	count: number;
}) {
	const { width } = useWindowSizes();
	const [groupCount, setGroupCount] = React.useState(1);

	React.useEffect(() => {
		setGroupCount(() => (width >= 1024 ? 2 : 1));
	}, [width]);

	return (
		<BlockLayout value="Отзывы">
			<Swiper
				className={s.slider}
				direction="horizontal"
				spaceBetween={40}
				slidesPerView={1}
				slidesPerGroup={1}
				wrapperClass={s.wrapper}
				preventClicks={false}
				slideClass={s.items}
				loop={false}
				allowTouchMove={false}
				breakpoints={{
					1024: {
						slidesPerGroup: 2,
						slidesPerView: 2,
					},
				}}
			>
				{reviews.map((item) => (
					<SwiperSlide key={item.id} className={s.slide}>
						<Slide
							id={item.id}
							text={item.text}
							href={PAGES_LINK.PORTFOLIO}
							author={item.author}
							project={item.project!}
						/>
					</SwiperSlide>
				))}
				<SwiperButtons groupCount={groupCount} count={count} />
			</Swiper>
		</BlockLayout>
	);
}
