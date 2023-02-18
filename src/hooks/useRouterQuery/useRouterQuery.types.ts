export type RouterQueryData = {
	[key: string]: string | string[] | null;
};

export interface RouterQueryMutate {
	query: RouterQueryData | null;
	method?: "push" | "replace";
}
