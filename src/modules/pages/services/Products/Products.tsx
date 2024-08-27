import Link from "next/link";
import { BlockLayout } from "../../../../layouts";
import { PAGES_LINK } from "../../../../constatnts";
import { ProductType } from "../../../../utils";
import { ServicesList } from "../../../ServicesList";

export function Products({ list }: { list: ProductType[] }) {
	return (
		<BlockLayout
			size='lg'
			tag="h1"
			value="Сделаем для вас"
			subtitle={
				<Link href={[PAGES_LINK.STUDIO, "#stacks"].join("")}>
					Стек разработки
				</Link>
			}
			position="center"
		>
			<ServicesList list={list} />
		</BlockLayout>
	);
}
