import React from "react";
import { useRouter } from "next/router";

import { RouterQueryMutate } from "./useRouterQuery.types";

export function useRouterQuery(init_props?: RouterQueryMutate) {
	const router = useRouter();
	const [isLoading, setIsLoading] = React.useState(!router.isReady);
	const [error, setError] = React.useState(
		router.isFallback ? new Error("Router is fallback") : null
	);

	const isHas = (key: string) => {
		return (
			router.query.hasOwnProperty(key) &&
			router.query[key] !== undefined &&
			router.query[key] !== null
		);
	};

	const mutate = (props: RouterQueryMutate) => {
		if (props.query === null) {
			router.query = {};
		} else {
			router.query = Object.assign({}, router.query, props.query);

			for (const key in router.query) {
				if (router.query[key] === null) {
					if (Object.keys(router.query).length > 1) {
						delete router.query[key];
					} else {
						router.query = {};
					}
				}
			}
		}

		setIsLoading(true);
		router[props.method ?? "push"]({
			query: router.query,
		})
			.then((v) => {
				if (!v) {
					setError(new Error("Не удалось выполнить изменение параметров"));
				}
			})
			.catch((err) => setError(err))
			.finally(() => {
				setIsLoading(false);
			});
	};

	React.useEffect(() => {
		if (router.isReady == isLoading) setIsLoading(!router.isReady);
	}, [router.isReady, isLoading]);

	init_props && mutate(init_props);

	return { query: router.query, mutate, isLoading, error, isHas };
}

