import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Project, Service } from "../../src/utils";
import { useProjects, useServices } from "../../src/store";
import { ButtonBack, ButtonOpenForm } from "../../src/components";
import { Form, OurProjects, ProjectPost } from "../../src/modules";
import qs from 'qs'
import { ContactsType } from "../../src/types";

export default function PortfolioCase({
	project,
	projects,
	services
}: {
	project: { attributes: Project } | { error: any };
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
					<link rel="canonical" href={`https://piybeep.com/portfolio`} />
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
					<title>{project.attributes?.meta_title ?? 'Наш проект'} - piybeep.</title>
					<meta name="description" content={project?.attributes?.meta_description ?? 'Наш проект'} />
					<link rel="icon" href="/favicon.ico" />
					<link rel="canonical" href={`https://piybeep.com/portfolio/${project?.attributes?.slug ?? ''}`} />
				</Head>
				<ButtonBack />
				<div className="content-wrapper">
					<ProjectPost project={project.attributes} />
					<OurProjects
						projects={projects?.list?.filter(p => p.id != project.attributes.id)}
						title="другие проекты"
						count={projects.total_count - 1} />
				</div>
				<Form services={services.list} count={services.total_count} />
			</main>
		);
	}
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const URIs = [
		"projects",
		"services",
		"contacts"
	];

	const [projects_response, services_response, contacts_response] =
		await Promise.allSettled(
			URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?${qs.stringify(Object.assign({ populate: '*' },
				i != 'contacts' &&
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

	const fetchProject = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slugify/slugs/project/${ctx?.params?.project}?populate=*`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
		}
	})
		.then(res => res.data.data)
		.catch(error => ({ error: error.response?.data?.error?.message ?? 'Произошла ошибка' }))

	if (projects_response.status === "fulfilled") {
		useProjects.setState(
			{
				list: projects_response.value.data.data.sort(() => 0.5 - Math.random()),
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
			project: fetchProject,
			projects: useProjects.getState().error?.message ? JSON.stringify(useProjects.getState()) : useProjects.getState(),
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState(),
			contacts: contacts
		}
	};
};

PortfolioCase.getLayout = (
	page: ReactNode,
	{
		services,
		contacts
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		contacts: ContactsType[]
	}
) => <BaseLayout contacts={contacts} services={services}>
		{page}
		<ButtonOpenForm />
	</BaseLayout>;
