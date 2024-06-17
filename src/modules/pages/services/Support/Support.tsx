import React from "react";
import { SUPPORT_ITEMS } from "../../../../constatnts";
import { BlockLayout } from "../../../../layouts";

import { Card } from "./components";

import s from "./Support.module.scss";

export function Support() {
	const DESCRIPTION = [
		"Мы всегда рады продолжать сотрудничество и оказываем поддержку сайта на основе наших тарифов. Она включает в себя регулярное обновление контента, исправление ошибок и уязвимостей, резервное копирование данных.",
		"Поддержка сайта поможет улучшить его поисковую оптимизацию и привлечение трафика, что приведет к увеличению посещаемости и доходов. Она улучшит его безопасность, производительность и функциональность.",
	];

	return (
		<BlockLayout value="Поддержка" position="center" size='lg' tag="h2">
			<div className={s.container} id={"Поддержка"}>
				<div className={s.description}>
					{DESCRIPTION.map((i, index) => (
						<p style={{ margin: '0px' }} key={index} className={s.col}>
							{i}
						</p>
					))}
				</div>
				<div className={s.cards}>
					{SUPPORT_ITEMS.map((i) => {
						return (
							<Card
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
