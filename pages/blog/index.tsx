import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import { DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BlogsResTypes, BlogsTypes, ThemeTypes } from "../../src/types";
import axios from "axios";
import { useRouter } from "next/router";
export default function BlogPage() {
    const router = useRouter()

    const qs = require('qs')
    const query = qs.stringify({
        filters: {
            themes: {
                Theme: {
                    $in: router.query.blockSelect && String(router.query.blockSelect).split(',')
                }
            },
        },
    }, {
        encodeValuesOnly: true,
    });

    const [blogsRes, setBlogsRes] = useState<BlogsTypes[] | null>(null)
    const [themesRes, setThemesRes] = useState<string[] | null>(null)
    const [error, setError] = useState<any>()

    useEffect(() => {
        (function () {
            axios.get(`/api/blogs?populate=*&${query}`)
                .then(res => setBlogsRes(res.data.map((data: BlogsResTypes) => ({
                    id: data.id,
                    title: data.Title,
                    themes: data.themes.map(theme => theme.Theme),
                    previewImage: data.ImagePreview.url,
                    text: data.Text
                }))))
                .catch(error => setError(error))
        }())
    }, [router.query.blockSelect])

    useEffect(() => {
        (function () {
            axios.get(`/api/themes?populate=*`)
                .then(res => setThemesRes(res.data.map((theme: ThemeTypes) => theme.Theme)))
                .catch(error => setError(error))
        }())
    }, [])


    if (error) {
        return (
            // Сюда заглушку для ошибок
            <>
                Возможно данных пока нет
            </>
        )
    }

    return (
        <div className={s.blog}>
            <Header markers={themesRes ?? null} />
            <List posts={blogsRes ?? null} />
        </div>
    );
};

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
