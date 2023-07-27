import { create } from "zustand";

interface AppState {
	isPreviewHeaderInView: boolean;
	isFooterFormInView: boolean;
	toggleIsPreviewHeaderInView: (flag: boolean) => void;
	toggleIsFooterFormInView: (flag: boolean) => void;
}

export const useApp = create<AppState>()((set) => ({
	isPreviewHeaderInView: true,
	isFooterFormInView: false,
	toggleIsPreviewHeaderInView: (flag) =>
		set((state) => ({
			isPreviewHeaderInView: flag ?? !state.isPreviewHeaderInView,
		})),
	toggleIsFooterFormInView: (flag) =>
		set((state) => ({ isFooterFormInView: flag ?? !state.isFooterFormInView })),
}));
