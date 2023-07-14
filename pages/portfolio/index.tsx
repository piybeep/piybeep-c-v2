import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { Form, OpenFormButton, OurProjectsPortfolio } from "../../src/modules";
import { GetServerSideProps } from "next";
import axios from "axios";

export default function Portfolio({ projects }: any) {
	console.log(projects);
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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: 200,
					marginBottom: 150,
				}}
			>
				<OurProjectsPortfolio />
			</div>
			<Form />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	console.log(process.env.NEXT_PUBLIC_API_URL);
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_API_URL}/projects?take=12&skip=0`,
	);

	return {
		props: {
			projects: response.data,
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
