import Head from "next/head";
import { ReactNode } from "react";
import { BaseLayout } from "../../src/layouts";
import { GetServerSideProps } from "next";
import axios from "axios";
import { EntityActions, EntityState, Service } from "../../src/utils";
import { useServices } from "../../src/store";
import { Products, Support } from "../../src/modules/pages/services";
import { Form } from "../../src/modules";
import { ContactsType, ISupport, ISupportList } from "../../src/types";

export default function Services({
	services,
	supports,
	supportsList
}: {
	services: EntityState<Service> & EntityActions<Service>;
	supports: ISupport[],
	supportsList: ISupportList[]
}) {

	const data = supports.map(support => ({
		id: support.id,
		title: support.title,
		description: support.description,
		support_lists: support.support_lists?.map(item => supportsList?.find(list => list?.id === item?.id)),
		price: support.price
	}))

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{/* Тест vercel */}
			<div className="content-wrapper">
				<Products
					list={services?.list?.filter((i) => i.type === "service")}
				/>
				<Support supports={data ?? null} />
			</div>
			<Form services={services.list} count={services.total_count} />
		</main>
	);
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
	const URIs = ["services", "contacts", "supports"];

	const [services_response, contacts_response, supports__response] = await Promise.allSettled(
		URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?populate=*&${i != 'contacts' && i != 'supports' && 'sort=rank:asc'}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
			}
		})),
	);

	if (services_response.status === "fulfilled") {
		useServices.setState(
			{
				list: services_response.value.data.data,
				total_count: services_response.value.data.meta.pagination.total,
			},
			true,
		);
	} else {
		useServices.setState({
			error: new Error(services_response.reason.response?.data?.error?.message ?? 'Произошла ошибка'),
		});
	}

	let contacts = []

	if (contacts_response.status === 'fulfilled') {
		contacts = contacts_response.value.data.data
	}

	let supports = []

	if (supports__response.status === 'fulfilled') {
		supports = supports__response.value.data.data
	}

	const support_list__responce = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/support-lists?populate=*`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
		}
	})

	let supportsList = support_list__responce.data.data

	return {
		props: {
			services: useServices.getState().error?.message ? JSON.stringify(useServices.getState()) : useServices.getState(),
			contacts: contacts,
			supports: supports,
			supportsList: supportsList
		},
	};
};

Services.getLayout = (
	page: ReactNode,
	{
		services,
		contacts,
	}: {
		services: EntityState<Service> & EntityActions<Service>;
		contacts: ContactsType[],
	},
) => (
	<BaseLayout services={services} contacts={contacts}>
		<Head>
			<title>Услуги веб-студии: разработка, дизайн и поддержка сайтов под ключ | Piybeep</title>
			<meta name="description" content="Мы предлагаем индивидуальный подход к созданию проектов под ключ. Наша команда ориентирована на создание адаптивных сайтов с оптимизацией для поисковых систем." />
			<link rel="icon" href="/favicon.ico" />
			<link rel="canonical" href={`https://piybeep.com/services`} />
		</Head>
		{page}
	</BaseLayout>
);
