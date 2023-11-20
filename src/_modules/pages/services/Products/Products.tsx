import Link from "next/link";
import Image from "next/image";

import { BlockLayout } from "../../../../layouts";

import RightArrow from "../../../../../public/svg/Arrows/RightGray.svg";
import { PAGES_LINK } from "../../../../constatnts";

import { Item } from "./components";

import s from "./Products.module.scss";

export function Products({ list }: { list: any[] }) {
	return (
		<BlockLayout
			value="Сделаем для вас"
			subtitle={
				<Link href={[PAGES_LINK.STUDIO, "#stacks"].join("")}>
					Стек разработки <Image src={RightArrow} alt="" />
				</Link>
			}
			position="center"
		>
			<div className={s.wrapper}>
				{list?.map((i, index) => (
					<Item
						className={s.item}
						key={i.id}
						number={index + 1}
						title={i.name}
						description={i.description}
						price={i.price}
						discount={i.discount}
					/>
				))}
			</div>
		</BlockLayout>
	);
}
