'use client'

import coder from '../../../../../public/animtate/coder.json'

import s from "./Spa.module.scss";
import { Header, Info } from "./components";
import { SPA_INFO } from "../../../../constatnts";
import { LottieAnimation } from 'react-lottie-tools';

export function Spa() {
	return (
		<div className={s.wrapper}>
			<Header title="Мы разрабатываем" text="Spa" />
			<div className={s.info}>
				{
					SPA_INFO?.map(item =>
						<Info
							key={item.title}
							title={item.title}
							text={item.text}
							pos={item?.pos === 'left' ? 'left' : 'right'} />
					)
				}
			</div>
			<div className={s.block}>
				<LottieAnimation loop={true} animation={coder} />
			</div>
		</div>
	);
}
