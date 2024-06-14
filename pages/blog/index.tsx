import Head from "next/head";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BlogsTypes, ThemeTypes } from "../../src/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useFetchBlogs } from "./useFetchBlogs";
export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1)

    const router = useRouter()

    const qs = require('qs')
    const query = qs.stringify({
        filters: {
            $and: [
                {
                    themes: {
                        Theme: {
                            $in: router.query.blockSelect && String(router.query.blockSelect).split(',')
                        }
                    },
                },
                {
                    $or: [
                        {
                            Title: {
                                $containsi: router.query.search && String(router.query.search)
                            }
                        },
                        {
                            Title: {
                                $containsi: router.query.search && String(router.query.search).toLowerCase()
                            }
                        },
                        {
                            Title: {
                                $containsi: router.query.search && (String(router.query.search).charAt(0).toUpperCase() + String(router.query.search).slice(1))
                            }
                        },
                        {
                            Title: {
                                $containsi: router.query.search && (String(router.query.search).charAt(0).toUpperCase() + String(router.query.search).slice(1).toLowerCase())
                            }
                        }
                    ]
                }
            ]
        },
        pagination: {
            page: currentPage,
            pageSize: 3,
        },
    }, {
        encodeValuesOnly: true,
    });

    const [blogs, setBlogs] = useState<BlogsTypes[]>([])
    const [themesRes, setThemesRes] = useState<string[] | null>(null)
    const [error, setError] = useState<any>()

    // Для пагинации
    const { ref, inView } = useInView({
        threshold: 1,
    });

    const { data: resData, isLoading, totalCount, error: errorBlogs } = useFetchBlogs(query)

    const isFetching = useMemo<boolean>(
        () => +totalCount > blogs.length,
        [totalCount, blogs]
    )

    useEffect(() => {
        if (resData && isFetching) {
            setBlogs(prev => [...prev, ...resData])
        }

        if (currentPage === 1 && resData) {
            setBlogs(resData)
        }
    }, [resData])

    useEffect(() => {
        if (blogs && inView && isFetching) {
            setCurrentPage(page => (page += 1))
        }
    }, [inView])

    useEffect(() => {
        setCurrentPage(1)
    }, [router.query.search, router.query.blockSelect])
    // Для пагинации

    useEffect(() => {
        (function () {
            axios.get(`/api/themes?populate=*`)
                .then(res => setThemesRes(res.data.map((theme: ThemeTypes) => theme.Theme)))
                .catch(error => setError(error))
        }())
    }, [])

    if (error || errorBlogs) {
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
            <List posts={blogs ?? null} />
            {
                !isLoading && isFetching && <span className={s.preloader} ref={ref}>
                    Загрузка
                </span>
            }
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