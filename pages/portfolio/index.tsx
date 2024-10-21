import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Service } from "../../src/utils";
import { useProjects, useServices } from "../../src/store";
import { Projects } from "../../src/modules/pages/portfolio";
import { Form } from "../../src/modules";
import { ButtonOpenForm } from "../../src/components";
import qs from "qs";
import { ContactsType } from "../../src/types";

export default function Portfolio({
	projects,
	services
}: {
	projects: EntityState<Project> & EntityActions<Project>;
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
				<Projects projects={projects.list} />
			</div>
			<Form services={services.list} count={services.total_count} />
			<ButtonOpenForm />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["projects", "services", "contacts"];

	const [projects_response, services_response, contacts_response] = await Promise.allSettled(
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

	let contacts = []

	if (contacts_response.status === 'fulfilled') {
		contacts = contacts_response.value.data.data
	}

	return {
		props: {
			projects: useProjects.getState().error?.message ? JSON.stringify(useProjects.getState()) : useProjects.getState(),
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState(),
			contacts: contacts
		}
	};
};

Portfolio.getLayout = (
	page: ReactNode,
	{
		services,
		contacts
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		contacts: ContactsType[]
	}
) => (
	<BaseLayout services={services} contacts={contacts}>
		<Head>
			<title>Портфолио: проекты и работы под ключ качественно и в срок | Piybeep</title>
			<meta name="description" content="Портфолио Piybeep с креативными проектами под ключ: мы специализируемся на разработке уникальных сайтов, интернет-визиток, лендингов, интернет-магазинов и веб-приложений." />
			<link rel="icon" href="/favicon.ico" />
			<link rel="canonical" href="https://piybeep.com/portfolio" />
		</Head>
		{page}
	</BaseLayout>
);
