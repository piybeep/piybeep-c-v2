import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Link from "next/link";

import { BlockLayout } from "../../layouts";
import { useWindowSizes } from "../../hooks";

import s from "./Reviews.module.scss";
import { SwiperButtons } from "../../components";
import { PAGES_LINK } from "../../constatnts";
import { Review } from "../../utils";

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
				{reviews.map((i) => (
					<SwiperSlide key={i.id} className={s.slide}>
						<div className={s.text}>{i.text}</div>
						<div className={s.info}>
							{i.author}
							{i.project && " - "}
							{i.project && (
								<Link href={[PAGES_LINK.PORTFOLIO, i.project?.id].join("/")}>
									{i.project?.title}
								</Link>
							)}
						</div>
					</SwiperSlide>
				))}
				<SwiperButtons groupCount={groupCount} count={count} />
			</Swiper>
		</BlockLayout>
	);
}
