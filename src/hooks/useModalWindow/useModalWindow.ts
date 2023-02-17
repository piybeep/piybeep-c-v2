import { useRouterQuery } from "../useRouterQuery";

export function useModalWindow() {
	const { query, isLoading, isHas: isHasQuery, mutate } = useRouterQuery();

	const isHas = (name: string) => {
		return (
			isHasQuery("window") && (query.window as string).split(",").includes(name)
		);
	};

	const add = (name: string) => {
		if (isHasQuery("window")) {
			const data = (query.window as string).split(",");
			mutate({ query: { window: data.join(",") } });
		} else {
			mutate({ query: { window: name } });
		}
	};

	const remove = (name?: string) => {
		if (isHasQuery("window")) {
			if (!name) {
				mutate({ query: { window: null } });
			} else {
				const data = (query.window as string).split(",");
				data.splice(data.indexOf(name), 1);
				mutate({
					query: {
						window: data.length ? data.join(",") : null,
					},
				});
			}
		}
	};

	return { isHas, add, remove, isLoading };
}

