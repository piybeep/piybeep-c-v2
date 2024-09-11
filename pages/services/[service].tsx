import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Title } from "../../src/components";
import { BaseLayout } from "../../src/layouts";
import { ServicePreview, Steps } from "../../src/modules/pages/service";
import { ContactsType, IncludesDevelopmentTypes } from "../../src/types";
import { ProductType, Project, Service, ServiceStepList } from "../../src/utils";

import { Form, IncludeDevelopment, OurProjects, ServicesList, Technologies } from "../../src/modules";
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
            <main style={{ display: 'flex', flexDirection: 'column' }}>
                Произошла ошибка
            </main>
        )
    }

    const currentServicePosts = service.attributes.service_posts?.data
        .map(item => item.id)
        // Костыльно пофиксил типы !!!
        .map(id => servicePosts.find(post => post.id === id)!)!
    // Костыльно пофиксил типы !!!

    const currentSteps = service.attributes.steps?.data
        .map(step => step.id)
        // Костыльно пофиксил типы
        .map(id => steps.find(step => step.id === id)!)
    // Костыльно пофиксил типы

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__header}>
                <Title value={service.attributes.name} tag='h1' position='center' subtitle={`от ${service.attributes.price} тыс. руб.`} />
                <ServicePreview {...service.attributes} />
            </div>
            {/* Пока не знаю как пофиксить */}
            <IncludeDevelopment list={currentServicePosts} title={'что вы получите'} />
            <Steps steps={currentSteps} />
            <OurProjects projects={projects?.data} count={projects?.meta?.pagination?.total} />
            <Technologies />
            <ServicesList list={services.filter(i => i.id != service.id)} isCollapse={services.filter(i => i.id != service.id).length > 3} />
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
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

    const servicePosts = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/service-posts?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

    const contacts = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

    const services = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

    const projects_response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data)
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

    const steps = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/steps?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error.response?.data?.error ?? 'Произошла ошибка'))

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
                list: services?.map(itemService => (
                    {
                        ...itemService,
                        isHide: itemService.type === 'other'
                    })),
                total_count: services?.length,
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
