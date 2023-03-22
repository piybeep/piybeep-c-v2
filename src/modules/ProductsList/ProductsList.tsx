import Link from "next/link";
import Image from "next/image";

import { BlockLayout } from "../../layouts";

import RightArrow from "../../../public/svg/Arrows/RightGray.svg";
import { ProductListItem } from "../../components";

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
			<ProductListItem
				number={1}
				title="Сайт-визитка"
				description="Сайт-визитка - это небольшой сайт, содержащий основную информацию о бренде: список услуг, контакты, описание компании. Такой сайт является отличным инструментом для представления бизнеса в интернете и может быть использован для привлечения новых клиентов и партнеров. 
Такой сайт имеет самый скромный набор функций, поэтому подходит тем, кто только начинает выходить из оффлайна в онлайн."
				price={39900}
				discount={29900}
			/>
			<ProductListItem
				number={2}
				title="Лендинг"
				description="Лендинг - это тип сайта, предназначенный для конвертации посетителей в потенциальных клиентов. Он обычно состоит из одной страницы, на которой расположен контент, направленный на продажу товаров или услуг.
Благодаря своей простоте и концентрации на одной цели, лендинги часто являются более эффективными, чем полноценные сайты. Лендинги части используются в рекламных целях."
				price={59900}
				discount={43900}
			/>
		</BlockLayout>
	);
}
