import Head from "next/head";
import { ReactNode } from "react";
import {
	AboutUs,
	AdvantagesBlock,
	Form,
	OpenFormButton,
	OurProjectsBlock,
	ProjectsPreview,
	Reviews,
	TextSlider,
	WeDo,
} from "../src/modules";
import { BaseLayout } from "../src/layouts";
import { TEXT_SLIDER } from "../src/constatnts";

export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				// rowGap: 100,
				// marginBottom: 90,
				// marginTop: 50,
			}}
		>
			<OpenFormButton />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: 200,
					marginBottom: 150,
				}}
			>
				<AboutUs
					title={"Продающие сайты для ваших маркетинговых целей."}
					description={`piybeep. разрабатывает продающие сайты для компаний, которые хотят
уверенно овладеть таким каналом продаж, либо улучшить его и сделать свой интернет-маркетинг
эффективнее`}
				/>
				<WeDo />
				<OurProjectsBlock />
				<AdvantagesBlock />
				<ProjectsPreview />
				<Reviews />
				<TextSlider slogans={TEXT_SLIDER} />
			</div>
			<Form />
		</main>
	);
}

Home.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Создаем продающие сайты. Веб-студия Piybeep. Для вас.</title>
			<meta
				name="description"
				content="Разработка и поддержка сайтов для стартапов и растущих компаний. Мы поможем вам сделать шаг к расширению вашего бизнеса - сделаем качественный сайт."
			/>
			<meta
				name="keywords"
				content="piybeep,
  пиубип,
  веб студия,
  студия веб дизайна,
  веб студия сайт,
  веб студия москва,
  студия веб разработки,
  веб студия создание сайтов,
  веб студия разработка сайтов,
  студия веб дизайна москва,
  создание сайта,
  создание сайта с нуля,
  создание веб сайта,
  создание сайтов москва,
  создание сайтов цена,
  создание интернет сайта,
  создание сайтов ключ,
  создание web сайта,
  создание сайта под ключ,
  создание дизайна сайта,
  создание сайта на заказ,
  создать web-сайт,
  создать макет сайта,
  заказать сайт,
  сделать сайт,
  сделать сайт компания,
  разработать сайт,
  разработать сайт компании,
  разработка сайтов,
  разработка веб сайта,
  разработка web сайтов,
  разработка сайта под ключ,
  разработка сайтов москва,
  заказать лендинг,
  заказать лендинг пейдж,
  заказать лендинг под ключ,
  заказать лендинг москва,
  заказать лендинг пейдж под ключ,
  создать и разместить сайт,
  продающий сайт,
  создать сайт агентство,
  создать сайт под ключ цена,
  создать корпоративный сайт"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
