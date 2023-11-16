import { Eyes, Footer, PopupForm } from "../../modules";
import React from "react";
import { EntityActions, EntityState, Service } from "../../utils";
import { Header } from "../../_modules";

export function BaseLayout({
	children,
	services,
}: {
	children: React.ReactNode;
	services: EntityState<Service> & EntityActions<Service>;
}) {
	return (
		<>
			<PopupForm services={services.list} count={services.total_count} />
			{/*<PopupAuth />*/}
			<Eyes />
			<Header />
			{children}
			<Footer />
		</>
	);
}
