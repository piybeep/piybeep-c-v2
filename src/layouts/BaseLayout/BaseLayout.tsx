import { Footer, Form, Header } from "../../modules";

export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Form />
			<Footer />
		</>
	);
}

