import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../src/layouts";
import { TEXT_SLIDER } from "../src/constatnts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Review, Service } from "../src/utils";
import { useProjects, useReviews, useServices } from "../src/store";
import { AboutUs, Form, OurProjects, Reviews, Steps, Technologies, TextSlider, WeDo } from "../src/modules";
import { Advantages, ProjectsPreview } from "../src/modules/pages/main";
import { ButtonOpenForm } from "../src/components";

export default function Home({
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
					title={"Продающие сайты для ваших маркетинговых целей."}
					description={`piybeep. разрабатывает продающие сайты для компаний, которые хотят
				уверенно овладеть таким каналом продаж, либо улучшить его и сделать свой интернет-маркетинг
				эффективнее.`}
				/>
				<WeDo />
				<OurProjects projects={projects.list} count={projects.total_count} />
				<Advantages />
				<Steps />
				<ProjectsPreview projects={projects.list.slice(0, 12)} />
				<Technologies />
				<Reviews reviews={reviews.list} count={reviews.total_count} />
				<TextSlider slogans={TEXT_SLIDER} />
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

	return {
		props: {
			projects: useProjects.getState(),
			services: useServices.getState(),
			reviews: useReviews.getState()
		}
	};
};

Home.getLayout = (
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
			<title>
				Веб-студия разработки, дизайна, продвижения как для маркетинга, так и для бизнеса. Услуги по разработке и созданию сайтов под ключ качественно и в срок | Piybeep
			</title>
			<meta
				name="description"
				content="Веб-студия разработки, дизайна и продвижения для бизнеса и маркетинга | Создание сайтов под ключ качественно и в срок | Piybeep"
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
