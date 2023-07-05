import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import {
	AboutUsStudio,
	Spa,
	Form,
	OpenFormButton,
	Team,
	Contacts,
	Technologies,
	Steps,
} from "../../src/modules";

export default function Studio() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<OpenFormButton />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					rowGap: 100,
					marginBottom: 150,
				}}
			>
				<AboutUsStudio />
				<Team />
				<Spa />
				<Steps/>
				<Contacts />
				<Technologies />
			</div>
			<Form />
		</main>
	);
}

Studio.getLayout = (page: ReactNode) => (
	<BaseLayout>
		<Head>
			<title>Piybeep - Студия</title>
			<meta name="description" content="Наша студия" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);

