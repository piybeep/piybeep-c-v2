import { BlockLayout } from "../../layouts";

import { Item } from "./components";

import s from "./WeDo.module.scss";
import { WedoTypes } from "../../types";

export function WeDo({ list }: { list?: WedoTypes[] }) {
	if (!list) {
		// Заглушку если надо
		return <></>
	}

	return (
		<BlockLayout value="Мы делаем">
			<div
				className={s.list}
			>
				{list.slice(0, 7).map((current, index) => {
					return (
						<Item
							key={current.title}
							name={current.title}
							href={'services'}
							index={index}
							title={current.title}
							text={current.text} />
					);
				})}
			</div>
		</BlockLayout>
	);
}
