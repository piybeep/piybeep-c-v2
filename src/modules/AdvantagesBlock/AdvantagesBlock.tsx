import Image from "next/image";
import Link from "next/link";

import { ListItem } from "../../components";
import { BlockLayout } from "../../layouts";
import { ADVANTAGES_LIST } from "../../constatnts";

import s from "./AdvantagesBlock.module.scss";

{
	/* <Link href={"/studio#stack"}>
	Стек разработки{" "}
	<svg
		width="12"
		height="11"
		viewBox="0 0 12 11"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6.60227 11L5.72727 10.1364L9.32955 6.53409H0V5.28409H9.32955L5.72727 1.69318L6.60227 0.818182L11.6932 5.90909L6.60227 11Z"
			fill="#8E8E8E"
		/>
	</svg>
</Link>; */
}

export function AdvantagesBlock() {
	return (
		<div className={s.wrapper}>
			<BlockLayout
				value="Преимущества"
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

