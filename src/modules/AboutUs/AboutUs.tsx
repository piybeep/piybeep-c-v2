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
			<h2 className={s.title}>{title}</h2>
			<div
				className={classNames(s.info, {
					[s.info__reverse]: imgPosition === "right",
				})}
			>
				<h3 className={s.info__slogan}>{description}</h3>
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
