import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../src/layouts";
import { TEXT_SLIDER } from "../src/constatnts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Review, Service } from "../src/utils";
import { useProjects, useReviews, useServices } from "../src/store";
import { Form, IncludeDevelopment, OurProjects, Preview, Reviews, Steps, Technologies, TextSlider, WeDo } from "../src/modules";
import { ProjectsPreview } from "../src/modules/pages/main";
import { ButtonOpenForm } from "../src/components";
import qs from "qs";
import { ContactsType, IncludesDevelopmentTypes } from "../src/types";

export default function Home({
	projects,
	services,
	reviews,
	includesDevelopment
}: {
	projects: EntityState<Project> & EntityActions<Project>;
	services: EntityState<Service> & EntityActions<Service>;
	reviews: EntityState<Review> & EntityActions<Review>;
	includesDevelopment: IncludesDevelopmentTypes[]
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<div className="content-wrapper">
				<Preview text={"разрабатывает продающие сайты для компаний"} description={"которые хотят сделать интернет-маркетинг эффективнее"} />
				<WeDo />
				<OurProjects projects={projects.list} count={projects.total_count} />
				<IncludeDevelopment list={includesDevelopment} title={'включено в разработку'} />
				<Steps />
				<ProjectsPreview projects={projects?.list?.slice(0, 12)} />
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
	const URIs = ["projects", "services", "reviews", "contacts", "includes-in-the-developments"];

	const [projects_response, services_response, reviews_response, contacts_response, includesDevelopment_response] =
		await Promise.allSettled(
			URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?${qs.stringify(Object.assign({ populate: '*' },
				(i != "contacts" && i != "includes-in-the-developments") &&
				{
					sort: 'rank:asc'
				}
			))
				}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
				}
			}))
		);

	if (projects_response.status === "fulfilled") {
		useProjects.setState(
			{
				list: projects_response.value.data.data,
				total_count: projects_response.value.data.meta.pagination.total
			},
			true
		);
	} else {
		useProjects.setState({
			error: new Error(projects_response.reason.response.data.error.message)
		});
	}

	if (reviews_response.status === "fulfilled") {
		useReviews.setState(
			{
				list: reviews_response.value.data.data,
				total_count: reviews_response.value.data.meta.pagination.total
			},
			true
		);
	} else {
		useReviews.setState({
			error: new Error(reviews_response.reason.response.data.error.message)
		});
	}

	if (services_response.status === "fulfilled") {
		useServices.setState(
			{
				list: services_response.value.data.data,
				total_count: services_response.value.data.meta.pagination.total
			},
			true
		);
	} else {
		useServices.setState({
			error: new Error(services_response.reason.response.data.error.message)
		});
	}

	let contacts = []

	if (contacts_response.status === 'fulfilled') {
		contacts = contacts_response.value.data.data
	}

	let includesDevelopment = []

	if (includesDevelopment_response.status === 'fulfilled') {
		includesDevelopment = includesDevelopment_response.value.data.data
	}

	return {
		props: {
			projects: useProjects.getState().error?.message ? JSON.stringify(useProjects.getState()) : useProjects.getState(),
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState(),
			reviews: useReviews.getState().error?.message ? JSON.stringify(useReviews.getState()) : useReviews.getState(),
			contacts: contacts,
			includesDevelopment
		}
	};
};

Home.getLayout = (
	page: ReactNode,
	{
		services,
		reviews,
		contacts,
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		reviews: EntityState<Review> & EntityActions<Review>;
		contacts: ContactsType[],
	}
) => (
	<BaseLayout reviews={reviews} services={services} contacts={contacts}>
		<Head>
			<title>
				Веб-студия разработки, дизайна и продвижения. Разработка сайтов под ключ |Piybeep
			</title>
			<meta
				name="description"
				content="Мы предлагаем услуги SEO-оптимизации, интеграции CMS систем, технической поддержки, создания адаптивных сайтов для успешного интернет-маркетинга и продаж."
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
