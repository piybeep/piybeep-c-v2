import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { TEXT_SLIDER_BIZ } from "../../src/constatnts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Review, Service } from "../../src/utils";
import { useProjects, useReviews, useServices } from "../../src/store";
import { AboutUs, Form, OurProjects, Preview, Reviews, Steps, Technologies, TextSlider, WeDo } from "../../src/modules";
import { Automation, Slider, Text } from "../../src/modules/pages/business";
import { ButtonOpenForm } from "../../src/components";
import qs from "qs";
import { ContactsType, SliderDataType, WedoTypes } from "../../src/types";

export default function BusinessPage({
	projects,
	services,
	reviews,
	sliderData,
	wedo_response
}: {
	projects: EntityState<Project> & EntityActions<Project>;
	services: EntityState<Service> & EntityActions<Service>;
	reviews: EntityState<Review> & EntityActions<Review>;
	sliderData: SliderDataType[],
	wedo_response: WedoTypes[]
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<div className="content-wrapper">
				<Preview isBusiness text={"разрабатывает уникальные решения для бизнеса"} description={"сложные и логические"} />
				{/*
				<AboutUs
					title={"Уникальные решения для бизнеса.\nСложные и логические."}
					description={`piybeep. разрабатывает уникальные решения (веб-сервисы) для автоматизации бизнес-процессов, которые сделают работу команды эффективнее и сократят время на выполнение рутинных задач.`}
					imgPosition="right"
				/> 
				*/}

				<WeDo list={wedo_response?.filter(i => i.type === 'business' || i.type === 'both')} />
				<Automation />
				<Steps />
				<OurProjects projects={projects.list} count={projects.total_count} />
				<Technologies />
				<Slider data={sliderData} />
				<Reviews reviews={reviews.list} count={reviews.total_count} />
				<TextSlider slogans={TEXT_SLIDER_BIZ} />
			</div>
			<Form services={services.list} count={services.total_count} />
			<ButtonOpenForm />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["projects", "services", "reviews", "contacts", "slider-businesses"];

	const [projects_response, services_response, reviews_response, contacts_response, slider_response] =
		await Promise.allSettled(
			URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?${qs.stringify(Object.assign({ populate: '*' },
				i != "contacts" &&
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
			error: new Error(projects_response.reason.response?.data?.error?.message ?? 'Произошла ошибка')
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
			error: new Error(services_response.reason.response?.data?.error?.message ?? 'Произошла ошибка')
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
			error: new Error(reviews_response.reason.response?.data?.error?.message ?? 'Произошла ошибка')
		});
	}

	let contacts = []

	if (contacts_response.status === 'fulfilled') {
		contacts = contacts_response.value.data.data
	}

	let sliderData = []

	if (slider_response.status === 'fulfilled') {
		sliderData = slider_response.value.data.data
	}

	const wedo_response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/wedos?${qs.stringify(Object.assign({ populate: '*' },
		{
			sort: 'rank:asc'
		}
	))
		}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
		}
	})
		.then(res => res.data.data)
		.catch(error => console.error(error))

	return {
		props: {
			projects: useProjects.getState().error?.message ? JSON.stringify(useProjects.getState()) : useProjects.getState(),
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState(),
			reviews: useReviews.getState().error?.message ? JSON.stringify(useReviews.getState()) : useReviews.getState(),
			contacts: contacts,
			sliderData: sliderData,
			wedo_response: wedo_response ?? null
		}
	};
};

BusinessPage.getLayout = (
	page: ReactNode,
	{
		services,
		reviews,
		contacts
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		reviews: EntityState<Review> & EntityActions<Review>;
		contacts: ContactsType[]
	}
) => (
	<BaseLayout reviews={reviews} services={services} contacts={contacts}>
		<Head>
			<title>Разработка веб-приложений для бизнеса. Автоматизация бизнес-процессов | Piybeep</title>
			<link rel="canonical" href="https://piybeep.com/business" />
			<meta
				name="description"
				content="Мы предлагаем разработку приложений для бизнеса и автоматизацию процессов внутри компании. Улучшите эффективность и продуктивность с нашими инновационными решениями."
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
