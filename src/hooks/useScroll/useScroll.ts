import React from "react";

export function useScroll() {
	const [lastScrollTop, setLastScrollTop] = React.useState(0);
	const [bodyOffset, setBodyOffset] = React.useState(
		document.body.getBoundingClientRect()
	);
	const [scrollY, setScrollY] = React.useState(bodyOffset.top);
	// the horizontal direction
	const [scrollX, setScrollX] = React.useState(bodyOffset.left);
	const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">();

	const listener = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
		setScrollX(bodyOffset.left);
		setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
		setLastScrollTop(-bodyOffset.top);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	});

	return {
		scrollY,
		scrollX,
		scrollDirection,
	};
}
