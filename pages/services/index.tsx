import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Service } from "../../src/utils";
import { useServices } from "../../src/store";
import { Products, Support } from "../../src/modules/pages/services";
import { Form } from "../../src/modules";

export default function Services({
	services,
}: {
	services: EntityState<Service> & EntityActions<Service>;
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div className="content-wrapper">
				<Products
					list={services.list.filter((i) => i.type === "service")}
				/>
				<Support />
			</div>
			<Form services={services.list} count={services.total_count} />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["services"];

	const [services_response] = await Promise.allSettled(
		URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?populate=*`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
			}
		})),
	);

	if (services_response.status === "fulfilled") {
		useServices.setState(
			{
				list: services_response.value.data.data,
				total_count: services_response.value.data.meta.pagination.total,
			},
			true,
		);
	} else {
		useServices.setState({
			error: new Error(services_response.reason.response.data),
		});
	}

	return {
		props: {
			services: useServices.getState(),
		},
	};
};

Services.getLayout = (
	page: ReactNode,
	{
		services,
	}: {
		services: EntityState<Service> & EntityActions<Service>;
	},
) => (
	<BaseLayout services={services}>
		<Head>
			<title>Услуги веб-студии: разработка, дизайн и поддержка сайтов под ключ |Piybeep</title>
			<meta name="description" content="Мы предлагаем индивидуальный подход к созданию проектов под ключ. Наша команда ориентирована на создание адаптивных сайтов с оптимизацией для поисковых систем." />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
