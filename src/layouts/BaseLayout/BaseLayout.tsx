import { Footer, Form } from "../../modules";
export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<Form/>
			<Footer />
		</>
	);
}
