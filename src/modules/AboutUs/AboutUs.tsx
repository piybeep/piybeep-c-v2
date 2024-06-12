import Image from "next/image";

import { AboutUsProps } from "./AboutUs.types";

import aboutImgBiz from "../../../public/imgs/about-us-biz.png";
import aboutImgMarket from "../../../public/imgs/about-us-market.png";

import s from "./AboutUs.module.scss";
import classNames from "classnames";

export function AboutUs({
	title,
	description,
	imgPosition = "left",
}: AboutUsProps) {
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>{title}</h1>
			<div
				className={classNames(s.info, {
					[s.info__reverse]: imgPosition === "right",
				})}
			>
				<p className={s.info__slogan}>{description}</p>
				<Image
					width={1080}
					height={606}
					className={s.info__img}
					src={(imgPosition === "left" ? aboutImgMarket : aboutImgBiz).src}
					alt="Картинка"
					quality={85}
				/>
			</div>
		</div>
	);
}
