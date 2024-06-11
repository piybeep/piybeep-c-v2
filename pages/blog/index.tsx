import Head from "next/head";
import { ReactNode } from "react";
import { DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BlogsResTypes, BlogsTypes, ThemeTypes } from "../../src/types";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function BlogPage({ blogsRes, themesRes }: { blogsRes: BlogsTypes[], themesRes: string[] }) {

    return (
        <div className={s.blog}>
            <Header markers={themesRes} />
            <List posts={blogsRes} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
    const qs = require('qs')
    const query = qs.stringify({
        filters: {
            themes: {
                Theme: {
                    $in: ctx.query.blockSelect && String(ctx.query.blockSelect).split(',')
                }
            },
        },
    }, {
        encodeValuesOnly: true,
    });

    const blogsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*&${query}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data.map((data: BlogsResTypes) => ({
            id: data.id,
            title: data.Title,
            themes: data.themes.map(theme => theme.Theme),
            previewImage: data.ImagePreview.url,
            text: data.Text
        })))
        .catch(error => console.error(error))

    const themesRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/themes`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data.map((data: ThemeTypes) => data.Theme))
        .catch(error => console.error(error))

    return {
        props: {
            blogsRes: blogsRes,
            themesRes: themesRes
        }
    }
})

BlogPage.getLayout = (
    page: ReactNode,
) => (
    <DefalutLayout>
        <Head>
            <title>Блог - piybeep.</title>
            <meta name="description" content="Наша студия" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {page}
    </DefalutLayout>
);
