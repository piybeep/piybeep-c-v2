import { create } from "zustand";

interface AppState {
	isPreviewHeaderInView: boolean;
	isFooterFormInView: boolean;
	isFooterInView:boolean;
	toggleIsPreviewHeaderInView: (flag: boolean) => void;
	toggleIsFooterFormInView: (flag: boolean) => void;
	toggleIsFooterInView: (flag: boolean) => void;
}

export const useApp = create<AppState>()((set) => ({
	isPreviewHeaderInView: true,
	isFooterFormInView: false,
	isFooterInView: false,
	toggleIsPreviewHeaderInView: (flag) =>
		set((state) => ({
			isPreviewHeaderInView: flag ?? !state.isPreviewHeaderInView,
		})),
	toggleIsFooterFormInView: (flag) =>
		set((state) => ({ isFooterFormInView: flag ?? !state.isFooterFormInView })),
	toggleIsFooterInView: (flag) => 
		set((state) => ({isFooterInView:flag ?? !state.isFooterInView}))
}));
