import { useRouterQuery } from "../useRouterQuery";

export function useBlockSelect() {
    const { query, isLoading, isHas: isHasQuery, mutate } = useRouterQuery();

    const isHas = (name: string) => {
        return (
            isHasQuery("blockSelect") &&
            (query.blockSelect as string).split(",").includes(name)
        );
    };

    const add = (name: string) => {
        if (isHasQuery("blockSelect")) {
            mutate({
                query: {
                    blockSelect: (query.blockSelect as string)
                        .split(",")
                        .reduce((pre, cur) => [cur, pre].join(","), name),
                },
            });
        } else {
            mutate({ query: { blockSelect: name } });
        }
    };

    const remove = (name?: string) => {
        if (isHasQuery("blockSelect")) {
            if (!name) {
                mutate({ query: { blockSelect: null } });
            } else {
                mutate({
                    query: {
                        blockSelect:
                            (query.blockSelect as string)
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
