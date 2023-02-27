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
			mutate({
				query: {
					userSelect: (query.userSelect as string)
						.split(",")
						.reduce((pre, cur) => [cur, pre].join(","), name),
				},
			});
		} else {
			mutate({ query: { userSelect: name } });
		}
	};

	const remove = (name?: string) => {
		if (isHasQuery("userSelect")) {
			if (!name) {
				mutate({ query: { userSelect: null } });
			} else {
				mutate({
					query: {
						userSelect:
							(query.userSelect as string)
								.split(",")
								.filter((v) => v !== name && v != "")
								.join(",") || null,
					},
				});
			}
		}
	};

	return { add, remove, isHas, isLoading };
}

