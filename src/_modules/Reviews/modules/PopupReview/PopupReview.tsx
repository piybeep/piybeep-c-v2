import { useRouter } from 'next/router';

import { useReviews } from '../../../../store';
import classNames from 'classnames';

import s from './PopupReview.module.scss'
import { Review } from '../../../../utils';
import Link from 'next/link';
import { useEffect } from 'react';

export function PopupReview({ reviews }: { reviews: Review[] }) {
    const router = useRouter()
    const { query } = router
    const review = reviews.find(i => i.id === query.id)

    useEffect(() => {
        query.form === 'review'
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset'
    }, [query.form])

    return (
        <div
            onClick={() => router.push({ query: {} }, undefined, { scroll: false })}
            className={classNames(s.wrapper, {
                [s.wrapper__open]: query.form === 'review'
            })}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.content__info}>
                    <div className={s.info}>
                        <h2 className={s.info__title}>Отзыв</h2>
                        <p className={s.info__author}>
                            {review?.author}
                            {review?.project ? ' - ' : ''}
                            {
                                review?.project &&
                                <Link className={s.info__author_link} href={`/portfolio/${review?.project.id}`}>{review?.project?.subtitle}</Link>
                            }
                        </p>
                    </div>
                    <p className={s.content__text}>
                        {review?.text}
                    </p>
                </div>
                <button
                    onClick={() => router.push({ query: {} }, undefined, { scroll: false })}
                    className={s.content__button}>Назад</button>
            </div>
        </div>
    );
};