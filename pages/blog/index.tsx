import Head from "next/head";
import { ReactNode } from "react";
import { DefalutLayout } from "../../src/layouts";
import { Header, List } from "../../src/modules/pages/blog";

import s from './index.module.scss'
import { BLOG_DATA } from "../../src/constatnts/blog";

export default function BlogPage() {

    const res = BLOG_DATA
    let resMarkers = res.map(i => i.markers.toString()).join(',').split(',').filter((value, index, array) => array.indexOf(value) === index)

    return (
        <div className={s.blog}>
            <Header markers={resMarkers} />
            {/* Не понимаю как пофиксить типы */}
            <List posts={res} />
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
