import { Eyes, Footer, Form, Header, PopupForm } from "../../modules";

export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<PopupForm />
			<Eyes />
			<Header />
			{children}
			<Form />
			<Footer />
		</>
	);
}

