import { useRouterQuery } from "../useRouterQuery";

export function useUserSelectForm() {
	const { query, isLoading, isHas: isHasQuery, mutate } = useRouterQuery();

	const isHas = (name: string) => {
		return (
			isHasQuery("userSelect") &&
			(query.userSelect as string).split(",").includes(name)
		);
	};

	const add = (name: string) => {
		if (isHasQuery("userSelect")) {
			const data = (query.userSelect as string).split(",");
			data.push(name);
			mutate({ query: { userSelect: data.join(",") } });
		} else {
			mutate({ query: { userSelect: name } });
		}
	};

	const remove = (name?: string) => {
		if (isHasQuery("userSelect")) {
			if (!name) {
				mutate({ query: { userSelect: null } });
			} else {
				const data = (query.userSelect as string).split(",");
				data.splice(data.indexOf(name), 1);
				mutate({
					query: {
						userSelect: data.length ? data.join(",") : null,
					},
				});
			}
		}
	};

	return { add, remove, isHas, isLoading };
}

