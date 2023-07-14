import React from "react";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	title: string;
	description?: string;
}
