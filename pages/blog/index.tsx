import Head from "next/head";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BlogsResTypes, ThemeTypes } from "../../src/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { ErrorText } from "../../src/modules/pages/blog/components";
import { useFetchBlogs } from "../../src/hooks";
export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1)

    const router = useRouter()

    const qs = require('qs')
    const query = qs.stringify({
        filters: {
            $and: [
                {
                    themes: {
                        theme: {
                            $in: router.query.blockSelect && String(router.query.blockSelect).split(',')
                        }
                    },
                },
                {
                    $or: [
                        {
                            title: {
                                $containsi: router.query.search && String(router.query.search)
                            }
                        },
                        {
                            title: {
                                $containsi: router.query.search && String(router.query.search).toLowerCase()
                            }
                        },
                        {
                            title: {
                                $containsi: router.query.search && (String(router.query.search).charAt(0).toUpperCase() + String(router.query.search).slice(1))
                            }
                        },
                        {
                            title: {
                                $containsi: router.query.search && (String(router.query.search).charAt(0).toUpperCase() + String(router.query.search).slice(1).toLowerCase())
                            }
                        }
                    ]
                }
            ]
        },
        pagination: {
            page: currentPage,
            pageSize: 12,
        },
        sort: 'rank:asc'
    }, {
        encodeValuesOnly: true,
    });

    const [blogs, setBlogs] = useState<BlogsResTypes[]>([])
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
            axios.get(`/api/themes?populate=*&sort=createdAt:desc`)
                .then(res => setThemesRes(res.data.map((theme: ThemeTypes) => theme.theme)))
                .catch(error => setError(error))
        }())
    }, [])

    if (error || errorBlogs) {
        return (
            // Сюда заглушку для ошибок
            <div className={s.blog}>
                <ErrorText value={"Не смогли выполнить запрос,\nпопробуйте позже..."} />
            </div>
        )
    }

    return (
        <div className={s.blog}>
            <Header markers={themesRes ?? null} />
            {
                blogs.length > 0
                    ? <List posts={blogs ?? null} />
                    : !isLoading && !isFetching && <ErrorText value={"Ничего не нашлось по запросу..."} />
            }
            {
                !isLoading && isFetching && <span className={classNames(s.preloader, {
                    [s.preloader__isView]: inView
                })} ref={ref} />
            }
            {
                isLoading && !isFetching && !blogs && <span className={classNames(s.preloader, s.preloader__isView, s.preloader__delay)} />
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