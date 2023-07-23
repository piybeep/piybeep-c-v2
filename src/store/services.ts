import { create } from "zustand";
import { EntityActions, EntityState, Service } from "../utils";

export const useServices = create<
	EntityState<Service> & EntityActions<Service>
>()((set) => ({
	list: [],
	total_count: 0,
	setList: (list, total_count) => set({ list, total_count }),
	error: null,
	setError: (error) => set({ error }),
}));
