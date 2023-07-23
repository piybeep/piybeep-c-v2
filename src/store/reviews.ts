import { create } from "zustand";
import { EntityActions, EntityState, Review } from "../utils";

export const useReviews = create<EntityState<Review> & EntityActions<Review>>()(
	(set) => ({
		list: [],
		total_count: 0,
		setList: (list, total_count) => set({ list, total_count }),
		error: null,
		setError: (error: Error | null) => set({ error }),
	}),
);
