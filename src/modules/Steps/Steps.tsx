import Image from "next/image";
import { STEPS_INFO } from "../../constatnts/steps";
import s from "./Steps.module.scss";
import { Header, Item } from "./components";
import { Fragment } from "react";

export function Steps() {
	return (
		<div className={s.wrapper}>
			{STEPS_INFO.map((current, index) => (
				<div className={s.info} key={current.header}>
					<Header number={`${index + 1}`} title={current.header} slogan={current.slogan} />
					<div className={s.list}>
						{
							current.list.map((item, index) => {
								if (index === 0) {
									return (
										<Fragment key={item.id}>
											<Item key={item.title} index={index} title={item.title} text={item.text} />
											<Image className={s.list__img} src={current.image} alt="" width={450} height={450} />
										</Fragment>
									)
								} else {
									return (
										<Item key={item.title} index={index} title={item.title} text={item.text} />
									)
								}
							})
						}
					</div>
				</div>
			))}
		</div>
	);
}
