import classNames from "classnames";
import {useRouter} from "next/router";

import s from "./Header.module.scss";
import React from "react";

export function PreviewHeader() {
    const query = useRouter();

    // Отложенно до лучших времен
    // const ref = React.useRef(null);

    // React.useEffect(() => {
    // 	let lastScrollTop = 0,
    // 		isScrolling = false;

    // 	const scrollHandler = () => {
    // 		// console.log(ref.current.clientHeight >= window.scrollY);

    // 		if (window.scrollY <= ref.current.clientHeight) {
    // 			const st = window.pageYOffset || document.documentElement.scrollTop;

    // 			// console.log(st, lastScrollTop, ref.current.clientHeight, isScrolling);

    // 			if (!isScrolling) {
    // 				if (st > lastScrollTop) {
    // 					// Тестовый вариант, но на мобилке баги
    // 					document.body.style.overflow = "hidden";
    // 					window.scrollTo({
    // 						top: ref.current.clientHeight,
    // 						behavior: "smooth",
    // 					});
    // 				}
    // 				if (st < lastScrollTop) {
    // 					// Тестовый вариант, но на мобилке баги
    // 					document.body.style.overflow = "hidden";
    // 					window.scrollTo({
    // 						top: 0,
    // 						// behavior: "smooth",
    // 					});
    // 				}
    // 				isScrolling = true;
    // 				setTimeout(() => {
    // 					isScrolling = false;
    // 					// Тестовый вариант, но на мобилке баги
    // 					document.body.style.overflow = "auto";
    // 				}, 1000);
    // 			}
    // 			lastScrollTop = st <= 0 ? 0 : st;
    // 		}
    // 	};
    // 	window.addEventListener("scroll", scrollHandler, false);
    // 	return () => {
    // 		window.removeEventListener("scroll", scrollHandler, false);
    // 	};
    // }, []);

    return (
        <header
            className={classNames(s.preview, {
                [s.preview__visible]: query.pathname === "/" || query.pathname === "/biz",
            })}
            // ref={ref}
        >
            <div className={s.preview__info}>
                <h2 className={s.preview__title}>web-studio</h2>
                <p className={s.preview__subtitle}>
                    PIYBEEP<span>.</span>
                </p>
            </div>
        </header>
    );
}
