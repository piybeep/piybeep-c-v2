import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Service } from "../../src/utils";
import { useProjects, useServices } from "../../src/store";
import { ButtonBack, ButtonOpenForm } from "../../src/components";
import { Form, OurProjects, ProjectPost } from "../../src/modules";

export default function PortfolioCase({
																				project,
																				projects,
																				services
																			}: {
	project: Project | { error: any };
	projects: EntityState<Project> & EntityActions<Project>;
	services: EntityState<Service> & EntityActions<Service>;
}) {
	if ("error" in project) {
		return (
			<main
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<Head>
					<title>Проект не найден - piybeep.</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<ButtonBack />
				<div className="content-wrapper">
					<p
						style={{
							fontFamily: "\"Inter\", sans-serif",
							textAlign: "center",
							padding: 12
						}}
					>
						Произошла ошибка. Возможно запрашиваемый проект не существует или был удалён
					</p>
					<OurProjects
						projects={projects.list}
						title="другие проекты"
						count={projects.total_count} />
				</div>
				<Form services={services.list} count={services.total_count} />
				<ButtonOpenForm />
			</main>
		);
	} else {
		return (
			<main
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<Head>
					<title>{project.title} - piybeep.</title>
					<meta name="description" content={project?.title ?? "Наш проект"} />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<ButtonBack />
				<div className="content-wrapper">
					<ProjectPost project={project} />
					<OurProjects
						projects={projects.list}
						title="другие проекты"
						count={projects.total_count} />
				</div>
				<Form services={services.list} count={services.total_count} />
				<ButtonOpenForm />
			</main>
		);
	}
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const URIs = [
		"projects?rand=true",
		"services",
		"projects/" + ctx?.params?.project
	];

	const [projects_response, services_response, project_response] =
		await Promise.allSettled(
			URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${i}`))
		);

	const project =
		project_response.status === "fulfilled"
			? project_response.value.data
			: { error: project_response.reason.response.data };

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

	return {
		props: {
			project,
			projects: useProjects.getState(),
			services: useServices.getState()
		}
	};
};

PortfolioCase.getLayout = (
	page: ReactNode,
	{
		services
	}: {
		services: EntityState<Service> & EntityActions<Service>;
	}
) => <BaseLayout services={services}>{page}</BaseLayout>;
