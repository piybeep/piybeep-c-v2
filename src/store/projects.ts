import { create } from "zustand";
import { EntityActions, EntityState, Project } from "../utils";

export const useProjects = create<
	EntityState<Project> & EntityActions<Project>
>()((set) => ({
	list: [],
	total_count: 0,
	setList: (list, total_count) => set({ list, total_count }),
	error: null,
	setError: (error: Error | null) => set({ error }),
}));
