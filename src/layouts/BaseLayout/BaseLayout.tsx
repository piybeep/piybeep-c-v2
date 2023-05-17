import { Eyes, Footer, Form, Header, PopupForm } from "../../modules";
import { PopupAuth } from "../../modules/PopupAuth";

export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PopupForm />
			<PopupAuth/>
			<Eyes />
			<Header />
			{children}
			<Footer />
		</>
	);
}

