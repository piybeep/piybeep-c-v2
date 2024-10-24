import React from "react";
import { SUPPORT_ITEMS } from "../../../../constatnts";
import { BlockLayout } from "../../../../layouts";

import { Card } from "./components";

import s from "./Support.module.scss";
import { ISupport } from "../../../../types";

export function Support({ supports }: { supports: ISupport[] }) {

	if (!supports) {
		return <></>
	}

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
					{supports.map((support) => {
						return (
							<Card
								key={support.id}
								title={support.title}
								description={support.description}
								options={support.support_lists}
								price={support.price}
							/>
						);
					})}
				</div>
			</div>
		</BlockLayout>
	);
}
