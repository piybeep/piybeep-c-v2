import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Footer, Header } from "../../modules";


export function BaseLayout({ children }: { children: React.ReactNode }) {
	const options = {
		damping: 0.07
	}

	useEffect(() => {
		Scrollbar.init(document.body, options);
	}, [])

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
