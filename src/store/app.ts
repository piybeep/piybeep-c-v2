import { create } from "zustand";

interface AppState {
	showFormButton: boolean;
	toggleShowFormButton: (flag?: boolean) => void;
}

export const useApp = create<AppState>()((set) => ({
	showFormButton: false,
	toggleShowFormButton: (flag?: boolean) =>
		set((state) => ({
			showFormButton: flag ?? !state.showFormButton,
		})),
}));
