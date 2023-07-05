import Image from "next/image";

import { AboutUsProps } from "./AboutUs.types";

import aboutImg from "../../../public/imgs/about-us.png";

import s from "./AboutUs.module.scss";

export function AboutUs({
	title,
	description,
	imgPosition = "left",
}: AboutUsProps) {
	return (
		<div className={s.wrapper}>
			<h2 className={s.title}>{title}</h2>
			<div
				className={s.info}
				style={{
					flexDirection: imgPosition === "left" ? "row" : "row-reverse",
				}}
			>
				<h3 className={s.info__slogan}>{description}</h3>
				<Image
					width={1080}
					height={606}
					className={s.info__img}
					src={aboutImg.src}
					alt="Картинка"
				/>
			</div>
		</div>
	);
}
