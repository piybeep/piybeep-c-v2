import { Footer, Form, Header } from "../../modules";
export function BaseLayout({ children }: { children: React.ReactNode }) {
	// const options = {
	// 	damping: 0.07
	// }

	// useEffect(() => {
	// 	Scrollbar.init(document.body, options);
	// }, [])

	return (
		<>
			<Header />
			{children}
			<Form />
			<Footer />
		</>
	);
}

