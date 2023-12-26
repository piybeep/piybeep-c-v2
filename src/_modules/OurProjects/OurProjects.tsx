import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProjectCard, SwiperButtons } from "../../_components";
// import { SwiperButtons } from "../../components";

import { Project } from "../../utils";
import { BlockLayout } from "../../layouts";
import { useWindowSizes } from "../../hooks";

import s from "./OurProjects.module.scss";

export function OurProjects({
	title = "Наши проекты",
	subtitle = "Скоро больше",
	projects,
	count = 0,
}: {
	title?: string;
	subtitle?: string;
	projects: Project[];
	count?: number;
}) {
	const { width } = useWindowSizes();
	const [groupCount, setGroupCount] = React.useState(1);

	React.useEffect(() => {
		setGroupCount(() => (width >= 1024 ? 3 : width >= 768 ? 2 : width >= 360 ? 2 : 1));
	}, [width]);

	return (
		<BlockLayout value={title} subtitle={subtitle}>
			<Swiper
				className={s.slider}
				direction="horizontal"
				spaceBetween={20}
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
						spaceBetween: 40,
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
						spaceBetween: 20,
					},
				}}
			>
				{projects.map((item) => (
					<SwiperSlide key={item.id}>
						<ProjectCard project={item} />
					</SwiperSlide>
				))}
				<SwiperButtons
					groupCount={groupCount}
					count={count}
				/>
			</Swiper>
		</BlockLayout>
	);
}
