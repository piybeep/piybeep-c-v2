import { Footer, Form, Header } from "../../modules";
import { Eyes } from "../../modules/Eyes";

export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
		<Eyes/>
			<Header />
			{children}
			<Form />
			<Footer />
		</>
	);
}

