import React from "react";
import { EntityActions, EntityState, Review, Service } from "../../utils";
import { Eyes, Footer, Header, PopupForm, PopupReview } from "../../_modules";

export function BaseLayout({
	children,
	services,
	reviews
}: {
	children: React.ReactNode;
	services: EntityState<Service> & EntityActions<Service>;
	reviews?: EntityState<Review> & EntityActions<Review>
}) {
	return (
		<>
			<PopupForm services={services.list} count={services.total_count} />
			{/*<PopupAuth />*/}
			{
				reviews &&
				<PopupReview reviews={reviews?.list} />
			}
			<Eyes />
			<Header />
			{children}
			<Footer />
		</>
	);
}
