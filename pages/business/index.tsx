import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { TEXT_SLIDER_BIZ } from "../../src/constatnts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Review, Service } from "../../src/utils";
import { useProjects, useReviews, useServices } from "../../src/store";
import { AboutUs, Form, OurProjects, Reviews, Steps, Technologies, TextSlider, WeDo } from "../../src/modules";
import { Automation, Text } from "../../src/modules/pages/business";
import { ButtonOpenForm } from "../../src/components";

export default function BusinessPage({
	projects,
	services,
	reviews
}: {
	projects: EntityState<Project> & EntityActions<Project>;
	services: EntityState<Service> & EntityActions<Service>;
	reviews: EntityState<Review> & EntityActions<Review>;
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<div className="content-wrapper">
				<AboutUs
					title={"Уникальные решения для бизнеса.\nСложные и логические."}
					description={`piybeep. разрабатывает уникальные решения (веб-сервисы) для автоматизации бизнес-процессов, которые сделают работу команды эффективнее и сократят время на выполнение рутинных задач.`}
					imgPosition="right"
				/>
				<WeDo biz />
				<Automation />
				<Steps />
				<OurProjects projects={projects.list} count={projects.total_count} />
				<Technologies />
				<Text />
				<Reviews reviews={reviews.list} count={reviews.total_count} />
				<TextSlider slogans={TEXT_SLIDER_BIZ} />
			</div>
			<Form services={services.list} count={services.total_count} />
			<ButtonOpenForm />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["projects", "services", "reviews"];

	const [projects_response, services_response, reviews_response] =
		await Promise.allSettled(
			URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${i}`))
		);

	if (projects_response.status === "fulfilled") {
		useProjects.setState(
			{
				list: projects_response.value.data[0],
				total_count: projects_response.value.data[1]
			},
			true
		);
	} else {
		useProjects.setState({
			error: new Error(projects_response.reason.response.data)
		});
	}

	if (services_response.status === "fulfilled") {
		useServices.setState(
			{
				list: services_response.value.data[0],
				total_count: services_response.value.data[1]
			},
			true
		);
	} else {
		useServices.setState({
			error: new Error(services_response.reason.response.data)
		});
	}

	if (reviews_response.status === "fulfilled") {
		useReviews.setState(
			{
				list: reviews_response.value.data[0],
				total_count: reviews_response.value.data[1]
			},
			true
		);
	} else {
		useReviews.setState({
			error: new Error(reviews_response.reason.response.data)
		});
	}

	return {
		props: {
			projects: useProjects.getState(),
			services: useServices.getState(),
			reviews: useReviews.getState()
		}
	};
};

BusinessPage.getLayout = (
	page: ReactNode,
	{
		services,
		reviews
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		reviews: EntityState<Review> & EntityActions<Review>;
	}
) => (
	<BaseLayout reviews={reviews} services={services}>
		<Head>
			<title>Профессиональная разработка сайтов для вашего бизнеса: предлагаем высококачественные услуги по созданию сайтов | Piybeep</title>
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
