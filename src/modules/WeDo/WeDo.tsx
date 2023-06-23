import { BlockLayout } from "../../layouts";
import { WeDoProps } from "./WeDo.types";
import { WE_DO_LIST, WE_DO_LIST_BIZ } from "../../constatnts/weDo";

import s from "./WeDo.module.scss";
import classNames from "classnames";

export function WeDo({ biz = false, ...props }: WeDoProps) {
	return (
		<BlockLayout value="Мы делаем">
			<div
				className={classNames(s.list, {
					[s.biz]: biz,
				})}
			>
				{(biz ? WE_DO_LIST_BIZ : WE_DO_LIST).map((current, index) => {
					return (
						<div
							key={current.title}
							className={s.info}
							style={{ marginLeft: index * 8 + "%" }}
						>
							<h2 className={s.info__title}>{current.title}</h2>
							<h3 className={s.info__subtitle}>{current.text}</h3>
						</div>
					);
				})}
			</div>
		</BlockLayout>
	);
}
