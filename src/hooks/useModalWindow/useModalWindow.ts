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
		}
		else {
			mutate({ query: { window: name } });
		}
	};

	const addProduct = (name: string, products: any) => {
		if (products) {
			mutate({ query: { window: name, products: products } })
		}
	}

	const remove = (name?: string, products?: any) => {
		if (isHasQuery("window")) {
			if (!name || !products) {
				mutate({ query: { window: null, products: null} });
			} 
			else {
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

	return { isHas, add, addProduct, remove, isLoading, windowQuery: query.window };
}

