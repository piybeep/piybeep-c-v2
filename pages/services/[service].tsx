import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Title } from "../../src/components";
import { BaseLayout } from "../../src/layouts";
import { ServicePreview, Steps } from "../../src/modules/pages/service";
import { ContactsType, IncludesDevelopmentTypes } from "../../src/types";
import { ProductType, Project, Service, ServiceStepList } from "../../src/utils";

import { Eyes, Form, IncludeDevelopment, OurProjects, ServicesList, Technologies } from "../../src/modules";
import s from './service.module.scss';

export default function ServicePage({ service, servicePosts, projects, services, steps }:
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
        services: ProductType[],
        steps: ServiceStepList[]
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

    const filterSteps = steps.filter(step => step?.uslugi?.id === service.id) ?? null

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__header}>
                <Title value={service.attributes.name} tag='h1' position='center' subtitle={`от ${service.attributes.price} тыс. руб.`} />
                <ServicePreview {...service.attributes} />
            </div>
            <IncludeDevelopment list={currentServicePosts} title={'что вы получите'} />
            <Steps steps={filterSteps} />
            <OurProjects projects={projects?.data} count={projects?.meta?.pagination?.total} />
            <Technologies />
            <ServicesList list={services.filter(i => i.id != service.id)} isCollapse />
            <Form services={services as Service[]} />
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

    const steps = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/steps?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response.data.error))

    return {
        props: {
            service: serviceRes ?? null,
            contacts: contacts ?? null,
            services: services ?? null,
            servicePosts: servicePosts ?? null,
            projects: projects_response ?? null,
            steps: steps ?? null
        }
    }
})

ServicePage.getLayout = (
    page: ReactNode,
    {
        services,
        service,
        contacts
    }: {
        services: ProductType[],
        service: { attributes: ProductType },
        contacts: ContactsType[]
    }
) => (
    <BaseLayout
        contacts={contacts}
        services={
            {
                list: services.map(itemService => (
                    {
                        ...itemService,
                        isHide: itemService.type === 'other'
                    })),
                total_count: services.length,
                error: null
            }}>
        <Head>
            <title>{service?.attributes?.meta_title ?? ''} - piybeep.</title>
            <meta name="description" content={service?.attributes?.meta_description ?? ''} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {page}
    </BaseLayout>
);
