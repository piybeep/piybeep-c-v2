import React from "react";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description?: string;
}
