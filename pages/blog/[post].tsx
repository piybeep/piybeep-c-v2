import Head from "next/head";
import { DefalutLayout } from "../../src/layouts";
import { ReactNode } from "react";
import { ButtonBack } from "../../src/components";
import axios from "axios";
import { BlogsResTypes, ThemeTypes } from "../../src/types";
import { GetServerSideProps } from "next";
import { PostInfo } from "../../src/modules/pages/blog";

export default function PostPage({ blogsRes }: { blogsRes: BlogsResTypes }) {

    if (!blogsRes) {
        return (
            // Сюда заглушку для ошибок
            <>
                Произошла ошибка
            </>
        )
    }

    return (
        <>
            <ButtonBack />
            {
                blogsRes && <PostInfo post={blogsRes} />
            }
        </>
    );
};

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
    const blogsRes = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs/${ctx?.query?.post}?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    })
        .then(res => res.data.data)
        .catch(error => console.error(error))

    return {
        props: {
            blogsRes: blogsRes ?? null
        }
    }

})


PostPage.getLayout = (
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