import Head from "next/head";
import { DefalutLayout } from "../../src/layouts";
import { ReactNode } from "react";
import { ButtonBack } from "../../src/components";
import { useRouter } from "next/router";
import { BLOG_DATA } from "../../src/constatnts/blog";
import { PostInfo } from "../../src/modules/pages/blog";

export default function PostPage() {
    const { query } = useRouter()
    const postId = query.post

    const resPost = BLOG_DATA.find(i => i.id === Number(postId))

    return (
        <>
            <ButtonBack />
            {
                //  Не понимаю как пофиксить типы
                resPost && <PostInfo post={resPost} />
            }
        </>
    );
};


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