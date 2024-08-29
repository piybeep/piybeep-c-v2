import Head from "next/head";
import { DefalutLayout } from "../../src/layouts";
import { ReactNode } from "react";
import { ButtonBack, ButtonOpenForm } from "../../src/components";
import axios from "axios";
import { BlogsResTypes, BlogsSlugTypes, ContactsType } from "../../src/types";
import { GetServerSideProps } from "next";
import { PostInfo } from "../../src/modules/pages/blog";
import { Portal, ProductType } from "../../src/utils";
import { Eyes, PopupForm } from "../../src/modules";

export default function PostPage({ blogsRes }: { blogsRes: BlogsSlugTypes }) {

    if (!blogsRes) {
        return (
            // Сюда заглушку для ошибок
            <>
                Произошла ошибка
            </>
        )
    }

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <ButtonBack />
            {
                blogsRes && <PostInfo post={blogsRes} />
            }
            <ButtonOpenForm />
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
    const blogsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slugify/slugs/blog/${ctx?.query?.post}?populate=*`, {
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

    return {
        props: {
            blogsRes: blogsRes ?? null,
            contacts: contacts ?? null,
            services: services ?? null
        }
    }

})


PostPage.getLayout = (
    page: ReactNode,
    {
        blogsRes,
        contacts,
        services
    }: {
        blogsRes: { attributes: BlogsResTypes }
        contacts: ContactsType[]
        services: ProductType[]
    }
) => (
    <DefalutLayout contacts={contacts}>
        <Head>
            <title>{blogsRes?.attributes?.meta_title ?? ''} - piybeep.</title>
            <meta name="description" content={blogsRes?.attributes?.meta_description ?? ''} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {page}
        <Portal>
            <PopupForm
                services={
                    services.map(itemService => (
                        {
                            ...itemService,
                            isHide: itemService.type === 'other'
                        }
                    ))
                }
                count={services.length} />
            <Eyes />
        </Portal>
    </DefalutLayout>
);
