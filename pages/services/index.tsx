import Head from "next/head";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Service } from "../../src/utils";
import { useServices } from "../../src/store";
import { Products, Support } from "../../src/_modules/pages/services";
import { Form } from "../../src/_modules";

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
		URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${i}`)),
	);

	if (services_response.status === "fulfilled") {
		useServices.setState(
			{
				list: services_response.value.data[0],
				total_count: services_response.value.data[1],
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
			<title>Услуги - piybeep.</title>
			<meta name="description" content="Наши услуги" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
