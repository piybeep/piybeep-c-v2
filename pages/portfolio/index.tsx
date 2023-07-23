import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { Form, OpenFormButton, OurProjectsPortfolio } from "../../src/modules";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Service } from "../../src/utils";
import { useProjects, useServices } from "../../src/store";

export default function Portfolio({
	projects,
	services,
}: {
	projects: EntityState<Project> & EntityActions<Project>;
	services: EntityState<Service> & EntityActions<Service>;
}) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<OpenFormButton />
			<div className="content-wrapper">
				<OurProjectsPortfolio
					projects={projects.list}
					count={projects.total_count}
				/>
			</div>
			<Form services={services.list} count={services.total_count} />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["projects", "services"];

	const [projects_response, services_response] = await Promise.allSettled(
		URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${i}`)),
	);

	if (projects_response.status === "fulfilled") {
		useProjects.setState(
			{
				list: projects_response.value.data[0],
				total_count: projects_response.value.data[1],
			},
			true,
		);
	} else {
		useProjects.setState({
			error: new Error(projects_response.reason.response.data),
		});
	}

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
			projects: useProjects.getState(),
			services: useServices.getState(),
		},
	};
};

Portfolio.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Портфолио - piybeep.</title>
			<meta name="description" content="Наше портфолио" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
