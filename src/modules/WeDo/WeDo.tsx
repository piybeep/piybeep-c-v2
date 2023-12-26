import { BlockLayout } from "../../layouts";
import { WeDoProps } from "./WeDo.types";
import { WE_DO_LIST, WE_DO_LIST_BIZ } from "../../constatnts/weDo";
import { PAGES_LINK } from "../../constatnts";

import { Item } from "./components";

import s from "./WeDo.module.scss";

export function WeDo({ biz = false }: WeDoProps) {
	return (
		<BlockLayout value="Мы делаем">
			<div
				className={s.list}
			>
				{(biz ? WE_DO_LIST_BIZ : WE_DO_LIST).map((current, index) => {
					return (
						<Item
							key={current.title}
							name={current.name}
							href={PAGES_LINK.SERVICES}
							index={index}
							title={current.title}
							text={current.text} />
					);
				})}
			</div>
		</BlockLayout>
	);
}
