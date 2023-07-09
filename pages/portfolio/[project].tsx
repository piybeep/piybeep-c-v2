import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import {
	Form,
	OpenFormButton,
	OurProjectsBlock,
	ProjectPost,
} from "../../src/modules";

export default function PortfolioCase() {
	const router = useRouter();
	const { project } = router.query;
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Head>
				<title>Piybeep - {project}</title>
				<meta
					name="description"
					content={project ? `${project}` : "Наш проект"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<OpenFormButton />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: 200,
					marginBottom: 150,
				}}
			>
				<ProjectPost
					project={{
						id: "test-prjct",
						title: "Test project",
						customer: "Test customer",
						text: `**<u>Test</u> ~text~**

![HackPro](https://piybeep.com/static/media/mainPage.230dc995b12af34feef6.png)

ha*h****a***`,
						about_company:
							"Ренессанс предоставляет помощь компаниям с нехваткой сотрудников и облегчает ведение бизнеса. Ренессанс берет на себя неключевые функции компании и гарантирует их качественное выполнение. Благодаря этому - у компании остается больше ресурсов для налаживания бизнес-процессов и выполнения наиболее важных задач.",
						about_service:
							"Если вы турист, в сервисе вы можете заказать экскурсию практически любого места в городе. Гидом будет местный житель, который долгое время проживает на территории Москвы. Вы сможете выбрать сами кто вас будет сопровождать. Вы сможете посмотреть на Москву глазами человека, который прожил в этом городе всю свою жизнь.",
						access: "work",
						link: "https://piybeep.ru",
						task: "Создать сервис для сотрудников компании для аналитики и контроля работников. Внешний вид календаря, где ячейка каждого дня будет содержать в себе проекты (профессиональные области, где находятся работники), в которых находятся объекты (места, где они трудятся). Рядом с объектами отображаются часы - сколько времени отработано на конкретном месте.\nДля наглядности дополнить диаграммой, сортировкой и картой.",
						createdAt: new Date(),
						updatedAt: new Date(),
					}}
				/>
				<OurProjectsBlock title="другие проекты" subtitle="" />
			</div>
			<Form />
		</main>
	);
}

PortfolioCase.getLayout = (page: ReactNode) => <BaseLayout>{page}</BaseLayout>;
