import Head from "next/head";
import { ReactNode } from "react";

import { BaseLayout } from "../../src/layouts";
import {
	Form,
	OpenFormButton,
	OurProjectsBlock,
	PortfolioBack,
	ProjectPost,
} from "../../src/modules";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function PortfolioCase({ project, projects }: any) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Head>
				<title>{project.title} - piybeep.</title>
				<meta
					name="description"
					content={project?.title ? `${project.title}` : "Наш проект"}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortfolioBack />
			<OpenFormButton />
			<div className="content-wrapper">
				<ProjectPost project={project} />
				<OurProjectsBlock
					title="другие проекты"
					subtitle=""
					projects={projects[0]}
					count={projects[1]}
				/>
			</div>
			<Form />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const project = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/projects/${ctx?.params?.project}`,
	);
	const projects = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/projects`,
	);

	return {
		props: {
			project: project.data,
			projects: projects.data,
		},
	};
};

PortfolioCase.getLayout = (page: ReactNode) => <BaseLayout>{page}</BaseLayout>;
