import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Service } from "../../src/utils";
import { useServices } from "../../src/store";
import { AboutUs, Contacts, Team } from "../../src/modules/pages/studio";
import { Form, Steps, Technologies } from "../../src/modules";
import { ButtonOpenForm } from "../../src/components";
import { Spa } from "../../src/modules/pages/studio/Spa";

export default function Studio({
	services
}: {
	services: EntityState<Service> & EntityActions<Service>;
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<div className="content-wrapper">
				<AboutUs />
				<Team />
				<Spa />
				<Steps />
				<Contacts />
				<Technologies />
			</div>
			<Form services={services.list} count={services.total_count} />
			<ButtonOpenForm />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["services"];

	const [services_response] = await Promise.allSettled(
		URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?sort=rank:asc`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
			}
		}))
	);

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

	return {
		props: {
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState()
		}
	};
};

Studio.getLayout = (
	page: ReactNode,
	{
		services
	}: {
		services: EntityState<Service> & EntityActions<Service>;
	}
) => (
	<BaseLayout services={services}>
		<Head>
			<title>Веб-студия – команда, процесс разработки, заказать сайт под ключ | Piybeep</title>
			<meta name="description" content="Узнайте о нашей команде: веб-разработчики, дизайнеры и аналитики. Мы предоставляем разработку сайтов, уникальный дизайн, мобильную адаптивность и техническую поддержку." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
