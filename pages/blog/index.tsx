import Head from "next/head";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { BaseLayout, DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BlogsResTypes, ContactsType, ThemeTypes } from "../../src/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { ErrorText } from "../../src/modules/pages/blog/components";
import { useFetchBlogs, useThrottle } from "../../src/hooks";
import { GetServerSideProps } from "next";
import qs from "qs";
import { Portal, ProductType, Service } from "../../src/utils";
import { ButtonOpenForm } from "../../src/components";
import { Eyes, PopupForm } from "../../src/modules";
export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1)

    const router = useRouter()
    const throttleValue = useThrottle(router.query.search)

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
                                $containsi: throttleValue && String(throttleValue)
                            }
                        },
                        {
                            title: {
                                $containsi: throttleValue && String(throttleValue).toLowerCase()
                            }
                        },
                        {
                            title: {
                                $containsi: throttleValue && (String(throttleValue).charAt(0).toUpperCase() + String(throttleValue).slice(1))
                            }
                        },
                        {
                            title: {
                                $containsi: throttleValue && (String(throttleValue).charAt(0).toUpperCase() + String(throttleValue).slice(1).toLowerCase())
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

    const { data: resData, isLoading, totalPageCount, error: errorBlogs, currentPage: fetchCurrentPage } = useFetchBlogs(query)

    useEffect(() => {
        if (resData) {
            setBlogs(prev => currentPage != 1 ? [...prev, ...resData] : resData)
        }
    }, [resData])

    useEffect(() => {
        if (inView && (fetchCurrentPage) < totalPageCount) {
            setCurrentPage(fetchCurrentPage + 1)
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
                    : !isLoading && <ErrorText value={"Ничего не нашлось по запросу..."} />
            }
            {
                currentPage < totalPageCount && blogs.length != 0 && <span className={classNames(s.preloader, {
                    [s.preloader__isView]: inView
                })} ref={ref} />
            }
            <ButtonOpenForm />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
    const URIs = ["contacts"];
    const [contacts_response] =
        await Promise.allSettled(
            URIs.map((i) => axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${i}?${qs.stringify(Object.assign({ populate: '*' },
                i != "contacts" &&
                {
                    sort: 'rank:asc'
                }
            ))
                }`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                }
            }))
        );

    let contacts = []

    if (contacts_response.status === 'fulfilled') {
        contacts = contacts_response.value.data.data
    }

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
            contacts: contacts,
            services: services ?? null
        }
    };
};

BlogPage.getLayout = (
    page: ReactNode,
    {
        contacts,
        services
    }:
        {
            contacts: ContactsType[],
            services: ProductType[]
        }
) => (
    <DefalutLayout
        contacts={contacts}
    >
        <Head>
            <title>Блог веб-студии: технологии, SEO, командная работа | Piybeep</title>
            <meta name="description" content="Исследуйте последние технологические тренды, лучшие практики SEO и секреты эффективной командной работы в блоге нашей веб-студии. Оставайтесь в курсе инноваций и улучшайте свои навыки вместе с экспертами отрасли." />
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
