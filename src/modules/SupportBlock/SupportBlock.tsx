import React from "react";
import { SupportCard } from "../../components";
import { SUPPORT_ITEMS } from "../../constatnts";
import { BlockLayout } from "../../layouts";

import s from "./SupportBlock.module.scss";

export function SupportBlock() {
	const DESCRIPTION = [
		"Мы всегда рады продолжать сотрудничество и оказываем поддержку сайта на основе наших тарифов. Она включает в себя регулярное обновление контента, исправление ошибок и уязвимостей, резервное копирование данных.",
		"Поддержка сайта поможет улучшить его поисковую оптимизацию и привлечение трафика, что приведет к увеличению посещаемости и доходов. Она улучшит его безопасность, производительность и функциональность.",
	];

	return (
		<BlockLayout value="Поддержка" position="center">
			<div className={s.container} id={"Поддержка"}>
				<div className={s.description}>
					{DESCRIPTION.map((i, index) => (
						<div key={index} className={s.col}>
							{i}
						</div>
					))}
				</div>
				<div className={s.cards}>
					{SUPPORT_ITEMS.map((i) => {
						return (
							<SupportCard
								key={i.id}
								title={i.title}
								description={i.description}
								options={i.options}
								price={i.price}
							/>
						);
					})}
				</div>
			</div>
		</BlockLayout>
	);
}
