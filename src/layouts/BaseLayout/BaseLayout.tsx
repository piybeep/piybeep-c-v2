import React from "react";
import { EntityActions, EntityState, Portal, Review, Service } from "../../utils";
import { Eyes, Footer, Header, PopupForm, PopupReview } from "../../modules";

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
			<Portal> <PopupForm services={services.list} count={services.total_count} /> </Portal>
			<Portal>
				{
					reviews &&
					<PopupReview reviews={reviews?.list} />
				}
			</Portal>
			<Portal> <Eyes /> </Portal>
			<Header /> {children} <Footer />
		</>
	);
}
