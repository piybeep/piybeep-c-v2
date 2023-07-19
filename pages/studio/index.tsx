import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import {
	AboutUsStudio,
	Contacts,
	Form,
	OpenFormButton,
	Spa,
	Steps,
	Team,
	Technologies,
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
			<div className="content-wrapper">
				<AboutUsStudio />
				<Team />
				<Spa />
				<Steps />
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
			<title>Студия - piybeep.</title>
			<meta name="description" content="Наша студия" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{page}
	</BaseLayout>
);
