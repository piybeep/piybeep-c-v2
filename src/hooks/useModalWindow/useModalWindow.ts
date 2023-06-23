import {useRouterQuery} from "../useRouterQuery";

export function useModalWindow() {
    const {query, isLoading, isHas: isHasQuery, mutate} = useRouterQuery();

    const isHas = (name: string) => {
        return (
            isHasQuery("window") && (query.window as string).split(",").includes(name)
        );
    };

    const add = (name: string) => {
        if (isHasQuery("window")) {
            mutate({
                query: {
                    window: (query.window as string)
                        .split(",")
                        .reduce((pre, cur) => [cur, pre].join(","), name),
                },
            });
        } else {
            mutate({query: {window: name}});
        }
    };

    const remove = (name?: string) => {
        if (isHasQuery("window")) {
            if (!name) {
                mutate({query: {window: null}});
            } else {
                mutate({
                    query: {
                        window:
                            (query.window as string)
                                .split(",")
                                .filter((v) => v !== name && v != "")
                                .join(",") || null,
                    },
                });
            }
        }
    };

    return {isHas, add, remove, isLoading};
}
