import React from "react";

export function useWindowSizes() {
	const [windowSizes, setWindowSizes] = React.useState({ width: 0, height: 0 });

	React.useEffect(() => {
		function handleResize() {
			setWindowSizes({ width: window.innerWidth, height: window.innerHeight });
		}

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSizes;
}
