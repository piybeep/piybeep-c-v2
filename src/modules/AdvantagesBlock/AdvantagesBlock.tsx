import Image from "next/image";

import { ListItem } from "../../components";
import { BlockLayout } from "../../layouts";
import { ADVANTAGES_LIST } from "../../constatnts";

import s from "./AdvantagesBlock.module.scss";

export function AdvantagesBlock() {
	return (
		<div className={s.wrapper}>
			<BlockLayout
				title="Преимущества ."
				subtitle="Это все уже включено в разработку"
			>
				<div className={s.list}>
					{ADVANTAGES_LIST.map((item, index) => (
						<ListItem
							key={index}
							title={item.title}
							text={item.text}
							number={index + 1}
							titleIcon={
								<Image
									src={`/svg/${item.titleIcon}`}
									alt=""
									width={22}
									height={22}
								/>
							}
						/>
					))}
				</div>
			</BlockLayout>
		</div>
	);
}
