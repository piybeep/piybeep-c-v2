import Link from "next/link";
import Image from "next/image";

import { BlockLayout } from "../../layouts";
import { ProductListItem } from "../../components";
import { PRODUCTS } from "../../constatnts";

import s from "./ProductsList.module.scss";

import RightArrow from "../../../public/svg/Arrows/RightGray.svg";

export function ProductsList() {
	return (
		<BlockLayout
			value="Сделаем для вас"
			subtitle={
				<Link href={"/portfolio"}>
					Стек разработки <Image src={RightArrow} alt="" />
				</Link>
			}
			position="center"
		>
			<div className={s.wrapper}>
				{PRODUCTS.map((i, index) => (
					<ProductListItem
						className={s.item}
						key={i.id}
						number={index + 1}
						title={i.title}
						description={i.description}
						price={i.price}
						discount={i.discount}
					/>
				))}
				<ProductListItem
					className={s.item}
					number={"0#"}
					title={"No-code решение"}
					description={
						"Lorem ipsum dolor sit amet consectetur. Accumsan egestas gravida at mauris. Quis arcu urna gravida nisl sem aliquet est. Porttitor sed duis maecenas eu fusce egestas metus. Curabitur tortor quis metus id nulla id risus sed. Commodo aliquam faucibus sit mauris ut nisl. Ut neque ut urna urna facilisi. Tempor in eu justo eu pulvinar suscipit elit. Gravida eget bibendum in senectus volutpat pharetra in auctor. Suspendisse pretium tempor id."
					}
					status="Скоро откроектся"
				/>
			</div>
		</BlockLayout>
	);
}

