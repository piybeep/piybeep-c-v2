import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Title } from "../../src/components";
import { DefalutLayout } from "../../src/layouts";
import { ServicePreview } from "../../src/modules/pages/service";
import { ContactsType, IncludesDevelopmentTypes } from "../../src/types";
import { Portal, ProductType, Project, Service } from "../../src/utils";

import { Eyes, Form, IncludeDevelopment, OurProjects, ServicesList, Technologies } from "../../src/modules";
import s from './service.module.scss';

export default function ServicePage({ service, servicePosts, projects, services }:
    {
        service: { attributes: ProductType, id: number },
        servicePosts: IncludesDevelopmentTypes[],
        projects: {
            data: Project[],
            meta: {
                pagination: {
                    total: number
                }
            }
        },
        services: ProductType[]
    }) {
    if (!service) {
        return (
            // Сюда заглушку для ошибок
            <>
                Произошла ошибка
            </>
        )
    }

    const currentServicePosts = servicePosts?.filter(item => item?.uslugi?.id === service.id) ?? null

    return (
        <div className={s.wrapper}>
            <Title value={service.attributes.name} position='center' subtitle={`от ${service.attributes.price} тыс. руб.`} />
            <ServicePreview {...service.attributes} />
            <IncludeDevelopment list={currentServicePosts} title={'что вы получите'} />
            <OurProjects projects={projects?.data} count={projects?.meta?.pagination?.total} />
            <Technologies />
            <ServicesList list={services.filter(i => i.id != service.id)} isCollapse />
            <Form services={services as Service[]} />
            <Portal>
                <Eyes />
            </Portal>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
    const serviceRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slugify/slugs/service/${ctx?.query?.service}?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response.data.error))

    const servicePosts = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/service-posts?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response.data.error))

    const contacts = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response.data.error))

    const services = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response.data.error))

    const projects_response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data)
        .catch(error => console.error(error.response.data.error))

    return {
        props: {
            service: serviceRes ?? null,
            contacts: contacts ?? null,
            services: services ?? null,
            servicePosts: servicePosts ?? null,
            projects: projects_response ?? null,
        }
    }
})

ServicePage.getLayout = (
    page: ReactNode,
    {
        service,
        contacts
    }: {
        service: { attributes: ProductType },
        contacts: ContactsType[]
    }
) => (
    <DefalutLayout contacts={contacts}>
        <Head>
            <title>{service?.attributes?.meta_title ?? ''} - piybeep.</title>
            <meta name="description" content={service?.attributes?.meta_description ?? ''} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {page}
    </DefalutLayout>
);