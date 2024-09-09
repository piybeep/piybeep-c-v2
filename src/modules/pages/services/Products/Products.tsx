import Link from "next/link";
import { BlockLayout } from "../../../../layouts";
import { PAGES_LINK } from "../../../../constatnts";
import { ProductType } from "../../../../utils";
import { ServicesList } from "../../../ServicesList";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Products({ list }: { list: ProductType[] }) {
	const router = useRouter()
	useEffect(() => {
		const itemName = decodeURIComponent(router.asPath.split('?')[1])
		const currentItem = list.find(item => item.name === itemName)

		if (currentItem) {
			setTimeout(() => {
				document.getElementById(itemName)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}, 300);
		}
	}, [list, router])

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
