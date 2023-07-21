import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { Form, OpenFormButton, OurProjectsPortfolio } from "../../src/modules";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function Portfolio({ projects, count: _count }: any) {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				// rowGap: 100,
				// marginBottom: 90,
				// marginTop: 50,
			}}
		>
			<OpenFormButton />
			<div className="content-wrapper">
				<OurProjectsPortfolio projects={projects} />
			</div>
			<Form />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/projects`,
	);

	const [projects, count] = response.data;

	return {
		props: {
			projects,
			count,
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
