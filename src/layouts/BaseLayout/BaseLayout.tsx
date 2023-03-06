import { Footer } from "../../modules";
export function BaseLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
